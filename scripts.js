//----------------------------------BASIC------------------------------------

	var your_money = 10000;
	var your_xp = 0;
	var your_level = 0;

	document.getElementById("your_money").innerHTML = "£" + your_money;
	document.getElementById("your_xp").innerHTML =  your_xp + " xp";
	document.getElementById("your_level").innerHTML = your_level + "."; 

//----------------------------------STORAGE-----------------------------------

	//-------------------------INGREDIENTS-----------------------
			var your_wheat = 0,
			your_rice = 0,
			your_corn = 0,
			your_carrot = 0,
			your_water = 0,
			your_milk = 0,
			your_sourcream= 0,
			your_egg = 0,
			your_flour = 0,
			your_butter = 0,
			your_oil = 0,
			your_cheese = 0,
			your_metal = 0,
			your_spice = 0,
			your_pork = 0,
			your_beef = 0,
			your_chicken_meat = 0,
			your_mutton = 0,
			your_yeast = 0,
			your_fire = 0,
			your_leather = 0,
			your_feather = 0,
			your_wool = 0,
			your_fur = 0,
			your_apple = 0,
			your_wood = 0,
			your_lemon = 0,
			your_walnut = 0;
			your_sausage = 0;
			your_hurka = 0;
			your_bread = 0;
			your_cornflout = 0;
			your_hominy = 0;
			your_rice_pudding = 0;
			your_scrambled_egg = 0;
			your_brush = 0;
			your_quill = 0;
			your_hat = 0;
			your_coat = 0;
			your_shoes = 0;
			your_flask = 0;
			your_saddle = 0;
			your_whip = 0;
			your_sponge_cake = 0;
			your_lemon_cake = 0;
			your_lemon_cream = 0;
			your_fried_pork = 0;
			your_fried_beef = 0;
			your_fried_chicken = 0;
			your_fried_mutton = 0;
			your_chesse_scone = 0;
			your_sourcream_scone = 0;

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
		
		document.getElementById("your_xp").innerHTML = your_xp + " xp";
		document.getElementById("your_level").innerHTML = your_level + ".";
	}

//----------------------------------SHOP----------------------------------------
	function shopBuy() {
		document.getElementById("shop_buy").style.display = "block";
		document.getElementById("shop_sell").style.display = "none";
	}
	function shopSell() {
		document.getElementById("shop_sell").style.display = "block";
		document.getElementById("shop_buy").style.display = "none";
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
	
		function buy_pork() {
			if (your_money >= 152) {
			your_pork += 1;
			your_money -= 152;
			document.getElementById("your_pork").innerHTML = "Sertéshúsod: " + your_pork;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			}
			else{
				alert('Nincs elég pénzed')
			}
		}

		function buy_fur() {
			if (your_money >= 13) {
			your_fur += 1;
			your_money -= 13;
			document.getElementById("your_fur").innerHTML = "Szőröd: " + your_fur;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			}
			else{
				alert('Nincs elég pénzed')
			}
		}

		function buy_leather() {
			if (your_money >= 43) {
			your_leather += 1;
			your_money -= 43;
			document.getElementById("your_leather").innerHTML = "Bőröd: " + your_leather;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			}
			else{
				alert('Nincs elég pénzed')
			}
		}

		function buy_beef() {
			if (your_money >= 267) {
			your_beef += 1;
			your_money -= 267;
			document.getElementById("your_beef").innerHTML = "Marhahúsod: " + your_beef;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			}
			else{
				alert('Nincs elég pénzed')
			}
		}

		function buy_milk() {
			if (your_money >= 23) {
			your_milk += 1;
			your_money -= 23;
			document.getElementById("your_milk").innerHTML = "Tejed: " + your_milk;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			}
			else{
				alert('Nincs elég pénzed')
			}
		}

		function buy_chicken_meat() {
			if (your_money >= 81) {
			your_chicken_meat += 1;
			your_money -= 81;
			document.getElementById("your_chicken_meat").innerHTML = "Csirkehúsod: " + your_chicken_meat;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			}
			else{
				alert('Nincs elég pénzed')
			}
		}
		function buy_egg() {
			if (your_money >= 6) {
			your_egg += 1;
			your_money -= 6;
			document.getElementById("your_egg").innerHTML = "Tojásod: " + your_egg;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			}
			else{
				alert('Nincs elég pénzed')
			}
		}
		function buy_feather() {
			if (your_money >= 9) {
			your_feather += 1;
			your_money -= 9;
			document.getElementById("your_feather").innerHTML = "Tollad: " + your_feather;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			}
			else{
				alert('Nincs elég pénzed')
			}
		}
		function buy_mutton() {
			if (your_money >= 254) {
			your_mutton += 1;
			your_money -= 254;
			document.getElementById("your_mutton").innerHTML = "Birkahúsod: " + your_mutton;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			}
			else{
				alert('Nincs elég pénzed')
			}
		}
		function buy_wool() {
			if (your_money >= 25) {
			your_wool += 1;
			your_money -= 25;
			document.getElementById("your_wool").innerHTML = "Gyapjúd: " + your_wool;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			}
			else{
				alert('Nincs elég pénzed')
			}
		}
		function buy_apple() {
			if (your_money >= 28) {
			your_apple += 1;
			your_money -= 28;
			document.getElementById("your_apple").innerHTML = "Almád: " + your_apple;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			}
			else{
				alert('Nincs elég pénzed')
			}
		}
		function buy_wood() {
			if (your_money >= 318) {
			your_wood += 1;
			your_money -= 318;
			document.getElementById("your_wood").innerHTML = "Fád: " + your_wood;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			}
			else{
				alert('Nincs elég pénzed')
			}
		}
		function buy_lemon() {
			if (your_money >= 81) {
			your_lemon += 1;
			your_money -= 81;
			document.getElementById("your_lemon").innerHTML = "Citromod: " + your_lemon;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			}
			else{
				alert('Nincs elég pénzed')
			}
		}
		function buy_walnut() {
			if (your_money >= 203) {
			your_walnut += 1;
			your_money -= 203;
			document.getElementById("your_walnut").innerHTML = "Szőröd: " + your_walnut;
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
				alert('Nincs elég Árud!')
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
				alert('Nincs elég Árud!')
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
				alert('Nincs elég Árud!')
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
				alert('Nincs elég Árud!')
			}
		}
		function sell_pork() {
			if (your_pork >= 1) {
			your_pork -= 1;
			your_money += 152;
			document.getElementById("your_pork").innerHTML = "Sertéshúsod: " + your_pork;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			}
			else{
				alert('Nincs elég Árud!')
			}
		}

		function sell_fur() {
			if (your_fur >= 1) {
			your_fur -= 1;
			your_money += 13;
			document.getElementById("your_fur").innerHTML = "Szőröd: " + your_fur;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			}
			else{
				alert('Nincs elég Árud!')
			}
		}

		function sell_leather() {
			if (your_leather >= 1) {
			your_leather -= 1;
			your_money += 43;
			document.getElementById("your_leather").innerHTML = "Bőröd: " + your_leather;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			}
			else{
				alert('Nincs elég Árud!')
			}
		}

		function sell_beef() {
			if (your_beef >= 1) {
			your_beef -= 1;
			your_money += 267;
			document.getElementById("your_beef").innerHTML = "Marhahúsod: " + your_beef;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			}
			else{
				alert('Nincs elég Árud!')
			}
		}

		function sell_milk() {
			if (your_milk >= 1) {
			your_milk -= 1;
			your_money += 23;
			document.getElementById("your_milk").innerHTML = "Tejed: " + your_milk;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			}
			else{
				alert('Nincs elég Árud!')
			}
		}

		function sell_chicken_meat() {
			if (your_chicken_meat >= 1) {
			your_chicken_meat -= 1;
			your_money += 81;
			document.getElementById("your_chicken_meat").innerHTML = "Csirkehúsod: " + your_chicken_meat;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			}
			else{
				alert('Nincs elég Árud!')
			}
		}
		function sell_egg() {
			if (your_egg >= 1) {
			your_egg -= 1;
			your_money += 6;
			document.getElementById("your_egg").innerHTML = "Tojásod: " + your_egg;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			}
			else{
				alert('Nincs elég Árud!')
			}
		}
		function sell_feather() {
			if (your_feather >= 1) {
			your_feather -= 1;
			your_money += 9;
			document.getElementById("your_feather").innerHTML = "Tollad: " + your_feather;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			}
			else{
				alert('Nincs elég Árud!')
			}
		}
		function sell_mutton() {
			if (your_mutton >= 1) {
			your_mutton -= 1;
			your_money += 254;
			document.getElementById("your_mutton").innerHTML = "Birkahúsod: " + your_mutton;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			}
			else{
				alert('Nincs elég Árud!')
			}
		}
		function sell_wool() {
			if (your_wool >= 1) {
			your_wool -= 1;
			your_money += 21;
			document.getElementById("your_wool").innerHTML = "Gyapjúd: " + your_wool;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			}
			else{
				alert('Nincs elég Árud!')
			}
		}
		function sell_apple() {
			if (your_apple >= 1) {
			your_apple -= 1;
			your_money += 28;
			document.getElementById("your_apple").innerHTML = "Almád: " + your_apple;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			}
			else{
				alert('Nincs elég Árud!')
			}
		}
		function sell_wood() {
			if (your_wood >= 1) {
			your_wood -= 1;
			your_money += 318;
			document.getElementById("your_wood").innerHTML = "Fád: " + your_wood;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			}
			else{
				alert('Nincs elég Árud!')
			}
		}
		function sell_walnut() {
			if (your_walnut >= 1) {
			your_walnut -= 1;
			your_money += 203;
			document.getElementById("your_walnut").innerHTML = "Szőröd: " + your_walnut;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			}
			else{
				alert('Nincs elég Árud!')
			}
		}

//----------------------------------CELLAR--------------------------------------

	function makeFood() {
		document.getElementById("make_food").style.display = "block";
		document.getElementById("make_object").style.display = "none";
	}
	function makeObject() {
		document.getElementById("make_object").style.display = "block";
		document.getElementById("make_food").style.display = "none";
	}
	//------------------------------MAKING_FOOD--------------------------------------

		function make_cheese() {
			if (your_money >= 13) {
				if (your_fire >= 1) {
					if (your_milk >= 4) {
						your_cheese += 1;
						your_money -= 13;
						your_milk -= 4;
						your_fire -= 1;
						your_xp += 19;
						document.getElementById("your_cheese").innerHTML = "Sajtod: " + your_cheese;
						document.getElementById("your_fire").innerHTML = "Tüzed: " + your_fire;
						document.getElementById("your_milk").innerHTML = "Tejed: " + your_milk;
						document.getElementById("your_money").innerHTML = "£" + your_money;
						document.getElementById("your_xp").innerHTML = your_xp + "xp";
					}
					else{
						alert('Nincs elég tejed!')
					}
				}
				else{
					alert("Nincs elég tüzed!")
				}
			}
			else{
				alert('Nincs elég pénzed!')
			}
		}

		function make_butter() {
			if (your_money >= 13) {
				if (your_fire >= 1) {
					if (your_milk >= 2) {
						your_butter += 1;
						your_money -= 13;
						your_milk -= 2;
						your_fire -= 1;
						your_xp += 7;
						document.getElementById("your_butter").innerHTML = "Vajad: " + your_butter;
						document.getElementById("your_fire").innerHTML = "Tüzed: " + your_fire;
						document.getElementById("your_milk").innerHTML = "Tejed: " + your_milk;
						document.getElementById("your_money").innerHTML = "£" + your_money;
						document.getElementById("your_xp").innerHTML = your_xp + "xp";
					}
					else{
						alert('Nincs elég tejed!')
					}
				}
				else{
					alert("Nincs elég tüzed!")
				}	
			}
			else{
				alert('Nincs elég pénzed!')
			}
		}

		function make_sourcream() {
			if (your_money >= 13) {
				if (your_fire >= 1) {
					if (your_milk >= 3) {
						your_sourcream += 1;
						your_money -= 13;
						your_milk -= 3;
						your_fire -= 1;
						your_xp += 16;
						document.getElementById("your_sourcream").innerHTML = "Tejfölöd: " + your_sourcream;
						document.getElementById("your_fire").innerHTML = "Tüzed: " + your_fire;
						document.getElementById("your_milk").innerHTML = "Tejed: " + your_milk;
						document.getElementById("your_money").innerHTML = "£" + your_money;
						document.getElementById("your_xp").innerHTML = your_xp + "xp";
					}
					else{
						alert('Nincs elég tejed!')
					}
				}
				else{
					alert("Nincs elég tüzed!")
				}
			}
			else{
				alert('Nincs elég pénzed!')
			}
		}
		function make_sausage() {
			if (your_money >= 13) {
				if (your_fire >= 2) {
					if (your_pork >= 3) {
						if (your_spice >= 1) {
							your_sausage += 1;
							your_money -= 13;
							your_pork -= 3;
							your_spice -= 1;
							your_fire -= 2;
							your_xp += 16;
							document.getElementById("your_sausage").innerHTML = "Kolbászod: " + your_sausage;
							document.getElementById("your_fire").innerHTML = "Tüzed: " + your_fire;
							document.getElementById("your_pork").innerHTML = "Disznóhúsod: " + your_pork;
							document.getElementById("your_spice").innerHTML = "fűszered: " + your_spice;
							document.getElementById("your_money").innerHTML = "£" + your_money;
							document.getElementById("your_xp").innerHTML = your_xp + "xp";
						}
						else{
							alert("Nincs elég fűszered!")
						}
					}
					else{
						alert('Nincs elég tejed!')
					}
				}
				else{
					alert("Nincs elég tüzed!")
				}
			}
			else{
				alert('Nincs elég pénzed!')
			}
		}
		function make_hurka() {
			if (your_money >= 13) {
				if (your_fire >= 2) {
					if (your_pork >= 3) {
						if (your_spice >= 1) {
							if (your_rice >= 2) {
								your_hurka += 1;
								your_money -= 13;
								your_pork -= 2;
								your_spice -= 1;
								your_rice -= 2;
								your_fire -= 2;
								your_xp += 16;
								document.getElementById("your_sausage").innerHTML = "Kolbászod: " + your_sausage;
								document.getElementById("your_fire").innerHTML = "Tüzed: " + your_fire;
								document.getElementById("your_pork").innerHTML = "Disznóhúsod: " + your_pork;
								document.getElementById("your_spice").innerHTML = "Fűszered: " + your_spice;
								document.getElementById("your_rice").innerHTML = "Rizsed: " + your_rice;
								document.getElementById("your_money").innerHTML = "£" + your_money;
								document.getElementById("your_xp").innerHTML = your_xp + "xp";
							}
							else{
								alert("Nincs elég Rizsed!")
							}
						}
						else{
							alert("Nincs elég fűszered!")
						}
					}
					else{
						alert('Nincs elég tejed!')
					}
				}
				else{
					alert("Nincs elég tüzed!")
				}
			}
			else{
				alert('Nincs elég pénzed!')
			}
		}
		function make_flour() {
			if (your_money >= 13) {
				if (your_fire >= 1) {
					if (your_wheat >= 2) {
						your_flour += 1;
						your_money -= 13;
						your_wheat -= 2;
						your_fire -= 1;
						your_xp += 16;
						document.getElementById("your_flour").innerHTML = "Liszted: " + your_flour;
						document.getElementById("your_fire").innerHTML = "Tüzed: " + your_fire;
						document.getElementById("your_wheat").innerHTML = "Búzád: " + your_wheat;
						document.getElementById("your_money").innerHTML = "£" + your_money;
						document.getElementById("your_xp").innerHTML = your_xp + "xp";
					}
					else{
						alert('Nincs elég tejed!')
					}
				}
				else{
					alert("Nincs elég tüzed!")
				}
			}
			else{
				alert('Nincs elég pénzed!')
			}
		}
		function make_cornflour() {
			if (your_money >= 13) {
				if (your_fire >= 1) {
					if (your_corn >= 1) {
						your_cornflour += 1;
						your_money -= 13;
						your_corn -= 1;
						your_fire -= 1;
						your_xp += 16;
						document.getElementById("your_cornflour").innerHTML = "Kukoricaliszted: " + your_flour;
						document.getElementById("your_fire").innerHTML = "Tüzed: " + your_fire;
						document.getElementById("your_corn").innerHTML = "Kukoricád: " + your_corn;
						document.getElementById("your_money").innerHTML = "£" + your_money;
						document.getElementById("your_xp").innerHTML = your_xp + "xp";
					}
					else{
						alert('Nincs elég tejed!')
					}
				}
				else{
					alert("Nincs elég tüzed!")
				}
			}
			else{
				alert('Nincs elég pénzed!')
			}
		}


//----------------------------------GROWING-------------------------------------

	//-1--------------*2--------------
		var can_Grow = true;

		//make grow great again c:
		function start_Timer_After_Growing(){
			can_Grow = false;
			setTimeout(can_grow_Again, 30000);
		}
		
		function can_grow_Again(){
			can_Grow = true;
			alert("Már újra tudsz ültetni");
		}

		function grow_wheat1() {
			if(can_Grow){
				if (your_wheat >= 1) {
					if (your_money >= 44) {
						your_wheat -= 1;
						your_money -= 44;
						your_wheat += 2;
						your_xp += 9;
						document.getElementById("your_wheat").innerHTML = "Búzád: " + your_wheat;
						document.getElementById("your_money").innerHTML = "£" + your_money;
						document.getElementById("your_xp").innerHTML = your_xp + " xp";		
						start_Timer_After_Growing();
					}
					else{
						alert('Nincs elég pénzed!')
					}
				}
				else{
					alert('Nincs növényed!')
				}
			}
			else{
				alert("Légy türelmes még nem ültethestsz!");
			}
	}

		function grow_rice1() {
			if(can_Grow){
				if (your_rice >= 1) {
					if (your_money >= 42) {
						your_rice -= 1;
						your_money -= 42;
						your_rice += 2;
						your_xp += 8;
						document.getElementById("your_xp").innerHTML = your_xp + " xp";
						document.getElementById("your_rice").innerHTML = "Rizsed: " + your_rice;
						document.getElementById("your_money").innerHTML = "£" + your_money;
						start_Timer_After_Growing();
					}
					else{
						alert('Nincs elég pénzed!')
					}
				}
				else{
					alert('Nincs növényed!')
				}
			}
			else{
				alert("Légy türelmes még nem ültethestsz!");
			}
		}

		function grow_corn1() {
			if(can_Grow){
				if (your_corn >= 1) {
					if (your_money >= 83) {
						your_corn -= 1;
						your_money -= 83;
						your_corn += 2;
						your_xp += 17;
						document.getElementById("your_xp").innerHTML = your_xp + " xp";
						document.getElementById("your_corn").innerHTML = "Kukoricád: " + your_corn;
						document.getElementById("your_money").innerHTML = "£" + your_money;
						start_Timer_After_Growing();
					}
					else{
						alert('Nincs elég pénzed!')
					}
				}
				else{
					alert('Nincs növényed!')
				}
			}
			else{
				alert("Légy türelmes még nem ültethestsz!");
			}
		}

		function grow_carrot1() {
			if(can_Grow){
				if (your_carrot >= 1) {
					if (your_money >= 124) {
						your_carrot -= 1;
						your_money -= 124;
						your_carrot += 2;
						your_xp += 25;
						document.getElementById("your_xp").innerHTML = your_xp + " xp";
						document.getElementById("your_carrot").innerHTML = "Répád: " + your_carrot;
						document.getElementById("your_money").innerHTML = "£" + your_money;
						start_Timer_After_Growing();
					}
					else{
						alert('Nincs elég pénzed!')
					}
				}
				else{
					alert('Nincs növényed!')
				}
			}
			else{
				alert("Légy türelmes még nem ültethestsz!");
			}
		}

	//-2-------------*3--------------
	
		function grow_wheat2() {
			if(can_Grow){
				if (your_wheat >= 1) {
					if (your_money >= 89) {
						your_wheat -= 1;
						your_money -= 89;
						your_wheat += 3;
						your_xp += 18;
						document.getElementById("your_xp").innerHTML = your_xp + " xp";
						document.getElementById("your_wheat").innerHTML = "Búzád: " + your_wheat;
						document.getElementById("your_money").innerHTML = "£" + your_money;
						start_Timer_After_Growing();
					}
					else{
						alert('Nincs elég pénzed!')
					}
				}
				else{
					alert('Nincs elég növényed!')
					}
				}
			else{
				alert("Légy türelmes még nem ültethestsz!");
			}
		}
		
		function grow_rice2() {
			if(can_Grow){	
				if (your_rice >= 1) {
					if (your_money >= 84) {
						your_rice -= 1;
						your_money -= 84;
						your_rice += 3;
						your_xp += 17;
						document.getElementById("your_xp").innerHTML = your_xp + " xp";
						document.getElementById("your_rice").innerHTML = "Rizsed: " + your_rice;
						document.getElementById("your_money").innerHTML = "£" + your_money;
						start_Timer_After_Growing();
					}
					else{
						alert('Nincs elég pénzed!')
					}
				}
				else{
					alert('Nincs elég növényed!')
				}
			}
			else{
				alert("Légy türelmes még nem ültethestsz!");
			}
		}
		
		function grow_corn2() {
			if(can_Grow){	
				if (your_corn >= 1) {
					if (your_money >= 165) {
						your_corn -= 1;
						your_money -= 165;
						your_corn += 3;
						your_xp += 33;
						document.getElementById("your_xp").innerHTML = your_xp + " xp";
						document.getElementById("your_corn").innerHTML = "Kukoricád: " + your_corn;
						document.getElementById("your_money").innerHTML = "£" + your_money;
						start_Timer_After_Growing();
					}
					else{
						alert('Nincs elég pénzed!')
					}
				}
				else{
					alert('Nincs elég növényed!')
				}
			}
			else{
				alert("Légy türelmes még nem ültethestsz!");
			}
		}
		
		function grow_carrot2() {
			if(can_Grow){	
				if (your_carrot >= 1) {
					if (your_money >= 249) {
						your_carrot -= 1;
						your_money -= 249;
						your_carrot += 3;
						your_xp += 50;
						document.getElementById("your_xp").innerHTML = your_xp + " xp";
						document.getElementById("your_carrot").innerHTML = "Répád: " + your_carrot;
						document.getElementById("your_money").innerHTML = "£" + your_money;
						start_Timer_After_Growing();
					}
					else{
						alert('Nincs elég pénzed!')
					}
				}
				else{
					alert('Nincs elég növényed!')
				}
			}
			else{
				alert("Légy türelmes még nem ültethestsz!");

			}
		}
		
	//-3-------------*4--------------
		
		function grow_wheat3() {
			if(can_Grow){	
				if (your_wheat >= 1) {
					if (your_money >= 133) {
						your_wheat -= 1;
						your_money -= 133;
						your_wheat += 4;
						your_xp += 27;
						document.getElementById("your_xp").innerHTML = your_xp + " xp";
						document.getElementById("your_wheat").innerHTML = "Búzád: " + your_wheat;
						document.getElementById("your_money").innerHTML = "£" + your_money;
						start_Timer_After_Growing();
					}
					else{
						alert('Nincs elég pénzed')
					}
				}
				else{
					alert('Nincs növényed!')
				}
			}
			else{
				alert("Légy türelmes még nem ültethestsz!");
			}
		}
		
		function grow_rice3() {
			if(can_Grow){	
				if (your_rice >= 1) {
					if (your_money >= 126) {
						your_rice -= 1;
						your_money -= 126;
						your_rice += 4;
						your_xp += 25;
						document.getElementById("your_xp").innerHTML = your_xp + " xp";
						document.getElementById("your_rice").innerHTML = "Rizsed: " + your_rice;
						document.getElementById("your_money").innerHTML = "£" + your_money;
						start_Timer_After_Growing();
					}
					else{
						alert('Nincs elég pénzed')
					}
				}
				else{
					alert('Nincs növényed!')
				}
			}
			else{
				alert("Légy türelmes még nem ültethestsz!");
			}
		}
		
		function grow_corn3() {
			if(can_Grow){	
				if (your_corn >= 1) {
					if (your_money >= 248) {
						your_corn -= 1;
						your_money -= 248;
						your_corn += 4;
						your_xp += 50;
						document.getElementById("your_xp").innerHTML = your_xp + " xp";
						document.getElementById("your_corn").innerHTML = "Kukoricád: " + your_corn;
						document.getElementById("your_money").innerHTML = "£" + your_money;
						start_Timer_After_Growing();
					}
					else{
						alert('Nincs elég pénzed')
					}
				}
				else{
					alert('Nincs növényed!')
				}
			}
			else{
				alert("Légy türelmes még nem ültethestsz!");
			}
		}
		
		function grow_carrot3() {
			if(can_Grow){	
				if (your_carrot >= 1) {
					if (your_money >= 373) {
						your_carrot -= 1;
						your_money -= 373;
						your_carrot += 4;
						your_xp += 75;
						document.getElementById("your_xp").innerHTML = your_xp + " xp";
						document.getElementById("your_carrot").innerHTML = "Répád: " + your_carrot;
						document.getElementById("your_money").innerHTML = "£" + your_money;
						start_Timer_After_Growing();
					}
					else{
						alert('Nincs elég pénzed')
					}
				}
				else{
					alert('Nincs növényed!')
				}
			}
			else{
				alert("Légy türelmes még nem ültethestsz!");
			}
		}
		
	//-4-------------*5--------------
		
		function grow_wheat4() {
			if(can_Grow){	
				if (your_wheat >= 1) {
					if (your_money >= 178) {
						your_wheat -= 1;
						your_money -= 178;
						your_wheat += 5;
						your_xp += 36;
						document.getElementById("your_xp").innerHTML = your_xp + " xp";
						document.getElementById("your_wheat").innerHTML = "Búzád: " + your_wheat;
						document.getElementById("your_money").innerHTML = "£" + your_money;
						start_Timer_After_Growing();
					}
					else{
						alert('Nincs elég pénzed!')
					}
				}
				else{
					alert('Nincs növényed!')
				}
			}
			else{
				alert("Légy türelmes még nem ültethestsz!");
			}
		}
		
		function grow_rice4() {
			if(can_Grow){	
				if (your_rice >= 1) {
					if (your_money >= 168) {
						your_rice -= 1;
						your_money -= 168;
						your_rice += 5;
						your_xp += 34;
						document.getElementById("your_xp").innerHTML = your_xp + " xp";
						document.getElementById("your_rice").innerHTML = "Rizsed: " + your_rice;
						document.getElementById("your_money").innerHTML = "£" + your_money;
						start_Timer_After_Growing();
					}
					else{
						alert('Nincs elég pénzed!')
					}
				}
				else{
					alert('Nincs növényed!')
				}
			}
			else{
				alert("Légy türelmes még nem ültethestsz!");
			}
		}
		
		function grow_corn4() {
			if(can_Grow){	
				if (your_corn >= 1) {
					if (your_money >= 330) {
						your_corn -= 1;
						your_money -= 330;
						your_corn += 5;
						your_xp += 66;
						document.getElementById("your_xp").innerHTML = your_xp + " xp";
						document.getElementById("your_corn").innerHTML = "Rizsed: " + your_corn;
						document.getElementById("your_money").innerHTML = "£" + your_money;
						start_Timer_After_Growing();
					}
					else{
						alert('Nincs elég pénzed!')
					}
				}
				else{
					alert('Nincs növényed!')
				}
			}
			else{
				alert("Légy türelmes még nem ültethestsz!");
			}
		}
		
		function grow_carrot4() {
			if(can_Grow){	
				if (your_carrot >= 1) {
					if (your_money >= 498) {
						your_carrot -= 1;
						your_money -= 498;
						your_carrot += 5;
						your_xp += 100;
						document.getElementById("your_xp").innerHTML = your_xp + " xp";
						document.getElementById("your_carrot").innerHTML = "Rizsed: " + your_carrot;
						document.getElementById("your_money").innerHTML = "£" + your_money;
						start_Timer_After_Growing();
					}
					else{
						alert('Nincs elég pénzed!')
					}
				}
				else{
					alert('Nincs növényed!')
				}
			}
			else{
				alert("Légy türelmes még nem ültethestsz!");
			}
		}

//----------------------------------ANIMALS-------------------------------------

	var can_Breed_pig = true;

		//make grow great again c:

	function start_Timer_After_Pig_Breeding(){
		alert("Elkezdtél disznót tenyészteni!");
		can_Breed_pig = false;
		setTimeout(can_breed_pig_Again, 60000);
	}
	
	function can_breed_pig_Again(){
		can_Breed_pig = true;
		alert("Már újra tudsz sertést tenyészteni!");
	}
	//---------------------------------
	var can_Breed_cow = true;

		//make grow great again c:

	function start_Timer_After_Cow_Breeding(){
		alert("Elkezdtél marhát tenyészteni!");
		can_Breed_cow = false;
		setTimeout(can_breed_cow_Again, 60000);
	}
	
	function can_breed_cow_Again(){
		can_Breed_cow = true;
		alert("Már újra tudsz marhát tenyészteni!");
	}

	//----------------------
	var can_Breed_chicken = true;
		//make grow great again c:
	function start_Timer_After_Chicken_Breeding(){
		alert("Elkezdtél csirkét tenyészteni!");
		can_Breed_chicken = false;
		setTimeout(can_breed_chicken_Again, 60000);
	}
	
	function can_breed_chicken_Again(){
		can_Breed_chicken = true;
		alert("Már újra tudsz csirkét tenyészteni!");
	}

	//----------------------
	var can_Breed_sheep = true;

		//make grow great again c:
	function start_Timer_After_Sheep_Breeding(){
		alert("Elkezdtél birkát tenyészteni!");
		can_Breed_sheep = false;
		setTimeout(can_breed_sheep_Again, 60000);
	}
	
	function can_breed_sheep_Again(){
		can_Breed_sheep = true;
		alert("Már újra tudsz birkát tenyészteni!");
	}

	//------------------------------MEAT-----------------------------

		function meat_pig() {
			if (can_Breed_pig) {
				if (your_money >= 635) {
				your_money -= 635;
				your_pork += 5;
				your_xp += 127;
				document.getElementById("your_xp").innerHTML = your_xp + " xp";
				document.getElementById("your_pork").innerHTML = "Sertéshúsod: " + your_pork;
				document.getElementById("your_money").innerHTML = "£" + your_money;
				start_Timer_After_Pig_Breeding();
				}
				else{
					alert('Nincs elég pénzed')
				}
			}
			else{
				alert("Légy türelmes még nem termelhetsz!");
			}
		}

		function meat_cow() {
			if (can_Breed_cow) {
				if (your_money >= 1270) {
				your_money -= 1270;
				your_beef += 5;
				your_xp += 254;
				document.getElementById("your_xp").innerHTML = your_xp + " xp";
				document.getElementById("your_beef").innerHTML = "Marhahúsod: " + your_beef;
				document.getElementById("your_money").innerHTML = "£" + your_money;
				start_Timer_After_Cow_Breeding();
				}
				else{
					alert('Nincs elég pénzed')
				}
			}
			else{
				alert("Légy türelmes még nem termelhetsz!");
			}
		}

		function meat_chicken() {
			if (can_Breed_chicken) {
				if (your_money >= 381) {
				your_money -= 381;
				your_chicken_meat += 5;
				your_xp += 76;
				document.getElementById("your_xp").innerHTML = your_xp + " xp";
				document.getElementById("your_chicken_meat").innerHTML = "Csirkehúsod: " + your_chicken_meat;
				document.getElementById("your_money").innerHTML = "£" + your_money;
				start_Timer_After_Chicken_Breeding();
				}
				else{
					alert('Nincs elég pénzed')
				}
			}
			else{
				alert("Légy türelmes még nem termelhetsz!");
			}
		}

		function meat_sheep() {
			if (can_Breed_sheep) {
				if (your_money >= 953) {
				your_money -= 953;
				your_mutton += 5;
				your_xp += 191;
				document.getElementById("your_xp").innerHTML = your_xp + " xp";
				document.getElementById("your_mutton").innerHTML = "Birkahúsod: " + your_mutton;
				document.getElementById("your_money").innerHTML = "£" + your_money;
				start_Timer_After_Sheep_Breeding();
				}
				else{
					alert('Nincs elég pénzed')
				}
			}
			else{
				alert("Légy türelmes még nem termelhetsz!");
			}
		}

	//----------------------MILK, EGG, WOOL, FUR---------------------

		function fur_pig() {
			if (can_Breed_pig) {
				if (your_money >= 38) {
				your_money -= 38;
				your_fur += 5;
				your_xp += 8;
				document.getElementById("your_xp").innerHTML = your_xp + " xp";
				document.getElementById("your_fur").innerHTML = "Szőröd: " + your_fur;
				document.getElementById("your_money").innerHTML = "£" + your_money;
				start_Timer_After_Pig_Breeding();
				}
				else{
					alert('Nincs elég pénzed')
				}
			}
			else{
				alert("Légy türelmes még nem termelhetsz!");
			}
		}

		function milk_cow() {
			if (can_Breed_cow) {
				if (your_money >= 95) {
				your_money -= 95;
				your_milk += 5;
				your_xp += 19;
				document.getElementById("your_xp").innerHTML = your_xp + " xp";
				document.getElementById("your_milk").innerHTML = "Tejed: " + your_milk;
				document.getElementById("your_money").innerHTML = "£" + your_money;
				start_Timer_After_Cow_Breeding();
				}
				else{
					alert('Nincs elég pénzed')
				}
			}
			else{
				alert("Légy türelmes még nem termelhetsz!");
			}
		}

		function egg_chicken() {
			if (can_Breed_chicken) {
				if (your_money >= 25) {
				your_money -= 25;
				your_egg += 5;
				your_xp += 5;
				document.getElementById("your_xp").innerHTML = your_xp + " xp";
				document.getElementById("your_egg").innerHTML = "Tojásod: " + your_egg;
				document.getElementById("your_money").innerHTML = "£" + your_money;
				start_Timer_After_Chicken_Breeding();
				}
				else{
					alert('Nincs elég pénzed')
				}
			}
			else{
				alert("Légy türelmes még nem termelhetsz!");
			}
		}

		function wool_sheep() {
			if (can_Breed_sheep) {
				if (your_money >= 102) {
				your_money -= 102;
				your_wool += 5;
				your_xp += 20;
				document.getElementById("your_xp").innerHTML = your_xp + " xp";
				document.getElementById("your_wool").innerHTML = "Gyapjúd: " + your_wool;
				document.getElementById("your_money").innerHTML = "£" + your_money;
				start_Timer_After_Sheep_Breeding();
				}
				else{
					alert('Nincs elég pénzed')
				}
			}
			else{
				alert("Légy türelmes még nem termelhetsz!");
			}
		}

	//------------------------LEATHER, FEATHER-----------------------

		function leather_cow() {
			if (can_Breed_cow) {
				if (your_money >= 191) {
				your_money -= 191;
				your_leather += 5;
				your_xp += 38;
				document.getElementById("your_xp").innerHTML = your_xp + " xp";
				document.getElementById("your_leather").innerHTML = "Bőröd: " + your_leather;
				document.getElementById("your_money").innerHTML = "£" + your_money;
				start_Timer_After_Cow_Breeding();
				}
				else{
					alert('Nincs elég pénzed')
				}
			}
			else{
				alert("Légy türelmes még nem termelhetsz!");
			}
		}

		function feather_chicken() {
			if (can_Breed_chicken) {
				if (your_money >= 32) {
				your_money -= 32;
				your_feather += 5;
				your_xp += 6;
				document.getElementById("your_xp").innerHTML = your_xp + " xp";
				document.getElementById("your_feather").innerHTML = "Tollad: " + your_feather;
				document.getElementById("your_money").innerHTML = "£" + your_money;
				start_Timer_After_Chicken_Breeding();
				}
				else{
					alert('Nincs elég pénzed')
				}
			}
			else{
				alert("Légy türelmes még nem termelhetsz!");
			}
		}

//----------------------------------FRUITS---------------------------------------
	
	var can_Grow_apple = true;

		//make grow great again c:

	function start_Timer_After_Apple_Growing(){
		alert("Elkezdtél almát termeszteni!");
		can_Grow_apple = false;
		setTimeout(can_grow_apple_Again, 120000);
	}
	
	function can_grow_apple_Again(){
		can_Grow_apple = true;
		alert("Már újra tudsz almát termeszteni!");
	}

	//---------------------------------
	var can_Grow_wood = true;

		//make grow great again c:

	function start_Timer_After_Wood_Growing(){
		alert("Elkezdtél fát termeszteni!");
		can_Grow_wood = false;
		setTimeout(can_grow_wood_Again, 120000);
	}
	
	function can_grow_wood_Again(){
		can_Grow_wood = true;
		alert("Már újra tudsz fát termeszteni!");
	}

	//----------------------
	var can_Grow_lemon = true;

		//make grow great again c:

	function start_Timer_After_Lemon_Growing(){
		alert("Elkezdtél citromot termeszteni!");
		can_Grow_lemon = false;
		setTimeout(can_grow_lemon_Again, 120000);
	}
	
	function can_grow_lemon_Again(){
		can_Grow_lemon = true;
		alert("Már újra tudsz citromot termeszteni!");
	}

	//----------------------
	var can_Grow_walnut = true;

		//make grow great again c:

	function start_Timer_After_Walnut_Growing(){
		alert("Elkezdtél diót termeszteni!");
		can_Grow_walnut = false;
		setTimeout(can_grow_wood_Again, 120000);
	}
	
	function can_grow_walnut_Again(){
		can_Grow_walnut = true;
		alert("Már újra tudsz diót termeszteni!");
	}

	//---------------------------------------------------------------------------------------

	function apple_tree() {
		if (can_Grow_apple) {
			if (your_money >= 127) {
			your_money -= 127;
			your_apple += 5;
			your_xp += 25;
			document.getElementById("your_xp").innerHTML = your_xp + " xp";
			document.getElementById("your_apple").innerHTML = "Almád: " + your_apple;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			start_Timer_After_Apple_Growing();
			}
			else{
				alert('Nincs elég pénzed')
			}
		}
		else{
			alert("Légy türelmes még nem termeszthetsz!");
		}
	}

	function wood_tree() {
		if (can_Grow_wood) {
			if (your_money >= 1270) {
			your_money -= 1270;
			your_wood += 5;
			your_xp += 254;
			document.getElementById("your_xp").innerHTML = your_xp + " xp";
			document.getElementById("your_wood").innerHTML = "Fád: " + your_wood;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			start_Timer_After_Wood_Growing();
			}
			else{
				alert('Nincs elég pénzed')
			}
		}
		else{
			alert("Légy türelmes még nem termeszthetsz!");
		}
	}

	function lemon_tree() {
		if (can_Grow_lemon) {
			if (your_money >= 381) {
			your_money -= 381;
			your_lemon += 5;
			your_xp += 76;
			document.getElementById("your_xp").innerHTML = your_xp + " xp";
			document.getElementById("your_lemon").innerHTML = "Citromod: " + your_lemon;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			start_Timer_After_Lemon_Growing();
			}
			else{
				alert('Nincs elég pénzed')
			}
		}
		else{
			alert("Légy türelmes még nem termeszthetsz!");
		}
	}

	function walnut_tree() {
		if (can_Grow_walnut) {
			if (your_money >= 953) {
			your_money -= 953;
			your_walnut += 5;
			your_xp += 191;
			document.getElementById("your_xp").innerHTML = your_xp + " xp";
			document.getElementById("your_walnut").innerHTML = "Diód: " + your_walnut;
			document.getElementById("your_money").innerHTML = "£" + your_money;
			start_Timer_After_Walnut_Growing();
			}
			else{
				alert('Nincs elég pénzed')
			}
		}
		else{
			alert("Légy türelmes még nem termeszthetsz!");
		}
	}

//----------------------------------PAGES----------------------------------------
	function shop() {
		document.getElementById("shop").style.display = "block";
		hide_Main();
		hide_Fruity();
		hide_Field();
		hide_Storage();
		hide_Lea();
		hide_Cellar();
		hide_CookBook();
	}
	function main() {
		document.getElementById("main").style.display = "block";		
		hide_Fruity();
		hide_Shop();
		hide_Field();
		hide_Storage();
		hide_Lea();
		hide_Cellar();
		hide_CookBook();
	}
	function field() {
		document.getElementById("field").style.display = "block";
		hide_Main();
		hide_Shop();
		hide_Fruity();
		hide_Storage();
		hide_Lea();
		hide_Cellar();
		hide_CookBook();
	}
	function storage() {
		document.getElementById("storage").style.display = "block";
		hide_Main();
		hide_Shop();
		hide_Field();
		hide_Fruity();
		hide_Lea();
		hide_Cellar();
		hide_CookBook();
	}
	function lea() {
		document.getElementById("lea").style.display = "block";
		hide_Main();
		hide_Shop();
		hide_Field();
		hide_Storage();
		hide_Fruity();
		hide_Cellar();
		hide_CookBook();
	}
	function fruity() {
		document.getElementById("fruity").style.display = "block";
		hide_Main();
		hide_Shop();
		hide_Field();
		hide_Storage();
		hide_Lea();
		hide_Cellar();
		hide_CookBook();
	}
	function cellar() {
		document.getElementById("cellar").style.display = "block";
		hide_Main();
		hide_Shop();
		hide_Field();
		hide_Storage();
		hide_Lea();
		hide_Fruity();
		hide_CookBook();
	}
	function cookbook() {
		document.getElementById("cookbook").style.display = "block";
		hide_Main();
		hide_Shop();
		hide_Field();
		hide_Storage();
		hide_Lea();
		hide_Fruity();
	}
	function hide_Main(){
		document.getElementById("main").style.display = "none";
	}
	function hide_Shop(){
		document.getElementById("shop").style.display = "none";
	}
	function hide_Fruity(){
		document.getElementById("fruity").style.display = "none";
	}
	function hide_Field(){
		document.getElementById("field").style.display = "none";
	}
	function hide_Storage(){
		document.getElementById("storage").style.display = "none";
	}
	function hide_Lea(){
		document.getElementById("lea").style.display = "none";
	}
	function hide_Cellar(){
		document.getElementById("cellar").style.display = "none";
	}

	function hide_CookBook(){
		document.getElementById("cookbook").style.display = "none";
	}
