class Burger {
    constructor(cost, callories) {
        this.cost = cost;
        this.callories = callories;
    }
}

const burgerSmall = new Burger(50, 20);
const burgerBig = new Burger(100, 40);
const chese = new Burger(10, 20);
const salt = new Burger(20, 5);
const potato = new Burger(15, 10);
const seasoning = new Burger(15, 0);
const mayonnaise = new Burger(20, 5);

document.getElementById('burgerValue').onclick = function getBurgerValue() {

    if (document.getElementById('1').checked == true) { var a = burgerSmall.cost; var b = burgerSmall.callories; }
    else { }

    if (document.getElementById('2').checked == true) { var a = burgerBig.cost; var b = burgerBig.callories; }
    else { }

    if (document.getElementById('3').checked == true) { var a2 = chese.cost; var b2 = chese.callories; }
    else { var a2 = 0; var b2 = 0; }

    if (document.getElementById('4').checked == true) { var a3 = salt.cost; var b3 = salt.callories; }
    else { var a3 = 0; var b3 = 0; }

    if (document.getElementById('5').checked == true) { var a4 = potato.cost; var b4 = potato.callories; }
    else { var a4 = 0; var b4 = 0; }

    if (document.getElementById('6').checked == true) { var a5 = seasoning.cost; var b5 = seasoning.callories; }
    else { var a5 = 0; var b5 = 0; }

    if (document.getElementById('7').checked == true) { var a6 = mayonnaise.cost; var b6 = mayonnaise.callories; }
    else { var a6 = 0; var b6 = 0; }


    let price = (a + a2 + a3 + a4 + a5 + a6);
    let kall = (b + b2 + b3 + b4 + b5 + b6);
    document.getElementById('burgerPrice').innerHTML = price;
    document.getElementById('burgerEnergy').innerHTML = kall;
}