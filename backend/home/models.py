from django.conf import settings
from django.db import models

# Create your models here.

from django.db import models


class CustomText(models.Model):
    title = models.CharField(
        blank=True,
        max_length=150,
    )
    name = models.CharField(
        null=True,
        blank=True,
        max_length=256,
    )
    email = models.CharField(
        null=True,
        blank=True,
        max_length=256,
    )
    credit_card = models.BigIntegerField(
        null=True,
        blank=True,
    )
    user = models.OneToOneField(
        "users.User",
        null=True,
        blank=True,
        on_delete=models.CASCADE,
        related_name="customtext_user",
    )

    def __str__(self):
        return self.title

    @property
    def api(self):
        return f"/api/v1/customtext/{self.id}/"

    @property
    def field(self):
        return "title"


class HomePage(models.Model):
    body = models.TextField()
    switch = models.BooleanField(
        null=True,
        blank=True,
    )
    button = models.BooleanField(
        null=True,
        blank=True,
    )

    @property
    def api(self):
        return f"/api/v1/homepage/{self.id}/"

    @property
    def field(self):
        return "body"


class Store(models.Model):
    "Generated Model"
    billing_address = models.BigIntegerField()
    credit_card = models.BigIntegerField(
        null=True,
        blank=True,
    )


class Test(models.Model):
    "Generated Model"
    test = models.CharField(
        max_length=256,
    )


class Dogs(models.Model):
    "Generated Model"
    name = models.CharField(
        blank=True,
        max_length=256,
    )
    breed = models.ForeignKey(
        "home.Breeds",
        null=True,
        blank=True,
        on_delete=models.CASCADE,
        related_name="dogs_breed",
    )


class Breeds(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=256,
    )
    is_big_dog = models.BooleanField()
