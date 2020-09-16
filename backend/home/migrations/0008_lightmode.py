# Generated by Django 2.2.16 on 2020-09-16 22:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0007_breeds_dogs'),
    ]

    operations = [
        migrations.CreateModel(
            name='Lightmode',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('color', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='lightmode_color', to='home.HomePage')),
            ],
        ),
    ]
