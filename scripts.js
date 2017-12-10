var your_money = 1000;

document.getElementById("your_money").innerHTML = "£" + your_money;

var your_wheat = 50;
var your_rice = 50;
var your_corn = 50;
var your_carrot = 50;

document.getElementById("your_wheat").innerHTML = "Búzád: " + your_wheat;
document.getElementById("your_rice").innerHTML = "Rizsed: " + your_rice;
document.getElementById("your_corn").innerHTML = "Kukoricád: " + your_corn;
document.getElementById("your_carrot").innerHTML = "Répád: " + your_carrot;

function buy_wheat() {
	if (your_money >= 100) {
	your_wheat += 1;
	your_money -= 100;
	document.getElementById("your_wheat").innerHTML = "Búzád: " + your_wheat;
	document.getElementById("your_money").innerHTML = "£" + your_money;
	}
	else{
		alert('Nincs elég pénzed')
	}
}

function buy_rice() {
	if (your_money >= 78) {
	your_wheat += 1;
	your_money -= 78;
	document.getElementById("your_rice").innerHTML = "Rizsed: " + your_wheat;
	document.getElementById("your_money").innerHTML = "£" + your_money;
	}
	else{
		alert('Nincs elég pénzed')
	}
}

function buy_corn() {
	if (your_money >= 150) {
	your_wheat += 1;
	your_money -= 150;
	document.getElementById("your_corn").innerHTML = "Kukoricád: " + your_wheat;
	document.getElementById("your_money").innerHTML = "£" + your_money;
	}
	else{
		alert('Nincs elég pénzed')
	}
}

function buy_carrot() {
	if (your_money >= 200) {
	your_wheat += 1;
	your_money -= 200;
	document.getElementById("your_carrot").innerHTML = "Répád: " + your_wheat;
	document.getElementById("your_money").innerHTML = "£" + your_money;
	}
	else{
		alert('Nincs elég pénzed')
	}
}

function shop() {
	document.getElementById("shop").style.display = "block";
	document.getElementById("main").style.display = "none";
}

function main() {
	document.getElementById("main").style.display = "block";
	document.getElementById("shop").style.display = "none";
}