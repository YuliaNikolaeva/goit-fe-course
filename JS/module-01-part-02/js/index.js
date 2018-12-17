'use strict';

const tour1 = ' Taba';
const tour2 = ' Sharm';
const tour3 = ' Hurgada';


const openTaba = 6;
const openSharm = 15;
const openHurgada = 25;


const selectionPlaces = 'Сколько людей, включительно с Вами, едет отдыхать?';

const messInputError = 'Ошибка ввода';
const messCancel = 'Нам очень жаль, приходите еще!';
const messOupenGroup = 'Есть свободные места в группе ';
const messYouLikeIt =  '. Вам подходит?';

const messUserGo = 'Приятного путешествия в группе ';
const messNoPlaces = 'Извините, столько мест нет ни в одной группе';

const enterPlaces = Number(prompt(selectionPlaces));
if (enterPlaces !== NaN && enterPlaces > 0) {
  if (enterPlaces <= openTaba) {
    const YouGoTour1 = confirm(messOupenGroup + tour1 + messYouLikeIt);
   if (YouGoTour1) {
    alert(messUserGo + tour1);
    } else {
    alert(messCancel);
    }
  }

  else if (enterPlaces <= openSharm) {
    const YouGoTour2 = confirm(messOupenGroup + tour2 + messYouLikeIt);
    if (YouGoTour2) {
      alert(messUserGo + tour2);
    } else {
      alert(messCancel);
    }
  } else if (enterPlaces <= openHurgada) {
    const YouGoTour3 = confirm(messOupenGroup + tour3 + messYouLikeIt);
    if (YouGoTour3) {
      alert(messUserGo + tour3);
    } else {
      alert(messCancel);
    }
  } else if (enterPlaces > openTaba && enterPlaces > openSharm && enterPlaces > openHurgada) {
    alert(messNoPlaces);
  } 
} else if (enterPlaces === 0) {
  alert(messCancel);
} else {
  alert(messInputError);
}
