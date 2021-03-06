# Generated by Django 2.2.16 on 2020-09-14 22:57

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0003_auto_20200914_2235"),
    ]

    operations = [
        migrations.CreateModel(
            name="Store",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("billing_address", models.BigIntegerField()),
            ],
        ),
        migrations.AlterField(
            model_name="customtext",
            name="title",
            field=models.CharField(blank=True, max_length=150),
        ),
        migrations.AlterField(
            model_name="customtext",
            name="user",
            field=models.OneToOneField(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="customtext_user",
                to=settings.AUTH_USER_MODEL,
            ),
        ),
    ]
