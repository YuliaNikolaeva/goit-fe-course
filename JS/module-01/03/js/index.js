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


const countryDelivery = prompt('В какую страну доставка?', '');
let message;
let price;

if (countryDelivery === null) {
        console.log('Очень жаль. Обращайтесь к нам еще');
    } else if (countryDelivery.trim() === '') {
        console.log('Ошибка ввода. Не указана страна доставки');
    } else {
        let correctCountryName;

        if (countryDelivery.includes(' ')) {
            const indexOfSpace = countryDelivery.indexOf(' ');
            const indexOfSpacePlusOne = indexOfSpace + 1;
        
            const firstLetterFirsrWord = countryDelivery[0].toUpperCase();
            const otherLettersFirsrWord = countryDelivery.substr(1, indexOfSpace).toLowerCase();
            const firstWordOrCountry = firstLetterFirsrWord + otherLettersFirsrWord;
        
            const firstLetterSecondWord = countryDelivery[indexOfSpacePlusOne].toUpperCase();
            const otherLettersSecondWord = countryDelivery.substr(indexOfSpacePlusOne + 1).toLowerCase();
            const secondWordOfCountry = firstLetterSecondWord + otherLettersSecondWord;
        
            correctCountryName = firstWordOrCountry + secondWordOfCountry;
        
        } else {
            correctCountryName = countryDelivery[0].toUpperCase() + countryDelivery.substr(1).toLowerCase();
        };

        switch (countryDelivery.toLowerCase()) {
            case 'китай':
            price = 100;
            break;

            case 'южная америка':
            price = 250;
            break;

            case 'австралия':
            price = 170;
            break;

            case 'индия':
            price = 180;
            break;

            case 'ямайка':
            price = 120;
            break;

            default: 
            message = `В стране ${countryDelivery} доставка не доступна`;
        };

        if(price) {
            message = `Доставка в ${correctCountryName} будет стоить ${price} кредитов`
         };

    console.log(message);
};
