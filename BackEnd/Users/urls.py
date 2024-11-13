from django.urls import path
from .views import BookList, BookDetail

urlpatterns = [
    path('users/', BookList.as_view(), name='book-list'),
    path('users/<int:pk>/', BookDetail.as_view(), name='book-detail'),
]
