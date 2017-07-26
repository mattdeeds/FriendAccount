$(document).ready(function () {
	$("#warning").hide();
	$("#passWarning").hide();
});

function checkEmailPass() {
	var email = document.getElementById("email").value;
	var test = "test@umich.edu"
	//Call function here that compares email var with email already in database. Make it return a bool which is checked in if statement below
	if (email == test) {
		$('#warning').toggle();
	} else {
    	//alert("Email has been sent to " + email);
    	$('#warning').hide();
	}
	if (password != passwordConf) {
		$('#passWarning').show();
	} else {
		$('#passWarning').hide();
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