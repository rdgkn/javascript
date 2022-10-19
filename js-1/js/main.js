let name = prompt("Lütfen adınızı girin..", "RDD");

let myName = document.querySelector("#myName");
myName.innerHTML=name;
setInterval(() =>{
    let date = new Date();
    let tarih =`${date.getDate()}.${date.getMonth()}.${date.getFullYear()} --- ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
    let clock = document.querySelector(".clock");
    clock.innerHTML=tarih;
}, 1000);
