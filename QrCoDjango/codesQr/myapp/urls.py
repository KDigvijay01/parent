from django.urls import path
from . import views


urlpatterns =[
    path('',views.Home,name="home"),
    path('room/',views.Room,name="room"),
    path('page/',views.Page,name="page"),
]