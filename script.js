
const form = document.getElementById('form');
const inputs = document.querySelectorAll('input');

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    inputs.forEach((input)=>{
        if(input.value === '' || input.value == null){
            input.parentElement.classList.add('error');
            input.classList.add('input-error');
            input.parentElement.classList.remove('invalid');
        } else{
            input.parentElement.classList.remove('error');
            input.classList.remove('input-error');
            if (input.type == 'email') {
				if (validateEmail(input.value)) {
					input.parentElement.classList.remove('error');
                    input.parentElement.classList.remove('invalid');
				} else {
                    input.parentElement.classList.add('invalid');
                    input.classList.add('input-error');
				}
			}
        }
    })
})

function validateEmail (email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
