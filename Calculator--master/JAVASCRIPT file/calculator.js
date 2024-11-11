let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');
let buttons = document.querySelectorAll('button') //here we are selecting an tag
let eraseBtn = document.querySelector('#erase');
let clearBtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');
let realTimeScreenValue = [];

clearBtn.addEventListener('click',() => {
    realTimeScreenValue = [''];
    answerScreen.innerHTML = 0;
    currentInput.className = 'currentInput';
    answerInput.className = 'answerScreen';
    answerScreen.style.color = "rgba(150,150,150,0.87)";

});


buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        //when clicked button is not erase
        if(!btn.id.match('erase')){
            //display the value on btn click
            realTimeScreenValue.push(btn.value)
            currentInput.innerHTML = realTimeScreenValue.join('');
            //to evaluate answer in real time
            if(btn.classList.contains('fun_btn')){
                answerScreen.innerHTML = eval(realTimeScreenValue.join(''))
            }
        }
        //when clicked button is erase btn
        if(btn.id.match('erase')){
            realTimeScreenValue.pop();
            let singleNum = realTimeScreenValue.join('')
            currentInput.innerHTML = singleNum;
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
        }
        //when clicked button is evaluate btn
        if(btn.id.match('evaluate')){
            currentInput.classList = 'answerScreen';
            answerScreen.classList = 'currentInput';
            answerScreen.style.color = 'white';
            
        }
        //to prevent undefined error in screen
        if(typeof eval(realTimeScreenValue.join('')) == 'undefined'){
            answerScreen.innerHTML = 0;
        }
    })
})