const clock = document.querySelector("h2#clock")

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");


    clock.innerText = `${hours}:${minutes}:${second}`;
}
/*
// string format
// padStart(2,"0")
// padEnd(2,"0")
 */
getClock();
setInterval(getClock, 1000)
// setTimeout(sayHello, 3000)

// const date = new Date();
// console.log(
//     date.getDate(), // 일
//     date.getDay(), // 요일 1234560
//     date.getFullYear(), // 년도
//     date.getHours(), // 시간
//     date.getMinutes(), // 분
//     date.getSeconds(), // 초
// );