from rest_framework import generics
from .models import  Item, Order, Shopping, User
from .serializers import ItemSerializer, OrderSerializer, ShoppingSerializer
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.exceptions import ValidationError
from rest_framework.permissions import AllowAny
from django.http import JsonResponse
from django.core import serializers
from django.views.decorators.csrf import csrf_exempt
import json

def custom_404_api_view(request, exception):
    return JsonResponse({'error': 'The requested resource was not found.'}, status=404)

def custom_404_template_view(request, exception):
    return render(request, '404.html', status=404)


# class SaleListView(generics.ListAPIView):
#     queryset = Sale.objects.all()
#     serializer_class = SaleSerializer

# class SaleDetailView(generics.RetrieveAPIView):
#     queryset = Sale.objects.all()
#     serializer_class = SaleSerializer


class ItemListView(generics.ListAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class ItemDetailView(generics.RetrieveAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class OrderListView(generics.ListAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class OrderDetailView(generics.RetrieveAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class ShoppingListView(generics.ListAPIView):
    queryset = Shopping.objects.all()
    serializer_class = ShoppingSerializer

class ShoppingDetailView(generics.RetrieveAPIView):
    queryset = Shopping.objects.all()
    serializer_class = ShoppingSerializer



def listPhones(request):
    phones = Item.objects.filter(category='phone')
    out = serializers.serialize('json', phones)
    return JsonResponse({"data" : out})

def listTablet(request):
    phones = Item.objects.filter(category='tablet')
    out = serializers.serialize('json', phones)
    return JsonResponse({"data" : out})

def listLaptop(request):
    phones = Item.objects.filter(category='laptop')
    out = serializers.serialize('json', phones)
    return JsonResponse({"data" : out})

def listDesktop(request):
    phones = Item.objects.filter(category='desktop')
    out = serializers.serialize('json', phones)
    return JsonResponse({"data" : out})

def listHardware(request):
    phones = Item.objects.filter(category='hardware')
    out = serializers.serialize('json', phones)
    return JsonResponse({"data" : out})

@csrf_exempt
def login(request):
    if request.method == 'POST':
        body = json.loads(request.body)
        email = body.get('email')
        password = body.get('password')

        matching = User.objects.filter(email=email, password=password)

        if matching.exists():
            return JsonResponse({"msg": "ok", "username" : matching[0].username}, status=200)
        else:
            return JsonResponse({"message": "ko"}, status=404)
    else:
        return JsonResponse({"message": "ko"}, status=405)


@csrf_exempt
def register(request):
    if request.method == 'POST':
        body = json.loads(request.body)
        email = body.get('email')
        username = body.get('username')
        password = body.get('password')
        
        matching = User.objects.filter(email=email)

        if matching.exists():
            return JsonResponse({"message": "ko"}, status=409)
        

        user = User(email=email, password=password, username=username)
        user.save()

        return JsonResponse({"msg": "ok", "username" : username}, status=200)
    else:
        return JsonResponse({"message": "ko"}, status=405)


