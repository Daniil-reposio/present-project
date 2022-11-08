const element = document.querySelector('.thirdsectionone__select');
const choices = new Choices(element);

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  // direction: 'vertical',

  // slidesPerView: 4,
  // slidePerGroup: 4,
  spaceBetween: 30,
  // loop: true,

  breakpoints: {
    1174: {
      slidesPerView: 4,
    },
    1025: {
      slidesPerView: 3,
    },
    607: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 2,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

let validation = new JustValidate(".sevensectionone__formwhat")

validation.addField("#name", [
  {
    rule: "required",
    errorMessage : "Ошибка"
  },
  {
    rule: "minLength",
    value: 3,
    errorMessage : "Ошибка введите 6 символов"
  },
  {
    rule: 'customRegexp',
    value: /^[?!,.а-яА-ЯёЁ0-9\s]+$/g,
    errorMessage : "Введдите валидную форму"
  },
])

.addField("#Email", [
  {
    rule: "required",
    errorMessage : "Ошибка"
  },
  {
    rule: "email",
    errorMessage: "Введите корректную почту"
  }
])

// let error = document.querySelector(".sevensectionone__error")
// let names = document.querySelector(".sevensectionone__formname")
// let btnas = document.querySelector(".sevensectionone__formbtn")
// let form = document.querySelector(".sevensectionone__formwhat")


// if (!names.value) {
//   btnas.addEventListener("click", function() {
//     error.classList.add("erdispnone")
//   })
// } else {

// }

// for (let i = 0; i < names.value.length; i++) {
//   if (i > 0) {
//     error.classList.remove("erdispnone")
//   }
// }

// form.addEventListener("submit", function(e) {

//   e.preventDefault();

// })


let search = document.querySelector(".upline__link1")
let string = document.querySelector(".upline__poginput")
let untsearch = document.querySelector(".upline__searchbtn")

search.addEventListener("click", function() {
  string.classList.add("active")
})

untsearch.addEventListener("click", function() {
  string.classList.remove("active")
})




// ------------------------------------------------------------------

let btn = document.querySelector(".upline__btnact")
let registr = document.querySelector(".container__registr")
let exita = document.querySelector(".registr__link")
let btn320 = document.querySelector(".upline__btn320")
let upreg = document.querySelector(".rg__main")

btn.addEventListener("click", function() {
  registr.classList.add("registr--active")
  upreg.classList.add("registr--active")
})

btn320.addEventListener("click", function() {
  registr.classList.add("registr--active")
  upreg.classList.add("registr--active")
})

exita.addEventListener("click", function() {
  registr.classList.remove("registr--active")
  upreg.classList.remove("registr--active")
})



// --------------------------------------------------------------------



let burgeractive = document.querySelector(".upline__burger")
let burgermenu = document.querySelector(".upline__menu")
let burgerclose = document.querySelector(".upline__menubtn")

burgeractive.addEventListener("click", function() {
  burgermenu.classList.add("navigation--active")
})

burgerclose.addEventListener("click", function() {
  burgermenu.classList.remove("navigation--active")
})



// -------------------------------------------------------------------------------------------

let musicactive = document.querySelector(".backline__blockmusic320")
let musicbtn = document.querySelector(".backline__link320")
let svg = document.querySelector(".backline__svg320")
let backcolor = document.querySelector(".header__border")

musicbtn.addEventListener("click", function() {
  musicactive.classList.toggle("music--active")
  svg.classList.toggle("backline--activedeg")
  backcolor.classList.toggle("backcolormusic--active")
})
