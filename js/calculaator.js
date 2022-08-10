let $ = document
let inputValue = $.getElementById('input')

let eraseValue = $.getElementById('erase')

eraseValue.addEventListener('click', function(){
    inputValue.value = inputValue.value.slice(0 , -1)
})
