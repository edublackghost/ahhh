// Valorizing variables
const charEl = document.querySelector('.penguin-container')
let jumping = false;

const charEl1 = document.querySelector ('.plane-container')
let walking1 = false

const enemyEl2 = document.querySelector('.rocket-container')
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
        charEl1.classList.add('up')
        setTimeout(() => {
            jumping = false
            charEl1.classList.remove('up')
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
        enemyEl2.classList.add('moving')
        setTimeout(() => {
            enemyEl2.classList.remove('moving')
            walking1 = false
        },4000)

    }

},500)

