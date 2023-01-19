// VARIABLES
let heroImg = window.document.querySelector('#hero-img')
let imgBlock = window.document.querySelector('#img-block')
let rightPosition = 0
let imgBlockPosition = 0
// FUNCTIONS
const rightHandler = () => {
   heroImg.style.transform = 'scale(-1, 1)'
   rightPosition += 1
   imgBlockPosition += 1
   if (rightPosition > 5) {
      rightPosition = 0
   }
   heroImg.style.left = `-${rightPosition * 288}`
   imgBlock.style.left = `${imgBlockPosition * 20}`
}
const leftHandler = () => {

   heroImg.style.transform = 'scale(1, 1)'
   rightPosition += 1
   imgBlockPosition -= 1
   if (rightPosition > 5) {
      rightPosition = 0
   }
   heroImg.style.left = `-${rightPosition * 288}`
   imgBlock.style.left = `${imgBlockPosition * 20}`
}
// EVENT HANDLERS

let timer = null
let x = 0
let halfWidth = window.screen.width / 2
let onTouchStart = (event) => {
   event.preventDefault()
   x = (event.type === 'mousedown') ? x = event.screenX : event.touches[0].screenX
   timer = setInterval(() => {
      (x > halfWidth) ? rightHandler() : leftHandler();
   }, 130)
}
let onTouchEnd = (event) => {
   event.preventDefault()
   clearInterval(timer)
}

window.onmousedown = onTouchStart
window.ontouchstart = onTouchStart

window.onmouseup = onTouchEnd
window.ontouchend = onTouchEnd
