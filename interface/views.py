# from django.shortcuts import render

# Create your views here.

# from django.http import HttpResponse
# from django.template import loader
import json

from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .models import User, AppSession, DeviceSession, Signal
# from .models import Question
#
#
# def index(request):
#     latest_question_list = Question.objects.order_by('-pub_date')[:5]
#     template = loader.get_template('polls/index.html')
#     context = {
#         'latest_question_list': latest_question_list,
#     }
#     return HttpResponse(template.render(context, request))

def index(request):
    return render(request, 'interface/index.html') #context optional third argument
    # return HttpResponse(template.render(request))  #is request needed? probably, test
    # return HttpResponse("Hello, world. You're at the polls index.")

# def detail(request, question_id):
#     try:
#         question = Question.objects.get(pk=question_id)
#     except Question.DoesNotExist:
#         raise Http404("Question does not exist")
#     return render(request, 'polls/detail.html', {'question': question})

# def detail(request, question_id):
#     question = get_object_or_404(Question, pk=question_id)
#     return render(request, 'polls/detail.html', {'question': question})

@csrf_exempt
def log_in(request):
    parsed = json.loads(request.body)
    user = User.objects.create(
        username = parsed['username'],
        password = parsed['password']
    )
    app_session = AppSession.objects.create(user=user)

    data = {
        "user": {
            "id": user.id,
            "created_on": user.created
        },
        "app_session": {
            "id": app_session.id,
            "start": app_session.start
        }
    }
    return JsonResponse(data)

@csrf_exempt
def turn_on(request):
    parsed = json.loads(request.body)
    device_session = DeviceSession.objects.create(
        user_id = parsed['userId'],
        app_session_id = parsed['appSessionId']
    )

    data = {
        "device_session": {
            "id": device_session.id,
        }
    }
    return JsonResponse(data)

@csrf_exempt
def signal(request):
    parsed = json.loads(request.body)
    Signal.objects.create(
        user_id = parsed['userId'],
        device_session_id = parsed['deviceSessionId']
    )
    return JsonResponse({})

@csrf_exempt
def turn_off(request):
    pass
