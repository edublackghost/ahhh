// Valorizing variables
const charEl = document.querySelector('.penguin-container')
let jumping = false;

const enemyEl1 = document.querySelector('.car-1-container')
let walking1 = false

const enemyEl2 = document.querySelector('.car-2-container')
let walking2 = false


// Gestione interazione utente
document.onkeydown = (e) => {
    console.log(e.code)
    // if e.code = W o arrowUp
        // inizia il salto in alto
        // Aggiungi a charEl la classe up
            // dopo 4 secondi
            // rimuovi a charEl la classe up

    if ( 
        (e.code === "KeyW" || e.code === "ArrowUp")
        && jumping == false
        ){
        jumping = true
        charEl.classList.add('up')
        setTimeout(() => {
            jumping = false
            charEl.classList.remove('up')
        },1700)
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
        },1700)
    }
}

// Gestione interazione pc



// interval management
setInterval(() => {
    const random1 = Math.random()
    if ( random1 < 0.5 && walking1 == false){
        walking1 = true
        enemyEl1.classList.add('moving')
        setTimeout(() => {
            enemyEl1.classList.remove('moving')
            walking1 = false
        },3000)

    }

    const random2 = Math.random()
    if ( random2 < 0.5 && walking2 == false){
        walking2 = true
        enemyEl2.classList.add('moving')
        setTimeout(() => {
            enemyEl2.classList.remove('moving')
            walking2 = false
        },2500)
    }

},500)






