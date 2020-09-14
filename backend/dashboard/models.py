from django.conf import settings
from django.db import models

# Create your models here.

LEVEL_CHOICES = (("easy", "Easy"), ("medium", "Medium"), ("hard", "Hard"))


class Exercises(models.Model):
    energy = models.CharField(
        max_length=256,
    )

    def __str__(self):
        return self.name
