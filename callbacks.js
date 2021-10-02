const order = (callProduction) => {
    setTimeout(()=>{
    console.log("order is placed");
    },2000);
    callProduction();
};
const production = ()=>{
    setTimeout(()=>{
    console.log("prodution is started for delivery");
},3000);
};
order(production);