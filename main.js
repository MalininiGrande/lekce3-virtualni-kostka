// tady je místo pro náš program

let salary = 30000;
let personName = 'Matej';

if (salary > 40000 && personName === 'Matej') {
    console.log('Pekny plat')

} else {
console.log('Jdi za sefem')

}


if (salary > 25000 || personName === 'Matej') {
    console.log('Pekny plat')

} else if (salary > 40000) {
console.log('OK')

}


// Math.ceil (Math.random() * 6);

let number = 6;
let text = document.querySelector('p')
let obrazek = document.querySelector('img')

function rollDice() {
   let nahodneCislo = Math.ceil(Math.random() * 6);
   console.log (nahodneCislo);
   if (nahodneCislo === 6) {
    text.innerHTML = 'Vyhrál jsi! Gratulujeme, máš bludišťáka';
    obrazek.src = 'obrazky/6.png';
};

if (nahodneCislo === 5) {
    text.innerHTML = 'Smula, hazej znovu';
    obrazek.src = 'obrazky/5.png';
};
if (nahodneCislo === 4) {
    text.innerHTML = 'Zase nic, hazej znovu';
    obrazek.src = 'obrazky/4.png';
};
if (nahodneCislo === 3) {
    text.innerHTML = 'Haha, jsi loser';
    obrazek.src = 'obrazky/3.png';
};
if (nahodneCislo === 2) {
    text.innerHTML = 'Smula vole';
    obrazek.src = 'obrazky/2.png';
};
if (nahodneCislo === 1) {
    text.innerHTML = 'Jsi trapnej, hod si jeste';
    obrazek.src = 'obrazky/1.png';
};
}




// if (nahodneCislo === 6) {
//     text.innerHTML = 'Vyhrál jsi! Gratulujeme, máš bludišťáka';
//     obrazek.src = 'obrazky/6.png';}
//     else {
//         text.textContent = 'Hodila jsi' + nahodneCislo + '.Zkus to znovu.'
//     }
    //   obrazek.src = 'obrazky/' + obrazek + '.png';
// };
