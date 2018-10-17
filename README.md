Slider Game
A click game with like those old plastic toys, but better.

Overview
The application was designed to mimic the plastic slider games in which a player had to order plastic tiles in numerical order. As in those games, only tiles adjacent to the the empty space can be moved.

The electronic version does have some added benefits:

1. There are two ways to play: classic numbers or as a picture puzzle (of my dog).
2. A timer is has been added. The timer stops when the tiles are back in order.
3. A game can be reset at any time.
4. Players are given messages to guide them on how to play. (These kids today.)

The program was written as a personal challenge after seeing and being inspired by the tic-tac-toe game tutorial on the React.js site: https://reactjs.org/tutorial/tutorial.html

Challenges encountered while coding the game included:

1. Figuring out how to scramble the puzzle while still producing a winnable game. (As anyone who has played the plastic version and who has brothers can attest, you can swap tiles, snap them back in and really mess with someone). A function is provided that will work not just on the 4X4 puzzle presented here, but on square puzzles of any size.

2. Figuring out how to switch between game modes in React and bringing up the picture tiles.

3. Figuring out when tiles would be allowed to move. The adjacency of a tile to the blank is hard coded here with all ajdacent moves listed as an array. In future versions of the game I would like to autogenerate this so that puzzles of any size could be incorporated.

4. Incorporating the timer.

Authors
The Slider Game presented here was coded by Patrick Kearney.

Installation
Upon downloading/cloning the application from this GitHub repository, a potential user will need to install the packages outlined in the package.json file. The installation of yarn is recommended for consistent package management for recoding purposes.

Built With
JavaScript and React (https://reactjs.org/).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The Create-React-App package was used to build the core template structure for the app. More details on this package can be found in the Boiler README file.
The Yarn package was used for package management of the program.

The code for the tic-tac-toe React game was used as atarting point but was modified extensively.

License
This project is licensed under the MIT License.

Acknowledgments
Thanks to the folks at React.js for the starter code. And thanks to the Stack Overflow community for the many helpful hints I discovered on the site as I coded this game.
