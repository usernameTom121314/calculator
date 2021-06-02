const form = document.querySelector('form'),
calc = document.querySelector('.calculator'),
value = calc.querySelector('.value'),
symbols = calc.querySelectorAll('.num')
value.value = 0;

form.onsubmit = calculate

function calculate(params){
    params.preventDefault()
}

symbols.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        if(value.value == '0') value.value = ''
        if(btn.innerHTML === 'c') value.value = '0' 
        else if(btn.innerHTML == '=') value.value = eval(value.value)
        else if(value.value == '0' && btn.innerHTML == '+') value.value += '0' + btn.innerHTML
        else value.value += btn.innerHTML  
    })
}) 