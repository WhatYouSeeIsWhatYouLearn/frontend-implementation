# Generated by Django 3.1.7 on 2021-03-28 12:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ml', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='mlproject',
            name='is_fitted',
            field=models.BooleanField(default=False),
        ),
    ]