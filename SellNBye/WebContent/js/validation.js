function emailValidation(email, id) {
 var regExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


 if (!regExpression.test(email)) {
 id.style.backgroundColor = "red";
 alert("Invalid E-mail")
 }
 
 else{
 value.style.backgroundColor = "";
 }
}

function emptyCheck(firstname, id) {
	 var regExpression = document.getElementById(firstname);
	 if(inputValue.value==""||inputValue==null||inputValue==""){
		 id.style.backgroundColor="red"
	 }else{
		 id.style.backgroundColor="";
	 }
	}

function emptyCheck(lastname, id) {
	 var regExpression = document.getElementById(lastname);
	 if(inputValue.value==""||inputValue==null||inputValue==""){
		 id.style.backgroundColor="red"
	 }else{
		 id.style.backgroundColor="";
	 }
	}

function validateForm(){
	var email = document.getElementById('username');
	var password = document.getElementById('password');
	var firstname = document.getElementById('firstname');
	var lastname = document.getElementById('lastname');
	var address = document.getElementById('address');
}