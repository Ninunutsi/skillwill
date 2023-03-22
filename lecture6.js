// lecture 6


// task 1

let func = (string, valueToReplace, valueToReplaceWith) => {
    let index = string.indexOf(valueToReplace)
    let newString = string.substr(0, index) + valueToReplaceWith + string.substr(index + valueToReplace.length)
    console.log(newString)
}

func('30 days of js', '30', '35')

// task 2

let string = (sentence) => {
    return sentence.toUpperCase()
}
console.log(string('hgjhdrkjhrj'))

// task 3

let arr = [{name: 'lasha', age: 30}, {name: 'saba', age:20}]

let sortedAge = (array) => {
    array.sort((a,b) => a.age - b.age)
    return array
}

console.log(sortedAge(arr))