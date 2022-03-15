document.addEventListener("DOMContentLoaded", () => {
  window.onscroll = () => {
    barShrink();
  };

  let isOpen = false;
  const menu = document.querySelector(".menu");
  const burger = document.querySelector(".burger");

  document.querySelector(".burger").addEventListener("click", () => {
    isOpen = !isOpen;
    menu.classList.toggle("open");
    burger.classList.toggle("close");
  });
});

const barShrink = () => {
  document.body.scrollTop > 60 || document.documentElement.scrollTop > 60
    ? document.querySelector("nav").classList.add("smaller")
    : document.querySelector("nav").classList.remove("smaller");
};

const marquee = (selector, speed) => {
  const parentSelector = document.querySelector(selector);
  const clone = parentSelector.innerHTML;
  const firstElement = parentSelector.children[0];
  let i = 0;
  parentSelector.insertAdjacentHTML("beforeend", clone);
  parentSelector.insertAdjacentHTML("beforeend", clone);

  setInterval(() => {
    firstElement.style.marginLeft = `-${i}px`;
    if (i > firstElement.clientWidth) {
      i = 0;
    }
    i = i + speed;
  }, 0);
};
