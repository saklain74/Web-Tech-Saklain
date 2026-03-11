let total = 0;
let virtual = 0;
let person = 0;

function validateForm(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let company = document.getElementById("company").value;
let type = document.getElementsByName("type");

document.getElementById("nameError").innerHTML="";
document.getElementById("emailError").innerHTML="";
document.getElementById("companyError").innerHTML="";
document.getElementById("typeError").innerHTML="";

if(name.length < 6 || name.length > 100){
document.getElementById("nameError").innerHTML=
"Name must be between 6 and 100 characters.";
return false;
}

if(email.indexOf("@") == -1){
document.getElementById("emailError").innerHTML=
"Please enter a valid professional email address.";
return false;
}

if(company.length > 100){
document.getElementById("companyError").innerHTML=
"Company name must be less than 100 characters.";
return false;
}

let selected = "";

for(let i=0;i<type.length;i++){
if(type[i].checked){
selected = type[i].value;
}
}

if(selected==""){
document.getElementById("typeError").innerHTML=
"Please select your attendance type.";
return false;
}

total++;

if(selected=="Virtual"){
virtual++;
}else{
person++;
}

alert("Registration Successful");

return false;
}

function toggleAnalytics(){

let panel = document.getElementById("stats");
let btn = document.getElementById("btn");

if(panel.style.display=="none"){

panel.style.display="block";

document.getElementById("total").innerHTML="Total Registrants: "+total;
document.getElementById("virtual").innerHTML="Virtual: "+virtual;
document.getElementById("person").innerHTML="In-Person: "+person;

btn.innerHTML="Hide Event Analytics";

}else{

panel.style.display="none";
btn.innerHTML="Show Event Analytics";

}

}