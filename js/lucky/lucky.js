//click system 





const btnStart = document.getElementById('btn-start');
let parentClick = 0;


const parent = document.getElementById('container');

const parentCount = document.getElementById('parent-count');

function parentOnClick() {




       
        parentClick += 1;
        parentCount.innerHTML = parentClick;

}





let stepDisplayNone = false;
const rules = document.getElementById('rules');

btnStart.addEventListener('click', function () {
        parent.addEventListener('click', parentOnClick)
        btnStart.style.display = 'none';
        stepDisplay(rules)
        stepDisplay(step1)
        fisrtSteptab()
        
        onClick()
       
});



//step 1


const step1 = document.getElementById('step1')

function stepDisplay(step) {

        if (stepDisplayNone === true) {
                step.style.display = 'block';
                stepDisplayNone = false;
        } else if (stepDisplayNone === false) {
                step.style.display = 'none';
                stepDisplayNone = true;
        }
}


let step1RandomNumber = 0;





const tabBtn0 = document.getElementById('tab-btn0');
const tabBtn1 = document.getElementById('tab-btn1');
const tabBtn2 = document.getElementById('tab-btn2');
const tabBtn3 = document.getElementById('tab-btn3');
const tabBtn4 = document.getElementById('tab-btn4');
const tabBtn5 = document.getElementById('tab-btn5');


var tab = [1, 2, 3, 4, 5, 6];

function fisrtSteptab() {
        //step 1 random number button
        function randomize(tab) {

                let i;
                let j;
                let tmp;
                for (i = tab.length - 1; i > 0; i--) {
                        j = Math.floor(Math.random() * (i + 1));

                        console.log(' j = ', j)
                        console.log('i =', i)
                        tmp = tab[i];

                        tab[i] = tab[j];

                        tab[j] = tmp;


                }
                return tab;
        }

        tab = randomize(tab);

        tabBtn0.value = tab[0];
        tabBtn1.value = tab[1];
        tabBtn2.value = tab[2];
        tabBtn3.value = tab[3];
        tabBtn4.value = tab[4];
        tabBtn5.value = tab[5];


}


const btnStep1 = document.getElementById('btn-step1');

btnStep1.addEventListener('click', function () {
        stepDisplay(step1)
        stepDisplay(step2)
        functStep2()
})



function btnApear() {
        btnStep1.style.display = 'block';
}

let bool = true;
function resetColorStep1(elt){
        elt.style.color ='rgb(239, 239, 239)';
}
function over(elt){
       
        
                elt.addEventListener('mouseenter', function(){
                        elt.style.color ='purple';
                        
                })
                elt.addEventListener('mouseleave', function(){
                        elt.style.color ='rgb(239, 239, 239)';
                })
       

}
function unOver(elt){
       
        
                elt.addEventListener('mouseenter', function(){
                        elt.style.color ='rgb(239, 239, 239)';
                        
                })
                elt.addEventListener('mouseleave', function(){
                        elt.style.color ='purple';
                })
       

}
function onClick() {
        // step 1 for make the next step appear
        step1RandomNumber = Math.floor(Math.random() * 5 + 1);
        const stepOneRandomNumber = document.getElementById('step-one-random-number');
       
                /* tabBtn0.style.color = 'rgb(239, 239, 239)';
       tabBtn1.style.color = 'rgb(239, 239, 239)';
        tabBtn2.style.color = 'rgb(239, 239, 239)';
        tabBtn3.style.color = 'rgb(239, 239, 239)';
        tabBtn4.style.color = 'rgb(239, 239, 239)';
        tabBtn5.style.color = 'rgb(239, 239, 239)';*/
        if(bool === true){
                over(tabBtn0)
                over(tabBtn1)
                over(tabBtn2)
                over(tabBtn3)
                over(tabBtn4)
                over(tabBtn5)
        }else {
               console.log('bool = ', bool)
        }
        
        
        
        stepOneRandomNumber.innerHTML = step1RandomNumber;
        
        tabBtn0.onclick = () => {
                console.log('cliquer1')
                console.log(bool)
                bool=false;
                
                        tabBtn0.style.color ='rgb(239, 239, 239)';
                unOver(tabBtn0)
                console.log(bool)
                if (tab[0] === step1RandomNumber) {
                        btnApear()
                        
                        
                }
        }

        tabBtn1.onclick = () => {
                console.log('cliquer1')
                bool=false;
                tabBtn1.style.color ='rgb(239, 239, 239)';
                unOver(tabBtn1)
                if (tab[1] === step1RandomNumber) {
                        btnApear()
                        
                }
        }
        tabBtn2.onclick = () => {
                console.log('cliquer1')
                bool=false;
                tabBtn2.style.color ='rgb(239, 239, 239)';
                unOver(tabBtn2)
                if (tab[2] === step1RandomNumber) {
                        btnApear()
                       
                }
        }
        tabBtn3.onclick = () => {
                console.log('cliquer1')
                bool=false;
                tabBtn3.style.color ='rgb(239, 239, 239)';
                unOver(tabBtn3)
                if (tab[3] === step1RandomNumber) {
                        btnApear()
                        
                }
        }
        tabBtn4.onclick = () => {
                console.log('cliquer1')
                bool=false;
                tabBtn4.style.color ='rgb(239, 239, 239)';
                unOver(tabBtn4)
                if (tab[4] === step1RandomNumber) {
                        btnApear()
                        
                }
        }
        tabBtn5.onclick = () => {
                console.log('cliquer1')
                bool=false;
                tabBtn5.style.color ='rgb(239, 239, 239)';
                unOver(tabBtn5)
                if (tab[5] === step1RandomNumber) {
                        btnApear()
                        
                }
        }


}







//step 2

const btnStep2 = document.getElementById('btn-step2')
btnStep2.addEventListener('click', function () {
        stepDisplay(step2)
        stepDisplay(step3)

        witchBtnStep3()
})

function nextStep3Apear() {
        btnStep2.style.display = 'block';
}

function functStep2() {
       
        //step 2 for make the next step appear
        let randomNumber = Math.floor(Math.random() * 3);
        const btn1 = document.getElementById('btn-1');
        const btn2 = document.getElementById('btn-2');
        const btn3 = document.getElementById('btn-3');
        btn1.value = '1';
        btn2.value = '2';
        btn3.value = '3';

        console.log(randomNumber)
        btn1.onclick = () => {
                if (randomNumber === 0) {
                        nextStep3Apear()
                } else {
                       
                        btn1.value = 'Raté';

                }
        }
        btn2.onclick = () => {
                if (randomNumber === 1) {
                        nextStep3Apear()
                } else {
                       
                        btn2.value = 'Raté';

                }
        }
        btn3.onclick = () => {
                if (randomNumber === 2) {
                        nextStep3Apear()
                } else {
                        btn3.value = 'Raté';

                }
        }

}

//     step 3

const btnStep3 = document.getElementById('btn-step3')

btnStep3.addEventListener('click', function () {
        stepDisplay(step3)
        stepDisplay(end)


        totalClick.innerHTML = parentClick + 1;
        parent.removeEventListener('click', parentOnClick)

        

})



function nextStep4Apear() {
        // go to the next step

        btnStep3.style.display = 'block';
}




function witchBtnStep3() {
        /*this function it's for know witch btn go to the next step 
        and witch btn go back to the begining*/
        const btn1 = document.getElementById('btn1-step-3');
        const btn2 = document.getElementById('btn2-step-3');
        const randomNumber = Math.floor(Math.random() * 2);
        btn1.onclick = () => {
                if (randomNumber === 0) {

                        nextStep4Apear();
                } else {

                        backToStep1()
                }
        }
        btn2.onclick = () => {
                if (randomNumber === 1) {

                        nextStep4Apear();
                } else {

                        backToStep1()
                }
        }


}

//end 
const totalClick = document.getElementById('total-clique');
const btnReset = document.getElementById('btn-reset')



btnReset.addEventListener('click', reset)

function reset() {
        bool=true;
        resetColorStep1(tabBtn0)
        resetColorStep1(tabBtn1)
        resetColorStep1(tabBtn2)
        resetColorStep1(tabBtn3)
        resetColorStep1(tabBtn4)
        resetColorStep1(tabBtn5)
        stepDisplay(end)
        stepDisplay(rules)
        btnStart.style.display = 'inline-block';
        
        btnStep1.style.display = 'none';
        btnStep2.style.display = 'none';
        btnStep3.style.display = 'none';
        parentCount.innerHTML = 0;
        parentClick = 0;
        parent.removeEventListener('click', parentOnClick)
}
function backToStep1() {
        bool=true;
        resetColorStep1(tabBtn0)
        resetColorStep1(tabBtn1)
        resetColorStep1(tabBtn2)
        resetColorStep1(tabBtn3)
        resetColorStep1(tabBtn4)
        resetColorStep1(tabBtn5)
        stepDisplay(step3)
        stepDisplay(step1)
        fisrtSteptab()
        
        onClick()
        
        btnStep1.style.display = 'none';
        btnStep2.style.display = 'none';
        btnStep3.style.display = 'none';
        
}

