'use straict';
const products = [
    'bag',
    'banana',
    'bathroom',
    'boots',
    'breakfast',
    'bubblegum',
    'chair',
    'cthulhu',
    'dog-duck',
    'dragon',
    'pen',
    'chair',
    'pet-sweep',
    'scissors',
    'shark',
    'sweep',
    'tauntaun',
    'unicorn',
    'usb',
    'water-can',
    'wine-glass',
];
const main=document.getElementById('main');
let button = document.getElementById('button');
let List = document.getElementById('ul');
const busMarket = document.getElementById('busMarket');
const leftImage = document.getElementById('leftImage');
const CenterImage = document.getElementById('CenterImage');
const RightImage = document.getElementById('RightImage');

function market(product) {
    this.product = product;
    this.views = 0;
    this.votes = 0;
    this.path = `./img/${product}.jpg`
    market.all.push(this);

}
market.all = [];
market.lastshow = [];
for (let i = 0; i < products.length; i++) {
    new market(products[i]);
}
console.table(market.all)

function render() {
    let leftIndex = randomNumber(0, market.all.length - 1);
    let CenterIndex = randomNumber(0, market.all.length - 1);
    let RightIndex = randomNumber(0, market.all.length - 1);
    while ( leftIndex === CenterIndex || leftIndex === RightIndex || CenterIndex === RightIndex ||CenterIndex===leftIndex || market.lastshow.includes(leftIndex) || market.lastshow.includes(CenterIndex) || market.lastshow.includes(RightIndex)){
        leftIndex = randomNumber(0, market.all.length - 1);
        CenterIndex = randomNumber(0, market.all.length - 1);
        RightIndex = randomNumber(0, market.all.length - 1);

    }
    
    const leftrandomMarket = market.all[leftIndex];
    leftImage.src = leftrandomMarket.path;
    leftImage.title = leftrandomMarket.product;
    leftImage.alt = leftrandomMarket.product;
    console.log(leftImage);
    market.lastshow[0]=leftIndex;

    
    const randomMarket = market.all[CenterIndex];
    CenterImage.src = randomMarket.path;
    CenterImage.title = randomMarket.product;
    CenterImage.alt = randomMarket.product;
    console.log(CenterImage);
    market.lastshow[1]=CenterIndex;


    const rightrandomMarket = market.all[RightIndex];
    RightImage.src = rightrandomMarket.path;
    RightImage.title = rightrandomMarket.product;
    RightImage.alt = rightrandomMarket.product;
    console.log(RightImage);
    market.lastshow[2]=RightIndex;

}


busMarket.addEventListener('click', click);

let maxTrials = 25;

function click(event) {
    maxTrials -= 1;

    if (event.target.id === 'leftImage' || event.target.id === 'CenterImage' || event.target.id === 'RightImage') {
        for (let i = 0; i < market.all.length; i++) {
            if (market.all[i].product === event.target.title) {
                market.all[i].votes++;
                market.all[i].views++;
                console.table(market.all[i])
                render();



            }

        }
        
    }

    if (maxTrials === 0) {
        busMarket.removeEventListener('click', click);
       
        button.classList.add('bt');
        button.textContent='view result';
        main.appendChild(button);
        busMarket.addEventListener('click', click);
        

    }
    createChart();
    localStorage.setItem(JSON.stringify(market.all));
}

busMarket.addEventListener('click', click);
market.list=[];
// function List() {
//     for (let j = 0; j < market.all.length; j++) {
//         let li = document.createElement('li');
//         li.innerText = 'This product  ' + market.all[j].product + ' has ' + market.all[j].votes + ' votes and ' + market.all[j].views + ' views .';
//         List.appendChild(li);
//         console.log(market.all[j].votes, market.all[j].views);
//     }
// }
// function clickButton(){
//     button.innerHTML = 'View result';
//     let main = document.getElementsByTagName('button')[0];
//     main.appendChild(button);
//     button.addEventListener ('click', function() {
//       List();
  
//     });
//   }


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createChart() {
    let context = document.getElementById('myChart').getContext('2d');
    let getproducts = [];
    let getvotes = [];
    let getview = [];

    for (let i = 0; i < market.all.length; i++) {
        getproducts.push(market.all[i].product);
    }
    for (let i = 0; i < market.all.length; i++) {
        getvotes.push(market.all[i].votes);
    }
    for (let i = 0; i < market.all.length; i++) {
        getview.push(market.all[i].views);
    }
    let chartObject = {

        type: 'bar',

        data: {
            labels: getproducts,
            datasets: [{
                label: 'getvotes',
                backgroundColor: 'rgb(100, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: getvotes
            }
            ]
        },
        data: {
            labels: getproducts,
            datasets: [{
                label: 'getvotes',
                backgroundColor: 'rgb(100, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: getvotes
            }, {

                label: 'getviews',
                backgroundColor: 'RGB(255, 73, 112)',
                borderColor: 'RGB(255, 149, 172)',
                data: getvotes
            }
            ]
        },

        options: {}
    };


    let chart = new Chart(context, chartObject);

}

// if(localStorage.totalProductShowns){
//     Votes = JSON.parse(localStorage.getItem('totalProductVotes'));
//     views = JSON.parse(localStorage.getItem('totalProductShowns'));
//   }
render();
randomNumber();
