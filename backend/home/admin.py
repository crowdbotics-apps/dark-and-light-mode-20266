from django.contrib import admin
from .models import Breeds, CustomText, Dogs, HomePage, Store, Test

admin.site.register(HomePage)
admin.site.register(CustomText)
admin.site.register(Store)
admin.site.register(Test)
admin.site.register(Dogs)
admin.site.register(Breeds)

# Register your models here.
