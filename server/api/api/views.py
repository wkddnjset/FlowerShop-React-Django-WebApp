from rest_framework import generics
from .serializers import *
from rest_framework.permissions import *
from rest_framework.views import exception_handler

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import permission_classes


@permission_classes((AllowAny, ))
class Register(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegisterSerializer

@permission_classes((AllowAny, ))
class ShopListView(generics.ListAPIView):
    queryset = Shop.objects.all()
    lookup_field = 'id'
    serializer_class = ShopListSerializer

@permission_classes((AllowAny, ))
class BestFlowerListView(generics.ListAPIView):
    model = Flower.objects.all().order_by('-id')
    queryset = model[0:4]
    lookup_field = 'id'
    serializer_class = FlowerListSerializer

@permission_classes((AllowAny, ))
class MDFlowerListView(generics.ListAPIView):
    model = Flower.objects.all().order_by('-id')
    queryset = model[4:]
    lookup_field = 'id'
    serializer_class = FlowerListSerializer