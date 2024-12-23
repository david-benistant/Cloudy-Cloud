# Generated by Django 5.1.1 on 2024-11-30 16:57

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Users', '0003_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='item',
            name='nb_sales',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.DeleteModel(
            name='Sale',
        ),
    ]
