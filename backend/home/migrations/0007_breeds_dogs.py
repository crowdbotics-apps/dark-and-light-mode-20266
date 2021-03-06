# Generated by Django 2.2.16 on 2020-09-16 21:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0006_test"),
    ]

    operations = [
        migrations.CreateModel(
            name="Breeds",
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
                ("name", models.CharField(max_length=256)),
                ("is_big_dog", models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name="Dogs",
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
                ("name", models.CharField(blank=True, max_length=256)),
                (
                    "breed",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="dogs_breed",
                        to="home.Breeds",
                    ),
                ),
            ],
        ),
    ]
