// Reg

let Reg = /\+d/gi;

// on submit

let form = document.forms[0];

// load card preview

let cardName = document.getElementById("name");
let cardNum = document.getElementById("numbers");
let cardDate = document.getElementById("date");
let cardCvv = document.getElementById("cvv");

// load inputs

let inputs = [
  document.getElementById("Name"),
  document.getElementById("cardNumber"),
  document.getElementById("MM"),
  document.getElementById("YY"),
  document.getElementById("cvvi"),
];

inputs[1].addEventListener("keydown", (e) => {
  e.target.value = e.target.value.replace(/(\d{4})(\d+)/g, "$1 $2");
});

inputs.forEach((e) => {
  e.addEventListener("focusout", () => {
    if (e == inputs[0]) {
      if (e.value.length >= 8) {
        cardName.innerText = e.value;
        e.classList.remove("ring-Red-0");
        document.getElementById("span1").innerText = "";
      } else if (e.value.length === 0) {
        e.classList.add("ring-Red-0");
        document.getElementById("span1").innerText = "Can't be blank";
      } else {
        e.classList.add("ring-Red-0");
        document.getElementById("span1").innerText = "Wrong format";
      }
    }
    if (e == inputs[1]) {
      if (e.value.length === 19) {
        e.classList.remove("ring-Red-0");
        document.getElementById("span2").innerText = "";
        // make value
        let values = e.value.split(" ", 4);
        // make text dynamic
        cardNum.querySelectorAll("span")[0].innerText = values[0];
        cardNum.querySelectorAll("span")[1].innerText = values[1];
        cardNum.querySelectorAll("span")[2].innerText = values[2];
        cardNum.querySelectorAll("span")[3].innerText = values[3];
      } else if (e.value.length === 0) {
        e.classList.add("ring-Red-0");
        document.getElementById("span2").innerText = "Can't be blank";
      } else {
        e.classList.add("ring-Red-0");
        document.getElementById("span2").innerText =
          "Wrong format ,numbers only";
      }
    }
    if (e == inputs[2]) {
      if (
        e.value.length == 2 &&
        parseInt(e.value) <= 12 &&
        parseInt(e.value) != 0
      ) {
        document.getElementById("span3").innerText = "";
        e.classList.remove("ring-Red-0");
        cardDate.querySelectorAll("span")[0].innerText = e.value;
      } else if (e.value.length === 0) {
        e.classList.add("ring-Red-0");
        document.getElementById("span3").innerText = "Can't be blank";
      } else {
        e.classList.add("ring-Red-0");
        document.getElementById("span3").innerText = "Wrong format";
      }
    }
    if (e == inputs[3]) {
      if (
        e.value.length === 2 &&
        parseInt(e.value) >= new Date().getFullYear().toString().slice(2, 4)
      ) {
        document.getElementById("span3").innerText = "";
        e.classList.remove("ring-Red-0");
        cardDate.querySelectorAll("span")[1].innerText = e.value;
      } else if (e.value.length === 0) {
        e.classList.add("ring-Red-0");
        document.getElementById("span3").innerText = "Can't be blank";
      } else {
        e.classList.add("ring-Red-0");
        document.getElementById("span3").innerText = "Wrong format";
      }
    }
    if (e == inputs[4]) {
      if (e.value.length === 3 && /\d{3}/gi.test(e.value) === true) {
        document.getElementById("span4").innerText = "";
        e.classList.remove("ring-Red-0");
        cardCvv.innerText = e.value;
      } else if (e.value.length === 0) {
        e.classList.add("ring-Red-0");
        document.getElementById("span4").innerText = "Can't be blank";
      } else {
        e.classList.add("ring-Red-0");
        document.getElementById("span4").innerText = "Wrong format";
      }
    }
  });
});

form.addEventListener("submit", (e) => {
  // prevent the submit
  e.preventDefault();
  if (
    document.getElementById("span1").innerText == "" &&
    document.getElementById("span2").innerText == "" &&
    document.getElementById("span3").innerText == "" &&
    document.getElementById("span4").innerText == ""
  ) {
    document
      .getElementById("complate")
      .classList.remove("-translate-x-[100em]", "opacity-0");
  }
});

document.getElementById("complate").querySelector("button").onclick = () => {
  location.reload();
};
