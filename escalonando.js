/* Para n escalones, identificar cuantas formas hay de 
subirlos si se puede ir de a 1 escalón o dos escalones */

const StepCounter = (n) => {

    if (n === 1) {
        console.log(1);
    }
    else {

       counter =  [(n - 1) + (n - 2)]
       console.log(counter);
        
    }

    (n < 0)
    console.log("numero inválido");

}

console.log(StepCounter(100));