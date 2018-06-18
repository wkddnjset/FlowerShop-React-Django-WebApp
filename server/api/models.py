from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class ExampleModel(models.Model):
    text = models.CharField(max_length=45)
    img     = models.ImageField(blank=True)

    def __str__(self):
        return str(self.text)

class User(AbstractUser):
    email = models.EmailField(max_length=100, unique=True)

    def __str__(self):
        return str(self.username)

# 꽃집에 대한 모델

class Shop(models.Model):
    title = models.CharField(max_length=20)
    sub_title     = models.CharField(max_length=45)
    account = models.CharField(max_length=45)
    bank = models.CharField(max_length=10)
    main_img = models.ImageField(blank=True)
    lat = models.FloatField()
    lon = models.FloatField()

    def __str__(self):
        return str(self.title)

# 꽃(상품)에 대한 모델

class Flower(models.Model):
    name = models.CharField(max_length=45)
    shop = models.ForeignKey(Shop)
    img = models.ImageField(blank=True)
    price = models.IntegerField()

    def __str__(self):
        return str(self.shop)+" : "+str(self.name)

# 장바구니에 대한 모델

class Cart(models.Model):
    user = models.ForeignKey(User)
    flower = models.ForeignKey(Flower)

    def __str__(self):
        return str(self.user)+" : "+str(self.flower)

# 주문내역에 대한 모델

class Order(models.Model):
    user = models.ForeignKey(User)
    flower = models.ForeignKey(Flower)
    date    = models.DateField(auto_now_add=True)
    status = models.BooleanField()

    def __str__(self):
        return "ID"+str(self.id)

# 결제내역에 대한 모델

class Buy(models.Model):
    order = models.ForeignKey(Order)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return str(self.order)+"결제완료 - "+str(self.date)

