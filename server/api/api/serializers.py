from rest_framework import serializers
from django.core.exceptions import ValidationError
from ..models import *
from django.db.models import Q

class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'email',
            'username',
            'password'
        ]

class ShopListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shop
        fields = [
            'id',
            'title',
            'sub_title',
            'main_img',
            'account',
            'bank',
            'lat',
            'lon'
        ]

class FlowerListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flower
        fields = [
            'id',
            'name',
            'shop',
            'img',
            'price',
        ]


