from django.contrib import admin

# Register your models here.
from .models import User, DeviceSession, Signal

admin.site.register(User)
admin.site.register(DeviceSession)
admin.site.register(Signal)
