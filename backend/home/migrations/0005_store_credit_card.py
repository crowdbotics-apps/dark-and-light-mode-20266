# Generated by Django 2.2.16 on 2020-09-16 21:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_auto_20200914_2257'),
    ]

    operations = [
        migrations.AddField(
            model_name='store',
            name='credit_card',
            field=models.BigIntegerField(blank=True, null=True),
        ),
    ]
