// const base = 5;
// const height = 8;
// const area = base * height;

// console.log(area);

// const perimeter = base * 2 + height * 2;

// console.log(perimeter);

// console.log(!(3 + 2) === 4);

let situacao = 'reprovada';

switch(situacao){
    case 'aprovada':
        console.log('Você foi aprovada!');
        break;

    case 'lista':
        console.log('Você está na lista de espera!');
        break;

    case 'reprovada':
        console.log('Você foi reprovada!');
        break;

    default:
        console.log('Valor não reconhecido!');
        
}
