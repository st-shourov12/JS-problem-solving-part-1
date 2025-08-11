function oddAverage(numbers){
    let odds = [];
    for (let number of numbers) {
        if( number % 2 !== 0){
            odds.push(number)
        }
    }
    
    let sum = 0; 
    for (const odd of odds) {
        sum = sum + odd  ;
    }
    let length = odds.length;
    let average = parseFloat( sum / length );
    return average;

}

let numbers = [11, 55, 44, 66, 89, 98, 42,100 ,69];

let x = oddAverage(numbers);

console.log(x);