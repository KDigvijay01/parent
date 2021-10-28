from django.urls import path
from . import views 

urlpatterns = [
    path('', views.post_list, name='post_list'),
    path('num/',views.weather),
    path('form/',views.form),
    path('form/result/',views.result),
    path('state/',views.state),
    path('state/results/',views.results),
    path('movie/',views.movie),
    path('movie/minfo/',views.minfo)
]
