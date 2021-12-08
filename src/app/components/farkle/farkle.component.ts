import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Dice {
  diceNumber: number;
  diceValue: number;
}

@Component({
  selector: 'app-farkle',
  templateUrl: './farkle.component.html',
  styleUrls: ['./farkle.component.scss'],
})
export class FarkleComponent {
  activePlayer: number = 1;
  rollNumber: number = 0;
  winningScore: number = 10000;
  gameOver: boolean = false;
  currentRollTotal: number = 0;
  mustRollAgain: boolean = false;
  rollIsValid: boolean = false;
  completeInitialRoll: boolean = false;
  canRoll: boolean = true;

  multiDiceValue: number = 0;
  fourPlusPair: boolean = false;

  threeOfaKindCounter: number = 0;
  threeOfaKindValue: number = 0;
  fourOfaKindValue: number = 0;

  hasThreeOfaKind: boolean = false;
  hasFourOfaKind: boolean = false;
  hasFiveOfaKind: boolean = false;
  hasSixOfaKind: boolean = false;
  hasAllOnesAndFives: boolean = false;
  hasTwoThreeOfaKinds: boolean = false;

  player1Score: number = 0;
  player2Score: number = 0;

  diceArray: Dice[] = [
    { diceNumber: 1, diceValue: 0 },
    { diceNumber: 2, diceValue: 0 },
    { diceNumber: 3, diceValue: 0 },
    { diceNumber: 4, diceValue: 0 },
    { diceNumber: 5, diceValue: 0 },
    { diceNumber: 6, diceValue: 0 },
  ];

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
    if (this.mustRollAgain) {
      this.resetDice();
    }
    this.rolledDiceArray = [];
    this.diceArray = [];
    if (this.dice1Disabled === false) {
      this.dice1Value = Math.floor(Math.random() * 6 + 1);
      this.rolledDiceArray.push(this.dice1Value);
      // this.rolledDiceArray.splice(0, 0, this.dice1Value);
      this.diceArray.splice(0, 0, {
        diceNumber: 1,
        diceValue: this.dice1Value,
      });
    } else {
      this.dice1Locked = true;
    }
    if (this.dice2Disabled === false) {
      this.dice2Value = Math.floor(Math.random() * 6 + 1);
      this.rolledDiceArray.push(this.dice2Value);
      this.diceArray.splice(1, 0, {
        diceNumber: 2,
        diceValue: this.dice2Value,
      });
    } else {
      this.dice2Locked = true;
    }
    if (this.dice3Disabled === false) {
      this.dice3Value = Math.floor(Math.random() * 6 + 1);
      this.rolledDiceArray.push(this.dice3Value);
      this.diceArray.splice(2, 0, {
        diceNumber: 3,
        diceValue: this.dice3Value,
      });
    } else {
      this.dice3Locked = true;
    }
    if (this.dice4Disabled === false) {
      this.dice4Value = Math.floor(Math.random() * 6 + 1);
      this.rolledDiceArray.push(this.dice4Value);
      this.diceArray.splice(3, 0, {
        diceNumber: 4,
        diceValue: this.dice4Value,
      });
    } else {
      this.dice4Locked = true;
    }
    if (this.dice5Disabled === false) {
      this.dice5Value = Math.floor(Math.random() * 6 + 1);
      this.rolledDiceArray.push(this.dice5Value);
      this.diceArray.splice(4, 0, {
        diceNumber: 5,
        diceValue: this.dice5Value,
      });
    } else {
      this.dice5Locked = true;
    }
    if (this.dice6Disabled === false) {
      this.dice6Value = Math.floor(Math.random() * 6 + 1);
      this.rolledDiceArray.push(this.dice6Value);
      this.diceArray.splice(5, 0, {
        diceNumber: 6,
        diceValue: this.dice6Value,
      });
    } else {
      this.dice6Locked = true;
    }
    this.completeInitialRoll = true;
    this.canRoll = false;
    this.checkforOnesAndFives();
    console.log(this.rolledDiceArray);
    console.log(this.diceArray);
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
            this.canRoll = true;
          });
        }
      }
    });
    this.checkForOneToSixAndThreePair();
  }

  checkForOneToSixAndThreePair() {
    let sortedDiceArray = [...this.rolledDiceArray];
    sortedDiceArray.sort();
    if (
      sortedDiceArray[0] < sortedDiceArray[1] &&
      sortedDiceArray[1] < sortedDiceArray[2] &&
      sortedDiceArray[2] < sortedDiceArray[3] &&
      sortedDiceArray[3] < sortedDiceArray[4] &&
      sortedDiceArray[4] < sortedDiceArray[5]
    ) {
      this.currentRollTotal += 1500;
      this.mustRollAgain = true;
      this.canRoll = true;
      this.lockAllDice();
      this.autoDismissSnackBar('You scored a 6 dice straight!', 'Wow!');
    } else if (
      sortedDiceArray.length === 6 &&
      sortedDiceArray[0] === sortedDiceArray[1] &&
      sortedDiceArray[2] === sortedDiceArray[3] &&
      sortedDiceArray[4] === sortedDiceArray[5]
    ) {
      this.currentRollTotal += 1500;
      this.mustRollAgain = true;
      this.canRoll = true;
      this.lockAllDice();
      this.autoDismissSnackBar('You scored three pair!', 'Wow!');
    }
    if (!this.mustRollAgain) {
      this.checkForThreeToSixAlike();
    }
  }

  /*
  Check for 3 of a kind, two 3 of a kinds,
  4 of a kind, 5 of a Kind and 6 of a kind.
  */
  checkForThreeToSixAlike() {
    this.threeOfaKindCounter = 0;
    this.threeOfaKindValue = 0;
    this.fourOfaKindValue = 0;
    this.hasThreeOfaKind = false;
    this.hasFourOfaKind = false;
    this.hasFiveOfaKind = false;
    this.hasSixOfaKind = false;
    this.hasTwoThreeOfaKinds = false;
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
          this.threeOfaKindCounter += 1;
          if (this.threeOfaKindCounter > 1) {
            // this.handleTwoThreeOfaKinds();
            this.hasTwoThreeOfaKinds = true;
            this.adjustForTwoThreeOfaKinds(this.threeOfaKindValue);
            this.currentRollTotal += 2500;
            this.handleMustRoll('You scored two 3 or a Kinds');
            this.canRoll = true;
          } else {
            this.handleThreeOfaKind(diceNum);
          }
        } else if (this.totalOnes === 4) {
          this.handleFourOfaKind(diceNum);
        } else if (this.totalOnes === 5) {
          this.handleFiveOfaKind(diceNum);
        } else if (this.totalOnes === 6) {
          this.handleSixOfaKind(diceNum);
        }
      } else if (diceNum === 2) {
        this.totalTwos += 1;
        if (this.totalTwos === 3) {
          this.threeOfaKindCounter += 1;
          if (this.threeOfaKindCounter > 1) {
            this.hasTwoThreeOfaKinds = true;
            this.adjustForTwoThreeOfaKinds(this.threeOfaKindValue);
            this.currentRollTotal += 2500;
            this.handleMustRoll('You scored two 3 or a Kinds');
            this.canRoll = true;
          } else {
            this.handleThreeOfaKind(diceNum);
          }
        } else if (this.totalTwos === 4) {
          this.handleFourOfaKind(diceNum);
        } else if (this.totalTwos === 5) {
          this.handleFiveOfaKind(diceNum);
        } else if (this.totalTwos === 6) {
          this.handleSixOfaKind(diceNum);
        }
      } else if (diceNum === 3) {
        this.totalThrees += 1;
        if (this.totalThrees === 3) {
          this.threeOfaKindCounter += 1;
          if (this.threeOfaKindCounter > 1) {
            this.hasTwoThreeOfaKinds = true;
            this.adjustForTwoThreeOfaKinds(this.threeOfaKindValue);
            this.currentRollTotal += 2500;
            this.handleMustRoll('You scored two 3 or a Kinds');
            this.canRoll = true;
          } else {
            this.handleThreeOfaKind(diceNum);
          }
        } else if (this.totalThrees === 4) {
          this.handleFourOfaKind(diceNum);
        } else if (this.totalThrees === 5) {
          this.handleFiveOfaKind(diceNum);
        } else if (this.totalThrees === 6) {
          this.handleSixOfaKind(diceNum);
        }
      } else if (diceNum === 4) {
        this.totalFours += 1;
        if (this.totalFours === 3) {
          this.threeOfaKindCounter += 1;
          if (this.threeOfaKindCounter > 1) {
            this.hasTwoThreeOfaKinds = true;
            this.adjustForTwoThreeOfaKinds(this.threeOfaKindValue);
            this.currentRollTotal += 2500;
            this.handleMustRoll('You scored two 3 or a Kinds');
            this.canRoll = true;
          } else {
            this.handleThreeOfaKind(diceNum);
          }
        } else if (this.totalFours === 4) {
          this.handleFourOfaKind(diceNum);
        } else if (this.totalFours === 5) {
          this.handleFiveOfaKind(diceNum);
        } else if (this.totalFours === 6) {
          this.handleSixOfaKind(diceNum);
        }
      } else if (diceNum === 5) {
        this.totalFives += 1;
        if (this.totalFives === 3) {
          this.threeOfaKindCounter += 1;
          if (this.threeOfaKindCounter > 1) {
            this.hasTwoThreeOfaKinds = true;
            this.adjustForTwoThreeOfaKinds(this.threeOfaKindValue);
            this.currentRollTotal += 2500;
            this.handleMustRoll('You scored two 3 or a Kinds');
            this.canRoll = true;
          } else {
            this.handleThreeOfaKind(diceNum);
          }
        } else if (this.totalFives === 4) {
          this.handleFourOfaKind(diceNum);
        } else if (this.totalFives === 5) {
          this.handleFiveOfaKind(diceNum);
        } else if (this.totalFives === 6) {
          this.handleSixOfaKind(diceNum);
        }
      } else if (diceNum === 6) {
        this.totalSixes += 1;
        if (this.totalSixes === 3) {
          this.threeOfaKindCounter += 1;
          if (this.threeOfaKindCounter > 1) {
            this.hasTwoThreeOfaKinds = true;
            this.adjustForTwoThreeOfaKinds(this.threeOfaKindValue);
            this.currentRollTotal += 2500;
            this.handleMustRoll('You scored two 3 or a Kinds');
            this.canRoll = true;
          } else {
            this.handleThreeOfaKind(diceNum);
          }
        } else if (this.totalSixes === 4) {
          this.handleFourOfaKind(diceNum);
        } else if (this.totalSixes === 5) {
          this.handleFiveOfaKind(diceNum);
        } else if (this.totalSixes === 6) {
          this.handleSixOfaKind(diceNum);
        }
      }
    });
    if (this.hasThreeOfaKind) {
      this.autoDismissSnackBar('You rolled 3 of a kind!', 'Keep Going?');
      this.checkForMustRoll(this.threeOfaKindValue);
    } else if (this.hasFourOfaKind) {
      this.autoDismissSnackBar('You rolled 4 of a kind!', 'Keep Going?');
      this.checkForFourOfaKindPlusPair(this.fourOfaKindValue);
    } else {
      this.checkForValidDice();
    }
  }

  checkForFourOfaKindPlusPair(diceNum: number) {
    let tempDiceArray: number[] = [];
    if (this.rolledDiceArray.length > 1) {
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
    if (tempDiceArray[0] === tempDiceArray[1]) {
      this.currentRollTotal += 500;
      this.handleMustRoll('You rolled 4 of a kind + 1 pair!');
      this.canRoll = true;
    }
  }

  checkForValidDice() {
    if (this.rolledDiceArray.includes(1) || this.rolledDiceArray.includes(5)) {
      this.rollIsValid = true;
    } else {
      this.autoDismissSnackBar('No Valid Dice!', 'Farkle!!');
      setTimeout(() => {
        this.resetDice();
        this.togglePlayer();
      }, 2000);
    }
  }

  disableThreeOfaKind(dice: number) {
    this.diceArray.forEach((el) => {
      if (el.diceValue === dice) {
        if (el.diceNumber === 1) {
          this.dice1Disabled = true;
          this.dice1Locked = true;
        } else if (el.diceNumber === 2) {
          this.dice2Disabled = true;
          this.dice2Locked = true;
        } else if (el.diceNumber === 3) {
          this.dice3Disabled = true;
          this.dice3Locked = true;
        } else if (el.diceNumber === 4) {
          this.dice4Disabled = true;
          this.dice4Locked = true;
        } else if (el.diceNumber === 5) {
          this.dice5Disabled = true;
          this.dice5Locked = true;
        } else if (el.diceNumber === 6) {
          this.dice6Disabled = true;
          this.dice6Locked = true;
        }
      }
    });
  }

  handleTwoThreeOfaKinds() {
    console.log('Start Handle 2 - 3 of a kind');
    this.hasTwoThreeOfaKinds = true;
    this.adjustForTwoThreeOfaKinds(this.threeOfaKindValue);
    this.currentRollTotal += 2500;
    this.handleMustRoll('You scored two 3 or a Kinds');
    this.canRoll = true;
  }

  handleThreeOfaKind(num: number) {
    if (num === 1) {
      this.currentRollTotal += 300;
    } else if (num === 2) {
      this.currentRollTotal += 200;
    } else if (num === 3) {
      this.currentRollTotal += 300;
    } else if (num === 4) {
      this.currentRollTotal += 400;
    } else if (num === 5) {
      this.currentRollTotal += 500;
    } else {
      this.currentRollTotal += 600;
    }
    this.autoDismissSnackBar('You rolled 3 of a kind!', 'Keep Going?');
    this.disableThreeOfaKind(num);
    this.threeOfaKindValue = num;
    this.hasThreeOfaKind = true;
    this.canRoll = true;
  }

  handleFourOfaKind(num: number) {
    if (num === 1) {
      this.currentRollTotal += 700;
    } else if (num === 2) {
      this.currentRollTotal += 800;
    } else if (num === 3) {
      this.currentRollTotal += 700;
    } else if (num === 4) {
      this.currentRollTotal += 600;
    } else if (num === 5) {
      this.currentRollTotal += 500;
    } else {
      this.currentRollTotal += 400;
    }
    this.autoDismissSnackBar('You rolled 4 of a kind!', 'Keep Going?');
    this.disableThreeOfaKind(num);
    this.hasThreeOfaKind = false;
    this.hasFourOfaKind = true;
    this.fourOfaKindValue = num;
    this.canRoll = true;
  }

  handleFiveOfaKind(num: number) {
    this.autoDismissSnackBar('You rolled 5 of a kind!', 'Keep Going?');
    this.currentRollTotal += 1000;
    this.hasFourOfaKind = false;
    this.canRoll = true;
  }

  handleSixOfaKind(num: number) {
    this.currentRollTotal += 1000;
    this.handleMustRoll('You scored 6 of a kind!');
    this.canRoll = true;
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
      this.mustRollAgain = true;
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
    if (!this.mustRollAgain) {
      this.currentRollTotal = 0;
    }
    this.canRoll = true;
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
    if (
      val === 1 &&
      (this.dice1Value === 1 || this.dice1Value === 5) &&
      !this.dice1Locked
    ) {
      this.dice1Disabled = !this.dice1Disabled;
      if (this.dice1Value === 1 && this.dice1Disabled) {
        this.currentRollTotal += 100;
        this.canRoll = true;
      } else if (this.dice1Value === 1 && !this.dice1Disabled) {
        this.currentRollTotal -= 100;
        this.canRoll = false;
      } else if (this.dice1Value === 5 && this.dice1Disabled) {
        this.currentRollTotal += 50;
        this.canRoll = true;
      } else if (this.dice1Value === 5 && !this.dice1Disabled) {
        this.currentRollTotal -= 50;
        this.canRoll = false;
      }
    } else if (
      val === 2 &&
      (this.dice2Value === 1 || this.dice2Value === 5) &&
      !this.dice2Locked
    ) {
      this.dice2Disabled = !this.dice2Disabled;
      if (this.dice2Value === 1 && this.dice2Disabled) {
        this.currentRollTotal += 100;
        this.canRoll = true;
      } else if (this.dice2Value === 1 && !this.dice2Disabled) {
        this.currentRollTotal -= 100;
        this.canRoll = false;
      } else if (this.dice2Value === 5 && this.dice2Disabled) {
        this.currentRollTotal += 50;
        this.canRoll = true;
      } else if (this.dice2Value === 5 && !this.dice2Disabled) {
        this.currentRollTotal -= 50;
        this.canRoll = false;
      }
    } else if (
      val === 3 &&
      (this.dice3Value === 1 || this.dice3Value === 5) &&
      !this.dice3Locked
    ) {
      this.dice3Disabled = !this.dice3Disabled;
      if (this.dice3Value === 1 && this.dice3Disabled) {
        this.currentRollTotal += 100;
        this.canRoll = true;
      } else if (this.dice3Value === 1 && !this.dice3Disabled) {
        this.currentRollTotal -= 100;
        this.canRoll = false;
      } else if (this.dice3Value === 5 && this.dice3Disabled) {
        this.currentRollTotal += 50;
        this.canRoll = true;
      } else if (this.dice3Value === 5 && !this.dice3Disabled) {
        this.currentRollTotal -= 50;
        this.canRoll = false;
      }
    } else if (
      val === 4 &&
      (this.dice4Value === 1 || this.dice4Value === 5) &&
      !this.dice4Locked
    ) {
      this.dice4Disabled = !this.dice4Disabled;
      if (this.dice4Value === 1 && this.dice4Disabled) {
        this.currentRollTotal += 100;
        this.canRoll = true;
      } else if (this.dice4Value === 1 && !this.dice4Disabled) {
        this.currentRollTotal -= 100;
        this.canRoll = false;
      } else if (this.dice4Value === 5 && this.dice4Disabled) {
        this.currentRollTotal += 50;
        this.canRoll = true;
      } else if (this.dice4Value === 5 && !this.dice4Disabled) {
        this.currentRollTotal -= 50;
        this.canRoll = false;
      }
    } else if (
      val === 5 &&
      (this.dice5Value === 1 || this.dice5Value === 5) &&
      !this.dice5Locked
    ) {
      this.dice5Disabled = !this.dice5Disabled;
      if (this.dice5Value === 1 && this.dice5Disabled) {
        this.currentRollTotal += 100;
        this.canRoll = true;
      } else if (this.dice5Value === 1 && !this.dice5Disabled) {
        this.currentRollTotal -= 100;
        this.canRoll = false;
      } else if (this.dice5Value === 5 && this.dice5Disabled) {
        this.currentRollTotal += 50;
        this.canRoll = true;
      } else if (this.dice5Value === 5 && !this.dice5Disabled) {
        this.currentRollTotal -= 50;
        this.canRoll = false;
      }
    } else if (
      val === 6 &&
      (this.dice6Value === 1 || this.dice6Value === 5) &&
      !this.dice6Locked
    ) {
      this.dice6Disabled = !this.dice6Disabled;
      if (this.dice6Value === 1 && this.dice6Disabled) {
        this.currentRollTotal += 100;
        this.canRoll = true;
      } else if (this.dice6Value === 1 && !this.dice6Disabled) {
        this.currentRollTotal -= 100;
        this.canRoll = false;
      } else if (this.dice6Value === 5 && this.dice6Disabled) {
        this.currentRollTotal += 50;
        this.canRoll = true;
      } else if (this.dice6Value === 5 && !this.dice6Disabled) {
        this.currentRollTotal -= 50;
        this.canRoll = false;
      }
    }
  }

  /* Subtracts the score added when the first 3 of a kind
     is found.  This happens just before the second 3 of a kind
     is scored.
  */
  adjustForTwoThreeOfaKinds(num: number) {
    if (num === 1) {
      this.currentRollTotal -= 300;
    } else if (num === 2) {
      this.currentRollTotal -= 200;
    } else if (num === 3) {
      this.currentRollTotal -= 300;
    } else if (num === 4) {
      this.currentRollTotal -= 400;
    } else if (num === 5) {
      this.currentRollTotal -= 500;
    } else if (num === 6) {
      this.currentRollTotal -= 600;
    }
  }

  togglePlayer() {
    if (this.activePlayer === 1) {
      this.activePlayer = 2;
      this.resetDice();
    } else if (this.activePlayer === 2) {
      this.activePlayer = 1;
      this.resetDice();
    }
  }

  bankCurrentScore() {
    if (this.activePlayer === 1) {
      if (this.player1Score < 500 && this.currentRollTotal < 500) {
        this.autoDismissSnackBar(
          'You must have 500 points to open!',
          'Try Again!'
        );
      } else {
        this.player1Score += this.currentRollTotal;
        this.checkForWinningScore(1);
      }
    } else {
      if (this.player2Score < 500 && this.currentRollTotal < 500) {
        this.autoDismissSnackBar(
          'You must have 500 points to open!',
          'Try Again!'
        );
      } else {
        this.player2Score += this.currentRollTotal;
        this.checkForWinningScore(2);
      }
    }
  }

  checkForWinningScore(player: number) {
    if (player === 1 && this.player1Score >= this.winningScore) {
      this.gameOver = true;
      this.manualDismissSnackBar(
        `Player 1 wins ${this.player1Score} to ${this.player2Score}`,
        'Play Again?'
      );
    } else if (player === 2 && this.player2Score >= this.winningScore) {
      this.gameOver = true;
      this.manualDismissSnackBar(
        `Player 2 wins ${this.player2Score} to ${this.player1Score}`,
        'Play Again?'
      );
    } else {
      this.togglePlayer();
    }
  }

  newGame() {
    this.gameOver = false;
    this.activePlayer = 1;
    this.currentRollTotal = 0;
    this.player1Score = 0;
    this.player2Score = 0;
    this.resetDice();
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
