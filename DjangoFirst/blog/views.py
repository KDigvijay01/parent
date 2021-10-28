from django.shortcuts import render
from .models import Post
from django.utils import timezone
from django.http import HttpResponse
import urllib.request
import json

# Create your views here.
def post_list(request):
    posts=Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    return render(request,'blog/post_list.html',{'posts':posts})



def weather(request):
    ans=3
    return HttpResponse("Hello, This is my first hello.")

def form(request):
    print("This is a form method")
    return render(request,'blog/field.html')

def result(request):
    name =request.GET["name"]
    email =request.GET["email"]
    password =request.GET["password"]
    # email=request.get(email)
    # password=request.get(password)
    print("This is a result method", name)
    return render(request,'blog/result.html', {"name":name, "email":email, "password":password})

    
def state(request):
    return render(request,'blog/state.html')

def results(request):
    # res=request.GET['*']
    return HttpResponse(request.GET['state'])


def movie(request):
    return render(request,'blog/movie.html')

def minfo(request):
    if request.method == 'GET':
        movie = request.GET['movie']
        source=urllib.request.urlopen('http://www.omdbapi.com/?i=tt3896198'+'&apikey=e755aebe'+'&t={}'.format(movie))
        list_of_data=json.load(source)
        title=list_of_data['Title']
        released=list_of_data['Released']
        genre=list_of_data['Genre']
        director=list_of_data['Director']
        actors=list_of_data['Actors']
        language=list_of_data['Language']
        country=list_of_data['Country']
        awards=list_of_data['Awards']
        rating=list_of_data['imdbRating']
        poster=list_of_data['Poster']
        return render(request,'blog/minfo.html',{'title':title, 'rating':rating, 'country':country, 'awards':awards, 'genre':genre, 'released':released, 'country':country, 'actor':actors, 'language':language, 'director':director, 'poster':poster})

