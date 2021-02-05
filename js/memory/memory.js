//click system 





const btnStart = document.getElementById('btn-start');
let parentClick = 0;


const parent = document.getElementById('container');

const parentCount = document.getElementById('parent-count');

function parentOnClick() {

    //incremente le counter de click



    parentClick += 1;
    parentCount.innerHTML = parentClick;

}





let stepDisplayNone = false;

function stepDisplay(step) {
    //si une etape devient none la suivante deviendre un block
    if (stepDisplayNone === true) {
        step.style.display = 'block';
        stepDisplayNone = false;
    } else if (stepDisplayNone === false) {
        step.style.display = 'none';
        stepDisplayNone = true;
    }
}

const rules = document.getElementById('rules');

let startStep2;

btnStart.addEventListener('click', function () {
    //commence le jeu
    parent.addEventListener('click', parentOnClick)
    btnStart.style.display = 'none';
    stepDisplay(rules)
    stepDisplay(step1)

    stepOneRandomNumber();

    startTimer()
    Maketab()
    startStep2 = false;
});

function randomize(tab) {
    //melange un tableau 
    let i;
    let j;
    let tmp;
    for (i = tab.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));


        tmp = tab[i];

        tab[i] = tab[j];

        tab[j] = tmp;


    }
    return tab;
}


//step 1


const step1 = document.getElementById('step1')
let randomNumber;


function stepOneRandomNumber() {
    const firstStepNum = document.getElementById('first-step-num');
    randomNumber = Math.floor(Math.random() * 999999)
    firstStepNum.innerHTML = randomNumber;
    console.log('random number = ', randomNumber)
}




const btnEndStep1 = document.getElementById('btn-end-step1')
btnEndStep1.addEventListener('click', function () {
    stepDisplay(step1)
    stepDisplay(step2)
    mixArrayStep2 ()
    //tabStep2Number()
    
})
//step2


let step3Random;
const btnEndStep2 = document.getElementById('btn-end-step2')
const step2 = document.getElementById('step2')

btnEndStep2.addEventListener('click', function () {
    stepDisplay(step2)
    stepDisplay(step3)

    step3UnReady()
})







const step2TabBtn0 = document.getElementById('step2-tab-btn0');
const step2TabBtn1 = document.getElementById('step2-tab-btn1');
const step2TabBtn2 = document.getElementById('step2-tab-btn2');
const step2TabBtn3 = document.getElementById('step2-tab-btn3');
const step2TabBtn4 = document.getElementById('step2-tab-btn4');
const step2TabBtn5 = document.getElementById('step2-tab-btn5');
let tabStep2 = [0, 1, 2, 3, 4, 5]

const btnStartStep2 = document.getElementById('btn-start-step2')
const rules1Step2 = document.getElementById('rules1-step2')
const rules2Step2 = document.getElementById('rules2-step2')
const step2RandomNumber = document.getElementById('step2-random-number')

btnStartStep2.onclick = () => {
    startStep2 = true;
    console.log(startStep2)
    onClickStep2()
    btnStep2.forEach(elt => elt.classList.replace('btn-tab-step2', 'btn-tab'))
    rules1Step2.style.display = 'none';
    rules2Step2.style.display = 'block';
    btnStartStep2.style.display = 'none';
}


function mixArrayStep2 (){
    randomize(tabStep2)

    step2TabBtn0.value = tabStep2[0];
    step2TabBtn1.value = tabStep2[1];
    step2TabBtn2.value = tabStep2[2];
    step2TabBtn3.value = tabStep2[3];
    step2TabBtn4.value = tabStep2[4];
    step2TabBtn5.value = tabStep2[5];


    random = Math.floor(Math.random() * 5);
    console.log(random)
    step2RandomNumber.innerHTML = random;
    console.log(startStep2) 
}


let random;
const btnStep2 = document.querySelectorAll('.btn-tab-step2');

function onClickStep2() {
   
   
    if (startStep2 === true) {
    for (let i = 0; i < 6; i++) {
       
            btnStep2[i].onclick = () => {

                btnStep2[i].classList.replace('btn-tab', 'btn-tab-step2');
                if (btnStep2[i].value == random) {

                    btnEndStep2.style.display = 'inline-block';


                }
            }
        }


    }


}




//step3

const btnEndStep3 = document.getElementById('btn-end-step3')
const step3 = document.getElementById('step3')





const btnStartStep3 = document.getElementById('btn-start-step3')


btnStartStep3.onclick = () => {

    onClickStep3()
    btnStartStep3.style.display = 'none';
    rules1Step3.style.display = 'none';
    rules2Step3.style.display = 'block';

}
let startStep4;
btnEndStep3.addEventListener('click', function () {
    startStep4= false;
    stepDisplay(step3)
    stepDisplay(step4)
    mixArrayStep4()
    
})

const step3TabBtn0 = document.getElementById('step3-tab-btn0');
const step3TabBtn1 = document.getElementById('step3-tab-btn1');
const step3TabBtn2 = document.getElementById('step3-tab-btn2');
const step3TabBtn3 = document.getElementById('step3-tab-btn3');
const step3TabBtn4 = document.getElementById('step3-tab-btn4');
const step3TabBtn5 = document.getElementById('step3-tab-btn5');
const step3TabBtn6 = document.getElementById('step3-tab-btn6');
let symboleStep3;
let tabSigne;

const rules1Step3 = document.getElementById('rules1-step3')
const rules2Step3 = document.getElementById('rules2-step3')

function tabSigneSpliceStep3() {
    tabSigne = ['{', '[', ')', '(', '}', ']', '&', '@', '^', '_', '+', '*', '/', '-', '"', '~', "'", ";", ':', '!', '?']

    randomize(tabSigne)
    tabSigne.splice(0, 14)

}

function step3UnReady() {
    tabSigneSpliceStep3()



    randomize(tabSigne);

    step3TabBtn0.value = tabSigne[0];
    step3TabBtn1.value = tabSigne[1];
    step3TabBtn2.value = tabSigne[2];
    step3TabBtn3.value = tabSigne[3];
    step3TabBtn4.value = tabSigne[4];
    step3TabBtn5.value = tabSigne[5];
    step3TabBtn6.value = tabSigne[6];

    symboleStep3 = step3TabBtn6.value
    step3TabBtn6.style.display = 'none';
    console.log(step3TabBtn6.value)
}



const btnStep3 = document.querySelectorAll('.btn-visible-step3');


function onClickStep3() {

    randomize(tabSigne);
    step3TabBtn0.value = tabSigne[0];
    step3TabBtn1.value = tabSigne[1];
    step3TabBtn2.value = tabSigne[2];
    step3TabBtn3.value = tabSigne[3];
    step3TabBtn4.value = tabSigne[4];
    step3TabBtn5.value = tabSigne[5];
    step3TabBtn6.value = tabSigne[6];
    step3TabBtn6.style.display = 'block';




    for (let i = 0; i < 7; i++) {
        //console.log('avant', random, btnStep3[i].value)
        btnStep3[i].onclick = () => {


            if (btnStep3[i].value === symboleStep3) {

                btnEndStep3.style.display = 'inline-block';

                console.log('apres', btnStep3[i])
                console.log('reussi')
            }
        }

    }


}







//step4

const btnEndStep4 = document.getElementById('btn-end-step4')
const step4 = document.getElementById('step4')

btnEndStep4.addEventListener('click', function () {
    stepDisplay(step4)
    stepDisplay(step5)
    console.log('step4', stepDisplayNone)
    step5UnReady()
})


const step4TabBtn0 = document.getElementById('step4-tab-btn0');
const step4TabBtn1 = document.getElementById('step4-tab-btn1');
const step4TabBtn2 = document.getElementById('step4-tab-btn2');
const step4TabBtn3 = document.getElementById('step4-tab-btn3');
const step4TabBtn4 = document.getElementById('step4-tab-btn4');
const step4TabBtn5 = document.getElementById('step4-tab-btn5');
const step4TabBtn6 = document.getElementById('step4-tab-btn6');
const step4TabBtn7 = document.getElementById('step4-tab-btn7');
let tabStep4 = [0, 1, 2, 3, 4, 5, 6, 7]

const btnStartStep4 = document.getElementById('btn-start-step4')
const rules1Step4 = document.getElementById('rules1-step4')
const rules2Step4 = document.getElementById('rules2-step4')
const step4RandomNumber = document.getElementById('step4-random-number')

btnStartStep4.onclick = () => {
    startStep4= true;
    onClickStep4()

    btnStep4.forEach(elt => elt.classList.replace("btn-tab-step4", 'btn-tab'))
    rules1Step4.style.display = 'none';
    rules2Step4.style.display = 'block';
    btnStartStep4.style.display = 'none';
}





let randomStep4;
const btnStep4 = document.querySelectorAll('.btn-tab-step4');
function mixArrayStep4(){

    randomize(tabStep4)

    step4TabBtn0.value = tabStep4[0];
    step4TabBtn1.value = tabStep4[1];
    step4TabBtn2.value = tabStep4[2];
    step4TabBtn3.value = tabStep4[3];
    step4TabBtn4.value = tabStep4[4];
    step4TabBtn5.value = tabStep4[5];
    step4TabBtn6.value = tabStep4[6];
    step4TabBtn7.value = tabStep4[7];



    randomStep4 = Math.floor(Math.random() * 7);
    console.log(randomStep4)
    step4RandomNumber.innerHTML = randomStep4;

}
function onClickStep4() {
    if(startStep4 === true){
        for (let i = 0; i < 8; i++) {

            btnStep4[i].onclick = () => {
    
                btnStep4[i].classList.replace('btn-tab', 'btn-tab-step4');
                if (btnStep4[i].value == randomStep4) {
    
                    btnEndStep4.style.display = 'inline-block';
    
    
                }
            }
    
        }
    }
    


}





//step5

const btnEndStep5 = document.getElementById('btn-end-step5')
const step5 = document.getElementById('step5')
let numberStep6 = false;
btnEndStep5.addEventListener('click', function () {
    numberStep6 = true;
    onClickStep6()
    stepDisplay(step5)
    stepDisplay(step6)
    console.log('step5', stepDisplayNone)
})


const step5TabBtn0 = document.getElementById('step5-tab-btn0');
const step5TabBtn1 = document.getElementById('step5-tab-btn1');
const step5TabBtn2 = document.getElementById('step5-tab-btn2');
const step5TabBtn3 = document.getElementById('step5-tab-btn3');
const step5TabBtn4 = document.getElementById('step5-tab-btn4');
const step5TabBtn5 = document.getElementById('step5-tab-btn5');
const step5TabBtn6 = document.getElementById('step5-tab-btn6');
const step5TabBtn7 = document.getElementById('step5-tab-btn7');
const step5TabBtn8 = document.getElementById('step5-tab-btn8');
let symboleStep5;

const rules1Step5 = document.getElementById('rules1-step5')
const rules2Step5 = document.getElementById('rules2-step5')
const btnStartStep5 = document.querySelector('#btn-start-step5')
btnStartStep5.addEventListener('click', function () {
    onClickStep5()
    btnStartStep5.style.display = 'none';
    rules1Step5.style.display = 'none';
    rules2Step5.style.display = 'block';
})



function tabSigneSpliceStep5() {
    tabSigne = ['{', '[', ')', '(', '}', ']', '&', '@', '^', '_', '+', '*', '/', '-', '"', '~', "'", ";", ':', '!', '?']

    randomize(tabSigne)
    tabSigne.splice(0, 12)

}

function step5UnReady() {
    tabSigneSpliceStep5()



    randomize(tabSigne);

    step5TabBtn0.value = tabSigne[0];
    step5TabBtn1.value = tabSigne[1];
    step5TabBtn2.value = tabSigne[2];
    step5TabBtn3.value = tabSigne[3];
    step5TabBtn4.value = tabSigne[4];
    step5TabBtn5.value = tabSigne[5];
    step5TabBtn6.value = tabSigne[6];
    step5TabBtn7.value = tabSigne[7];
    step5TabBtn8.value = tabSigne[8];

    symboleStep5 = step5TabBtn8.value
    step5TabBtn8.style.display = 'none';
    console.log(step5TabBtn8.value)

}



const btnStep5 = document.querySelectorAll('.btn-visible-step5');


function onClickStep5() {

    randomize(tabSigne);
    step5TabBtn0.value = tabSigne[0];
    step5TabBtn1.value = tabSigne[1];
    step5TabBtn2.value = tabSigne[2];
    step5TabBtn3.value = tabSigne[3];
    step5TabBtn4.value = tabSigne[4];
    step5TabBtn5.value = tabSigne[5];
    step5TabBtn6.value = tabSigne[6];
    step5TabBtn7.value = tabSigne[7];
    step5TabBtn8.value = tabSigne[8];

    step5TabBtn8.style.display = 'block';




    for (let i = 0; i < 9; i++) {
        console.log('avant', random, btnStep5[i].value)
        btnStep5[i].onclick = () => {


            if (btnStep5[i].value === symboleStep5) {

                btnEndStep5.style.display = 'inline-block';

                console.log('apres', btnStep5[i])
                console.log('reussi')
            }
        }

    }


}





//step6
const totalClick = document.getElementById('total-clique');
const btnEndStep6 = document.getElementById('btn-end-step6')
const step6 = document.getElementById('step6')
btnEndStep6.addEventListener('click', function () {
    stepDisplay(step6)
    stepDisplay(end)
    console.log('step6', stepDisplayNone)
    stopTimer()
    totalClick.innerHTML = parentClick + 1;
    parent.removeEventListener('click', parentOnClick)
    const finalTime = document.getElementById('finalTime').innerHTML = time.innerHTML;

    parentOnClick()
})

let tabStep6 = [];

function step6Number(num) {
    let number = Math.floor(Math.random() * 1350)
    randomStep6 = Math.floor(Math.random() * 2);
    if (randomStep6 === 0) {
        return num - number;
    } else {
        return num + number;
    }

}

function Maketab() {
    tabStep6 = [randomNumber];
    for (let i = 0; i < 5; i++) {

        tabStep6.push(step6Number(randomNumber))
    }
    console.log(tabStep6)
}



const step6BtnTab0 = document.getElementById('step6-btn-tab-0');
const step6BtnTab1 = document.getElementById('step6-btn-tab-1');
const step6BtnTab2 = document.getElementById('step6-btn-tab-2');
const step6BtnTab3 = document.getElementById('step6-btn-tab-3');
const step6BtnTab4 = document.getElementById('step6-btn-tab-4');
const step6BtnTab5 = document.getElementById('step6-btn-tab-5');








let randomStep6;
const btnStep6 = document.querySelectorAll('.btn-tab-step6');

function onClickStep6() {
    randomize(tabStep6)

    step6BtnTab0.value = tabStep6[0];
    step6BtnTab1.value = tabStep6[1];
    step6BtnTab2.value = tabStep6[2];
    step6BtnTab3.value = tabStep6[3];
    step6BtnTab4.value = tabStep6[4];
    step6BtnTab5.value = tabStep6[5];







    for (let i = 0; i < tabStep6.length; i++) {

        btnStep6[i].onclick = () => {

            btnStep6[i].classList.replace('btn-tab', 'btn-tab-step4');
            if (btnStep6[i].value == randomNumber) {

                btnEndStep6.style.display = 'inline-block';


            }
        }

    }


}

/*-----------------------END---------------------------- */
const end = document.getElementById('end')
const btnReset = document.querySelector('#btn-reset');

btnReset.addEventListener('click', reset)

function reset() {
    stepDisplay(end)
    stepDisplay(rules)
    btnStart.style.display = 'inline-block';
    btnStartStep2.style.display = 'inline-block';
    btnEndStep2.style.display = 'none';
    rules1Step2.style.display = 'block';
    rules2Step2.style.display = 'none';
    btnStartStep3.style.display = 'inline-block';
    btnEndStep3.style.display = 'none';
    btnStartStep4.style.display = 'inline-block';
    btnEndStep4.style.display = 'none';
    rules1Step4.style.display = 'block';
    rules2Step4.style.display = 'none';
    btnStartStep5.style.display = 'inline-block';
    btnEndStep5.style.display = 'none';

    btnEndStep6.style.display = 'none';
    btnStep2.forEach(elt => elt.classList.replace('btn-tab', 'btn-tab-step2'))
    btnStep4.forEach(elt => elt.classList.replace('btn-tab', 'btn-tab-step4'))
    parentCount.innerHTML = 0;
    console.log(parentClick)
    parentClick = 0;
    console.log(parentClick)

    time.innerHTML = ' 0';
    resetTime = true;
}




//timer
let resetTime = false;

let seconds = 0;
let minutes = 0;
let time = document.getElementById('time');
var sec = 0;
let setTime = 0;

function startTimer() {
    //commence le timer
    setTime = setInterval(timer, 1000)
}

function pad(val) {
    return val > 9 ? val : "0" + val;
}

function timer() {
    if (resetTime === false) {
        seconds = pad(++sec % 60);
        minutes = pad(parseInt(sec / 60, 10));
        time.innerHTML = `${minutes}:${seconds}`;

    } else if (resetTime === true) {
        sec = 0;
        seconds = pad(++sec % 60);
        minutes = pad(parseInt(sec / 60, 10));
        time.innerHTML = `${minutes}:${seconds}`;
        resetTime = false;
    }


}

function stopTimer() {
    //arret le timer
    clearInterval(setTime);
}