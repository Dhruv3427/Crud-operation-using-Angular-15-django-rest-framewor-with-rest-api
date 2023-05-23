from rest_framework import viewsets
#from home.models import MyModels
from home.serializers import BooksSerializer
from home.models.books import Books
from home.models.publishers import Publishers
from home.models.authors import Authors
from home.serializers import PublishersSerializer
from home.serializers import AuthorsSerializer
from rest_framework.response import Response


class  BooksViewSet(viewsets.ModelViewSet):
   # GET
    def list(self, request):
        books = Books.objects.all()
        serializer = BooksSerializer(books, many=True)
        return Response(serializer.data)
    # GET {id}
    def retrieve(self, request, pk):
        try:
            books = Books.objects.get(pk=pk)
        except books.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = BooksSerializer(books)
        return Response(serializer.data)
    
  #  POST
  
    def create(self, request):
        serializer = BooksSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            response = Response(serializer.data)
            response['sys-code'] = 200
            return response 
        return Response(serializer.errors)
  #  PUT {id}
    def update(self, request, pk):
        try:
            books = Books.objects.get(pk=pk)
        except books.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = BooksSerializer(books,data=request.data)
        if serializer.is_valid():
            serializer.save()
            response = Response(serializer.data)
            response['sys-msg'] = "updated successfully"; 
            response['sys-code'] = 200
            return response
        # DELETE {id}
    def destroy(self, request, pk):
        try:
            books = Books.objects.get(pk=pk)
        except books.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = BooksSerializer(books)
        books.delete()
        response = Response(serializer.data)
        response['sys-msg'] = "deleted successfully"; 
        response['sys-code'] = 200
        return response

    
class PublishersViewset(viewsets.ModelViewSet):
       # GET
    def list(self, request):
        publishers = Publishers.objects.all()
        serializer = PublishersSerializer(publishers, many=True)
        return Response(serializer.data)
    # GET {id}
    def retrieve(self, request, pk):
        try:
            publishers = Publishers().objects.get(pk=pk)
        except publishers.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = PublishersSerializer(books)
        return Response(serializer.data)
     
    #POST
    
    def create(self, request):
        serializer = PublishersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            response = Response(serializer.data)
            response['sys-code'] = 200
            return response 
        return Response(serializer.errors)
    #PUT {id}
    def update(self, request, pk):
        try:
            publishers = Publishers.objects.get(pk=pk)
        except publishers.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = PublishersSerializer(books,data=request.data)
        if serializer.is_valid():
            serializer.save()
            response = Response(serializer.data)
            response['sys-msg'] = "updated successfully"; 
            response['sys-code'] = 200
            return response
        
         # DELETE {id}
    def destroy(self, request, pk):
        try:
            publishers = Publishers.objects.get(pk=pk)
        except publishers.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = PublishersSerializer(publishers)
        publishers.delete()
        response = Response(serializer.data)
        response['sys-msg'] = "deleted successfully"; 
        response['sys-code'] = 200
        return response
    
class AuthorsViewset(viewsets.ModelViewSet):
           # GET
        def list(self, request):
            authors = Authors.objects.all()
            serializer = AuthorsSerializer(authors, many=True)
            return Response(serializer.data)
         # GET {id}
        def retrieve(self, request, pk):
            try:
                authors = Authors.objects.get(pk=pk)
            except authors.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)
            serializer = AuthorsSerializer(Books)
            return Response(serializer.data)
        
            #POST
        
        def create(self, request):
            serializer = AuthorsSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                response = Response(serializer.data)
                response['sys-code'] = 200
                return response 
            return Response(serializer.errors)
        
        #  PUT {id}
        def update(self, request, pk):
            try:
                authors = Authors.objects.get(pk=pk)
            except books.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)
            serializer = AuthorsSerializer(books,data=request.data)
            if serializer.is_valid():
                serializer.save()
                response = Response(serializer.data)
                response['sys-msg'] = "updated successfully"; 
                response['sys-code'] = 200
                return response
        # DELETE {id}
        def destroy(self, request, pk):
            try:
                authors = Authors.objects.get(pk=pk)
            except authors.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)
            serializer = AuthorsSerializer(authors)
            authors.delete()
            response = Response(serializer.data)
            response['sys-msg'] = "deleted successfully"; 
            response['sys-code'] = 200
            return response