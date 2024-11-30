from django.contrib import admin
from .models import Item, Order, Shopping, OrderItem

# admin.site.register(Sale)
admin.site.register(Item)
admin.site.register(Order)
admin.site.register(Shopping)
admin.site.register(OrderItem)
