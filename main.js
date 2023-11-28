// ESERCIZIO 1
// Il primo bottone dovrà nascondere i 3 paragrafi e farli ricomparire
// il secondo bottone dovrà cambiare i colori dei paragrafi in maniera casuale
// il terzo bottone dovrà rendere i paragrafi in grassetto e farli tornare come prima.
// PS: Uniamo le conoscenze che abbiamo appreso finora, come sappiamo quando c'è qualcosa di casuale possiamo utilizzare il Math.random().

let paragrafo = document.querySelectorAll('p');

// Il primo bottone dovrà nascondere i 3 paragrafi e farli ricomparire
let btn_hide = document.querySelector('.btn-hide')

btn_hide.addEventListener('click', () =>{
    paragrafo.forEach((paragrafo) => {
    paragrafo.classList.toggle('d-none')
})
})

// il secondo bottone dovrà cambiare i colori dei paragrafi in maniera casuale
let btn_color = document.querySelector('.btn-color');

btn_color.addEventListener('click', ()=> {
    paragrafo.forEach((paragrafo) => {
        let red =  Math.floor(Math.random() * (255 - 0) + 0);
        let green = Math.floor(Math.random() * (255 - 0) + 0);
        let blue = Math.floor(Math.random() * (255 - 0) + 0);
    
        paragrafo.style.backgroundColor = `
        rgb(${red},${green},${blue})`
    });
})

// il terzo bottone dovrà rendere i paragrafi in grassetto e farli tornare come prima.
let btn_bold = document.querySelector('.btn-bold')

btn_bold.addEventListener('click', () =>{
    paragrafo.forEach((paragrafo) => {
    paragrafo.classList.toggle('btn-grassetto')
})
})











