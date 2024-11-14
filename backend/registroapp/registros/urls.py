from django.urls import path
from . import views

urlpatterns = [
    path('form/', views.user_form, name='user_form'),
    path('table/', views.data_table, name='data_table'),
]