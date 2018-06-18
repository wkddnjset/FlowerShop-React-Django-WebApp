from django.contrib import admin
from .models import *
# Register your models here.


class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'email', 'password')

class ShopAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'sub_title', 'account', 'bank', 'main_img', 'lat', 'lon')

class FlowerAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'shop', 'img', 'price')

class CartAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'flower')

class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'flower', 'date', 'status')

class BuyAdmin(admin.ModelAdmin):
    list_display = ('id', 'order', 'date')

admin.site.register(User, UserAdmin)
admin.site.register(Shop, ShopAdmin)
admin.site.register(Flower, FlowerAdmin)
admin.site.register(Cart, CartAdmin)
admin.site.register(Order, OrderAdmin)
admin.site.register(Buy, BuyAdmin)
