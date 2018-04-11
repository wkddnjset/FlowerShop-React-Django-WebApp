from rest_framework import generics
from .serializers import *
from rest_framework.permissions import *
from rest_framework.views import exception_handler

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import permission_classes

@permission_classes((AllowAny, ))
class ExampleModelView(generics.ListAPIView):
    queryset = ExampleModel.objects.all()
    lookup_field = 'id'
    serializer_class = ExampleModelSerializers


@permission_classes((AllowAny, ))
class Register(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegisterSerializer