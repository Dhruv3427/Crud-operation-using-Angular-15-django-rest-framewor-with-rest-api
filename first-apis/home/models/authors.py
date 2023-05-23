from datetime import date
import datetime
from django.db import models


class Authors(models.Model):
    
 
    id   = models.AutoField(primary_key=True)
    name = models.CharField(max_length=225 ,null=True,blank=True,default=False)
    created_at= models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    
    
    class Meta:
        db_table = 'authors'
        
