window.addEventListener("scroll", function () {
  let header = document.querySelector(".header");

  if (window.scrollY > 450) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const bars = document.querySelector(`.bars`);
const menu = document.querySelector(`.navbar-item`);
const x = document.querySelector(`.span-img`);

const tuxtat = () => {
  menu.classList.remove(`blocked`, "blocked2");
};
const fun = () => {
  menu.classList.add(`blocked`);
  menu.removeEventListener(`animationend`, tuxtat);
};
const close = () => {
  menu.classList.add(`blocked2`);
  menu.addEventListener(`animationend`, tuxtat);
};

bars.addEventListener(`click`, fun);
x.addEventListener(`click`, close);

const arrowTop = document.querySelectorAll(`.arrow-top`);
const animationBloked = document.querySelectorAll(`.animation-bloked`);

arrowTop.forEach((btn, index) => {
  btn.addEventListener(`click`, () => {
    if (document.querySelector(`.rotate-180`)) {
      document.querySelector(`.rotate-180`).classList.remove(`rotate-180`);
      animationBloked.forEach((s) => {
        s.classList.remove(`b-l`);
      });
    }
    btn.classList.add(`rotate-180`);
    animationBloked[index].classList.add(`b-l`);
  });
});
bars.addEventListener(`click`, fun);
x.addEventListener(`click`, close);

const arrowBottom = document.querySelectorAll(`.arrow-bottom`);
const animationBloked2 = document.querySelectorAll(`.animation-bloked2`);

arrowBottom.forEach((btn, index) => {
  btn.addEventListener(`click`, () => {
    if (document.querySelector(`.rotate-180-2`)) {
      document.querySelector(`.rotate-180-2`).classList.remove(`rotate-180-2`);
      animationBloked2.forEach((s) => {
        s.classList.remove(`b-l`);
      });
    }
    btn.classList.add(`rotate-180-2`);
    animationBloked2[index].classList.add(`b-l`);
  });
});

const buttonArr = document.querySelectorAll(`.button-arr`);
const singIn = document.querySelector(`.singIn`);
const form = document.querySelector(`.form`);
const formX = document.querySelector(`.form-x`);
const submitButton = document.getElementById("submitButton");

const stop = () => {
  singIn.classList.remove(`singIn-block`, `singIn-block2`);
};

buttonArr.forEach((btn) => {
  btn.addEventListener(`click`, () => {
    singIn.classList.add(`singIn-block`);
    singIn.removeEventListener(`animationend`, stop);
  });
});
formX.addEventListener(`click`, () => {
  singIn.classList.add(`singIn-block2`);
  singIn.addEventListener(`animationend`, stop);
});
document.getElementById("inp4").addEventListener("change", function () {
  if (submitButton.disabled) {
    submitButton.style.backgroundColor = `black`;
    submitButton.disabled = !this.checked;
  } else {
    submitButton.style.backgroundColor = `#666666`;
    submitButton.disabled = true;
  }
});
