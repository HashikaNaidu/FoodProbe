import {Component} from 'angular2/core';
import game from './game';

@Component({
    selector: 'my-app',
    template: `
    
    <center><h1 style = "font-family: Comic Sans MS"><a href = "#"> <b>TIC-TAC-TOE</b> </a></h1>
    
   <center><h1> <span *ngIf="turn==0" >second Player turn</span></h1> </center>
   <center><h1> <span *ngIf="turn==1"> first player turn</span></h1> </center>       
    <div class="board">
        <div *ngFor="#row of board;#rowNo=index" class="row">
            <div *ngFor="#cell of row;#colNo=index" class="cell" (click)="cellClicked(rowNo, colNo)">
                <span class="marker" *ngIf="cell===0">X</span>
                <span class="marker" *ngIf="cell===1">O</span>
            </div>
        </div>
    </div>
     <br><br>
    <div class="gameResults" *ngIf="winner===0">Hurray ! First Player WON 👏</div>
    <div class="gameResults" *ngIf="winner===1" >Hurray ! Second Player WON 👏</div>
    <div class = "gameResults" *ngIf = "winner  ===2">Draw</div>
     <button class="restart" (click)="restart()">Play Again</button>`
})

export class AppComponent {
    public currentPlayer = 0;
    public board = game.createBoard();
    public winner;
    public draw ;
    public turn:any = 1;

    restart() {
        this.board = game.createBoard();
        this.winner = null;
        this.currentPlayer = 0;
    }

    cellClicked(row, col) {
        if (this.board[row][col] === 0 || this.board[row][col] === 1 || this.winner != null){
            
            
            return;
        } 
        
        this.currentPlayer++;
        this.board[row][col] = this.currentPlayer % 2 ? 0 : 1;
        this.turn = this.board[row][col];
        var checkResult = game.checkBoard(this.board);
        console.log(checkResult);
        if (checkResult) {
            this.winner = checkResult.winner;
            this.turn = 2;
        }
        if(checkResult == 2){
            this.winner = 2;
        }
    }
}
