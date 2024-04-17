from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class MyUser(AbstractUser):                                             #Editing auth_user which is built-in django user
    phone_number = models.CharField(max_length=200, unique=False)        #Adding column phone no.
    image = models.ImageField(upload_to="images",default="")
    def __str__(self):
        return self.username