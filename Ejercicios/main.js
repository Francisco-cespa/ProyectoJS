

// for (let i= "" ; i <= "######" ; i += "#"){
//     let numero = i;
//     console.log(numero) ;
// }
 
function numeros(){
    for (i= 0; i <= 100 ; i ++){
        let numero = i;
        let residuo3 = numero % 3;
        let residuo5 = numero % 5;
        if ( residuo3 === 0 ){
            numero === "fizz";
            console.log(numero);
        } else if (residuo5 === 0){
            residuo5 === "buzz";
            console.log(numero);
        }
    }
    return(numeros);
}

numeros();

