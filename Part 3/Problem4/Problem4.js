function meanMedian(arrayInput) {
    // your code here

    let output
    if(arrayInput.every(item => typeof item === 'number')){
        let sumAll = 0
        for(const num of arrayInput){
            sumAll += num
        }
        let mean = sumAll / arrayInput.length
    
        //Mencari median / nilai tengah
        let median = 0
        if(arrayInput.length % 2 === 1){
            median = arrayInput[Math.floor(arrayInput.length / 2)]
        }else{
            let index =  Math.floor(arrayInput.length / 2)
            median = (arrayInput[index] + arrayInput[index -1]) /2
        }
        output = [mean, median]
    }else{
        output = 'All Array must be integer'
    }
    return output
}

module.exports = meanMedian
