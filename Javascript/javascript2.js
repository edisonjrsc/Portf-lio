var btn1= document.getElementById('btn1');

btn1.addEventListener('click', function() {
    var servicesbox = document.querySelector('.servicesbox');
    servicesbox.classList.toggle('ativado');

    if (servicesbox.classList.contains('ativado')) {
        return btn1.textContent = 'Menos informações'

    }
    else
    btn1.textContent = 'Mais informações'
});

var btn2= document.getElementById('btn2');

btn2.addEventListener('click', function() {
    var servicesbox2 = document.querySelector('.servicesbox2');
    servicesbox2.classList.toggle('ativado2');

    if (servicesbox2.classList.contains('ativado2')) {
        return btn2.textContent = 'Menos informações'

    }
    else
    btn2.textContent = 'Mais informações'
});

var btn3= document.getElementById('btn3');

btn3.addEventListener('click', function() {
    var servicesbox3 = document.querySelector('.servicesbox3');
    servicesbox3.classList.toggle('ativado3');

    if (servicesbox3.classList.contains('ativado3')) {
        return btn3.textContent = 'Menos informações'

    }
    else
    btn3.textContent = 'Mais informações'
});

