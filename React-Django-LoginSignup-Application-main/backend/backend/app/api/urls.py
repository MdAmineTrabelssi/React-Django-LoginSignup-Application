from django.urls import path
from . import views

from .views import MyTokenObtainPairView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('',views.getRoutes),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path("signup/", views.signup, name="signup"),
    path("imageEdit/<int:id>/", views.imageEdit, name="imageEdit"),
    path("admin_login", views.admin_login.as_view(), name="admin_login"),
    path("getUsers", views.getUsers, name="getUsers"),
    path("userDelete/<int:id>", views.userDelete, name="userDelete"),
    path("editUser/<int:id>/", views.EditUser.as_view(), name="editUser"),
    path("searchUser/<search_key>/", views.searchUser, name="searchUser"),
]