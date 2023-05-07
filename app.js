import readline from "readline-sync";
import color from "cli-color";

const purple = color.xterm(92).bgXterm(147)
const blue = color.xterm(153)
const pink = color.xterm(212)
const peach =  color.xterm(224)
const lime = color.xterm(229)


function main(){
    console.clear()
    console.log (purple("------ Calculator ------"))
    console.log(lime("--------------------------"))
    inputa()
}
let a,b;

 function inputa(){
     a = readline.question(peach("Enter 1st num: "))
    if(Number(a)){
        inputb()
    }
    else{
        console.log(peach("not a number"))
     inputa()
    }
}

function inputb(){
    b = readline.question(peach("Enter 2nd num: "))
   if(Number(b)){
    console.log(lime("--------------------------"))
       operator()
   }
   else{
       console.log(peach("not a number"))
    inputb()
   }
}
    function operator(){
    let result;
    const operator = readline.question(pink("which operation do you want to perfrom ( +, -, * , / ) : "))
    console.log(lime("--------------------------"))

    switch(operator){
        case '+':
            result = +a + +b;
            console.log(blue(`${a} + ${b} = ${result}`));
            break;
        case '-':
            result = a - b;
            console.log(blue(`${a} + ${b} = ${result}`));
             break;
        case '*':
            result = a * b;
            console.log(blue(`${a} + ${b} = ${result}`));    
          break;
        case '/':
         result = a / b;
         console.log(blue(`${a} + ${b} = ${result}`));
        break;
    
        default:
            console.log('Invalid operator');
            operator()
            break;
            
    }  

}
main()