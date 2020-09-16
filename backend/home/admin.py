from django.contrib import admin
from .models import CustomText, HomePage, Store, Test

admin.site.register(HomePage)
admin.site.register(CustomText)
admin.site.register(Store)
admin.site.register(Test)

# Register your models here.
