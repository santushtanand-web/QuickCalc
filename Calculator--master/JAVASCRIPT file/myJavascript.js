let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');
let clearBtn = document.querySelector('#clear');
let eraseBtn = document.querySelector('#erase');
let evaluate = document.querySelector('#evaluate');
let buttons = document.querySelectorAll('button');

const keys = document.querySelector('.keypad-btns');
keys.addEventListener('click',e => {
    if(e.target.matches('button')){
        // console.log('button');
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = currentInput.textContent;
        if(!action){
            // console.log('number key!');
            if(displayedNum === '0')
            {
                currentInput.textContent = keyContent;
            }
            else{
                currentInput.textContent = displayedNum + keyContent;
            }
        }
        else{
                if(action === 'decimal'){
                    // console.log('decimal key');
                    currentInput.textContent = displayedNum + '.';
                }
                else if(action === 'clear'){
                    console.log('clear key');
                }
                else if(action === 'evaluate'){
                    console.log('evaluate key');
                }
                else if(action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide'){
                    key.classList.add('is-depressed');
                }
                // console.log('operation key');
            }
    }
})


