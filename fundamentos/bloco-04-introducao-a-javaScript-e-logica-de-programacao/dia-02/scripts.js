// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu[1];

// console.log(menuServices);

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let indexOfPortfolio = menu.indexOf("Portfólio");

// console.log(indexOfPortfolio);

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

// menu.push("Contato");

// console.log(menu);

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maiorValor = 0;
// for(let index = 0; index < numbers.length; index += 1 ){
//     if(numbers[index] > maiorValor){
//         maiorValor = numbers[index];
//     }
// }

// console.log(maiorValor);

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
console.log(numbers);