const stocks = {
    Fruits : ['Mango','Venilla','Chocolate'],
    liquid : ['water','ice'],
    holder : ['cup','cone','stick']


};

const order = (FruitName,callProduction) => {
    setTimeout(()=>{
        console.log(`You Are Selected ${stocks.Fruits[FruitName]} `);
    },2000)
    callProduction();
};
const Production = ()=>{
    setTimeout(()=>{
    console.log("order placed starting production");
    },3000);
}
order(0,Production);
