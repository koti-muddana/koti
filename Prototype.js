const hangman = function(pet1,pet2,pet3){
    this.character1 = pet1
    this.character2 = pet2
    this.character3 = pet3

} 
hangman.prototype.getBio = function(){
    return `${this.character1} and ${this.character2} depend on ${this.character3}.`
}
const catoon = new hangman('Tom','jerry','lion')
const disney = new hangman('mootu','pothu','dorimen')
console.log(catoon.getBio())
console.log(disney.getBio())
hangman.prototype.location = 'chilakaluripet'
console.log(catoon.location)