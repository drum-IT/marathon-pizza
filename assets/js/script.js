function getMenu(item) {
    if (item == 'pizza') {
        document.getElementById('menu-selection').innerHTML = 'PIZZA';
    }
    else if (item == 'subs') {
        document.getElementById('menu-selection').innerHTML = 'SUBS &amp; WRAPS';
    }
    else if (item == 'salads') {
        document.getElementById('menu-selection').innerHTML = 'SALADS';
    }
    else if (item == 'pasta') {
        document.getElementById('menu-selection').innerHTML = 'PASTA';
    }
    else if (item == 'sides') {
        document.getElementById('menu-selection').innerHTML = 'SIDES';
    }
    else if (item == 'drinks') {
        document.getElementById('menu-selection').innerHTML = 'DRINKS';
    }
}
