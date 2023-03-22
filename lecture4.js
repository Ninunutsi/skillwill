// lecture 4
// task 1

function numF(){
    if(arguments.length < 2){
        return 'please enter more than 2 numbers'
    }
    let first = arguments[0] + arguments[1]
    let arr = []
    let sum = 1
    let i = 2
    while(i < arguments.length){
        sum = sum * arguments[i]
        i++
    }
    arr.push(first)
    arr.push(sum)
    return arr

}

console.log(numF(4,1,3,1,2))

// task 2

let obj = {
    name: 'ninuza',
    age: 21,
    address: {
        city: 'tbilisi'
    }
}

let {name, age, address: {city}} = obj

console.log(city)

// task 3

let clone = (object) => {
    let cloneObj = {
        ...object
    }

    return cloneObj
}

console.log(clone(obj))