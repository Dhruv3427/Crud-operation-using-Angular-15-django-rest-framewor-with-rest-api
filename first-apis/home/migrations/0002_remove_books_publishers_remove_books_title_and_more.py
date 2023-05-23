# Generated by Django 4.1.6 on 2023-05-18 10:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='books',
            name='publishers',
        ),
        migrations.RemoveField(
            model_name='books',
            name='title',
        ),
        migrations.RemoveField(
            model_name='books',
            name='authors',
        ),
        migrations.AddField(
            model_name='books',
            name='authors',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='authors', to='home.authors'),
        ),
    ]