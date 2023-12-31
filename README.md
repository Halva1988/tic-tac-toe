# TIC-TAC-TOE
#### Video Demo: [video: https://youtu.be/Lh7h3kPWtfM](https://youtu.be/Lh7h3kPWtfM)
#### Description:

**Overview**
> This project is a simple implementation of the classic Tic-Tac-Toe game using HTML, CSS, and JavaScript. The game allows two players to take turns marking cells on a 3x3 grid with 'X' and 'O' symbols. The main goal is to achieve a winning pattern before the opponent.

### Project Files
#### index.html
> The main HTML file serves as the entry point for the game. It includes the structure of the game board, the score display, and the modal for game results. This file orchestrates the connection between the game logic (JavaScript) and the visual representation (CSS).

##### style.css
> The CSS file defines the styling for the game interface. It handles the layout, appearance, and responsiveness of the game board, score display, modal, and the "New Game" button. It uses background images to enhance the visual experience.

#### app.js
> The JavaScript file contains the core logic of the Tic-Tac-Toe game. It manages the game state, handles player moves, checks for a winner or a draw, updates the scores, and controls the display of the modal. Additionally, it enables interaction between the game board and the user.

>Below are the key functions defined in app.js:

**checkWinner()**
>This function checks the current state of the game board against predefined win patterns. It returns the winner ('X' or 'O') if there is one, or null if there is no winner yet.

**showWinnerModal(winner)**
>Displays a modal announcing the winner. The background image of the modal changes based on whether 'X' or 'O' wins. Updates the scores and sets the game state to inactive.

**showDrawModal()**
>Displays a modal announcing a draw. Updates the scores and sets the game state to inactive.

**closeModal()**
>Closes the modal, making it hidden from view.

**handleClick(index)**
>Handles the logic when a player clicks on a cell. Updates the game board, checks for a winner or draw, and switches the current player. Invokes modal display functions when the game ends.

**renderBoard()**
>Renders the current state of the game board on the HTML page.

**updateScore(winner)**
>Updates the scores based on the winner ('X' or 'O').

**showNewGameButton()**
>Displays the "New Game" button.

**hideNewGameButton()**
>Hides the "New Game" button.

**newGame()**
>Resets the game state, hides the modal, and renders a new game board.

**Event Listeners**
>The script includes event listeners to handle clicks on the game board cells and the "New Game" button.

#### Game Logic
> The game follows standard Tic-Tac-Toe rules, where players take turns placing their symbols ('X' or 'O') on an empty cell. The game checks for a winning pattern after each move and displays a modal announcing the winner or a draw. Players can start a new game by clicking the "New Game" button.

#### Modal
> The modal appears at the end of each game, displaying the result. It dynamically changes its background image based on the game outcome ('X' wins, 'O' wins, or a draw). The modal also contains a "New Game" button to initiate a fresh game.

#### Responsive Design
> The project incorporates responsive design principles, ensuring a seamless gaming experience on various screen sizes. The layout adjusts to provide an optimal view on both desktop and mobile devices.

#### Usage
1. Open index.html in a web browser.
2. Two players take turns clicking on empty cells to place their symbols.
3. The game checks for a winner or a draw after each move.
4. The modal displays the result, and players can start a new game.

> _Feel free to explore, enjoy, and challenge your friends to a classic game of Tic-Tac-Toe!_
