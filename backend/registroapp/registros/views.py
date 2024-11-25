import json
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User

# Create your views here.
def user_form(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
    
    return render(request, 'registros/user_form.html')

def data_table(request):
    data = [
        {'id': 1, 'name': 'Juan', 'email': 'juan@example.com'},
        {'id': 2, 'name': 'Ana', 'email': 'ana@example.com'},
    ]

    return render(request, 'registros/data_table.html', {'data':data})

@csrf_exempt
def register_user(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            username = data['username']
            email = data['email']
            password = data['password']


            print("Username: " + username)
            print("Email: " + email)
            print("Password: " + password)
            # Crea un nuevo usuario
            #user = User.objects.create_user(username=username, email=email, password=password)
            return JsonResponse({'message': 'Usuario registrado con éxito'}, status=201)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse({'error': 'Método no permitido'}, status=405)

def register_page(request):
    return render(request, 'registros/user_form.html')

def react_view(request):
    return render(request, 'registros/base.html')