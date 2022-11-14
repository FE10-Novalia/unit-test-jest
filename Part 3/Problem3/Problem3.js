function removeDuplicates(array) {
    // your code here
    let output
    if(Array.isArray(array)){
        let newArray = []
        for(let i in array){
            !newArray.includes(array[i]) && newArray.push(array[i])
        }
        output = newArray.length
    }else{
        output  = 'Invalid Array'
    }
    return output
}
module.exports = removeDuplicates

  
