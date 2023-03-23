// lecture 9

// task1 
// 

let btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    document.body.style.backgroundColor = 'black'
})

// task 2

let input = document.getElementById('input')
let btnColor = document.getElementById('btnColor')
let value

input.addEventListener('change', () => {
    value = input.value
    btnColor.addEventListener('click', () => {
        if(value == 'red'){
            document.body.style.backgroundColor = 'red'
        }else if(value == 'black'){
            document.body.style.backgroundColor = 'black'
        }else if(value == 'green'){
            document.body.style.backgroundColor = 'green'
        }else if(value == 'white'){
            document.body.style.backgroundColor = 'white'
        }else if(value == 'blue'){
            document.body.style.backgroundColor = 'blue'
        }else{
            alert('Please enter one of the given colors (:')
        }
    })
})

// task 3

let inputeA = document.getElementById('inputAvg')
let btnA = document.getElementById('btnAvg')
let sum=0
let elements = 0

inputeA.addEventListener("change", () => {
    let inputVal = inputeA.value
    let int
    inputVal = inputVal.replace(/:/g, '').split('').forEach(elem => {
        int = parseInt(elem)
        elements++
        sum+=int
    })
    btnA.addEventListener('click', () => {
        alert("average is: " + sum/elements)
    })
})
