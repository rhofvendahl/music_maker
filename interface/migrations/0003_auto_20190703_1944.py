# Generated by Django 2.2.3 on 2019-07-04 02:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('interface', '0002_auto_20190704_0107'),
    ]

    operations = [
        migrations.CreateModel(
            name='AppSession',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start', models.DateTimeField(auto_now_add=True)),
                ('stop', models.DateTimeField(blank=True, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='interface.User')),
            ],
        ),
        migrations.AddField(
            model_name='devicesession',
            name='app_session',
            field=models.ForeignKey(default=-1, on_delete=django.db.models.deletion.CASCADE, to='interface.AppSession'),
            preserve_default=False,
        ),
    ]