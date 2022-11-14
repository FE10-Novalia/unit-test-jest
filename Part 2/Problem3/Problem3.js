function primeNumber(number) {
    // your code here
    let output
    if(number === 1){
        output = 'Satu adalah bilangan asli'
    }else if(number > 1 ){
        let pembagi = 0
        for(let i = 1; i <= number; i++){
            number % i === 0 && pembagi++
        }
        output =  pembagi === 2 ? output = true : output = false
    }else{
        output = 'invalid'
    }

    return output
}

module.exports = primeNumber



// console.log(primeNumber(11)) // true
// console.log(primeNumber(13)) // true
// console.log(primeNumber(17)) // true
// console.log(primeNumber(20)) // false
// console.log(primeNumber(35)) // false
// console.log(primeNumber(1)) // false
// console.log(primeNumber(-111)) // false

  