const numbers = [5,6,11,12,98, 5];

function finder(numbers , x){
    let findingNumber = 0 ;
    for (const number of numbers) {
        if(number === x){
            findingNumber ++;
        }
    }
    console.log(findingNumber);
}

finder(numbers , 25);