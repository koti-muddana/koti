const num = [22,44,87,99,56,87,98,62]
console.log(num[0])
num.forEach((number,i,num) => {
    console.log(`${i+1} value is ${number}`)
    console.log(number,num)
    
})
