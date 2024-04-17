from rest_framework.views import APIView
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializer import MyUserSerializer
from app.models import *

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        'api/token/refresh',
    ]
    return Response(routes)


@api_view(['POST'])
def signup(request):
    data = request.data
    print('backendsighnup',data)
    try:
        print(data['firstname'],data['email'])
        user = MyUser.objects.create(
            # first_name = data['name'],
            username = data['username'],
            email = data['email'],
            password = make_password(data['password']),
            first_name = data['firstname'],
            last_name = data['lastname']
        )
        serializer = MyUserSerializer(user, many=False)
        print("serializer.data",serializer.data)
        return Response(serializer.data)
    except Exception as e:
        message = {'detail': 'username taken'}
        print(e)
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def imageEdit(request,id):
    data = request.data
    print("data",data)
    print("id",id)
    user = MyUser.objects.get(id=id)
    user.image = data['imagefile']
    user.save()
    serializer = MyUserSerializer(user, many = False)
    return Response(serializer.data)

class admin_login(APIView):
    
    def post(self,request):
        data = request.data
        username = data['username']
        password = data['password']
        user = authenticate(username=username,password=password)
        serial = MyUserSerializer(user, many=False)
        if user is not None and user.is_superuser:
            return Response({"data":serial.data})
        else:
            return Response('Invalid credentials')
        
@api_view(['GET'])
def getUsers(request):
    user = MyUser.objects.all().exclude(is_superuser = True)
    serializer = MyUserSerializer(user, many = True)
    return Response(serializer.data)

@api_view(['DELETE'])
def userDelete(request,id):
    user = MyUser.objects.get(id=id)
    user.delete()
    return Response('User is deleted')

class EditUser(APIView):
    
    def get(self,request,id):
        print("BACKEND EDITget")
        user = MyUser.objects.get(id=id)
        serial = MyUserSerializer(user, many=False)
        return Response({"user":serial.data})
    
    def post(self,request,id):
        data = request.data
        print("data edit post",data)
        try:
            print(data['username'],data['email'])
            credential=MyUser.objects.get(pk=id)      #creating user in database
            credential.username=data['username']
            credential.email=data['email']
            credential.save()              # Saving user details in Datab
            serializer = MyUserSerializer(credential, many=False)
            print("serializer.data",serializer.data)
            return Response(serializer.data)
        except Exception as e:
            message = {'detail': 'username taken'}
            print(e)
            return Response(message, status=status.HTTP_400_BAD_REQUEST)
        pass
    

@api_view(['GET'])
def searchUser(request,search_key):
    queries = MyUser.objects.filter(username__icontains=search_key).exclude(is_superuser = True)
    print(queries) 
    if queries is not None:
        serializer = MyUserSerializer(queries, many = True)
        return Response(serializer.data)
    else:
        return Response('Users are not found')
