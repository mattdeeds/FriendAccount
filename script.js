$(document).ready(function () {
	$("#warning").hide();
	$("#passWarning").hide();
});

function checkEmail() {
	var email = document.getElementById("email").value;
	var test = "test@umich.edu"
	//Call function here that compares email var with email already in database. Make it return a bool which is checked in if statement below
	if (email == test) {
		$('#warning').show();
	} else {
    	//alert("Email has been sent to " + email);
    	$('#warning').hide();
    	window.location.href = "registration_personalInfo.html";

	}
}
function checkPass() {
	var password = document.getElementById("pwd").value;
	var passwordConf = document.getElementById("confirmPwd").value;

	if (password != passwordConf) {
		$('#passWarning').show();
	} else {
		$('#passWarning').hide();
		window.location.href = "registration_securityQuestions.html";
	}
}
function hashPass() {
	//send password to the server over secure encryped connection to be hashed. no client side hashing
}
function checkPhone() {
	var a = document.getElementById(phoneNumber).value;
	var filter = /^[0-9-+]+$/;
	if (filter.test(a)) {
		return true;
	} else {
		return false;
	}
}