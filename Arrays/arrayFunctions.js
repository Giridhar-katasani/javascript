/*
all three filter, map, reduce creates new instance, they don't change the original object
*/

let numbers = [1,2,3-1,4,5]

let filteredNumbers = numbers.filter(num => {
    return num > 0
})

console.log(filteredNumbers)

let mapNumbers = filteredNumbers.map(num => {
    return {
        num
    }
})

console.log(mapNumbers)

let reducedValue = numbers.reduce((accumlator, currentValue) => {
    return accumlator + currentValue
}, 0)

console.log(reducedValue)