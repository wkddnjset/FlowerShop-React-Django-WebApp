from rest_framework import serializers
from django.core.exceptions import ValidationError
from ..models import *
from django.db.models import Q

class ExampleModelSerializers(serializers.ModelSerializer):
    class Meta:
        model = ExampleModel
        fields = [
            'id',
            'text',
            'img'
        ]

class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'email',
            'username',
            'password'
        ]