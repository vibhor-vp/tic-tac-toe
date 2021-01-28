import { Component } from '@angular/core';
import { PlayerModel } from '../model/player.model';
import { PlayerSymbols } from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tic-tac-toe';
  ticTacArr = [null, null, null, null, null, null, null, null, null];
  player1: PlayerModel = {
    tttSymbolObj: { value: PlayerSymbols.player1, color: 'red' },
    currentTurn: true
  };
  player2: PlayerModel = {
    tttSymbolObj: { value: PlayerSymbols.player2, color: 'blue' },
    currentTurn: false
  };
  currentPlayerTurn: PlayerModel = this.player1;
  gameCompleted: boolean;

  ttBoxClick(index): void {
    if (!this.ticTacArr[index] && !this.gameCompleted) {
      this.ticTacArr[index] = this.currentPlayerTurn.tttSymbolObj;
      if (this.checkGameWon()) {
        this.gameCompleted = true;
        alert("game won");
      }
      if (this.player1.currentTurn) {
        this.player1.currentTurn = false;
        this.player2.currentTurn = true;
        this.currentPlayerTurn = this.player2;
      } else {
        this.player2.currentTurn = false;
        this.player1.currentTurn = true;
        this.currentPlayerTurn = this.player1;
      }
    }
  }

  checkGameWon() {
    return this.checkHorizintaly() || this.checkVertically() || this.checkDiagonally();
  }

  checkHorizintaly(): boolean {
    for (let i = 0; i < this.ticTacArr.length; i += 3) {
      if (
        this.ticTacArr[i] && this.ticTacArr[i].value === this.currentPlayerTurn.tttSymbolObj.value &&
        this.ticTacArr[i + 1] && this.ticTacArr[i + 1].value == this.currentPlayerTurn.tttSymbolObj.value &&
        this.ticTacArr[i + 2] && this.ticTacArr[i + 2].value == this.currentPlayerTurn.tttSymbolObj.value
      ) {
        return true;
      }
    }
    return false;
  }

  checkVertically(): boolean {
    for (let i = 0; i < this.ticTacArr.length / 3; i++) {
      if (
        this.ticTacArr[i] && this.ticTacArr[i].value === this.currentPlayerTurn.tttSymbolObj.value &&
        this.ticTacArr[i + 3] && this.ticTacArr[i + 3].value == this.currentPlayerTurn.tttSymbolObj.value &&
        this.ticTacArr[i + 6] && this.ticTacArr[i + 6].value == this.currentPlayerTurn.tttSymbolObj.value
      ) {
        return true;
      }
    }
    return false;
  }

  checkDiagonally(): boolean {
    if (this.ticTacArr[0] && this.ticTacArr[0].value === this.currentPlayerTurn.tttSymbolObj.value &&
      this.ticTacArr[4] && this.ticTacArr[4].value == this.currentPlayerTurn.tttSymbolObj.value
      && this.ticTacArr[8] && this.ticTacArr[8].value == this.currentPlayerTurn.tttSymbolObj.value) {
      return true;
    } else if (this.ticTacArr[2] && this.ticTacArr[2].value === this.currentPlayerTurn.tttSymbolObj.value &&
      this.ticTacArr[4] && this.ticTacArr[4].value == this.currentPlayerTurn.tttSymbolObj.value
      && this.ticTacArr[6] && this.ticTacArr[6].value == this.currentPlayerTurn.tttSymbolObj.value) {
      return true;
    }
  }
}

