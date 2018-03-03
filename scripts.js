//----------------------------------BASIC------------------------------------

	var your_money = 10000;
	var your_xp = 0;
	var your_level = 0;

	document.getElementById("your_money").innerHTML = "£" + your_money;
	document.getElementById("your_xp").innerHTML =  your_xp + " xp";
	document.getElementById("your_level").innerHTML = your_level + "."; 

//----------------------------------STORAGE-----------------------------------

	//-------------------------INGREDIENTS-----------------------

		var your_wheat = 0;
		var your_rice = 0;
		var your_corn = 0;
		var your_carrot = 0;
		var your_water = 0;
		var your_milk = 0;
		var your_sourcream= 0;
		var your_egg = 0;
		var your_flour = 0;
		var your_butter = 0;
		var your_oil = 0;
		var your_cheese = 0;
		var your_electricity = 0;
		var your_spice = 0;
		var your_pork = 0;
		var your_beef = 0;
		var your_chicken_meat = 0;
		var your_mutton = 0;
		var your_yeast = 0;
		var your_fire = 0;
		var your_leather = 0;
		var your_feather = 0;
		var your_wool = 0;
		var your_fur = 0;
		var your_apple = 0;
		var your_wood = 0;
		var your_lemon = 0;
		var your_walnut = 0;
	
	//----------------------------PRINT--------------------------

		document.getElementById("your_wheat").innerHTML = "Búzád: " + your_wheat;
		document.getElementById("your_rice").innerHTML = "Rizsed: " + your_rice;
		document.getElementById("your_corn").innerHTML = "Kukoricád: " + your_corn;
		document.getElementById("your_carrot").innerHTML = "Répád: " + your_carrot;
		
		document.getElementById("your_milk").innerHTML = "Tejed: " + your_milk;
		document.getElementById("your_butter").innerHTML = "Vajad: " + your_butter;
		document.getElementById("your_cheese").innerHTML = "Sajtod: " + your_cheese;
		document.getElementById("your_sourcream").innerHTML = "Tejfölöd: " + your_sourcream;
		
		document.getElementById("your_water").innerHTML = "Vized: " + your_water;
		document.getElementById("your_electricity").innerHTML = "Áramod: " + your_electricity;
		document.getElementById("your_fire").innerHTML = "Tüzed: " + your_fire;
		document.getElementById("your_yeast").innerHTML = "Élesztőd: " + your_yeast;
		
		document.getElementById("your_egg").innerHTML = "Tojásod: " + your_egg;
		document.getElementById("your_flour").innerHTML = "Liszted: " + your_flour;
		document.getElementById("your_spice").innerHTML = "Fűszered: " + your_spice;
		document.getElementById("your_oil").innerHTML = "Olajod: " + your_oil;
		
		document.getElementById("your_pork").innerHTML = "Disznóhúsod: " + your_pork;
		document.getElementById("your_beef").innerHTML = "Marhahúsod: " + your_beef;
		document.getElementById("your_chicken_meat").innerHTML = "Csirkehúsod: " + your_chicken_meat;
		document.getElementById("your_mutton").innerHTML = "Birkahúsod: " + your_mutton;
	
		document.getElementById("your_wool").innerHTML = "Gyapjúd: " + your_wool;
		document.getElementById("your_leather").innerHTML = "Bőröd: " + your_leather;
		document.getElementById("your_feather").innerHTML = "Tollad: " + your_feather;
		document.getElementById("your_fur").innerHTML = "Szőröd: " + your_fur;

		document.getElementById("your_wood").innerHTML = "Fád: " + your_wood;
		document.getElementById("your_apple").innerHTML = "Almád: " + your_apple;
		document.getElementById("your_lemon").innerHTML = "Citromod: " + your_lemon;
		document.getElementById("your_walnut").innerHTML = "Diód: " + your_walnut;

//----------------------------------LEVELUP-------------------------------------
	function levelUp(){
		if(your_xp >= 1000 && your_xp < 2000 && your_level ==0){
			your_level += 1;
			your_xp -= 1000;
		}
		if(your_xp >= 2000 && your_xp < 3000 && your_level == 1){
			your_level += 1;
			your_xp -= 2000;
		}
		if(your_xp >= 3000 && your_xp < 4000 && your_level == 2){
			your_level += 1;
			your_xp -= 3000;
		}
		if(your_xp >= 4000 && your_xp < 5000 && your_level == 3){
			your_level += 1;
			your_xp -= 3000;
		}
		if(your_xp >= 5000 && your_xp < 6000 && your_level == 4){
			your_level += 1;
			your_xp -= 4000;
		}
		if(your_xp >= 6000 && your_xp < 7000 && your_level == 5){
			your_level += 1;
			your_xp -= 5000;
		}
		if(your_xp >= 7000 && your_xp < 8000 && your_level == 6){
			your_level += 1;
			your_xp -= 7000;
		}
		if(your_xp >= 8000 && your_xp < 9000 && your_level == 7){
			your_level += 1;
			your_xp -= 8000;
		}
		if(your_xp >= 9000 && your_xp < 10000 && your_level == 8){
			your_level += 1;
			your_xp -= 9000;
		}
		if(your_xp >= 15000 && your_level == 9){
			your_level += 1;
			your_xp -= 15000;
		}
		
		document.getElementById("your_xp").innerHTML = your_level + " xp";
		document.getElementById("your_level").innerHTML = your_level + ".";
	}
	
//----------------------------------BUYING-------------------------------------

	function buy_wheat() {
		if (your_money >= 64) {
		your_wheat += 1;
		your_money -= 64;
		document.getElementById("your_wheat").innerHTML = "Búzád: " + your_wheat;
		document.getElementById("your_money").innerHTML = "£" + your_money;
		}
		else{
			alert('Nincs elég pénzed')
		}
	}
	
	function buy_rice() {
		if (your_money >= 51) {
		your_rice += 1;
		your_money -= 51;
		document.getElementById("your_rice").innerHTML = "Rizsed: " + your_rice;
		document.getElementById("your_money").innerHTML = "£" + your_money;
		}
		else{
			alert('Nincs elég pénzed')
		}
	}
	
	function buy_corn() {
		if (your_money >= 93) {
		your_corn += 1;
		your_money -= 93;
		document.getElementById("your_corn").innerHTML = "Kukoricád: " + your_corn;
		document.getElementById("your_money").innerHTML = "£" + your_money;
		}
		else{
			alert('Nincs elég pénzed')
		}
	}
	
	function buy_carrot() {
		if (your_money >= 152) {
		your_carrot += 1;
		your_money -= 152;
		document.getElementById("your_carrot").innerHTML = "Répád: " + your_carrot;
		document.getElementById("your_money").innerHTML = "£" + your_money;
		}
		else{
			alert('Nincs elég pénzed')
		}
	}
	
//----------------------------------SELLING-------------------------------------
	
	function sell_wheat() {
		if (your_wheat >= 1) {
		your_wheat -= 1;
		your_money += 51;
		document.getElementById("your_wheat").innerHTML = "Búzád: " + your_wheat;
		document.getElementById("your_money").innerHTML = "£" + your_money;
		}
		else{
			alert('Nincs elég Búzád')
		}
	}
	
	function sell_rice() {
		if (your_rice >= 1) {
		your_rice -= 1;
		your_money += 44;
		document.getElementById("your_rice").innerHTML = "Rizsed: " + your_rice;
		document.getElementById("your_money").innerHTML = "£" + your_money;
		}
		else{
			alert('Nincs elég Rizsed')
		}
	}
	
	function sell_corn() {
		if (your_corn >= 1) {
		your_corn -= 1;
		your_money += 89;
		document.getElementById("your_corn").innerHTML = "Kukoricád: " + your_corn;
		document.getElementById("your_money").innerHTML = "£" + your_money;
		}
		else{
			alert('Nincs elég Kukoricád')
		}
	}
	
	function sell_carrot() {
		if (your_carrot >= 1) {
		your_carrot -= 1;
		your_money += 127;
		document.getElementById("your_carrot").innerHTML = "Répád: " + your_carrot;
		document.getElementById("your_money").innerHTML = "£" + your_money;
		}
		else{
			alert('Nincs elég Répád')
		}
	}
	
//----------------------------------GROWING-------------------------------------

	//-1--------------*2--------------
		function grow_wheat1() {
			if (your_wheat >= 1) {
				if (your_money >= 44) {
					your_wheat -= 1;
					your_money -= 44;
					your_wheat += 2;
					your_xp += 9;
					document.getElementById("your_wheat").innerHTML = "Búzád: " + your_wheat;
					document.getElementById("your_money").innerHTML = "£" + your_money;
					document.getElementById("your_xp").innerHTML = your_xp + " xp";
				}
				else{
					alert('Nincs elég pénzed!')
				}
			}
			else{
				alert('Nincs növényed!')
			}
		}

		function grow_rice1() {
			if (your_rice >= 1) {
				if (your_money >= 42) {
					your_rice -= 1;
					your_money -= 42;
					your_rice += 2;
					your_xp += 8;
					document.getElementById("your_xp").innerHTML = your_xp + " xp";
					document.getElementById("your_rice").innerHTML = "Rizsed: " + your_rice;
					document.getElementById("your_money").innerHTML = "£" + your_money;
				}
				else{
					alert('Nincs elég pénzed!')
				}
			}
			else{
				alert('Nincs növényed!')
			}
		}

		function grow_corn1() {
			if (your_corn >= 1) {
				if (your_money >= 83) {
					your_corn -= 1;
					your_money -= 83;
					your_corn += 2;
					your_xp += 17;
					document.getElementById("your_xp").innerHTML = your_xp + " xp";
					document.getElementById("your_corn").innerHTML = "Kukoricád: " + your_corn;
					document.getElementById("your_money").innerHTML = "£" + your_money;
				}
				else{
					alert('Nincs elég pénzed!')
				}
			}
			else{
				alert('Nincs növényed!')
			}
		}

		function grow_carrot1() {
			if (your_carrot >= 1) {
				if (your_money >= 124) {
					your_carrot -= 1;
					your_money -= 124;
					your_carrot += 2;
					your_xp += 25;
					document.getElementById("your_xp").innerHTML = your_xp + " xp";
					document.getElementById("your_carrot").innerHTML = "Répád: " + your_carrot;
					document.getElementById("your_money").innerHTML = "£" + your_money;
				}
				else{
					alert('Nincs elég pénzed!')
				}
			}
			else{
				alert('Nincs növényed!')
			}
		}

	//-2-------------*3--------------
	
		function grow_wheat2() {
			if (your_wheat >= 1) {
				if (your_money >= 89) {
					your_wheat -= 1;
					your_money -= 89;
					your_wheat += 3;
					your_xp += 18;
					document.getElementById("your_xp").innerHTML = your_xp + " xp";
					document.getElementById("your_wheat").innerHTML = "Búzád: " + your_wheat;
					document.getElementById("your_money").innerHTML = "£" + your_money;
				}
				else{
					alert('Nincs elég pénzed!')
				}
			}
			else{
				alert('Nincs elég növényed!')
				}
			}
		
		function grow_rice2() {
			if (your_rice >= 1) {
				if (your_money >= 84) {
					your_rice -= 1;
					your_money -= 84;
					your_rice += 3;
					your_xp += 17;
					document.getElementById("your_xp").innerHTML = your_xp + " xp";
					document.getElementById("your_rice").innerHTML = "Rizsed: " + your_rice;
					document.getElementById("your_money").innerHTML = "£" + your_money;
				}
				else{
					alert('Nincs elég pénzed!')
				}
			}
			else{
				alert('Nincs elég növényed!')
			}
		}
		
		function grow_corn2() {
			if (your_corn >= 1) {
				if (your_money >= 165) {
					your_corn -= 1;
					your_money -= 165;
					your_corn += 3;
					your_xp += 33;
					document.getElementById("your_xp").innerHTML = your_xp + " xp";
					document.getElementById("your_corn").innerHTML = "Kukoricád: " + your_corn;
					document.getElementById("your_money").innerHTML = "£" + your_money;
				}
				else{
					alert('Nincs elég pénzed!')
				}
			}
			else{
				alert('Nincs elég növényed!')
			}
		}
		
		function grow_carrot2() {
			if (your_carrot >= 1) {
				if (your_money >= 249) {
					your_carrot -= 1;
					your_money -= 249;
					your_carrot += 3;
					your_xp += 50;
					document.getElementById("your_xp").innerHTML = your_xp + " xp";
					document.getElementById("your_carrot").innerHTML = "Répád: " + your_carrot;
					document.getElementById("your_money").innerHTML = "£" + your_money;
				}
				else{
					alert('Nincs elég pénzed!')
				}
			}
			else{
				alert('Nincs elég növényed!')
			}
		}
		
	//-3-------------*4--------------
		
		function grow_wheat3() {
			if (your_wheat >= 1) {
				if (your_money >= 133) {
					your_wheat -= 1;
					your_money -= 133;
					your_wheat += 4;
					your_xp += 27;
					document.getElementById("your_xp").innerHTML = your_xp + " xp";
					document.getElementById("your_wheat").innerHTML = "Búzád: " + your_wheat;
					document.getElementById("your_money").innerHTML = "£" + your_money;
				}
				else{
					alert('Nincs elég pénzed')
				}
			}
			else{
				alert('Nincs növényed!')
			}
		}
		
		function grow_rice3() {
			if (your_rice >= 1) {
				if (your_money >= 126) {
					your_rice -= 1;
					your_money -= 126;
					your_rice += 4;
					your_xp += 25;
					document.getElementById("your_xp").innerHTML = your_xp + " xp";
					document.getElementById("your_rice").innerHTML = "Rizsed: " + your_rice;
					document.getElementById("your_money").innerHTML = "£" + your_money;
				}
				else{
					alert('Nincs elég pénzed')
				}
			}
			else{
				alert('Nincs növényed!')
			}
		}
		
		function grow_corn3() {
			if (your_corn >= 1) {
				if (your_money >= 248) {
					your_corn -= 1;
					your_money -= 248;
					your_corn += 4;
					your_xp += 50;
					document.getElementById("your_xp").innerHTML = your_xp + " xp";
					document.getElementById("your_corn").innerHTML = "Kukoricád: " + your_corn;
					document.getElementById("your_money").innerHTML = "£" + your_money;
				}
				else{
					alert('Nincs elég pénzed')
				}
			}
			else{
				alert('Nincs növényed!')
			}
		}
		
		function grow_carrot3() {
			if (your_carrot >= 1) {
				if (your_money >= 373) {
					your_carrot -= 1;
					your_money -= 373;
					your_carrot += 4;
					your_xp += 75;
					document.getElementById("your_xp").innerHTML = your_xp + " xp";
					document.getElementById("your_carrot").innerHTML = "Répád: " + your_carrot;
					document.getElementById("your_money").innerHTML = "£" + your_money;
				}
				else{
					alert('Nincs elég pénzed')
				}
			}
			else{
				alert('Nincs növényed!')
			}
		}
		
	//-4-------------*5--------------
		
		function grow_wheat4() {
			if (your_wheat >= 1) {
				if (your_money >= 178) {
					your_wheat -= 1;
					your_money -= 178;
					your_wheat += 5;
					your_xp += 36;
					document.getElementById("your_xp").innerHTML = your_xp + " xp";
					document.getElementById("your_wheat").innerHTML = "Búzád: " + your_wheat;
					document.getElementById("your_money").innerHTML = "£" + your_money;
				}
				else{
					alert('Nincs elég pénzed!')
				}
			}
			else{
				alert('Nincs növényed!')
			}
		}
		
		function grow_rice4() {
			if (your_rice >= 1) {
				if (your_money >= 168) {
					your_rice -= 1;
					your_money -= 168;
					your_rice += 5;
					your_xp += 34;
					document.getElementById("your_xp").innerHTML = your_xp + " xp";
					document.getElementById("your_rice").innerHTML = "Rizsed: " + your_rice;
					document.getElementById("your_money").innerHTML = "£" + your_money;
				}
				else{
					alert('Nincs elég pénzed!')
				}
			}
			else{
				alert('Nincs növényed!')
			}
		}
		
		function grow_corn4() {
			if (your_corn >= 1) {
				if (your_money >= 330) {
					your_corn -= 1;
					your_money -= 330;
					your_corn += 5;
					your_xp += 66;
					document.getElementById("your_xp").innerHTML = your_xp + " xp";
					document.getElementById("your_corn").innerHTML = "Rizsed: " + your_corn;
					document.getElementById("your_money").innerHTML = "£" + your_money;
				}
				else{
					alert('Nincs elég pénzed!')
				}
			}
			else{
				alert('Nincs növényed!')
			}
		}
		
				function grow_carrot4() {
					if (your_carrot >= 1) {
				if (your_money >= 498) {
					your_carrot -= 1;
					your_money -= 498;
					your_carrot += 5;
					your_xp += 100;
					document.getElementById("your_xp").innerHTML = your_xp + " xp";
					document.getElementById("your_carrot").innerHTML = "Rizsed: " + your_carrot;
					document.getElementById("your_money").innerHTML = "£" + your_money;
				}
				else{
					alert('Nincs elég pénzed!')
				}
			}
			else{
				alert('Nincs növényed!')
			}
		}

//----------------------------------ANIMALS-------------------------------------

	//------------------------------MEAT-----------------------------
		function meat_pig() {
			if (your_money >= 635) {
			your_money -= 635;
			your_pork += 5;
			your_xp += 127;
			document.getElementById("your_xp").innerHTML = your_xp + " xp";
			document.getElementById("your_pork").innerHTML = "Sertéshúsod: " + your_pork;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			}
			else{
				alert('Nincs elég pénzed')
			}
		}

		function meat_cow() {
			if (your_money >= 1270) {
			your_money -= 1270;
			your_beef += 5;
			your_xp += 254;
			document.getElementById("your_xp").innerHTML = your_xp + " xp";
			document.getElementById("your_beef").innerHTML = "Marhahúsod: " + your_beef;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			}
			else{
				alert('Nincs elég pénzed')
			}
		}

		function meat_chicken() {
			if (your_money >= 381) {
			your_money -= 381;
			your_chicken_meat += 5;
			your_xp += 76;
			document.getElementById("your_xp").innerHTML = your_xp + " xp";
			document.getElementById("your_chicken_meat").innerHTML = "Csirkehúsod: " + your_chicken_meat;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			}
			else{
				alert('Nincs elég pénzed')
			}
		}

		function meat_sheep() {
			if (your_money >= 953) {
			your_money -= 953;
			your_mutton += 5;
			your_xp += 191;
			document.getElementById("your_xp").innerHTML = your_xp + " xp";
			document.getElementById("your_mutton").innerHTML = "Birkahúsod: " + your_mutton;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			}
			else{
				alert('Nincs elég pénzed')
			}
		}

	//----------------------MILK, EGG, WOOL, FUR---------------------

		function fur_pig() {
			if (your_money >= 38) {
			your_money -= 38;
			your_fur += 5;
			your_xp += 8;
			document.getElementById("your_xp").innerHTML = your_xp + " xp";
			document.getElementById("your_fur").innerHTML = "Szőröd: " + your_fur;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			}
			else{
				alert('Nincs elég pénzed')
			}
		}

		function milk_cow() {
			if (your_money >= 95) {
			your_money -= 95;
			your_milk += 5;
			your_xp += 19;
			document.getElementById("your_xp").innerHTML = your_xp + " xp";
			document.getElementById("your_milk").innerHTML = "Tejed: " + your_milk;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			}
			else{
				alert('Nincs elég pénzed')
			}
		}

		function egg_chicken() {
			if (your_money >= 25) {
			your_money -= 25;
			your_egg += 5;
			your_xp += 5;
			document.getElementById("your_xp").innerHTML = your_xp + " xp";
			document.getElementById("your_egg").innerHTML = "Tojásod: " + your_egg;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			}
			else{
				alert('Nincs elég pénzed')
			}
		}

		function wool_sheep() {
			if (your_money >= 102) {
			your_money -= 102;
			your_wool += 5;
			your_xp += 20;
			document.getElementById("your_xp").innerHTML = your_xp + " xp";
			document.getElementById("your_wool").innerHTML = "Gyapjúd: " + your_wool;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			}
			else{
				alert('Nincs elég pénzed')
			}
		}

	//------------------------LEATHER, FEATHER-----------------------

		function leather_cow() {
			if (your_money >= 191) {
			your_money -= 191;
			your_leather += 5;
			your_xp += 38;
			document.getElementById("your_xp").innerHTML = your_xp + " xp";
			document.getElementById("your_leather").innerHTML = "Bőröd: " + your_leather;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			}
			else{
				alert('Nincs elég pénzed')
			}
		}

		function feather_chicken() {
			if (your_money >= 32) {
			your_money -= 32;
			your_feather += 5;
			your_xp += 6;
			document.getElementById("your_xp").innerHTML = your_xp + " xp";
			document.getElementById("your_feather").innerHTML = "Tollad: " + your_feather;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			}
			else{
				alert('Nincs elég pénzed')
			}
		}

//---------------------------------FRUITS---------------------------------------

	function apple_tree() {
		if (your_money >= 127) {
		your_money -= 127;
		your_apple += 5;
		your_xp += 25;
		document.getElementById("your_xp").innerHTML = your_xp + " xp";
		document.getElementById("your_apple").innerHTML = "Almád: " + your_apple;
		document.getElementById("your_money").innerHTML = "£" + your_money;
		}
		else{
			alert('Nincs elég pénzed')
		}
	}

	function wood_tree() {
		if (your_money >= 1270) {
		your_money -= 1270;
		your_wood += 5;
		your_xp += 254;
		document.getElementById("your_xp").innerHTML = your_xp + " xp";
		document.getElementById("your_wood").innerHTML = "Fád: " + your_wood;
		document.getElementById("your_money").innerHTML = "£" + your_money;
		}
		else{
			alert('Nincs elég pénzed')
		}
	}

	function lemon_tree() {
		if (your_money >= 381) {
		your_money -= 381;
		your_lemon += 5;
		your_xp += 76;
		document.getElementById("your_xp").innerHTML = your_xp + " xp";
		document.getElementById("your_lemon").innerHTML = "Citromod: " + your_lemon;
		document.getElementById("your_money").innerHTML = "£" + your_money;
		}
		else{
			alert('Nincs elég pénzed')
		}
	}

	function walnut_tree() {
		if (your_money >= 953) {
		your_money -= 953;
		your_walnut += 5;
		your_xp += 191;
		document.getElementById("your_xp").innerHTML = your_xp + " xp";
		document.getElementById("your_walnut").innerHTML = "Almád: " + your_walnut;
		document.getElementById("your_money").innerHTML = "£" + your_money;
		}
		else{
			alert('Nincs elég pénzed')
		}
	}

//---------------------------------PAGES----------------------------------------

	function shop() {
		document.getElementById("shop").style.display = "block";
		document.getElementById("main").style.display = "none";
		document.getElementById("field").style.display = "none";
		document.getElementById("storage").style.display = "none";
		document.getElementById("kitchen").style.display = "none";
		document.getElementById("lea").style.display = "none";
		document.getElementById("fruity").style.display = "none";
	}
	
	function main() {
		document.getElementById("main").style.display = "block";
		document.getElementById("shop").style.display = "none";
		document.getElementById("field").style.display = "none";
		document.getElementById("storage").style.display = "none";
		document.getElementById("kitchen").style.display = "none";
		document.getElementById("lea").style.display = "none";
		document.getElementById("fruity").style.display = "none";
	}
	
	function field() {
		document.getElementById("field").style.display = "block";
		document.getElementById("main").style.display = "none";
		document.getElementById("shop").style.display = "none";
		document.getElementById("storage").style.display = "none";
		document.getElementById("kitchen").style.display = "none";
		document.getElementById("lea").style.display = "none";
		document.getElementById("fruity").style.display = "none";
	}
	
	function kitchen() {
		document.getElementById("kitchen").style.display = "block";
		document.getElementById("main").style.display = "none";
		document.getElementById("shop").style.display = "none";
		document.getElementById("field").style.display = "none";
		document.getElementById("storage").style.display = "none";
		document.getElementById("lea").style.display = "none";
		document.getElementById("fruity").style.display = "none";
	}

	function storage() {
		document.getElementById("storage").style.display = "block";
		document.getElementById("main").style.display = "none";
		document.getElementById("shop").style.display = "none";
		document.getElementById("field").style.display = "none";
		document.getElementById("kitchen").style.display = "none";
		document.getElementById("lea").style.display = "none";
		document.getElementById("fruity").style.display = "none";
	}
	
	function lea() {
		document.getElementById("lea").style.display = "block";
		document.getElementById("main").style.display = "none";
		document.getElementById("shop").style.display = "none";
		document.getElementById("field").style.display = "none";
		document.getElementById("kitchen").style.display = "none";
		document.getElementById("storage").style.display = "none";
		document.getElementById("fruity").style.display = "none";
	}
	
	function fruity() {
		document.getElementById("fruity").style.display = "block";
		document.getElementById("main").style.display = "none";
		document.getElementById("shop").style.display = "none";
		document.getElementById("field").style.display = "none";
		document.getElementById("kitchen").style.display = "none";
		document.getElementById("storage").style.display = "none";
		document.getElementById("lea").style.display = "none";
	}
