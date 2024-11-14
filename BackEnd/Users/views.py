from rest_framework import generics
from .models import Sale, Item, Order, Shopping
from .serializers import SaleSerializer, ItemSerializer, OrderSerializer, ShoppingSerializer


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

