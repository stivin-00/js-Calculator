const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalbtn = document.querySelector('.btn-equal');
const clearbtn = document.querySelector('.btn-clear');

for (let i = 0; i < btns.length; i++) {
   btns[i].addEventListener('click', function () {
       let number = btns[i].getAttribute('data-none');
       screen.value += number
   })
    
}

equalbtn.addEventListener('click', calculate)


function calculate() {

    if (screen.value==='') {
        screen.value= ''
    } else {
        
   let trash = eval(screen.value);
    screen.value= trash }
}

clearbtn.addEventListener('click', function () {
    screen.value = '';
})