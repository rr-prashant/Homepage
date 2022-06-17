function main(){
	document.querySelector('#but2').addEventListener('click',reset);
	document.querySelector('#but1').addEventListener('click',submit);
}

function reset(e){
	e.preventDefault();
	document.querySelector('#form-control').reset();
}

function submit(e){
	e.preventDefault();

	let val = validate();

	if(val.length === 0){
		document.querySelector('#form-control').submit();
	}
	else{
		val.forEach(function(obj){
			let val = document.getElementById(obj.input);
            val.parentElement.classList.add('error');
            val.parentElement.setAttribute('data-errormsg', obj.msg);
		})
	}
	
}

function validate(e){
	let failures = [];

	let check = document.querySelector('#gridCheck');
	if(!check.checked){
        failures.push({input: 'gridCheck', msg: 'Please agree to form to submit.'})
    }

	let fname = document.querySelector('#inputfname4');
	if(fname.value === ""){
		failures.push({input: 'inputfname4', msg: 'Please enter your name.'})
	}

	let uname = document.querySelector('#inputUname4');
	if(uname.value === ""){
		failures.push({input: 'inputUname4', msg: 'Please enter your User name.'})
	}

	let email = document.querySelector('#inputEmail4');
	if(email.value === ""){
		failures.push({input: 'inputEmail4', msg: 'Please enter your Email.'})
	}

	let password = document.querySelector('#inputPassword4');
	if(password.value === "" || password.value.length < 8){
		failures.push({input: 'inputPassword4', msg: 'Please enter password of at least 8.'})
	}


	let select = document.querySelector('#inputprovince');
	if(select.selectedIndex === 0){
		failures.push({input: 'inputprovince', msg: 'Please enter your province'})
	}

	
	return failures;
}

document.addEventListener('DOMContentLoaded', main());