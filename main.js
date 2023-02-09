const myLabel = document.getElementById("myLabel");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
update();
setInterval(update, 1000);

btn1.addEventListener("click", () => {
  changeColor("red");
});
btn2.addEventListener("click", () => {
  changeColor("blue");
});
btn3.addEventListener("click", () => {
  changeColor("green");
});

function changeColor(color) {
  myLabel.style.color = color;
}

function update() {
  let date = new Date();
  myLabel.innerHTML = formatTime();

  function formatTime() {
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = hour > 12 ? "PM" : "AM";

    hour = hour % 12 || 12;

    hour = formatZeros(hour);
    minute = formatZeros(minute);
    seconds = formatZeros(seconds);

    return `${hour}:${minute}:${seconds}${amOrPm}`;
  }

  function formatZeros(time) {
    return time < 10 ? "0" + time : time;
  }
}
