import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-farkle',
  templateUrl: './farkle.component.html',
  styleUrls: ['./farkle.component.scss'],
})
export class FarkleComponent {
  // Possible Values for Dice Face
  diceValueArray: number[] = [1, 2, 3, 4, 5, 6];

  activePlayer: number = 1;
  rollNumber: number = 0;
  winningScore: number = 10000;
  gameOver: boolean = false;
  currentRollTotal: number = 0;
  mustRollAgain: boolean = false;
  rollIsValid: boolean = false;
  completeInitialRoll: boolean = false;

  multiDiceValue: number = 0;
  fourPlusPair: boolean = false;

  threeOfaKindValue: number = 0;
  hasThreeOfaKind: boolean = false;
  hasFourOfaKind: boolean = false;
  hasFiveOfaKind: boolean = false;
  hasSixOfaKind: boolean = false;
  hasAllOnesAndFives: boolean = false;

  player1Score: number = 0;
  player2Score: number = 0;

  dice1Value: number = 0;
  dice2Value: number = 0;
  dice3Value: number = 0;
  dice4Value: number = 0;
  dice5Value: number = 0;
  dice6Value: number = 0;

  dice1Disabled: boolean = false;
  dice2Disabled: boolean = false;
  dice3Disabled: boolean = false;
  dice4Disabled: boolean = false;
  dice5Disabled: boolean = false;
  dice6Disabled: boolean = false;

  dice1Locked: boolean = false;
  dice2Locked: boolean = false;
  dice3Locked: boolean = false;
  dice4Locked: boolean = false;
  dice5Locked: boolean = false;
  dice6Locked: boolean = false;

  // Store total dice of any one number
  totalOnes: number = 0;
  totalTwos: number = 0;
  totalThrees: number = 0;
  totalFours: number = 0;
  totalFives: number = 0;
  totalSixes: number = 0;

  // Array to store values of rolled dice
  rolledDiceArray: number[] = [];
  objRolledDiceArray: object[] = [];

  constructor(private snackBar: MatSnackBar) {}

  rollDice() {
    console.log('Rolling Dice');
    if (this.mustRollAgain) {
      this.resetDice();
    }
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
    if (this.dice6Disabled === false) {
      this.dice6Value = Math.floor(Math.random() * 6 + 1);
      this.rolledDiceArray.push(this.dice6Value);
    }
    console.log(this.rolledDiceArray);
    // this.rolledDiceArray.sort();
    this.completeInitialRoll = true;
    this.checkforOnesAndFives();
  }

  checkforOnesAndFives() {
    let tempScoreValue: number = 0;
    let tempDiceCount: number = 0;
    this.hasAllOnesAndFives = false;

    this.rolledDiceArray.forEach((el) => {
      if (el === 1 || el === 5) {
        tempDiceCount += 1;
        if (tempDiceCount === this.rolledDiceArray.length) {
          this.rolledDiceArray.forEach((el) => {
            if (el === 1) {
              this.currentRollTotal += 100;
            } else {
              this.currentRollTotal += 50;
            }
            this.handleMustRoll('All dice are valid, you must roll again!');
          });
        }
      }
    });
    this.checkForOneToSixStriaght();
  }

  checkForOneToSixStriaght() {
    console.log('Start check for 1 to 6 Straight');
    console.log(this.rolledDiceArray);
    let sortedDiceArray = [...this.rolledDiceArray];
    sortedDiceArray.sort();
    if (
      sortedDiceArray[0] < sortedDiceArray[1] &&
      sortedDiceArray[1] < sortedDiceArray[2] &&
      sortedDiceArray[2] < sortedDiceArray[3] &&
      sortedDiceArray[3] < sortedDiceArray[4] &&
      sortedDiceArray[4] < sortedDiceArray[5]
    ) {
      this.currentRollTotal = 1500;
      this.mustRollAgain = true;
      this.lockAllDice();
      this.autoDismissSnackBar('You scored a 6 dice straight!', 'Wow!');
    } else {
      this.checkForThreePair();
    }
  }

  checkForThreePair() {
    console.log('Start Checking for 4 Pairs');
    if (
      this.rolledDiceArray[0] === this.rolledDiceArray[1] &&
      this.rolledDiceArray[2] === this.rolledDiceArray[3] &&
      this.rolledDiceArray[4] === this.rolledDiceArray[5]
    ) {
      this.currentRollTotal += 1500;
      this.mustRollAgain = true;
      this.lockAllDice();
      this.autoDismissSnackBar('You scored three pair!', 'Wow!');
    } else {
      this.checkForThreeToSixAlike();
    }
  }

  /*
  Check for 3 of a kind, two 3 of a kinds,
  4 of a kind, 5 of a Kind and 6 of a kind.
  */
  checkForThreeToSixAlike() {
    console.log('Starting Check for 3 to 6 alike');
    let threeOfaKindCounter: number = 0;
    this.hasThreeOfaKind = false;
    this.hasFourOfaKind = false;
    let fourOfaKindValue: number = 0;
    this.hasFiveOfaKind = false;
    this.hasSixOfaKind = false;
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
          threeOfaKindCounter += 1;
          if (threeOfaKindCounter > 1) {
            this.currentRollTotal += 2500;
            this.handleMustRoll('You scored two 3 or a Kinds');
          } else {
            this.disableThreeOfaKind(1);
            this.currentRollTotal += 300;
            this.checkForMustRoll(1);
            this.hasThreeOfaKind = true;
          }
        } else if (this.totalOnes === 4) {
          this.disableThreeOfaKind(1);
          this.currentRollTotal += 700;
          this.hasFourOfaKind = true;
          fourOfaKindValue = 1;
        } else if (this.totalOnes === 5) {
          this.currentRollTotal += 1000;
          this.hasFourOfaKind = false;
        } else if (this.totalOnes === 6) {
          this.currentRollTotal += 1000;
          this.handleMustRoll('You scored 6 of a kind!');
        }
      } else if (diceNum === 2) {
        this.totalTwos += 1;
        if (this.totalTwos === 3) {
          threeOfaKindCounter += 1;
          if (threeOfaKindCounter > 1) {
            this.currentRollTotal += 2500;
            this.handleMustRoll('You scored two 3 or a Kinds');
          } else {
            this.disableThreeOfaKind(2);
            this.currentRollTotal += 200;
            this.hasThreeOfaKind = true;
          }
        } else if (this.totalTwos === 4) {
          this.disableThreeOfaKind(2);
          this.currentRollTotal += 800;
          this.hasFourOfaKind = true;
          fourOfaKindValue = 2;
        } else if (this.totalTwos === 5) {
          this.currentRollTotal += 1000;
          this.hasFourOfaKind = false;
        } else if (this.totalTwos === 6) {
          this.currentRollTotal += 1000;
          this.handleMustRoll('You scored 6 of a kind!');
        }
      } else if (diceNum === 3) {
        this.totalThrees += 1;
        if (this.totalThrees === 3) {
          threeOfaKindCounter += 1;
          if (threeOfaKindCounter > 1) {
            this.currentRollTotal += 2500;
            this.handleMustRoll('You scored two 3 or a Kinds');
          } else {
            this.disableThreeOfaKind(3);
            this.currentRollTotal += 300;
            this.hasThreeOfaKind = true;
          }
        } else if (this.totalThrees === 4) {
          this.disableThreeOfaKind(3);
          this.currentRollTotal += 700;
          this.hasFourOfaKind = true;
          fourOfaKindValue = 3;
        } else if (this.totalThrees === 5) {
          this.currentRollTotal += 1000;
        } else if (this.totalThrees === 6) {
          this.currentRollTotal += 1000;
          this.handleMustRoll('You scored 6 of a kind!');
        }
      } else if (diceNum === 4) {
        this.totalFours += 1;
        if (this.totalFours === 3) {
          threeOfaKindCounter += 1;
          if (threeOfaKindCounter > 1) {
            this.currentRollTotal += 2500;
            this.handleMustRoll('You scored two 3 or a Kinds');
          } else {
            this.disableThreeOfaKind(4);
            this.currentRollTotal += 400;
            this.hasThreeOfaKind = true;
          }
        } else if (this.totalFours === 4) {
          this.disableThreeOfaKind(4);
          this.currentRollTotal += 600;
          this.hasFourOfaKind = true;
          fourOfaKindValue = 4;
        } else if (this.totalFours === 5) {
          this.currentRollTotal += 1000;
          this.hasFourOfaKind = false;
        } else if (this.totalFours === 6) {
          this.currentRollTotal += 1000;
          this.handleMustRoll('You scored 6 of a kind!');
        }
      } else if (diceNum === 5) {
        this.totalFives += 1;
        if (this.totalFives === 3) {
          threeOfaKindCounter += 1;
          if (threeOfaKindCounter > 1) {
            this.currentRollTotal += 2500;
            this.handleMustRoll('You scored two 3 or a Kinds');
          } else {
            this.disableThreeOfaKind(5);
            this.currentRollTotal += 500;
            this.hasThreeOfaKind = true;
          }
        } else if (this.totalFives === 4) {
          this.disableThreeOfaKind(5);
          this.currentRollTotal += 500;
          this.hasFourOfaKind = true;
          fourOfaKindValue = 5;
        } else if (this.totalFives === 5) {
          this.currentRollTotal += 1000;
          this.hasFourOfaKind = false;
        } else if (this.totalFives === 6) {
          this.currentRollTotal += 1000;
          this.handleMustRoll('You scored 6 of a kind!');
        }
      } else if (diceNum === 6) {
        this.totalSixes += 1;
        if (this.totalSixes === 3) {
          threeOfaKindCounter += 1;
          if (threeOfaKindCounter > 1) {
            this.currentRollTotal += 2500;
            this.handleMustRoll('You scored two 3 or a Kinds');
          } else {
            this.disableThreeOfaKind(6);
            this.currentRollTotal += 600;
            this.hasThreeOfaKind = true;
          }
        } else if (this.totalSixes === 4) {
          this.disableThreeOfaKind(6);
          this.currentRollTotal += 400;
          this.hasFourOfaKind = true;
          fourOfaKindValue = 6;
        } else if (this.totalSixes === 5) {
          this.currentRollTotal += 1000;
          this.hasFourOfaKind = false;
        } else if (this.totalSixes === 6) {
          this.currentRollTotal += 1000;
          this.handleMustRoll('You scored 6 of a kind!');
        }
      }
    });
    console.log('Finish check for 3 to 6 alike');
    console.log(this.currentRollTotal);
    if (this.hasFourOfaKind) {
      this.checkForFourOfaKindPlusPair(fourOfaKindValue);
    } else if (!this.hasThreeOfaKind === true) {
      this.checkForValidDice();
    }
  }

  checkForFourOfaKindPlusPair(diceNum: number) {
    console.log('Starting check 4 of a kind plus pair');
    let tempDiceArray: number[] = [];
    if (this.rolledDiceArray.length < 6) {
      if (diceNum === 1) {
        tempDiceArray = this.rolledDiceArray.filter((el) => {
          return el !== diceNum;
        });
      } else if (diceNum === 2) {
        tempDiceArray = this.rolledDiceArray.filter((el) => {
          return el !== diceNum;
        });
      } else if (diceNum === 3) {
        tempDiceArray = this.rolledDiceArray.filter((el) => {
          return el !== diceNum;
        });
      } else if (diceNum === 4) {
        tempDiceArray = this.rolledDiceArray.filter((el) => {
          return el !== diceNum;
        });
      } else if (diceNum === 5) {
        tempDiceArray = this.rolledDiceArray.filter((el) => {
          return el !== diceNum;
        });
      } else if (diceNum === 6) {
        tempDiceArray = this.rolledDiceArray.filter((el) => {
          return el !== diceNum;
        });
      }
    }
    console.log(tempDiceArray);
    if (tempDiceArray[0] === tempDiceArray[1]) {
      this.currentRollTotal += 500;
      this.handleMustRoll('You rolled 4 of a kind + 1 pair!');
    }
  }

  checkForValidDice() {
    console.log('Start check for valid dice');
    if (this.rolledDiceArray.includes(1) || this.rolledDiceArray.includes(5)) {
      this.rollIsValid = true;
    } else {
      this.autoDismissSnackBar('No Valid Dice!', 'Farkle!!');
      setTimeout(() => {
        this.resetDice();
      }, 2000);
    }
  }

  disableThreeOfaKind(val: number) {
    console.log(this.rolledDiceArray);
    this.rolledDiceArray.forEach((el, index) => {
      if (el === val) {
        if (index === 0) {
          this.dice1Disabled = true;
          this.dice1Locked = true;
        } else if (index === 1) {
          this.dice2Disabled = true;
          this.dice2Locked = true;
        } else if (index === 2) {
          this.dice3Disabled = true;
          this.dice3Locked = true;
        } else if (index === 3) {
          this.dice4Disabled = true;
          this.dice4Locked = true;
        } else if (index === 4) {
          this.dice5Disabled = true;
          this.dice5Locked = true;
        } else if (index === 5) {
          this.dice6Disabled = true;
          this.dice6Locked = true;
        }
      }
    });
  }

  handleMustRoll(alertText: string) {
    this.mustRollAgain = true;
    this.lockAllDice();
    this.autoDismissSnackBar(`${alertText}`, 'Wow!');
  }

  checkForMustRoll(diceNum: number) {
    let remainingDiceCount: number = 0;
    let tempDiceArray: number[] = [];
    tempDiceArray = this.rolledDiceArray.filter((el) => {
      return el !== diceNum;
    });
    tempDiceArray.forEach((el) => {
      if (el === 1 || el === 5) {
        remainingDiceCount += 1;
      }
    });
    if (remainingDiceCount === tempDiceArray.length) {
      this.lockAllDice();
      tempDiceArray.forEach((el) => {
        if (el === 1) {
          this.currentRollTotal += 100;
        } else {
          this.currentRollTotal += 50;
        }
      });
    }
  }

  lockAllDice() {
    console.log('Locking all dice');
    this.dice1Disabled = true;
    this.dice2Disabled = true;
    this.dice3Disabled = true;
    this.dice4Disabled = true;
    this.dice5Disabled = true;
    this.dice6Disabled = true;
    this.dice1Locked = true;
    this.dice2Locked = true;
    this.dice3Locked = true;
    this.dice4Locked = true;
    this.dice5Locked = true;
    this.dice6Locked = true;
  }

  resetDice() {
    console.log('Resetting Dice');
    if (!this.mustRollAgain) {
      this.currentRollTotal = 0;
    }
    this.completeInitialRoll = false;
    this.mustRollAgain = false;
    this.dice1Disabled = false;
    this.dice2Disabled = false;
    this.dice3Disabled = false;
    this.dice4Disabled = false;
    this.dice5Disabled = false;
    this.dice6Disabled = false;
    this.dice1Locked = false;
    this.dice2Locked = false;
    this.dice3Locked = false;
    this.dice4Locked = false;
    this.dice5Locked = false;
    this.dice6Locked = false;
    this.dice1Value = 0;
    this.dice2Value = 0;
    this.dice3Value = 0;
    this.dice4Value = 0;
    this.dice5Value = 0;
    this.dice6Value = 0;
  }

  selectDice(val: number) {
    if (val === 1 && (this.dice1Value === 1 || this.dice1Value === 5)) {
      this.dice1Disabled = !this.dice1Disabled;
      if (this.dice1Value === 1 && this.dice1Disabled) {
        this.currentRollTotal += 100;
      } else if (this.dice1Value === 1 && !this.dice1Disabled) {
        this.currentRollTotal -= 100;
      } else if (this.dice1Value === 5 && this.dice1Disabled) {
        this.currentRollTotal += 50;
      } else if (this.dice1Value === 5 && !this.dice1Disabled) {
        this.currentRollTotal -= 50;
      }
    } else if (val === 2 && (this.dice2Value === 1 || this.dice2Value === 5)) {
      this.dice2Disabled = !this.dice2Disabled;
      if (this.dice2Value === 1 && this.dice2Disabled) {
        this.currentRollTotal += 100;
      } else if (this.dice2Value === 1 && !this.dice2Disabled) {
        this.currentRollTotal -= 100;
      } else if (this.dice2Value === 5 && this.dice2Disabled) {
        this.currentRollTotal += 50;
      } else if (this.dice2Value === 5 && !this.dice2Disabled) {
        this.currentRollTotal -= 50;
      }
    } else if (val === 3 && (this.dice3Value === 1 || this.dice3Value === 5)) {
      this.dice3Disabled = !this.dice3Disabled;
      if (this.dice3Value === 1 && this.dice3Disabled) {
        this.currentRollTotal += 100;
      } else if (this.dice3Value === 1 && !this.dice3Disabled) {
        this.currentRollTotal -= 100;
      } else if (this.dice3Value === 5 && this.dice3Disabled) {
        this.currentRollTotal += 50;
      } else if (this.dice3Value === 5 && !this.dice3Disabled) {
        this.currentRollTotal -= 50;
      }
    } else if (val === 4 && (this.dice4Value === 1 || this.dice4Value === 5)) {
      this.dice4Disabled = !this.dice4Disabled;
      if (this.dice4Value === 1 && this.dice4Disabled) {
        this.currentRollTotal += 100;
      } else if (this.dice4Value === 1 && !this.dice4Disabled) {
        this.currentRollTotal -= 100;
      } else if (this.dice4Value === 5 && this.dice4Disabled) {
        this.currentRollTotal += 50;
      } else if (this.dice4Value === 5 && !this.dice4Disabled) {
        this.currentRollTotal -= 50;
      }
    } else if (val === 5 && (this.dice5Value === 1 || this.dice5Value === 5)) {
      this.dice5Disabled = !this.dice5Disabled;
      if (this.dice5Value === 1 && this.dice5Disabled) {
        this.currentRollTotal += 100;
      } else if (this.dice5Value === 1 && !this.dice5Disabled) {
        this.currentRollTotal -= 100;
      } else if (this.dice5Value === 5 && this.dice5Disabled) {
        this.currentRollTotal += 50;
      } else if (this.dice5Value === 5 && !this.dice5Disabled) {
        this.currentRollTotal -= 50;
      }
    } else if (val === 6 && (this.dice6Value === 1 || this.dice6Value === 5)) {
      this.dice6Disabled = !this.dice6Disabled;
      if (this.dice6Value === 1 && this.dice6Disabled) {
        this.currentRollTotal += 100;
      } else if (this.dice6Value === 1 && !this.dice6Disabled) {
        this.currentRollTotal -= 100;
      } else if (this.dice6Value === 5 && this.dice6Disabled) {
        this.currentRollTotal += 50;
      } else if (this.dice6Value === 5 && !this.dice6Disabled) {
        this.currentRollTotal -= 50;
      }
    }
  }

  bankCurrentScore() {
    console.log('Bank Dice Totals');
  }

  newGame() {
    console.log('Start New Game');
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
