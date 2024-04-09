// №1

// const radioButtons = document.querySelectorAll('input')
// radioButtons.forEach(radio =>{
//     radio.addEventListener('change', (event)=>{
//         document.body.style.background = event.currentTarget.value
//         console.log(event.currentTarget.value);
//     })
// })





// №2
// const nameInput = document.querySelector('#name-input')
// const nameOutput = document.querySelector('#name-output')

// nameInput.addEventListener('input', ()=>{
//     if (nameInput.value === '') {
//         nameOutput.textContent = 'незнайомець'
//     }
//     else {
//         nameOutput.textContent = nameInput.value
//     }
// })




// №3
// const inputElement = document.querySelector('#validation-input')
// inputElement.addEventListener('blur', ()=>{
//     if(inputElement.value === 6){
//         inputElement.classList.remove('invalid')
//         inputElement.classList.add('valid')
//     }
//     else {inputElement.classList.remove('valid')
//          inputElement.classList.add('invalid')

//     }
// })



// №4
// const fontSizeControl = document.getElementById('font-size-control');
// const textElement = document.getElementById('text');

// fontSizeControl.addEventListener('input', function() {
//     const fontSize = fontSizeControl.value;
//     textElement.style.fontSize = fontSize + 'px';
// });
