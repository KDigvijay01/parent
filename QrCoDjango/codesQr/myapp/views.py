from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def Room(request):
    return HttpResponse("Rooms Page")
def Home(request):
    return HttpResponse("Home Page")

def Page(request):
    return render(request,codesQr/page.html)