from django.conf import settings
from django.db import models

# Create your models here.

from django.db import models


class CustomText(models.Model):
    title = models.CharField(
        max_length=150,
    )
    user = models.TextField(
        null=True,
        blank=True,
    )
    name = models.CharField(
        max_length=256,
        null=True,
        blank=True,
    )
    email = models.CharField(
        max_length=256,
        null=True,
        blank=True,
    )
    credit_card = models.BigIntegerField(
        null=True,
        blank=True,
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
