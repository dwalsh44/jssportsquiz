function validate(form) {
	fail = validateForename(form.forename.value);
	fail += validateSurname(form.surname.value);
	fail += validateMobileNumber(form.MobileNumber.value);
	fail += validateEmail(form.email.value);
	if (fail=="")
		return true;
	else {
		alert(fail);
		return false;
	}
}

//Basically check if Forename is empty
function validateForename(field) {
	return (field == "") ? "No Forename was entered.\n" : "";
}
//Basically check if Forename is empty
function validateSurname(field) {
	return (field =="") ? "No Surname was entered.\n" : "";
}

//Check that the mobile Number has valid characters only using a regular expression
function validateMobileNumber(field) {
	if (field == "")
		return "No Mobile Number was entered.\n";
	else if (field.length < 9)
		return "Mobile Numbers must be at least 9 characters.\n";
	else if (/[^a-zA-Z0-9_-]/.test(field))
		return "Only 0-9, - and _ allowed in Mobile Numbers.\n";
	
	return "";
}
function validateEmail(field) {
	if (field == "")
		return "No email was entered.\n";
	else if (!((field.indexOf(".") >0) &&
			(field.indexOf("@") > 0)) ||
			/[^a-zA-Z0-9.@_-]/.test(field))
			return "The Email address is invalid.\n";
			return "";
}