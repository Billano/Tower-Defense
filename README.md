# Tower Defense

This program will simulate a game where the goal is to kill the enemies by using a tower as fast as possible.
At each turn, the tower fires one time first, then each enemy moves towards the tower. If an enemy reaches the tower, is game over.

## Getting Started

In order to test this program, you have to clone it to your local computer.

* `git clone https://github.com/Billano/Tower-Defense.git towerDefense`

### Installing & Running the Program

Just do:

* `npm start`

or

* `node index.js < file`

Testing files can be found inside the test folder.

```
node index.js < test/text.txt
```

### Testing file format

Each test file should follow a specific format :

The first line is the towers firing range.
The following lines will be the enemies, first column would be the name, second would be the position, and the third is the speed which they move per turn.

```
50m
BotA 100m 10m
BotB 50m 20m
BotC 30m 20m
```
### Expected output

#### If the tower can kill all the enemies

```
Firing range is 50m
Turn 1: Kill BotC at 30m
Turn 2: Kill BotB at 30m
Turn 6: Kill BotA at 50m
You win in 6 turns
```

#### If the tower cannot kill all the enemies with the given fire range, the program should calculate the minimum fire range and kill them

```
Firing range is 40m

Turn 1: Kill EnemyD at 30m
Turn 2: Kill EnemyF at 10m
Turn 7: Kill EnemyA at 40m
You lost, EnemyE killed you!
the minimun fire range needed to win is 55m
55m
Turn 1: Kill EnemyD at 30m
Turn 2: Kill EnemyF at 10m
Turn 6: Kill EnemyA at 50m
Turn 7: Kill EnemyE at 50m
Turn 20: Kill EnemyC at 55m
You win in 20 turns
```

#### If the game is unbeatable

```
Firing range is 50m
You lost, BotA killed you!
The game is not beatable
```

## Built With

* [Node JS 0.12.14](https://nodejs.org/dist/v0.12.14/node-v0.12.14-linux-x64.tar.gz) - The enviroment used
* [Lodash JS](https://github.com/lodash/lodash) - JS Library
* [Mocha JS](https://github.com/mochajs/mocha) - JS Testing Library
* [Should JS](https://github.com/shouldjs/should.js/) - JS Testing Library

## Authors

* **Eugenio Rodriguez** - *Initial work* - [Billano](https://github.com/Billano)
