from django.db import models

# Create your models here.
# class Question(models.Model):
#     question_text = models.CharField(max_length=200)
#     pub_date = models.DateTimeField('date published')
#
#
# class Choice(models.Model):
#     question = models.ForeignKey(Question, on_delete=models.CASCADE)
#     choice_text = models.CharField(max_length=200)
#     votes = models.IntegerField(default=0)

class User(models.Model):
    username = models.CharField(max_length=20, unique=True)
    password = models.CharField(max_length=20)
    created = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.username
    def current_device_session(self):
        pass

class DeviceSession(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    start = models.DateTimeField(auto_now_add=True)
    stop = models.DateTimeField(blank=True, null=True)
    def __str__(self):
        return self.user + ', ' + self.start + ' through ' + self.stop

class Signal(models.Model):
    device_session = models.ForeignKey(DeviceSession, on_delete=models.CASCADE)
    time = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.time
