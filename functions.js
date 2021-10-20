let getTip = function (bill,tipPersent=.15){
    return bill*tipPersent
}
let result = getTip(248)
console.log(result)
let extTip = getTip(248,0.25)
console.log(extTip)