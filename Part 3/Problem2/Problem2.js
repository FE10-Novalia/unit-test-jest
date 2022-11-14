function joinArrayRemoveDuplicate(arrayA, arrayB) {
    // your code here

    let output
    if(Array.isArray(arrayA) && Array.isArray(arrayB)){
        let arrayC = [...new Set([...arrayA,...arrayB])]
        output = arrayC
    }else{
        output = 'invalid'
    }
    return output
}

module.exports = joinArrayRemoveDuplicate

  