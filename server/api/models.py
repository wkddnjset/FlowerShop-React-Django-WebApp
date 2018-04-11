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