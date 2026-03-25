//definisanje primenljivih/konstanti
const PRODUCT1_NAME = "Jakna";
const PRODUCT1_PRICE = 3000;
const PRODUCT1_QTY = 3;

const PRODUCT2_NAME = "Majica";
const PRODUCT2_PRICE = 1000;
const PRODUCT2_QTY = 2;

const VAT_RATE = 0.2;
const CURRENCY = "EUR";
const USD_PER_EUR = 1.16;
const VALID_CUPONS = ["SAVE10", "SAVE15", "FREESHIP"];

console.log(typeof PRODUCT1_NAME);
console.log(typeof PRODUCT2_PRICE);
console.log(typeof VALID_CUPONS);
console.log(typeof USD_PER_EUR);

//funkcija normalizeCoupon
function normalizeCoupon(code) {
    return code.trim().toUpperCase();
}

//funkcija isValidCoupon
function isValidCoupon(code) {
    return VALID_CUPONS.includes(code);
}

//funkcija validate
const applyBtn = document.getElementById("applyBtn");
if (applyBtn) {
    applyBtn.addEventListener("click", validateAndNotify);
}
function validateAndNotify() {
    let code = document.getElementById("promo-input").value;
    let normalized = normalizeCoupon(code);

    if (!isValidCoupon(normalized)) {
        alert("Uneti kod nije validan.");
        return;
    }

    if (normalized === "SAVE10") {
        alert("Vas kupon donosi 10% popusta.");
    } else if (normalized === "SAVE15") {
        alert("Vas kupon donosi 15% popusta.");
    } else if (normalized === "FREESHIP") {
        alert("Vas kupon donosi besplatnu dostavu.");
    } else {
        alert("Uneti kod nije validan.");
    }
}

//funkcija login
const loginBtn = document.getElementById("loginBtn");
if (loginBtn) {
    loginBtn.addEventListener("click", login);
}
function login() {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    if (email === "admin" && password === "admin") {
        alert("Uspesno logovanje.");
        return true;
    } else {
        alert("Pogresan email ili password.");
        return false;
    }
}

//niz allProducts
let allProducts = [
    { name: "Blazer", price: 95, qty: 3 },
    { name: "Elegant A-line trousers", price: 72, qty: 5 },
    { name: "Midi Coat", price: 105, qty: 9 },
    { name: "Wool Blazer", price: 50, qty: 15 },
    { name: "Retro Jeans", price: 70, qty: 17 },
    { name: "Belted Coat", price: 95, qty: 8 }
];

//funkcija za racunanje ukupne vrednosti
let total = 0;

for (let product of allProducts) {
    total += product.price * product.qty;
}
console.log(`Ukupna vrednost lagera: ${total} USD.`)

// niz lowStock
let lowStock = [];

for (let product of allProducts) {
    if (product.qty < 10) {
        lowStock.push(product);
    }
}
console.log("Proizodi sa malim lagerom:", lowStock);

// pretraga proizvoda

function findProductByName(list, searchName) {

    let search = searchName.toLowerCase().trim();

    for (let product of list) {

        let productName = product.name.toLowerCase().trim();

        if (productName === search) {
            return product;
        }
    }
    
    return null;
}

console.log(findProductByName(allProducts, "Blazer"));
console.log(findProductByName(allProducts, "Retro Jeans"));
console.log(findProductByName(allProducts, "jakna"));


//ukupan iznos kupovine
let iznos = 0;
function dodajNaIznos(cena) {
    iznos += cena;
    console.log(`Trenutni iznos: ${iznos} $`);
}

//ukupan iznos preko korpe
function prikazKorpe() {
    alert(`Ukupan iznos porudzbine: ${iznos} $`)
}