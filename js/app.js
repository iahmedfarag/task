let btns = Array.from(document.querySelectorAll(".slider .btns ul li"));
let container = document.querySelector(".container");
let line = document.querySelector(".slider .line");
let sliderContent = [
  {
    number: "01",
    content:
      "01 في هذه المرحلة نسعى لاستقطاب الاسر المنتجة ذو الكفاءة و الرغبة للانتقال الى مشاريع صغيرة مستدامة",
  },
  {
    number: "02",
    content:
      "02 في هذه المرحلة نسعى لاستقطاب الاسر المنتجة ذو الكفاءة و الرغبة للانتقال الى مشاريع صغيرة مستدامة",
  },
  {
    number: "03",
    content:
      "03 في هذه المرحلة نسعى لاستقطاب الاسر المنتجة ذو الكفاءة و الرغبة للانتقال الى مشاريع صغيرة مستدامة",
  },
  {
    number: "04",
    content:
      "04 في هذه المرحلة نسعى لاستقطاب الاسر المنتجة ذو الكفاءة و الرغبة للانتقال الى مشاريع صغيرة مستدامة",
  },
  {
    number: "05",
    content:
      "05 في هذه المرحلة نسعى لاستقطاب الاسر المنتجة ذو الكفاءة و الرغبة للانتقال الى مشاريع صغيرة مستدامة",
  },
  {
    number: "06",
    content:
      "06 في هذه المرحلة نسعى لاستقطاب الاسر المنتجة ذو الكفاءة و الرغبة للانتقال الى مشاريع صغيرة مستدامة",
  },
  {
    number: "07",
    content:
      "07 في هذه المرحلة نسعى لاستقطاب الاسر المنتجة ذو الكفاءة و الرغبة للانتقال الى مشاريع صغيرة مستدامة",
  },
  {
    number: "08",
    content:
      "08 في هذه المرحلة نسعى لاستقطاب الاسر المنتجة ذو الكفاءة و الرغبة للانتقال الى مشاريع صغيرة مستدامة",
  },
];
let sliderNumberEl = document.querySelector(".slider .number");
let sliderContentEl = document.querySelector(".slider .content");

// !first slider

btns.map((btn, index) => {
  index == 0
    ? btn.querySelector(".overlay").classList.add("active")
    : btn.querySelector(".overlay").classList.remove("active");
  btn.addEventListener("click", (e) => {
    // ! handle line
    let eldoc = e.target.getBoundingClientRect();
    let containerRightDis = Math.floor(
      window.innerWidth -
        (container.getBoundingClientRect().left +
          container.getBoundingClientRect().width)
    );
    let rightDis = Math.floor(
      window.innerWidth - (eldoc.left + eldoc.width) - containerRightDis
    );
    line.style.width = `${rightDis}px`;

    // ! handle background
    btns.map((b) => {
      b.querySelector(".overlay").classList.remove("active");
    });
    e.target.querySelector(".overlay").classList.add("active");

    sliderNumberEl.innerHTML = sliderContent[index].number;
    sliderContentEl.innerHTML = sliderContent[index].content;
  });
});

// ! second slider
let boxs = Array.from(document.querySelectorAll(".slider2 .box"));
console.log(boxs);

boxs.map((box) => {
  box.addEventListener("click", (e) => {
    if (e.target.classList.contains("box")) {
      boxs.map((b) => {
        b.classList.remove("active");
      });
      e.target.classList.add("active");
    }
  });
});
