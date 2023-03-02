console.log("hola mundo")

function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
  }
   
  greet("Maddison", new Date());

  class Game {
    name = 'Violin Charades'
  }
  const myGame = new Game()

//tsc --init
/*# Transpilar tu código
tsc src/index.ts --outFile dist/index.js

*/
