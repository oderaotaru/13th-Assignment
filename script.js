let display = document.querySelector('.result');
let calc = document.querySelector('.top-display');
let buttons = document.querySelectorAll('button')

for(i = 0; i < buttons.length; i++){
  
   buttons[i].addEventListener('click', calculate)
  function calculate(){
   if(this.innerText == "c"){
     display.innerText = "";
     calc.innerText = "";
    }else{
      display.innerText += this.innerText;
    } 
  }
}

calculate()

  let equal = document.querySelector('.item18');
  equal.addEventListener('click', function(){
    try{
    calc.innerText = display.innerText;
    display.innerText = eval(display.innerText);
    }
    catch{
      display.innerText = "Error!"
    }
  })



