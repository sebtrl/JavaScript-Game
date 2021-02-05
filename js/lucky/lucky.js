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
const rules = document.getElementById('rules');

btnStart.addEventListener('click', function () {
        //commence le jeu
        parent.addEventListener('click',  parentOnClick)
                //permet d'ecouter les click du document
               
       
        btnStart.style.display = 'none';
        stepDisplay(rules)
        stepDisplay(step1)
        
        
        onClickStep1()
       
       startTimer()
});



//step 1


const step1 = document.getElementById('step1')

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





var tabStep1 = [0, 1, 2, 3, 4, 5];


const tabBtn0 = document.getElementById('tab-btn0');
const tabBtn1 = document.getElementById('tab-btn1');
const tabBtn2 = document.getElementById('tab-btn2');
const tabBtn3 = document.getElementById('tab-btn3');
const tabBtn4 = document.getElementById('tab-btn4');
const tabBtn5 = document.getElementById('tab-btn5');





        
        function randomize(tab) {
//melange le tableau de step1
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

      

       


        


const btnStep1 = document.getElementById('btn-step1');

btnStep1.addEventListener('click', function () {
//fais apparaitre step2
        stepDisplay(step1)
        stepDisplay(step2)
        functStep2()
})



function btnApear() {
        btnStep1.style.display = 'block';
}



let randomStep1;

const tabBtnStep1 = document.querySelectorAll('.btn-tab');

function onClickStep1(){
        randomize(tabStep1);
        tabBtn0.value = tabStep1[0];
        tabBtn1.value = tabStep1[1];
        tabBtn2.value = tabStep1[2];
        tabBtn3.value = tabStep1[3];
        tabBtn4.value = tabStep1[4];
        tabBtn5.value = tabStep1[5];
        console.log(randomize(tabStep1))
     randomStep1 = Math.floor(Math.random()*5);
     const stepOneRandomNumber = document.getElementById('step-one-random-number').innerHTML= randomStep1;
     
for(let i = 0; i< 6; i++){
    console.log('avant',randomStep1,tabBtnStep1[i].value)
    tabBtnStep1[i].onclick =() =>{
        
       tabBtnStep1[i].classList.replace('btn-tab','btn-visible');
if(tabBtnStep1[i].value == randomStep1){
    
    
   
    console.log('apres',tabBtnStep1[i])
 console.log('reussi')
 btnApear()
}
    }
    
}


}






//step 2

const btnStep2 = document.getElementById('btn-step2')
btnStep2.addEventListener('click', function () {
        //fais apparaitre step3
        stepDisplay(step2)
        stepDisplay(step3)

        witchBtnStep3()
})

function nextStep3Apear() {
        btnStep2.style.display = 'block';
}

function functStep2() {
       
        //faire apparaitre btn-step2
        let randomNumber = Math.floor(Math.random() * 3);
        const btn1 = document.getElementById('btn-1');
        const btn2 = document.getElementById('btn-2');
        const btn3 = document.getElementById('btn-3');

        btn1.value = '1';
        btn2.value = '2';
        btn3.value = '3';

        console.log(randomNumber)
        //choisi quelque btn fera apparaitre le btnStep2
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
        //fais apparaitre step4
        stepDisplay(step3)
        stepDisplay(end)

        stopTimer()
        totalClick.innerHTML = parentClick + 1;
        parent.removeEventListener('click', parentOnClick)
        
        parentOnClick()
        const finalTime = document.getElementById('finalTime').innerHTML=time.innerHTML;

        

})



function nextStep4Apear() {
        // go to the next step

        btnStep3.style.display = 'block';
}




function witchBtnStep3() {
        //choisi de maniere aleatoire quelque btn renvoie a l'etape 1 et lequel au step4
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
let resetTime = false;
//resetTime sert a remettre le timer a 0 si la partie et rejouer
function reset() {
        //reset le jeu pour recomencer a zero
        tabBtnStep1.forEach(elt=> elt.classList.replace('btn-visible','btn-tab'))
       
        stepDisplay(end)
        stepDisplay(rules)
        btnStart.style.display = 'inline-block';
        
        btnStep1.style.display = 'none';
        btnStep2.style.display = 'none';
        btnStep3.style.display = 'none';
        parentCount.innerHTML = 0;
        console.log(parentClick)
        parentClick= 0;
        console.log(parentClick)
        time.innerHTML = ' 0' ;
resetTime = true;
}
function backToStep1() {
        // btn pour revenir ay step1 en cas d'echec du step3
        
        randomize(tabStep1);
        tabBtnStep1.forEach(elt=> elt.classList.replace('btn-visible','btn-tab'))
        onClickStep1()
        stepDisplay(step3)
        stepDisplay(step1)
        btnStep1.style.display = 'none';
        btnStep2.style.display = 'none';
        btnStep3.style.display = 'none';
        
}


let seconds=0;
let minutes =0;
let time =document.getElementById('time');
var sec = 0;
let setTime = 0;
function startTimer(){
        //commence le timer
        setTime = setInterval( timer, 1000)
}

    function pad ( val ) { 
            return val > 9 ? val : "0" + val; 
        }
     function timer(){
         if(resetTime === false){ 
                     seconds = pad(++sec%60);
                     minutes = pad(parseInt(sec/60,10));
                     time.innerHTML = `${minutes}:${seconds}`;

         }else if (resetTime=== true){
                sec= 0;
                 seconds = pad(++sec%60);
                 minutes = pad(parseInt(sec/60,10));
                 time.innerHTML = `${minutes}:${seconds}`;
                 resetTime =false;
         }
                

    }
    function stopTimer(){
            //arret le timer
            clearInterval(setTime);
    }

   
