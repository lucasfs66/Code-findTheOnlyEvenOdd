let array1 = [160, 3, 1719, 19, 11, 13, -21]
let array2 = [2, 4, 0, 100, 4, 11, 2602, 36]


const onlyEvenOdd = arr => { 
    let returnValue = undefined
    let evenCount = 0
    let oddCount = 0
    arr.forEach(element => {
        if(element % 2 === 0) {
            evenCount++
        } else {
            oddCount++
        }
    });
    console.log(evenCount, oddCount)

    if(evenCount > oddCount) {
        arr.forEach(element => {
            if(element % 2 !== 0) {
               returnValue = element
            }
        });
    } else {
        arr.forEach(element => {
            if(element % 2 === 0) {
                returnValue = element
            }
        })
    }
    return returnValue
}


console.log(onlyEvenOdd(array1))
console.log(onlyEvenOdd(array2))