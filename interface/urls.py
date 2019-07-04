from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('log_in/', views.log_in, name='log_in'),
    path('turn_on/', views.turn_on, name='turn_on'),
    path('signal/', views.signal, name='signal'),
    path('turn_off/', views.turn_off, name='turn_off')
]
