'use straict';
const products =[
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
const busMarket=document.getElementById('busMarket');
const leftImage=document.getElementById('leftImage');
const CenterImage=document.getElementById('CenterImage');
const RightImage=document.getElementById('RightImage');

function market(product){
    this.product=product;
    this.views=0;
    this.votes=0;
    this.path=`./img/${product}.jpg`
    market.all.push(this);
    
}
market.all=[];
for (let i=0;i<products.length;i++){
    new market(products[i]);
    const table=document.getElementById('NUmberOfCilck');
    
}
console.table(market.all)
   
function render(){
    const leftIndex=randomNumber(0, market.all.length-1);
    const leftrandomMarket=market.all[leftIndex];
    leftImage.src=leftrandomMarket.path;
    leftImage.title=leftrandomMarket.product;
    leftImage.alt=leftrandomMarket.product;
    console.log(leftImage);

    const CenterIndex=randomNumber(0, market.all.length-1);
    const randomMarket=market.all[CenterIndex];
    CenterImage.src=randomMarket.path;
    CenterImage.title=randomMarket.product;
    CenterImage.alt=randomMarket.product;
    console.log(CenterImage);
 
    const RightIndex=randomNumber(0, market.all.length-1);
    const rightrandomMarket=market.all[RightIndex];
    RightImage.src=rightrandomMarket.path;
    RightImage.title=rightrandomMarket.product;
    RightImage.alt=rightrandomMarket.product;
    console.log(RightImage);

}


busMarket.addEventListener('click',click);
function click(event){
    if(event.target.id === 'leftImage' || event.target.id === 'CenterImage' || event.target.id === 'RightImage'){
        for (let i=0;i<market.all.length;i++){
            if (market.all[i].product === event.target.title){
                market.all[i].votes++;
                market.all[i].views++;
                console.table(market.all[i])
            }
          }
          
    }
    render();
}


function randomNumber(min,max){
    return Math.floor(Math.random()*(max - min +1)) +min; 
}
render();




