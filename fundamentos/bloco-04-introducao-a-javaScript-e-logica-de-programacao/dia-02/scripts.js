// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu[1];

// console.log(menuServices);

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let indexOfPortfolio = menu.indexOf("Portfólio");

// console.log(indexOfPortfolio);

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

// menu.push("Contato");

// console.log(menu);

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = 0;
for(let index = 0; index < numbers.length; index += 1 ){
    if(numbers[index] > maiorValor){
        maiorValor = numbers[index];
    }
}

console.log(maiorValor);