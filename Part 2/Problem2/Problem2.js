function faktorBilangan(numb){
    let output = []

    for(let i = 0; i <= numb; i++){
        numb % i === 0 && output.push(i)
    }
    return output
}

module.exports = faktorBilangan
// console.log(faktorBilangan(6))
// console.log(faktorBilangan(20))
// console.log(faktorBilangan(2))