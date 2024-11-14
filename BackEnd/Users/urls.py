from django.urls import path
from . import views

urlpatterns = [

    path('sales/', views.SaleListView.as_view(), name='sales-list'),
    path('sales/<int:pk>/', views.SaleDetailView.as_view(), name='sale-detail'),

    path('items/', views.ItemListView.as_view(), name='items-list'),
    path('items/<int:pk>/', views.ItemDetailView.as_view(), name='item-detail'),

    path('orders/', views.OrderListView.as_view(), name='orders-list'),
    path('orders/<int:pk>/', views.OrderDetailView.as_view(), name='order-detail'),

    path('shopping/', views.ShoppingListView.as_view(), name='shopping-list'),
    path('shopping/<int:pk>/', views.ShoppingDetailView.as_view(), name='shopping-detail'),
]
