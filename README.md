# Rock Paper Scissors Game

## Introduction

This simple console-based Rock Paper Scissors game allows you to play against the computer. The game consists of multiple rounds, and the winner is determined based on the best-of-five rule.

## How to Play

1. Open the `index.html` file in your web browser.
2. Open the browser's developer console.
3. The game will prompt you to enter your choice for each round (Rock, Paper, or Scissors).
4. The computer will randomly select its choice.
5. The results of each round will be displayed in the console.
6. After five rounds, the overall winner will be announced.

## Files

- `index.html`: The HTML file to launch the game.
- `script.js`: The JavaScript file containing the game logic.
- `README.md`: Instructions and information about the game.

## Game Logic

- The `getComputerChoice` function randomly selects the computer's choice.
- The `playRound` function determines the winner of a single round based on player and computer choices.
- The `game` function orchestrates a best-of-five game, keeping track of scores and declaring a winner at the end.

## Note

- Make sure to use the developer console in your browser to interact with the game.
- The game is case-insensitive, so you can enter choices like "rock," "RoCK," or "ROCK."

Enjoy playing Rock Paper Scissors against the computer!

## Version
0.1.0

## License
Copyright &copy; 2023 DEP-11. All Rights Reserved. <br>
This project is licensed under the [MIT License](License.txt)
