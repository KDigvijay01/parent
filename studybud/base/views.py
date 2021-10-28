from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

rooms=[
    {'id':1, 'name':'python'},
    {'id':2, 'name':'javascript'},
    {'id':3, 'name':'django'}
]

def home(request):
    return render(request,'base/home.html')


def room(request,pk):
    return render(request,'base/room.html',{'room':rooms})

