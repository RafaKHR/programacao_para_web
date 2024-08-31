function verificaPrimo(n){
    let cont = 0;
    for(i = 2; i <= n; i++){
        if(n % i == 0){
            cont++;
        } 
     }
        if(cont == 1){
            return true;
        }else {
            return false;
        }
};

console.log(verificaPrimo(0)); 
console.log(verificaPrimo(1)); 
console.log(verificaPrimo(2)); 
console.log(verificaPrimo(3)); 
console.log(verificaPrimo(7)); 
console.log(verificaPrimo(83)); 
console.log(verificaPrimo(100)); 
console.log(verificaPrimo(991)); 
console.log(verificaPrimo(104729)); 
console.log(verificaPrimo(14348907)); 