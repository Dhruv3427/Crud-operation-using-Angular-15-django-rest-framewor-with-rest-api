from rest_framework import serializers

from home.models.books import Books
from home.models.publishers import Publishers
from home.models.authors import Authors

class BooksSerializer(serializers.ModelSerializer):
        class Meta:
            model = Books
            fields = '__all__'
            
class PublishersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publishers
        fields = '__all__'
        
class AuthorsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Authors
        fields = '__all__'