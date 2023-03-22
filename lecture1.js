// task 1
// lecture 1
// 

let equals = (a,b) => {
    return a === b
}

console.log(equals(9,9))
console.log(equals(10, '10'))

// task 2

let tempterature = (f) => {
    if(typeof f != 'number'){
        return false
    }else{
        let celsius = ((f-32)*5)/9
        return celsius.toFixed(2)
    } 
}

console.log(tempterature(100))
console.log(tempterature('o'))


// task 3

let calculator = (a, b, operation) => {
    if(typeof a != 'number' || typeof b != 'number'){
        return false
    }
    
    let sum

    switch(operation){
        case '+': 
            sum = a + b
            break
        case '-':
            sum = a - b
            break
        case '*': 
            sum = a * b
            break
        case '/':
            sum = a / b
            break
        default:
            sum = false 
    }

    return sum
}

console.log(calculator(10, 9, '+'))
console.log(calculator(10, '8', '+'))
console.log(calculator(10, 9, 'y'))