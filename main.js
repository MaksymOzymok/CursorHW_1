let ladaPrice = 15.678, audiPrice = 123.965, bmwPrice = 90.2345;

let maxPrice = Math.max(ladaPrice,audiPrice,bmwPrice);
let minPrice = Math.min(ladaPrice,audiPrice,bmwPrice);

let sum = ladaPrice + audiPrice + bmwPrice;
console.log(sum);

let sum2 = Math.floor(ladaPrice) + Math.floor(audiPrice) + Math.floor(bmwPrice);
console.log(sum2);

let roundedSum = Math.ceil(Math.round(sum) / 100)  * 100 ;
console.log(roundedSum);

let isEven = Math.floor(sum) % 2 === 0;
console.log(isEven);

let received = 500 - sum;
console.log(received);

let average = (sum / 3).toFixed(2);
console.log(average);
let discount = Math.random() * 100;
discount = Math.round(discount);
console.log(discount + ' % ');

let changedSum = (sum * (100 - discount)/100).toFixed(2);
console.log(changedSum);
let lostProfit = Math.floor(Math.floor(sum.toFixed(2))/ 2 - Math.floor(sum * discount / 100));
//lostProfit = lostProfit.toFixed(2);

const showMax = `Max price: ${maxPrice}`;
const showMin = `Min price: ${minPrice}`;

const showTotal = `Total: ${sum}`;
const showTotalInteger = `Total: ${sum2}`;
const  showTotalRounded = `Rounded total to hundreds: ${roundedSum}`;
const showEven = `Total is even: ${isEven}`;
const showReceived = `Received money: ${received}`;
const showAverage = `Average price: ${average}`;
const showDiscount = `Discount: ${discount} %`;
const showNewPrice = `New price: ${changedSum}`;
const showLostProfit = `Lost profit: ${lostProfit}`;


function showResult() {
document.writeln(showMax);
document.writeln('<br>');
document.writeln(showMin);
    document.writeln('<br>');
document.writeln(showTotal);
    document.writeln('<br>');
document.writeln(showTotalInteger);
    document.writeln('<br>');
document.writeln(showTotalRounded);
    document.writeln('<br>');
document.writeln(showEven);
    document.writeln('<br>');
document.writeln(showReceived);
    document.writeln('<br>');
document.writeln(showAverage);
    document.writeln('<br>');
document.writeln(showDiscount);
    document.writeln('<br>');
document.writeln(showNewPrice);
    document.writeln('<br>');
document.writeln(showLostProfit);
}

showResult();