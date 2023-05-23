from django.urls import path, include
from rest_framework import routers
from .views import BooksViewSet
from .views import PublishersViewset
from .views import AuthorsViewset


router = routers.DefaultRouter()
# router.register('books', BooksViewSet)

router.register('books', BooksViewSet, basename='books')
router.register('publishers', PublishersViewset, basename='publishers')
router.register('authors', AuthorsViewset, basename='authors')

urlpatterns = []+router.urls

