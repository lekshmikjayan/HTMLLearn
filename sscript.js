<html>

<head>EXTERNAL </head>

function calculate () {
	X = document.getElementById ("first_number") value;
	Y = document.getElementById ("second_number") value;
sum = Number(X) + Number(Y);
document.getElementById ("Output").innerHTML = "<b>Total</b> : <i>" + sum + "</i>";
}

<body>
	<h1> Calculate using JS</h1>
<form>
	<input type = "number" placeholder = "Enter a number" id = "first_number"/>
	<input type = "number" placeholder = "Enter another number" id = "second_number"/>
	<input type = "submit" value = calculate onclick="calculate()"/>

<div id = "output"> </div>

</form>

</body>

