'use strict';

// Пользователь может оформить доставку товара к себе в страну, 
// указав ее при посещении страницы в prompt. 

// Учти, что пользователь может ввести имя страны не только 
// буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки 
// в указанную страну. Формат сообщения: 
// 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, 
// то выводи в консоль сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

//     китай - 100 кредитов
//     южная америка - 250 кредитов
//     австралия - 170 кредитов
//     индия - 80 кредитов
//     ямайка - 120 кредитов

// PS: используй switch


const countryChina = 'китай';
const countrySouthAmerica = 'южная америка';
const countryAustralia = 'австралия';
const countryIndia = 'индия';
const countryJamaica = 'ямайка';

const priceChina = 100;
const priceSouthAmerica = 250;
const priceAustralia = 170;
const priceIndia = 80;
const priceJamaica = 120;

const countryDelivery = prompt('В какую страну доставка?').toLowerCase();

switch (countryDelivery) {
    case countryChina:
    alert(`Доставка в ${countryChina} будет стоить ${priceChina} кредитов`);
    break;

    case countrySouthAmerica:
    alert(`Доставка в ${countrySouthAmerica} будет стоить ${priceSouthAmerica} кредитов`);
    break;

    case countryAustralia:
    alert(`Доставка в ${countryAustralia} будет стоить ${priceAustralia} кредитов`);
    break;

    case countryIndia:
    alert(`Доставка в ${countryIndia} будет стоить ${priceIndia} кредитов`);
    break;

    case countryJamaica:
    alert(`Доставка в ${countryJamaica} будет стоить ${priceJamaica} кредитов`);
    break;

    default: 
    alert(`В стране ${countryDelivery} доставка не доступна`);
}