from .views import *
from django.conf.urls import url
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    url(r'^token/', obtain_jwt_token),
    url(r'^register/', Register.as_view(), name='register'),

    url(r'^shop/$', ShopListView.as_view(), name='shop-list'),
    url(r'^bestflower/$', BestFlowerListView.as_view(), name='flower-list'),
    url(r'^mdflower/$', MDFlowerListView.as_view(), name='flower-list'),
]
