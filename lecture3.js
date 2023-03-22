// lecture 3 
// task 1

let users = [{name: 'Temo', age: 25}, {name: 'Lasha', age: 21}, {name: 'Ana', age: 28}]

let arr = (data) => {
    let count = 0
    data.forEach(person => {
        if(person.age > count){
            count = person.age
        }
    });
    console.log(count)
}

arr(users)

// task 2 

let user = {
    name: 'temo',
    age: 25
}
let newObj = (obj) => {
    let newObject = obj
    return newObject
}

console.log(newObj(user))


// task 3

let countA = 0
let countB = 0
let a
let b

while(a!=3){
    a = Math.floor(Math.random() * 50)
    countA++
}

while(b!=3){
    b = Math.floor(Math.random() * 50)
    countB++
}

if(countA > countB){
    console.log('player A wins')
}else if(countB > countA){
    console.log('player B wins')
}else{
    console.log('its a draw')
}

