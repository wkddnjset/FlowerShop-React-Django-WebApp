from .views import *
from django.conf.urls import url
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    url(r'^list/$', ExampleModelView.as_view(), name='example-list'),
    url(r'^token/', obtain_jwt_token),
    url(r'^register/', Register.as_view(), name='register'),
]
