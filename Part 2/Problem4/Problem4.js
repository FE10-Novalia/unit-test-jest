
function palindrome(string) {
    // your code here
    let output
    if(typeof string == 'string'){
        let newString = [], start = string.length - 1
        for(let i = start; i >= 0; i--){
            newString.push(string[i])
        }
    
        output = newString.join('') === string
    }else{
        output = 'Masukkan string'
    }
    return output
  }

module.exports = palindrome
