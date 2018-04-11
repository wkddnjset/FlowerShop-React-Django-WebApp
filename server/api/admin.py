from django.contrib import admin
from .models import *
# Register your models here.
class ExampleModelAdmin(admin.ModelAdmin):
    list_display = ('id', 'text', 'img')

class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'email', 'password')

admin.site.register(ExampleModel, ExampleModelAdmin)
admin.site.register(User, UserAdmin)