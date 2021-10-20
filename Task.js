var cars=[{maker:'Mercedes',
model:2015,
colour:'red',
forSale:true,
price:25000
},
{
    maker:'Mercedes',
model:2015,
colour:'red',
forSale:false,
price:28000
},
{
    maker:'Audi',
model:2015,
colour:'red',
forSale:false,
price:38000
},
{
    maker:'BMW',
model:2018,
colour:'red',
forSale:true,
price:48000
}
];
 var first = cars.filter(function(item){
 return item.forSale == true;
});
console.log(first)
var second = cars.filter(function(item){
    return (item.forSale == true && item.maker == 'Mercedes');
});
//console.log(second)