import {Component} from 'angular2/core';
import game from './game';

@Component({
    selector: 'my-app',
    template: `
    
 <center>  <h1>Tic Tac Toe</h1> </center>
    <div class="board">
        <div *ngFor="#row of board;#rowNo=index" class="row">
            <div *ngFor="#cell of row;#colNo=index" class="cell" (click)="cellClicked(rowNo, colNo)">
                <span class="marker" *ngIf="cell===0">o</span>
                <span class="marker" *ngIf="cell===1">x</span>
                
            </div>
        </div>
    </div>
    

    <button class="restart" (click)="restart()">Play Again</button>`
})

export class AppComponent {
    public currentPlayer = 0;
    public board = game.createBoard();
    public winner;

    restart() {
        this.board = game.createBoard();
        this.winner = null;
        this.currentPlayer = 0;
    }

    cellClicked(row, col) {
        if (this.board[row][col] === 0 || this.board[row][col] === 1 || this.winner != null)
            return;

        
        this.board[row][col] = this.currentPlayer % 2 ? 0 : 1;

        
        }
    }
