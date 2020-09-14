from django.contrib import admin
from .models import CustomText, HomePage, Store

admin.site.register(HomePage)
admin.site.register(CustomText)
admin.site.register(Store)

# Register your models here.
