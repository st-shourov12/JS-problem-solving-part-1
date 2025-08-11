function temperature(c){
    let f = (9 * c / 5) + 32 ;
    return f ;
}

const T = temperature(36)
console.log("The temperature in farenheit is ", T);