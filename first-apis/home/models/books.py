from datetime import date
import datetime
from django.db import models
from home.models.publishers import Publishers
from home.models.authors import Authors



class Books(models.Model):
    
 
    id   = models.AutoField(primary_key=True)
    name = models.CharField(max_length=225 ,null=True,blank=True,default=False)
    content = models.CharField(max_length=225 ,null=True,blank=True,default=False)
    page = models.CharField(max_length=225 ,null=True,blank=True,default=False)
    created_at= models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
   # publishers = models.OneToOneField(Publishers,on_delete=models.CASCADE, null=True)
   # authors = models.OneToOneField(Authors,on_delete=models.CASCADE, null=True)
   # title = models.CharField(max_length=100 , null=True,blank=True,default=False)
    
    authors = models.ForeignKey(Authors, on_delete=models.CASCADE, related_name='authors', null=True)
    
    #authors = models.ManyToManyField(Authors)
    
    class Meta:
        db_table = 'books'
        

        
    
    
    