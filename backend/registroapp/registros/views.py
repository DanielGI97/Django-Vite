from django.shortcuts import render

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