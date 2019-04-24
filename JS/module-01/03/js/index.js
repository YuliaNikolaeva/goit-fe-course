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


const priceChina = 100;
const priceSouthAmerica = 250;
const priceAustralia = 170;
const priceIndia = 80;
const priceJamaica = 120;

const countryDelivery = prompt('В какую страну доставка?', '');

if (countryDelivery === null) {
    console.log('Очень жаль. Обращайтесь к нам еще');
} else if (countryDelivery.trim() === '') {
    console.log('Ошибка ввода. Не указана страна доставки');
} else {
    switch (countryDelivery.toLowerCase()) {
        case 'китай':
        console.log(`Доставка в ${countryDelivery} будет стоить ${priceChina} кредитов`);
        break;

        case 'южная америка':
        console.log(`Доставка в ${countryDelivery} будет стоить ${priceSouthAmerica} кредитов`);
        break;

        case 'австралия':
        console.log(`Доставка в ${countryDelivery} будет стоить ${priceAustralia} кредитов`);
        break;

        case 'индия':
        console.log(`Доставка в ${countryDelivery} будет стоить ${priceIndia} кредитов`);
        break;

        case 'ямайка':
        console.log(`Доставка в ${countryDelivery} будет стоить ${priceJamaica} кредитов`);
        break;

        default: 
        console.log(`В стране ${countryDelivery} доставка не доступна`);
    }
}
