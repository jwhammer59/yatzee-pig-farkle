import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pig',
  templateUrl: './pig.component.html',
  styleUrls: ['./pig.component.scss'],
})
export class PigComponent {
  // Possible Values for Dice Face
  diceValueArray: number[] = [1, 2, 3, 4, 5, 6];

  activePlayer: number = 1;
  rollNumber: number = 0;
  winningScore: number = 2500;
  gameOver: boolean = false;
  currentRollTotal: number = 0;
  mustRollAgain: boolean = false;
  hasThreeOfaKind: boolean = false;
  threeOfaKindValue: number = 0;
  rollIsValid: boolean = false;

  player1Score: number = 0;
  player2Score: number = 0;

  dice1Value: number = 0;
  dice2Value: number = 0;
  dice3Value: number = 0;
  dice4Value: number = 0;
  dice5Value: number = 0;

  dice1Disabled: boolean = false;
  dice2Disabled: boolean = false;
  dice3Disabled: boolean = false;
  dice4Disabled: boolean = false;
  dice5Disabled: boolean = false;

  dice1Locked: boolean = false;
  dice2Locked: boolean = false;
  dice3Locked: boolean = false;
  dice4Locked: boolean = false;
  dice5Locked: boolean = false;

  // Store total dice of any one number
  totalOnes: number = 0;
  totalTwos: number = 0;
  totalThrees: number = 0;
  totalFours: number = 0;
  totalFives: number = 0;
  totalSixes: number = 0;

  // Array to store values of rolled dice
  rolledDiceArray: number[] = [];

  constructor(private snackBar: MatSnackBar) {}

  // Roll only the dice that have not been selected
  rollDice() {
    console.log('Rolling Dice');
    this.rolledDiceArray = [];
    if (this.dice1Disabled === false) {
      this.dice1Value = Math.floor(Math.random() * 6 + 1);
      this.rolledDiceArray.push(this.dice1Value);
    }
    if (this.dice2Disabled === false) {
      this.dice2Value = Math.floor(Math.random() * 6 + 1);
      this.rolledDiceArray.push(this.dice2Value);
    }
    if (this.dice3Disabled === false) {
      this.dice3Value = Math.floor(Math.random() * 6 + 1);
      this.rolledDiceArray.push(this.dice3Value);
    }
    if (this.dice4Disabled === false) {
      this.dice4Value = Math.floor(Math.random() * 6 + 1);
      this.rolledDiceArray.push(this.dice4Value);
    }
    if (this.dice5Disabled === false) {
      this.dice5Value = Math.floor(Math.random() * 6 + 1);
      this.rolledDiceArray.push(this.dice5Value);
    }
    console.log(this.rolledDiceArray);
    this.checkForOneAndFiveOnly();
  }

  checkForOneAndFiveOnly() {
    console.log('Starting check for 1 and 5 only');
    let diceCount: number = 0;
    if (this.rolledDiceArray.length === 5) {
      this.rolledDiceArray.forEach((el) => {
        if (el === 1 || el === 5) {
          diceCount += 1;
          console.log(diceCount);
        }
        // Yes - Must Roll Again
        if (this.rolledDiceArray.length === diceCount) {
          console.log('Player must roll again');
          this.mustRollAgain = true;
          return;
        }
      });
    } else if (this.rolledDiceArray.length > 0) {
      this.rolledDiceArray.forEach((el) => {
        if (el === 1 || el === 5) {
          diceCount += 1;
          console.log(diceCount);
        }
        if (this.rolledDiceArray.length === diceCount) {
          console.log('Player must roll again');
          this.mustRollAgain = true;
          return;
        }
      });
    }
    console.log('Finished checking for 1 and 5 only');
    this.checkForThreeOfaKind();
  }

  checkForThreeOfaKind() {
    console.log('Starting 3 of a Kind Check');
    this.hasThreeOfaKind = false;
    this.totalOnes = 0;
    this.totalTwos = 0;
    this.totalThrees = 0;
    this.totalFours = 0;
    this.totalFives = 0;
    this.totalSixes = 0;
    this.rolledDiceArray.forEach((diceNum) => {
      if (diceNum === 1) {
        this.totalOnes += 1;
        if (this.totalOnes === 3) {
          // check if remaining dice are 1 or 5
          this.hasThreeOfaKind = true;
          this.threeOfaKindValue = 1;
        }
      } else if (diceNum === 2) {
        this.totalTwos += 1;
        if (this.totalTwos === 3) {
          // check if remaining dice are 1 or 5
          this.hasThreeOfaKind = true;
          this.threeOfaKindValue = 2;
        }
      } else if (diceNum === 3) {
        this.totalThrees += 1;
        if (this.totalThrees === 3) {
          // check if remaining dice are 1 or 5
          this.hasThreeOfaKind = true;
          this.threeOfaKindValue = 3;
        }
      } else if (diceNum === 4) {
        this.totalFours += 1;
        if (this.totalFours === 3) {
          // check if remaining dice are 1 or 5
          this.hasThreeOfaKind = true;
          this.threeOfaKindValue = 4;
        }
      } else if (diceNum === 5) {
        this.totalFives += 1;
        if (this.totalFives === 3) {
          // check if remaining dice are 1 or 5
          this.hasThreeOfaKind = true;
          this.threeOfaKindValue = 5;
        }
      } else if (diceNum === 6) {
        this.totalSixes += 1;
        if (this.totalSixes === 3) {
          // check if remaining dice are 1 or 5
          this.hasThreeOfaKind = true;
          this.threeOfaKindValue = 6;
        }
      }
    });
    // Yes - Check remaining dice for 1's or 5's
    if (this.hasThreeOfaKind && this.mustRollAgain) {
      console.log('Has 3 of a Kind and all 1 or 5');
      this.scoreMustRoll(this.threeOfaKindValue);
    } else if (this.hasThreeOfaKind) {
      this.scoreThreeOfaKind();
    } else {
      console.log('No 3 of a Kind, check for valid dice');
      this.checkForValidDice();
    }
  }

  scoreMustRoll(val: number) {
    console.log('Start calculating score and store');
    let tempValues = this.rolledDiceArray.reduce((a, b) => {
      return a + b;
    });
    if (val === 1 && tempValues === 5) {
      this.currentRollTotal += 1200;
      this.mustRollAgain = true;
    } else if (val === 1 && tempValues === 9) {
      this.currentRollTotal += 1150;
      this.mustRollAgain = true;
    } else if (val === 1 && tempValues === 13) {
      this.currentRollTotal += 1100;
      this.mustRollAgain = true;
    } else if (val === 2 && tempValues === 8) {
      this.currentRollTotal += 400;
      this.mustRollAgain = true;
    } else if (val === 2 && tempValues === 9) {
      this.currentRollTotal += 350;
      this.mustRollAgain = true;
    } else if (val === 2 && tempValues === 16) {
      this.currentRollTotal += 300;
      this.mustRollAgain = true;
    } else if (val === 3 && tempValues === 11) {
      this.currentRollTotal += 500;
      this.mustRollAgain = true;
    } else if (val === 3 && tempValues === 15) {
      this.currentRollTotal += 450;
      this.mustRollAgain = true;
    } else if (val === 3 && tempValues === 19) {
      this.currentRollTotal += 400;
      this.mustRollAgain = true;
    } else if (val === 4 && tempValues === 14) {
      this.currentRollTotal += 600;
      this.mustRollAgain = true;
    } else if (val === 4 && tempValues === 18) {
      this.currentRollTotal += 550;
      this.mustRollAgain = true;
    } else if (val === 4 && tempValues === 22) {
      this.currentRollTotal += 500;
      this.mustRollAgain = true;
    } else if (val === 5 && tempValues === 17) {
      this.currentRollTotal += 700;
      this.mustRollAgain = true;
    } else if (val === 5 && tempValues === 21) {
      this.currentRollTotal += 650;
      this.mustRollAgain = true;
    } else if (val === 5 && tempValues === 25) {
      this.currentRollTotal += 600;
      this.mustRollAgain = true;
    } else if (val === 6 && tempValues === 20) {
      this.currentRollTotal += 800;
      this.mustRollAgain = true;
    } else if (val === 6 && tempValues === 24) {
      this.currentRollTotal += 750;
      this.mustRollAgain = true;
    } else if (val === 6 && tempValues === 28) {
      this.currentRollTotal += 700;
      this.mustRollAgain = true;
    }

    console.log(`3 of a Kind plus 1's & 5's: ${this.currentRollTotal}`);
    // Calculate Score?
  }

  scoreThreeOfaKind() {
    console.log('Score 3 of a kind');
  }

  checkForValidDice() {
    console.log('Start checking for Valid Dice');
    // Yes - Bank or Roll Again
    if (!this.hasThreeOfaKind) {
      if (
        this.rolledDiceArray.includes(1) ||
        this.rolledDiceArray.includes(5)
      ) {
        console.log('Has Valid Dice');
        this.rollIsValid = true;
      } else {
        // No - Turn Over
        console.log('No Valid Dice');
        this.autoDismissSnackBar('Oink, Oink', 'Better luck next time.');
        // Change Player
      }
    }
    console.log('Finish Checking for Valid Dice');
  }

  selectDice(val: number) {
    console.log(val);
  }

  bankCurrentScore() {
    console.log(this.currentRollTotal);
  }

  newGame() {
    console.log('New Game');
  }

  autoDismissSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      verticalPosition: 'top',
    });
  }

  manualDismissSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      verticalPosition: 'top',
    });
  }
}
