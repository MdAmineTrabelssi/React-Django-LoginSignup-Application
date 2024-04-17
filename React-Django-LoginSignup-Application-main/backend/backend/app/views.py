from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from .api.serializer import *
from . models import *
from rest_framework.response import Response
# Create your views here.

class ReactView(APIView):
    def get(self, request):
        output = [{"username": output.username, "email": output.email}
                  for output in MyUser.objects.all()]
        return Response(output)
    def post(self, request):
        serializer = ReactSerializer(data=request.data)
        
