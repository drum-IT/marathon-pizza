function hideTables() {
	var tables = document.getElementsByClassName('menu-table');
	for (var i = 0; i < tables.length; i++) {
		tables[i].style.display = 'none';
	}
}

function getMenu(item) {
	if (item == 'pizza') {
		document.getElementById('menu-selection').innerHTML = 'PIZZA';
		hideTables();
		document.getElementById('speciality-pizza-menu').style.display = "table";
		document.getElementById('custom-pizza-menu').style.display = "table";
		document.getElementById('pizza-topping-menu').style.display = "table";
	} else if (item == 'subs') {
		document.getElementById('menu-selection').innerHTML = 'SUBS &amp; WRAPS';
		hideTables();
		document.getElementById('speciality-sub-menu').style.display = "table";
		document.getElementById('sub-menu').style.display = "table";
		document.getElementById('sub-menu-2').style.display = "table";
	} else if (item == 'salads') {
		document.getElementById('menu-selection').innerHTML = 'SALADS';
		hideTables();
	} else if (item == 'pasta') {
		document.getElementById('menu-selection').innerHTML = 'PASTA';
		hideTables();
	} else if (item == 'sides') {
		document.getElementById('menu-selection').innerHTML = 'SIDES';
		hideTables();
	} else if (item == 'drinks') {
		document.getElementById('menu-selection').innerHTML = 'DRINKS';
		hideTables();
	}
}
