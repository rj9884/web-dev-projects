const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

const hh_dig = document.querySelector("#hh");
const mm_dig = document.querySelector("#mm");
const ss_dig = document.querySelector("#ss");

let displayTime = ()=>{
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh_dig.innerHTML = hh;
    mm_dig.innerHTML = mm;
    ss_dig.innerHTML = ss;


    let hRotation = (30 * hh) + (mm * 1/2);
    let mRotation = mm * 6;
    let sRotation = ss * 6;
    hour.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
};

setInterval(displayTime, 1000);