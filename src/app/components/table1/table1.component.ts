import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.scss'],
})
export class Table1Component implements OnInit {
  rollNumber: number = 0;
  turnComplete: boolean = false;
  activePlayer: number = 1;
  gameOver: boolean = false;
  gameResults: string = '';

  dice1Value: number = 1;
  dice2Value: number = 1;
  dice3Value: number = 1;
  dice4Value: number = 1;
  dice5Value: number = 1;

  dice1Disabled: boolean = false;
  dice2Disabled: boolean = false;
  dice3Disabled: boolean = false;
  dice4Disabled: boolean = false;
  dice5Disabled: boolean = false;

  diceValueArray: number[] = [1, 2, 3, 4, 5, 6];

  p1Aces: number = 0;
  p1Twos: number = 0;
  p1Threes: number = 0;
  p1Fours: number = 0;
  p1Fives: number = 0;
  p1Sixes: number = 0;
  p1UpTotal: number = 0;
  p1Bonus: number = 0;
  p1UpGrandTotal: number = 0;
  p1ThreeKind: number = 0;
  p1FourKind: number = 0;
  p1FullHouse: number = 0;
  p1SmStraight: number = 0;
  p1LgStraight: number = 0;
  p1Yahtzee: number = 0;
  p1Chance: number = 0;
  p1LowTotal: number = 0;
  p1GrandTotal: number = 0;

  p2Aces: number = 0;
  p2Twos: number = 0;
  p2Threes: number = 0;
  p2Fours: number = 0;
  p2Fives: number = 0;
  p2Sixes: number = 0;
  p2UpTotal: number = 0;
  p2Bonus: number = 0;
  p2UpGrandTotal: number = 0;
  p2ThreeKind: number = 0;
  p2FourKind: number = 0;
  p2FullHouse: number = 0;
  p2SmStraight: number = 0;
  p2LgStraight: number = 0;
  p2Yahtzee: number = 0;
  p2Chance: number = 0;
  p2LowTotal: number = 0;
  p2GrandTotal: number = 0;

  p1AcesBtnDisabled: boolean = false;
  p2AcesBtnDisabled: boolean = false;
  p1TwosBtnDisabled: boolean = false;
  p2TwosBtnDisabled: boolean = false;
  p1ThreesBtnDisabled: boolean = false;
  p2ThreesBtnDisabled: boolean = false;
  p1FoursBtnDisabled: boolean = false;
  p2FoursBtnDisabled: boolean = false;
  p1FivesBtnDisabled: boolean = false;
  p2FivesBtnDisabled: boolean = false;
  p1SixesBtnDisabled: boolean = false;
  p2SixesBtnDisabled: boolean = false;
  p1ThreeKindBtnDisabled: boolean = false;
  p2ThreeKindBtnDisabled: boolean = false;
  p1FourKindBtnDisabled: boolean = false;
  p2FourKindBtnDisabled: boolean = false;
  p1FullHouseBtnDisabled: boolean = false;
  p2FullHouseBtnDisabled: boolean = false;
  p1SmStraightBtnDisabled: boolean = false;
  p2SmStraightBtnDisabled: boolean = false;
  p1LgStraightBtnDisabled: boolean = false;
  p2LgStraightBtnDisabled: boolean = false;
  p1YahtzeeBtnDisabled: boolean = false;
  p2YahtzeeBtnDisabled: boolean = false;
  p1ChanceBtnDisabled: boolean = false;
  p2ChanceBtnDisabled: boolean = false;

  currentAcesBtn: boolean = false;
  currentTwosBtn: boolean = false;
  currentThreesBtn: boolean = false;
  currentFoursBtn: boolean = false;
  currentFivesBtn: boolean = false;
  currentSixesBtn: boolean = false;
  currentThreeKindBtn: boolean = false;
  currentFourKindBtn: boolean = false;
  currentFullHouseBtn: boolean = false;
  currentSmStraightBtn: boolean = false;
  currentLgStraightBtn: boolean = false;
  currentYahtzeeBtn: boolean = false;
  currentChanceBtn: boolean = false;

  disabledBtnArray = [
    'p1AcesBtnDisabled',
    'p1TwosBtnDisabled',
    'p1ThreesBtnDisabled',
    'p1FoursBtnDisabled',
    'p1FivesBtnDisabled',
    'p1SixesBtnDisabled',
    'p1ThreeKindBtnDisabled',
    'p1FourKindBtnDisabled',
    'p1FullHouseBtnDisabled',
    'p1SmStraightBtnDisabled',
    'p1LgStraightBtnDisabled',
    'p1YahtzeeBtnDisabled',
    'p1ChanceBtnDisabled',
    'p2AcesBtnDisabled',
    'p2TwosBtnDisabled',
    'p2ThreesBtnDisabled',
    'p2FoursBtnDisabled',
    'p2FivesBtnDisabled',
    'p2SixesBtnDisabled',
    'p2ThreeKindBtnDisabled',
    'p2FourKindBtnDisabled',
    'p2FullHouseBtnDisabled',
    'p2SmStraightBtnDisabled',
    'p2LgStraightBtnDisabled',
    'p2YahtzeeBtnDisabled',
    'p2ChanceBtnDisabled',
  ];
  scoringArray: number[] = [];

  constructor() {}

  ngOnInit(): void {}

  chooseDice1() {
    this.dice1Disabled = !this.dice1Disabled;
  }
  chooseDice2() {
    this.dice2Disabled = !this.dice2Disabled;
  }
  chooseDice3() {
    this.dice3Disabled = !this.dice3Disabled;
  }
  chooseDice4() {
    this.dice4Disabled = !this.dice4Disabled;
  }
  chooseDice5() {
    this.dice5Disabled = !this.dice5Disabled;
  }

  resetGame() {
    this.activePlayer = 1;
    this.rollNumber = 0;
    this.gameOver = false;
    this.resetDice();
    this.resetScores();
    this.resetDisabledButtons();
  }

  resetDice() {
    this.dice1Value = 1;
    this.dice2Value = 1;
    this.dice3Value = 1;
    this.dice4Value = 1;
    this.dice5Value = 1;
    this.dice1Disabled = false;
    this.dice2Disabled = false;
    this.dice3Disabled = false;
    this.dice4Disabled = false;
    this.dice5Disabled = false;
  }

  resetScores() {
    this.p1Aces = 0;
    this.p1Twos = 0;
    this.p1Threes = 0;
    this.p1Fours = 0;
    this.p1Fives = 0;
    this.p1Sixes = 0;
    this.p1UpTotal = 0;
    this.p1Bonus = 0;
    this.p1UpGrandTotal = 0;
    this.p1ThreeKind = 0;
    this.p1FourKind = 0;
    this.p1FullHouse = 0;
    this.p1SmStraight = 0;
    this.p1LgStraight = 0;
    this.p1Yahtzee = 0;
    this.p1Chance = 0;
    this.p1LowTotal = 0;
    this.p1GrandTotal = 0;

    this.p2Aces = 0;
    this.p2Twos = 0;
    this.p2Threes = 0;
    this.p2Fours = 0;
    this.p2Fives = 0;
    this.p2Sixes = 0;
    this.p2UpTotal = 0;
    this.p2Bonus = 0;
    this.p2UpGrandTotal = 0;
    this.p2ThreeKind = 0;
    this.p2FourKind = 0;
    this.p2FullHouse = 0;
    this.p2SmStraight = 0;
    this.p2LgStraight = 0;
    this.p2Yahtzee = 0;
    this.p2Chance = 0;
    this.p2LowTotal = 0;
    this.p2GrandTotal = 0;
  }

  resetDisabledButtons() {
    this.p1AcesBtnDisabled = false;
    this.p2AcesBtnDisabled = false;
    this.p1TwosBtnDisabled = false;
    this.p2TwosBtnDisabled = false;
    this.p1ThreesBtnDisabled = false;
    this.p2ThreesBtnDisabled = false;
    this.p1FoursBtnDisabled = false;
    this.p2FoursBtnDisabled = false;
    this.p1FivesBtnDisabled = false;
    this.p2FivesBtnDisabled = false;
    this.p1SixesBtnDisabled = false;
    this.p2SixesBtnDisabled = false;
    this.p1ThreeKindBtnDisabled = false;
    this.p2ThreeKindBtnDisabled = false;
    this.p1FourKindBtnDisabled = false;
    this.p2FourKindBtnDisabled = false;
    this.p1FullHouseBtnDisabled = false;
    this.p2FullHouseBtnDisabled = false;
    this.p1SmStraightBtnDisabled = false;
    this.p2SmStraightBtnDisabled = false;
    this.p1LgStraightBtnDisabled = false;
    this.p2LgStraightBtnDisabled = false;
    this.p1YahtzeeBtnDisabled = false;
    this.p2YahtzeeBtnDisabled = false;
    this.p1ChanceBtnDisabled = false;
    this.p2ChanceBtnDisabled = false;

    this.currentAcesBtn = false;
    this.currentTwosBtn = false;
    this.currentThreesBtn = false;
    this.currentFoursBtn = false;
    this.currentFivesBtn = false;
    this.currentSixesBtn = false;
    this.currentThreeKindBtn = false;
    this.currentFourKindBtn = false;
    this.currentFullHouseBtn = false;
    this.currentSmStraightBtn = false;
    this.currentLgStraightBtn = false;
    this.currentYahtzeeBtn = false;
    this.currentChanceBtn = false;
  }

  rollDice() {
    this.diceValueArray = [];
    if (this.rollNumber < 3) {
      if (this.dice1Disabled === false) {
        this.dice1Value = Math.floor(Math.random() * 6 + 1);
        this.diceValueArray.push(this.dice1Value);
      } else {
        this.diceValueArray.push(this.dice1Value);
      }
      if (this.dice2Disabled === false) {
        this.dice2Value = Math.floor(Math.random() * 6 + 1);
        this.diceValueArray.push(this.dice2Value);
      } else {
        this.diceValueArray.push(this.dice2Value);
      }
      if (this.dice3Disabled === false) {
        this.dice3Value = Math.floor(Math.random() * 6 + 1);
        this.diceValueArray.push(this.dice3Value);
      } else {
        this.diceValueArray.push(this.dice3Value);
      }
      if (this.dice4Disabled === false) {
        this.dice4Value = Math.floor(Math.random() * 6 + 1);
        this.diceValueArray.push(this.dice4Value);
      } else {
        this.diceValueArray.push(this.dice4Value);
      }
      if (this.dice5Disabled === false) {
        this.dice5Value = Math.floor(Math.random() * 6 + 1);
        this.diceValueArray.push(this.dice5Value);
      } else {
        this.diceValueArray.push(this.dice5Value);
      }
    }
    this.rollNumber += 1;
    this.disableRollBtn();
    console.log(this.diceValueArray.sort());
  }

  addScore(val: number) {
    switch (val) {
      case 1:
        console.log('Score Aces');
        this.diceValueArray.forEach((el) => {
          if (this.activePlayer === 1) {
            if (el === 1) {
              this.p1Aces += 1;
            }
          } else {
            if (el === 1) {
              this.p2Aces += 1;
            }
          }
        });
        this.resetDice();
        this.disableAddBtn(val, this.activePlayer);
        this.togglePlayer();
        break;
      case 2:
        console.log('Score Twos');
        this.diceValueArray.forEach((el) => {
          if (this.activePlayer === 1) {
            if (el === 2) {
              this.p1Twos += 2;
            }
          } else {
            if (el === 2) {
              this.p2Twos += 2;
            }
          }
        });
        this.resetDice();
        this.disableAddBtn(val, this.activePlayer);
        this.togglePlayer();
        break;
      case 3:
        console.log('Score Threes');
        this.diceValueArray.forEach((el) => {
          if (this.activePlayer === 1) {
            if (el === 3) {
              this.p1Threes += 3;
            }
          } else {
            if (el === 3) {
              this.p2Threes += 3;
            }
          }
        });
        this.resetDice();
        this.disableAddBtn(val, this.activePlayer);
        this.togglePlayer();
        break;
      case 4:
        console.log('Score Fours');
        this.diceValueArray.forEach((el) => {
          if (this.activePlayer === 1) {
            if (el === 4) {
              this.p1Fours += 4;
            }
          } else {
            if (el === 4) {
              this.p2Fours += 4;
            }
          }
        });
        this.resetDice();
        this.disableAddBtn(val, this.activePlayer);
        this.togglePlayer();
        break;
      case 5:
        console.log('Score Fives');
        this.diceValueArray.forEach((el) => {
          if (this.activePlayer === 1) {
            if (el === 5) {
              this.p1Fives += 5;
            }
          } else {
            if (el === 5) {
              this.p2Fives += 5;
            }
          }
        });
        this.resetDice();
        this.disableAddBtn(val, this.activePlayer);
        this.togglePlayer();
        break;
      case 6:
        console.log('Score Sixes');
        this.diceValueArray.forEach((el) => {
          if (this.activePlayer === 1) {
            if (el === 6) {
              this.p1Sixes += 6;
            }
          } else {
            if (el === 6) {
              this.p2Sixes += 6;
            }
          }
        });
        this.resetDice();
        this.disableAddBtn(val, this.activePlayer);
        this.togglePlayer();
        break;
      case 7:
        console.log('Score 3 of a Kind');
        let threeKindtempSum: number = 0;
        let has3: boolean = false;

        this.diceValueArray.forEach((el) => {
          this.getOccurrence(this.diceValueArray, el);
        });

        has3 =
          this.scoringArray.includes(3) ||
          this.scoringArray.includes(4) ||
          this.scoringArray.includes(5);

        if (has3) {
          threeKindtempSum = this.diceValueArray.reduce((a, b) => {
            return a + b;
          });
        }
        if (this.activePlayer === 1) {
          this.p1ThreeKind = threeKindtempSum;
          this.scoringArray = [];
        } else {
          this.p2ThreeKind = threeKindtempSum;
          this.scoringArray = [];
        }
        this.resetDice();
        this.disableAddBtn(val, this.activePlayer);
        this.togglePlayer();
        break;
      case 8:
        console.log('Score 4 of a Kind');
        let fourKindtempSum: number = 0;
        let has4: boolean = false;

        this.diceValueArray.forEach((el) => {
          this.getOccurrence(this.diceValueArray, el);
        });

        has4 = this.scoringArray.includes(4) || this.scoringArray.includes(5);

        if (has4) {
          fourKindtempSum = this.diceValueArray.reduce((a, b) => {
            return a + b;
          });
        }
        if (this.activePlayer === 1) {
          this.p1FourKind = fourKindtempSum;
          this.scoringArray = [];
        } else {
          this.p2FourKind = fourKindtempSum;
          this.scoringArray = [];
        }
        this.resetDice();
        this.disableAddBtn(val, this.activePlayer);
        this.togglePlayer();
        break;
      case 9:
        console.log('Score Full House');
        let fullHouseTempSum: number = 0;
        let hasFullHouse: boolean = false;

        this.diceValueArray.forEach((el) => {
          this.getOccurrence(this.diceValueArray, el);
        });

        hasFullHouse =
          this.scoringArray.includes(2) && this.scoringArray.includes(3);
        if (hasFullHouse) {
          fullHouseTempSum = 25;
        }

        if (this.activePlayer === 1) {
          this.p1FullHouse = fullHouseTempSum;
          this.scoringArray = [];
        } else {
          this.p2FullHouse = fullHouseTempSum;
          this.scoringArray = [];
        }

        this.resetDice();
        this.disableAddBtn(val, this.activePlayer);
        this.togglePlayer();
        break;
      case 10:
        console.log('Score Sm Straight');
        let smStraightTempSum: number = 0;
        let hasSmStraight: boolean = false;

        hasSmStraight =
          (this.diceValueArray.includes(1) &&
            this.diceValueArray.includes(2) &&
            this.diceValueArray.includes(3) &&
            this.diceValueArray.includes(4)) ||
          (this.diceValueArray.includes(2) &&
            this.diceValueArray.includes(3) &&
            this.diceValueArray.includes(4) &&
            this.diceValueArray.includes(5)) ||
          (this.diceValueArray.includes(3) &&
            this.diceValueArray.includes(4) &&
            this.diceValueArray.includes(5) &&
            this.diceValueArray.includes(6));

        if (hasSmStraight) {
          smStraightTempSum = 30;
        }

        if (this.activePlayer === 1) {
          this.p1SmStraight = smStraightTempSum;
        } else {
          this.p2SmStraight = smStraightTempSum;
        }
        this.resetDice();
        this.disableAddBtn(val, this.activePlayer);
        this.togglePlayer();
        break;
      case 11:
        console.log('Score Lg Straight');
        let lgStraightTempSum: number = 0;
        let hasLgStraight: boolean = false;

        hasLgStraight =
          (this.diceValueArray.includes(1) &&
            this.diceValueArray.includes(2) &&
            this.diceValueArray.includes(3) &&
            this.diceValueArray.includes(4) &&
            this.diceValueArray.includes(5)) ||
          (this.diceValueArray.includes(2) &&
            this.diceValueArray.includes(3) &&
            this.diceValueArray.includes(4) &&
            this.diceValueArray.includes(5) &&
            this.diceValueArray.includes(6));

        if (hasLgStraight) {
          lgStraightTempSum = 40;
        }

        if (this.activePlayer === 1) {
          this.p1LgStraight = lgStraightTempSum;
        } else {
          this.p2LgStraight = lgStraightTempSum;
        }
        this.resetDice();
        this.disableAddBtn(val, this.activePlayer);
        this.togglePlayer();
        break;
      case 12:
        console.log('Score Yatzee');
        let yahtzeeTempSum: number = 0;
        let hasYahtzee: boolean = false;

        this.diceValueArray.forEach((el) => {
          this.getOccurrence(this.diceValueArray, el);
        });

        hasYahtzee = this.scoringArray.includes(5);

        if (hasYahtzee) {
          yahtzeeTempSum = 50;
        }

        if (this.activePlayer === 1) {
          this.p1Yahtzee = yahtzeeTempSum;
        } else {
          this.p2Yahtzee = yahtzeeTempSum;
        }
        this.resetDice();
        this.disableAddBtn(val, this.activePlayer);
        this.togglePlayer();
        break;
      case 13:
        console.log('Score Chance');
        let chanceTempSum: number = 0;

        chanceTempSum = this.diceValueArray.reduce((a, b) => {
          return a + b;
        });
        if (this.activePlayer === 1) {
          this.p1Chance = chanceTempSum;
        } else {
          this.p2Chance = chanceTempSum;
        }
        this.resetDice();
        this.disableAddBtn(val, this.activePlayer);
        this.togglePlayer();
        break;
    }
    this.totalUpperScores();
    this.totalLowerScores();
  }

  getOccurrence(arr: number[], value: number) {
    this.scoringArray.push(arr.filter((v: number) => v === value).length);
    console.log(this.scoringArray);
  }

  togglePlayer() {
    if (this.activePlayer === 1) {
      this.activePlayer = 2;
      this.setActiveButtons();
    } else {
      this.activePlayer = 1;
      this.setActiveButtons();
    }
  }

  disableRollBtn() {
    if (this.rollNumber === 3) {
      this.turnComplete = true;
    }
  }

  disableAddBtn(val: number, player: number) {
    console.log(val, player);
    if (val === 1 && player === 1) {
      this.p1AcesBtnDisabled = true;
    }
    if (val === 1 && player === 2) {
      this.p2AcesBtnDisabled = true;
    }
    if (val === 2 && player === 1) {
      this.p1TwosBtnDisabled = true;
    }
    if (val === 2 && player === 2) {
      this.p2TwosBtnDisabled = true;
    }
    if (val === 3 && player === 1) {
      this.p1ThreesBtnDisabled = true;
    }
    if (val === 3 && player === 2) {
      this.p2ThreesBtnDisabled = true;
    }
    if (val === 4 && player === 1) {
      this.p1FoursBtnDisabled = true;
    }
    if (val === 4 && player === 2) {
      this.p2FoursBtnDisabled = true;
    }
    if (val === 5 && player === 1) {
      this.p1FivesBtnDisabled = true;
    }
    if (val === 5 && player === 2) {
      this.p2FivesBtnDisabled = true;
    }
    if (val === 6 && player === 1) {
      this.p1SixesBtnDisabled = true;
    }
    if (val === 6 && player === 2) {
      this.p2SixesBtnDisabled = true;
    }
    if (val === 7 && player === 1) {
      this.p1ThreeKindBtnDisabled = true;
    }
    if (val === 7 && player === 2) {
      this.p2ThreeKindBtnDisabled = true;
    }
    if (val === 8 && player === 1) {
      this.p1FourKindBtnDisabled = true;
    }
    if (val === 8 && player === 2) {
      this.p2FourKindBtnDisabled = true;
    }
    if (val === 9 && player === 1) {
      this.p1FullHouseBtnDisabled = true;
    }
    if (val === 9 && player === 2) {
      this.p2FullHouseBtnDisabled = true;
    }
    if (val === 10 && player === 1) {
      this.p1SmStraightBtnDisabled = true;
    }
    if (val === 10 && player === 2) {
      this.p2SmStraightBtnDisabled = true;
    }
    if (val === 11 && player === 1) {
      this.p1LgStraightBtnDisabled = true;
    }
    if (val === 11 && player === 2) {
      this.p2LgStraightBtnDisabled = true;
    }
    if (val === 12 && player === 1) {
      this.p1YahtzeeBtnDisabled = true;
    }
    if (val === 12 && player === 2) {
      this.p2YahtzeeBtnDisabled = true;
    }
    if (val === 13 && player === 1) {
      this.p1ChanceBtnDisabled = true;
    }
    if (val === 13 && player === 2) {
      this.p2ChanceBtnDisabled = true;
    }
  }

  setActiveButtons() {
    if (this.activePlayer === 1) {
      this.currentAcesBtn = this.p1AcesBtnDisabled;
    } else {
      this.currentAcesBtn = this.p2AcesBtnDisabled;
    }
    if (this.activePlayer === 1) {
      this.currentTwosBtn = this.p1TwosBtnDisabled;
    } else {
      this.currentTwosBtn = this.p2TwosBtnDisabled;
    }
    if (this.activePlayer === 1) {
      this.currentThreesBtn = this.p1ThreesBtnDisabled;
    } else {
      this.currentThreesBtn = this.p2ThreesBtnDisabled;
    }
    if (this.activePlayer === 1) {
      this.currentFoursBtn = this.p1FoursBtnDisabled;
    } else {
      this.currentFoursBtn = this.p2FoursBtnDisabled;
    }
    if (this.activePlayer === 1) {
      this.currentFivesBtn = this.p1FivesBtnDisabled;
    } else {
      this.currentFivesBtn = this.p2FivesBtnDisabled;
    }
    if (this.activePlayer === 1) {
      this.currentSixesBtn = this.p1SixesBtnDisabled;
    } else {
      this.currentSixesBtn = this.p2SixesBtnDisabled;
    }
    if (this.activePlayer === 1) {
      this.currentThreeKindBtn = this.p1ThreeKindBtnDisabled;
    } else {
      this.currentThreeKindBtn = this.p2ThreeKindBtnDisabled;
    }
    if (this.activePlayer === 1) {
      this.currentFourKindBtn = this.p1FourKindBtnDisabled;
    } else {
      this.currentFourKindBtn = this.p2FourKindBtnDisabled;
    }
    if (this.activePlayer === 1) {
      this.currentFullHouseBtn = this.p1FullHouseBtnDisabled;
    } else {
      this.currentFullHouseBtn = this.p2FullHouseBtnDisabled;
    }
    if (this.activePlayer === 1) {
      this.currentSmStraightBtn = this.p1SmStraightBtnDisabled;
    } else {
      this.currentSmStraightBtn = this.p2SmStraightBtnDisabled;
    }
    if (this.activePlayer === 1) {
      this.currentLgStraightBtn = this.p1LgStraightBtnDisabled;
    } else {
      this.currentLgStraightBtn = this.p2LgStraightBtnDisabled;
    }
    if (this.activePlayer === 1) {
      this.currentYahtzeeBtn = this.p1YahtzeeBtnDisabled;
    } else {
      this.currentYahtzeeBtn = this.p2YahtzeeBtnDisabled;
    }
    if (this.activePlayer === 1) {
      this.currentChanceBtn = this.p1ChanceBtnDisabled;
    } else {
      this.currentChanceBtn = this.p2ChanceBtnDisabled;
    }

    this.rollNumber = 0;
    this.turnComplete = false;
  }

  totalUpperScores() {
    this.p1UpTotal =
      this.p1Aces +
      this.p1Twos +
      this.p1Threes +
      this.p1Fours +
      this.p1Fives +
      this.p1Sixes;

    this.p2UpTotal =
      this.p2Aces +
      this.p2Twos +
      this.p2Threes +
      this.p2Fours +
      this.p2Fives +
      this.p2Sixes;

    if (this.p1UpTotal >= 63) {
      this.p1Bonus = 35;
    }

    if (this.p2UpTotal >= 63) {
      this.p2Bonus = 35;
    }

    this.p1UpGrandTotal = this.p1UpTotal + this.p1Bonus;
    this.p2UpGrandTotal = this.p2UpTotal + this.p2Bonus;
  }

  totalLowerScores() {
    this.p1LowTotal =
      this.p1ThreeKind +
      this.p1FourKind +
      this.p1SmStraight +
      this.p1LgStraight +
      this.p1Yahtzee +
      this.p1Chance;
    this.p2LowTotal =
      this.p2ThreeKind +
      this.p2FourKind +
      this.p2SmStraight +
      this.p2LgStraight +
      this.p2Yahtzee +
      this.p2Chance;

    this.p1GrandTotal = this.p1UpGrandTotal + this.p1LowTotal;
    this.p2GrandTotal = this.p2UpGrandTotal + this.p2LowTotal;
    this.checkForWinner();
  }

  checkForWinner() {
    console.log('Winner');
    if (
      this.p1AcesBtnDisabled === true &&
      this.p1TwosBtnDisabled === true &&
      this.p1ThreesBtnDisabled === true &&
      this.p1FoursBtnDisabled === true &&
      this.p1FivesBtnDisabled === true &&
      this.p1SixesBtnDisabled === true &&
      this.p1ThreeKindBtnDisabled === true &&
      this.p1FourKindBtnDisabled === true &&
      this.p1FullHouseBtnDisabled === true &&
      this.p1SmStraightBtnDisabled === true &&
      this.p1LgStraightBtnDisabled === true &&
      this.p1YahtzeeBtnDisabled === true &&
      this.p1ChanceBtnDisabled === true &&
      this.p2AcesBtnDisabled === true &&
      this.p2TwosBtnDisabled === true &&
      this.p2ThreesBtnDisabled === true &&
      this.p2FoursBtnDisabled === true &&
      this.p2FivesBtnDisabled === true &&
      this.p2SixesBtnDisabled === true &&
      this.p2ThreeKindBtnDisabled === true &&
      this.p2FourKindBtnDisabled === true &&
      this.p2FullHouseBtnDisabled === true &&
      this.p2SmStraightBtnDisabled === true &&
      this.p2LgStraightBtnDisabled === true &&
      this.p2YahtzeeBtnDisabled === true &&
      this.p2ChanceBtnDisabled === true
    ) {
      if (this.p1GrandTotal > this.p2GrandTotal) {
        this.gameResults = `Player 1 Wins! ${this.p1GrandTotal} to ${this.p2GrandTotal}`;
      } else if (this.p1GrandTotal < this.p2GrandTotal) {
        this.gameResults = `Player 2 Wins! ${this.p2GrandTotal} to ${this.p1GrandTotal}`;
      } else {
        this.gameResults = 'Tie Game!! Try Again.';
      }
      this.gameOver = true;
    }
  }
}
