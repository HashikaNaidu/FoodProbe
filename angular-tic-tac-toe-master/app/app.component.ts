
 import {Component} from 'angular2/core';
import game from './game';

@Component({
    selector: 'my-app',
    template: `
    
    <center><h1 style="font-family:Comic Sans MS" > <b>TIC-TAC-TOE</b></h1></center>
    <div> <center><span *ngIf="turn==1"> Turn of <h3><b><font color="black">Player1</font></b></h3></span></center>
     <center><span *ngIf="turn==0"> Turn of <h3><b><font color="black">Player2</font></b></h3></span></center></div>
        
    <div class="board">
        <div *ngFor="#row of board;#rowNo=index" class="row">
            <div *ngFor="#cell of row;#colNo=index" class="cell" (click)="cellClicked(rowNo, colNo)">
                <span class="marker" *ngIf="cell===0">X</span>
                <span class="marker" *ngIf="cell===1">O</span>
            </div>
        </div>
    </div>
    
    <div class="gameResults" *ngIf="winner===0"><font color = "darkgreen"> Hurray ! First Player WON 👏</font></div>
    <div class="gameResults" *ngIf="winner===1"><font color = "darkgreen">Hurray ! Second Player WON 👏</font></div>
     <div class="gameResults" *ngIf="winner===2"><font color = "red">Game Draw</font> </div>
    <button class="restart" (click)="restart()"><b>Restart</b></button>`

})

export class AppComponent {
    public currentPlayer = 0;
    public board = game.createBoard();
    public winner;
    public turn:any = 1 ;

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

        if (checkResult) {
            this.winner = checkResult.winner;
            this.turn = 2;
        }
if(checkResult == 2){
this.winner = 2;
        }
    }
}
