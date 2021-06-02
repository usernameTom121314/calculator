const form = document.querySelector('form'),
calc = document.querySelector('.calculator'),
value = calc.querySelector('.value'),
symbols = calc.querySelectorAll('.num')

symbols.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        if(btn.innerHTML === 'c') value.value = '' 
        else value.value += btn.innerHTML  
    })
})




