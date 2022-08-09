let $ = document
let number = "0"
let isDesimal = false
let inputValue = $.getElementById('input')


function addDigits (digit){
    if (number!= 0)
    number += digit;
    else number = digit
    inputValue.value =+ number
}

