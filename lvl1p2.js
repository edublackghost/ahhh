const charEl = document.querySelector('.pigeon-container')
let jumping = false;

const enemyEl1 = document.querySelector('.gondoliere-1-container')
let walking1 = false

const enemyEl2 = document.querySelector('.gondoliere-2-container')
let walking2 = false

document.onkeydown = (e) => {
    console.log(e.code)

    if ( 
        (e.code === "KeyW" || e.code === "ArrowUp")
        && jumping == false
        ){
        jumping = true
        charEl.classList.add('up')
        setTimeout(() => {
            jumping = false
            charEl.classList.remove('up')
        },2000)
    }
    if ( 
        (e.code === "KeyS" || e.code === "ArrowDown")
        && jumping == false
        ){
        jumping = true
        charEl.classList.add('down')
        setTimeout(() => {
            jumping = false
            charEl.classList.remove('down')
        },2000)
    }
}
setInterval(() => {
    const random1 = Math.random()
    if ( random1 < 0.5 && walking1 == false){
        walking1 = true
        enemyEl1.classList.add('moving')
        setTimeout(() => {
            enemyEl1.classList.remove('moving')
            walking1 = false
        },4000)

    }
    const random2 = Math.random()
    if ( random2 < 0.5 && walking2 == false){
        walking2 = true
        enemyEl2.classList.add('moving')
        setTimeout(() => {
            enemyEl2.classList.remove('moving')
            walking2 = false
        },4000)
    }

},500)


// interval for collision
setInterval(() => {
    if (isCollide(charEl, enemyEl1)){
       alert("game over")
   }
// ... is collide enemyEl2

},50)

setInterval(() => {
    if (isCollide(charEl, enemyEl2)){
       alert("game over")
    //    console.log("game over")
   }
// ... is collide enemyEl2

},50)

function isCollide(a, b) {
   var aRect = a.getBoundingClientRect();
   var bRect = b.getBoundingClientRect();

   return !(
       ((aRect.top + aRect.height) < (bRect.top)) ||
       (aRect.top > (bRect.top + bRect.height)) ||
       ((aRect.left + aRect.width) < bRect.left) ||
       (aRect.left > (bRect.left + bRect.width))
   );
}