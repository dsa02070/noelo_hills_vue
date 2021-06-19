/* common js */

let scrollTop = document.documentElement.scrollTop;
let headerTop = document.querySelector('header').getBoundingClientRect().top;
let headerElem = document.querySelector('header');
console.log(scrollTop)
console.log(headerTop)

function scrollEvent() {
  if (scrollTop >= headerTop) {
    headerElem.style.opacity = '0';
  }
}
scrollEvent()

export {
  scrollEvent
}
