

const countDownDate = new Date("Sep 5, 2022 11:00:00").getTime();
const daysValue = document.querySelector('#days p');
const hoursValue = document.querySelector('#hours p');
const minutesValue = document.querySelector('#minutes p');
const secondsValue = document.querySelector('#seconds p');

let x = setInterval(function() {

    const nowDate = new Date().getTime();

    let difference = countDownDate - nowDate;

    let daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hoursLeft = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutesLeft = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let secondsLeft = Math.floor((difference % (1000 * 60)) / 1000);

    if (daysLeft.toString().length == 1) {
        daysValue.innerHTML = "0" + daysLeft;
    } else {
        daysValue.innerHTML = daysLeft;
    }

    if (hoursLeft.toString().length == 1) {
        hoursValue.innerHTML = "0" + hoursLeft;
    } else {
        hoursValue.innerHTML = hoursLeft;
    }

    if (minutesLeft.toString().length == 1) {
        minutesValue.innerHTML = "0" + minutesLeft;
    } else {
        minutesValue.innerHTML = minutesLeft;
    }

    if (secondsLeft.toString().length == 1) {
        secondsValue.innerHTML = "0" + secondsLeft;
    } else {
        secondsValue.innerHTML = secondsLeft;
    }

    let audio = new Audio('assets/audio.mp3')
    // audio.play();

    if (difference < 0) {
        clearInterval(x);
        document.querySelector('.container').style.display = "none";
        document.querySelector('.expired').style.display = 'block'
        document.querySelector('.expired').innerHTML = "<p>The result of HSSC-I has been announced. You can check your result at <a href='https://fbise.edu.pk' target='_blank'>https://fbise.edu.pk</a>.</p>"
    }

}, 1000);
