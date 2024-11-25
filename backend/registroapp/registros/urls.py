from django.urls import path
from . import views

urlpatterns = [
    path('', views.react_view, name='react_view'),
    path('form/', views.user_form, name='user_form'),
    path('table/', views.data_table, name='data_table'),
    path('register/', views.register_user, name='register_user'),
    path('register-form/', views.register_page, name='register_page'),
]