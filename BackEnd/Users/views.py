from rest_framework import generics
from .models import Sale, Item, Order, Shopping, User
from .serializers import SaleSerializer, ItemSerializer, OrderSerializer, ShoppingSerializer
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.exceptions import ValidationError
from rest_framework.permissions import AllowAny

def custom_404_api_view(request, exception):
    return JsonResponse({'error': 'The requested resource was not found.'}, status=404)

def custom_404_template_view(request, exception):
    return render(request, '404.html', status=404)


class SaleListView(generics.ListAPIView):
    queryset = Sale.objects.all()
    serializer_class = SaleSerializer

class SaleDetailView(generics.RetrieveAPIView):
    queryset = Sale.objects.all()
    serializer_class = SaleSerializer


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



class LoginAPIView(generics.RetrieveAPIView):
    permission_classes = [AllowAny]

    def retrieve(self, request, *args, **kwargs):
        email = request.query_params.get("email")
        password = request.query_params.get("password")

        if not username or not password:
            raise ValidationError({"error": "Username and password are required."})

        user = User.objects.get(email=email, password=password)

        if (user):
            return JsonResponse({"message": "User authenticated."}, status=200) 
        else:
            return JsonResponse({"message": "User not found."}, status=404)

