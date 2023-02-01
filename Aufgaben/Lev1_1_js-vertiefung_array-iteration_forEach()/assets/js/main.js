let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]

let myDrinks = getraenke.sort();

const section = document.querySelector("#section");

myDrinks.forEach(function(element) {
    console.log(element);
    document.write('I love ' + element + '<br>');
});

