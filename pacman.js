// program created by sam moriarty = steski_23@hotmail.com

const readline = require('readline-sync');


console.log('Welcome to pacman by sam moriarty\n');

const map = [
   ['.', '.', '.', '.', '.'],       //the game graphics for extra points!!
   ['.', '.', '.', '.', '.'],
   ['.', '.', '.', '.', '.'],
   ['.', '.', '.', '.', '.'],
   ['.', '.', '.', '.', '.']
]

var pacman = {    //chose to have a running variable of packman for reference
   x: '',
   y: '',
   direction: ''

}

while (true) {
   console.log(map);

   let command = readline.question("Please choose your command" +
       "\nPLACE X,Y, Direction " +
       "\nMOVE" +
       "\nLEFT" +
       "\nRIGHT" +
       "\nREPORT\n");

   console.log(command);


   switch (command.trim().toLowerCase().substring(0, 4)) {     //chose to have a 4 starter point of failure to define while also in while loop

      case 'plac':
         let finalDetails = command.substring(command.indexOf(' '), command.length);
         let param = finalDetails.split(',');
         place(param[0], param[1], param[2]);
         break;

      case 'move':
         move();     //this was to modulate the program into actions
         break;

      case 'left':
         left();
         break;

      case 'righ':
         right();
         break;

      case 'repo':
         report();
         break;

      default:
         console.log("you have entered the wrong command");
         break;


   }


}


function place(x, y, direction) {
   console.log('in the place() function');
   console.log(map[3][4]);
   console.log(x + y);

   if ((x != '' && x <= 5 && x > 0) && (y != '' && y <= 5 && y > 0) && (direction != '' && direction.length > 0)) { //error catches, try catches were not ideal fro here

      if (direction.toLowerCase() == 'north' || direction.toLowerCase() == 'n') {
         map[parseInt(x)][parseInt(y)] = '^';
         pacman.x = parseInt(x);
         pacman.y = parseInt(y);
         pacman.direction = 'n';

      } else if (direction.toLowerCase() == 'south' || direction.toLowerCase() == 's') {


         map[parseInt(x)][parseInt(y)] = 'v';      // the point of the arrow os the direction facing
         pacman.x = parseInt(x);
         pacman.y = parseInt(y);
         pacman.direction = 's';

      } else if (direction.toLowerCase() == 'east' || direction.toLowerCase() == 'e') {
         map[parseInt(x)][parseInt(y)] = '>';
         pacman.x = parseInt(x);
         pacman.y = parseInt(y);
         pacman.direction = 'e';

      } else { //west facing by default
         map[parseInt(x)][parseInt(y)] = '<';
         pacman.x = parseInt(x);
         pacman.y = parseInt(y);
         pacman.direction = 'w';
      }


   } else {
      console.log("you have entered the wrong format for PLACE or you are out of bounds on the map." +
          "\nThe correct format is PLACE x,y,direction");
   }

}


function move() {

   if (pacman.x == '' || pacman.y == '' || pacman.direction == '') {
      console.log('you need to reset pacman into a position in the game')
   } else {

      if (pacman.direction == 'e' && pacman.x == 4) {                                        //easiest to debug error checkers
         console.log('we cannot move pacman that direction as it is out of bounds');
      } else if (pacman.direction == 'w' && pacman.x == 0) {
         console.log('we cannot move pacman that direction as it is out of bounds');
      } else if (pacman.direction == 'n' && pacman.y == 0) {
         console.log('we cannot move pacman that direction as it is out of bounds');
      } else if (pacman.direction == 's' && pacman.y == 4) {
         console.log('we cannot move pacman that direction as it is out of bounds');
      } else {
         map[pacman.x][pacman.y] = '.';         //parse int to ensure further that we have array indexes to work with

         if (pacman.direction == 'n') {
            pacman.y++;
            map[pacman.x][pacman.y] = '^';
         } else if (pacman.direction == 's') {
            pacman.y--;
            map[pacman.x][pacman.y] = 'v';
         } else if (pacman.direction == 'e') {
            pacman.x++;
            map[pacman.x][pacman.y] = '>';
         } else if (pacman.direction == 'w') {
            pacman.x--;
            map[pacman.x][pacman.y] = '<';
         }


      }


   }

}


function left() {

   switch (pacman.direction) {

      case'<':
         pacman.direction = 'v';
         break;
      case'>':
         pacman.direction = '^';
         break;
      case'^':
         pacman.direction = '<';
         break;
      case'v':
         pacman.direction = '>';
         break;
      default:
         console.log('you need to set pac man onto the board');
         break;


   }

}


function right() {

   switch (pacman.direction) {

      case'<':
         pacman.direction = '^';
         break;
      case'>':
         pacman.direction = 'v';
         break;
      case'^':
         pacman.direction = '>';
         break;
      case'v':
         pacman.direction = '<';
         break;
      default:
         console.log('you need to set pac man onto the board');
         break;


   }

}


function report() {
   if (pacman.x == '' || pacman.y == '' || pacman.direction == '') {
      console.log('your pacman is not correctly on the board');
   } else {
      console.log('your pacmans placement is=' +
          '\nX:' + pacman.x +
          '\nY:' + pacman.y +
          '\nDirection Facing:' + pacman.direction)


   }
}




module.exports = {place, left, right, report, move};
//be sure to check out my testing suite