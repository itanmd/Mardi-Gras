
const form = document.querySelector('.form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
let validEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;


function showError(input,message){
const formcontrol = input.parentElement;
formcontrol.className = 'formControl error';
const small = formcontrol.querySelector('small');
small.innerText = message;
}

function showSuccess(input){
    const formcontrol = input.parentElement;
    formcontrol.className = 'formControl success';
}

form.addEventListener('submit', e => {
    if(firstname.value == ''){
        showError(firstname,'First name is required!');
        e.preventDefault();
    }else{
        showSuccess(firstname);
    }

    if(lastname.value == ''){
        showError(lastname,'Last name is required!');
         e.preventDefault();
    }else{
        showSuccess(lastname);
    }

    if (email.value === '') {
                showError(email, 'Email is required!');
                e.preventDefault();
            } else if (email.value.match(validEmail)) {
                showSuccess(email)
            } else {
                showError(email, "Invalid Email!")
                e.preventDefault()
            }
        })
    
     




