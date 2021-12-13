import { Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-yahtzee',
  templateUrl: './yahtzee.component.html',
  styleUrls: ['./yahtzee.component.scss'],
})
export class YahtzeeComponent {
  activePlayer: number = 1;
  rollCount: number = 0;
  turnComplete: boolean = false;
  gameOver: boolean = false;
  diceRollMax: boolean = false;
  gameResults: string = '';

  rolledDiceArray: number[] = [];
  scoringArray: number[] = [];

  player1_Score: number = 0;
  player1_Aces: number = 0;
  player1_Twos: number = 0;
  player1_Threes: number = 0;
  player1_Fours: number = 0;
  player1_Fives: number = 0;
  player1_Sixes: number = 0;
  player1_UpperSubtotal: number = 0;
  player1_UpperBonus: number = 0;
  player1_ThreeOfaKind: number = 0;
  player1_FourOfaKind: number = 0;
  player1_FullHouse: number = 0;
  player1_SmStraight: number = 0;
  player1_LgStraight: number = 0;
  player1_Yahtzee: number = 0;
  player1_Chance: number = 0;
  player1_UpperTotal: number = 0;
  player1_LowerTotal: number = 0;
  player1_GrandTotal: number = 0;

  player1_hasAces: boolean = false;
  player1_hasTwos: boolean = false;
  player1_hasThrees: boolean = false;
  player1_hasFours: boolean = false;
  player1_hasFives: boolean = false;
  player1_hasSixes: boolean = false;
  player1_hasThreeKind: boolean = false;
  player1_hasFourKind: boolean = false;
  player1_hasFullHouse: boolean = false;
  player1_hasSmStraight: boolean = false;
  player1_hasLgStraight: boolean = false;
  player1_hasYahtzee: boolean = false;
  player1_hasChance: boolean = false;

  player1_AcesBtnDisabled: boolean = false;
  player1_TwosBtnDisabled: boolean = false;
  player1_ThreesBtnDisabled: boolean = false;
  player1_FoursBtnDisabled: boolean = false;
  player1_FivesBtnDisabled: boolean = false;
  player1_SixesBtnDisabled: boolean = false;
  player1_ThreeKindBtnDisabled: boolean = false;
  player1_FourKindBtnDisabled: boolean = false;
  player1_FullHouseBtnDisabled: boolean = false;
  player1_SmStraightBtnDisabled: boolean = false;
  player1_LgStraightBtnDisabled: boolean = false;
  player1_YahtzeeBtnDisabled: boolean = false;
  player1_ChanceBtnDisabled: boolean = false;

  player2_Score: number = 0;
  player2_Aces: number = 0;
  player2_Twos: number = 0;
  player2_Threes: number = 0;
  player2_Fours: number = 0;
  player2_Fives: number = 0;
  player2_Sixes: number = 0;
  player2_UpperSubtotal: number = 0;
  player2_UpperBonus: number = 0;
  player2_ThreeOfaKind: number = 0;
  player2_FourOfaKind: number = 0;
  player2_FullHouse: number = 0;
  player2_SmStraight: number = 0;
  player2_LgStraight: number = 0;
  player2_Yahtzee: number = 0;
  player2_Chance: number = 0;
  player2_UpperTotal: number = 0;
  player2_LowerTotal: number = 0;
  player2_GrandTotal: number = 0;

  player2_hasAces: boolean = false;
  player2_hasTwos: boolean = false;
  player2_hasThrees: boolean = false;
  player2_hasFours: boolean = false;
  player2_hasFives: boolean = false;
  player2_hasSixes: boolean = false;
  player2_hasThreeKind: boolean = false;
  player2_hasFourKind: boolean = false;
  player2_hasFullHouse: boolean = false;
  player2_hasSmStraight: boolean = false;
  player2_hasLgStraight: boolean = false;
  player2_hasYahtzee: boolean = false;
  player2_hasChance: boolean = false;

  player2_AcesBtnDisabled: boolean = false;
  player2_TwosBtnDisabled: boolean = false;
  player2_ThreesBtnDisabled: boolean = false;
  player2_FoursBtnDisabled: boolean = false;
  player2_FivesBtnDisabled: boolean = false;
  player2_SixesBtnDisabled: boolean = false;
  player2_ThreeKindBtnDisabled: boolean = false;
  player2_FourKindBtnDisabled: boolean = false;
  player2_FullHouseBtnDisabled: boolean = false;
  player2_SmStraightBtnDisabled: boolean = false;
  player2_LgStraightBtnDisabled: boolean = false;
  player2_YahtzeeBtnDisabled: boolean = false;
  player2_ChanceBtnDisabled: boolean = false;

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

  constructor(private snackBar: MatSnackBar) {}

  rollDice() {
    console.log('Rolling Dice');
    this.rolledDiceArray = [];
    console.log(this.rollCount);
    if (this.rollCount < 3) {
      if (this.dice1Disabled === false) {
        this.dice1Value = Math.floor(Math.random() * 6 + 1);
        this.rolledDiceArray.push(this.dice1Value);
      } else {
        this.dice1Value = this.dice1Value;
        this.rolledDiceArray.push(this.dice1Value);
      }
      if (this.dice2Disabled === false) {
        this.dice2Value = Math.floor(Math.random() * 6 + 1);
        this.rolledDiceArray.push(this.dice2Value);
      } else {
        this.dice2Value = this.dice2Value;
        this.rolledDiceArray.push(this.dice2Value);
      }
      if (this.dice3Disabled === false) {
        this.dice3Value = Math.floor(Math.random() * 6 + 1);
        this.rolledDiceArray.push(this.dice3Value);
      } else {
        this.dice3Value = this.dice3Value;
        this.rolledDiceArray.push(this.dice3Value);
      }
      if (this.dice4Disabled === false) {
        this.dice4Value = Math.floor(Math.random() * 6 + 1);
        this.rolledDiceArray.push(this.dice4Value);
      } else {
        this.dice4Value = this.dice4Value;
        this.rolledDiceArray.push(this.dice4Value);
      }
      if (this.dice5Disabled === false) {
        this.dice5Value = Math.floor(Math.random() * 6 + 1);
        this.rolledDiceArray.push(this.dice5Value);
      } else {
        this.dice5Value = this.dice5Value;
        this.rolledDiceArray.push(this.dice5Value);
      }
    }
    console.log(this.rolledDiceArray);
    this.rollCount += 1;
    if (this.rollCount === 3) {
      this.diceRollMax = true;
    }
  }

  selectDice(num: number) {
    console.log(num);
    if (num === 1) {
      this.dice1Disabled = !this.dice1Disabled;
    } else if (num === 2) {
      this.dice2Disabled = !this.dice2Disabled;
    } else if (num === 3) {
      this.dice3Disabled = !this.dice3Disabled;
    } else if (num === 4) {
      this.dice4Disabled = !this.dice4Disabled;
    } else {
      this.dice5Disabled = !this.dice5Disabled;
    }
  }

  scoreUpperDice(diceNum: number) {
    console.log(diceNum);
    if (this.activePlayer === 1) {
      if (diceNum === 1 && !this.player1_hasAces) {
        this.rolledDiceArray.forEach((el) => {
          if (el === 1) {
            this.player1_Aces += 1;
            this.player1_hasAces = true;
          }
        });
        console.log(this.player1_Aces);
      } else if (diceNum === 2 && !this.player1_hasTwos) {
        this.rolledDiceArray.forEach((el) => {
          if (el === 2) {
            this.player1_Twos += 2;
            this.player1_hasTwos = true;
          }
        });
        console.log(this.player1_Twos);
      } else if (diceNum === 3 && !this.player1_hasThrees) {
        this.rolledDiceArray.forEach((el) => {
          if (el === 3) {
            this.player1_Threes += 3;
            this.player1_hasThrees = true;
          }
        });
        console.log(this.player1_Threes);
      } else if (diceNum === 4 && !this.player1_hasFours) {
        this.rolledDiceArray.forEach((el) => {
          if (el === 4) {
            this.player1_Fours += 4;
            this.player1_hasFours = true;
          }
        });
        console.log(this.player1_Fours);
      } else if (diceNum === 5 && !this.player1_hasFives) {
        this.rolledDiceArray.forEach((el) => {
          if (el === 5) {
            this.player1_Fives += 5;
            this.player1_hasFives = true;
          }
        });
        console.log(this.player1_Fives);
      } else if (diceNum === 6 && !this.player1_hasSixes) {
        this.rolledDiceArray.forEach((el) => {
          if (el === 6) {
            this.player1_Sixes += 6;
            this.player1_hasSixes = true;
          }
        });
        console.log(this.player1_Sixes);
      }
    }
    if (this.activePlayer === 2) {
      if (diceNum === 1 && !this.player2_hasAces) {
        this.rolledDiceArray.forEach((el) => {
          if (el === 1) {
            this.player2_Aces += 1;
            this.player2_hasAces = true;
          }
        });
        console.log(this.player2_Aces);
      } else if (diceNum === 2 && !this.player2_hasTwos) {
        this.rolledDiceArray.forEach((el) => {
          if (el === 2) {
            this.player2_Twos += 2;
            this.player2_hasTwos = true;
          }
        });
        console.log(this.player2_Twos);
      } else if (diceNum === 3 && !this.player2_hasThrees) {
        this.rolledDiceArray.forEach((el) => {
          if (el === 3) {
            this.player2_Threes += 3;
            this.player2_hasThrees = true;
          }
        });
        console.log(this.player2_Threes);
      } else if (diceNum === 4 && !this.player2_hasFours) {
        this.rolledDiceArray.forEach((el) => {
          if (el === 4) {
            this.player2_Fours += 4;
            this.player2_hasFours = true;
          }
        });
        console.log(this.player2_Fours);
      } else if (diceNum === 5 && !this.player2_hasFives) {
        this.rolledDiceArray.forEach((el) => {
          if (el === 5) {
            this.player2_Fives += 5;
            this.player2_hasFives = true;
          }
        });
        console.log(this.player2_Fives);
      } else if (diceNum === 6 && !this.player2_hasSixes) {
        this.rolledDiceArray.forEach((el) => {
          if (el === 6) {
            this.player2_Sixes += 6;
            this.player2_hasSixes = true;
          }
        });
        console.log(this.player2_Sixes);
      }
    }
    this.resetDice();
    this.disableAddBtn(diceNum, this.activePlayer);
    this.togglePlayer();
  }

  scoreThreeOfaKind(val: number) {
    console.log('score 3 of a kind', val);
    let threeKindtempSum: number = 0;
    let has3: boolean = false;

    this.rolledDiceArray.forEach((el) => {
      this.getOccurrence(this.rolledDiceArray, el);
    });

    has3 =
      this.scoringArray.includes(3) ||
      this.scoringArray.includes(4) ||
      this.scoringArray.includes(5);

    if (has3) {
      threeKindtempSum = this.rolledDiceArray.reduce((a, b) => {
        return a + b;
      });
    }
    if (this.activePlayer === 1) {
      this.player1_ThreeOfaKind = threeKindtempSum;
      this.scoringArray = [];
    } else {
      this.player2_ThreeOfaKind = threeKindtempSum;
      this.scoringArray = [];
    }
    this.resetDice();
    this.disableAddBtn(val, this.activePlayer);
    this.togglePlayer();
  }

  scoreFourOfaKind(val: number) {
    console.log('score 4 of a kind', val);
    let fourKindtempSum: number = 0;
    let has4: boolean = false;

    this.rolledDiceArray.forEach((el) => {
      this.getOccurrence(this.rolledDiceArray, el);
    });

    has4 = this.scoringArray.includes(4) || this.scoringArray.includes(5);

    if (has4) {
      fourKindtempSum = this.rolledDiceArray.reduce((a, b) => {
        return a + b;
      });
    }
    if (this.activePlayer === 1) {
      this.player1_FourOfaKind = fourKindtempSum;
      this.scoringArray = [];
    } else {
      this.player2_FourOfaKind = fourKindtempSum;
      this.scoringArray = [];
    }
    this.resetDice();
    this.disableAddBtn(val, this.activePlayer);
    this.togglePlayer();
  }

  scoreFullHouse(val: number) {
    console.log('score full house', val);
    let fullHouseTempSum: number = 0;
    let hasFullHouse: boolean = false;

    this.rolledDiceArray.forEach((el) => {
      this.getOccurrence(this.rolledDiceArray, el);
    });

    hasFullHouse =
      this.scoringArray.includes(2) && this.scoringArray.includes(3);
    if (hasFullHouse) {
      fullHouseTempSum = 25;
    }

    if (this.activePlayer === 1) {
      this.player1_FullHouse = fullHouseTempSum;
      this.scoringArray = [];
    } else {
      this.player2_FullHouse = fullHouseTempSum;
      this.scoringArray = [];
    }

    this.resetDice();
    this.disableAddBtn(val, this.activePlayer);
    this.togglePlayer();
  }

  scoreSmStraight(val: number) {
    console.log('score small straight', val);
    if (
      (this.rolledDiceArray.includes(1) &&
        this.rolledDiceArray.includes(2) &&
        this.rolledDiceArray.includes(3) &&
        this.rolledDiceArray.includes(4)) ||
      (this.rolledDiceArray.includes(2) &&
        this.rolledDiceArray.includes(3) &&
        this.rolledDiceArray.includes(4) &&
        this.rolledDiceArray.includes(5)) ||
      (this.rolledDiceArray.includes(3) &&
        this.rolledDiceArray.includes(4) &&
        this.rolledDiceArray.includes(5) &&
        this.rolledDiceArray.includes(6))
    ) {
      if (this.activePlayer === 1) {
        this.player1_SmStraight = 30;
        this.player1_hasSmStraight = true;
      } else {
        this.player2_SmStraight = 30;
        this.player2_hasSmStraight = true;
      }
    }
    this.resetDice();
    this.disableAddBtn(val, this.activePlayer);
    this.togglePlayer();
  }

  scoreLgStraight(val: number) {
    console.log('score large straight', val);
    if (
      (this.rolledDiceArray.includes(1) &&
        this.rolledDiceArray.includes(2) &&
        this.rolledDiceArray.includes(3) &&
        this.rolledDiceArray.includes(4) &&
        this.rolledDiceArray.includes(5)) ||
      (this.rolledDiceArray.includes(2) &&
        this.rolledDiceArray.includes(3) &&
        this.rolledDiceArray.includes(4) &&
        this.rolledDiceArray.includes(5) &&
        this.rolledDiceArray.includes(6))
    ) {
      if (this.activePlayer === 1) {
        this.player1_LgStraight = 40;
        this.player1_hasLgStraight = true;
      } else {
        this.player2_LgStraight = 40;
        this.player2_hasLgStraight = true;
      }
    }
    this.resetDice();
    this.disableAddBtn(val, this.activePlayer);
    this.togglePlayer();
  }

  scoreYahtzee(val: number) {
    console.log('score yahtzee', val);
    let yahtzeeTempSum: number = 0;
    let hasYahtzee: boolean = false;

    this.rolledDiceArray.forEach((el) => {
      this.getOccurrence(this.rolledDiceArray, el);
    });

    hasYahtzee = this.scoringArray.includes(5);

    if (hasYahtzee) {
      yahtzeeTempSum = 50;
    }

    if (this.activePlayer === 1) {
      this.player1_Yahtzee = yahtzeeTempSum;
    } else {
      this.player2_Yahtzee = yahtzeeTempSum;
    }
    this.resetDice();
    this.disableAddBtn(val, this.activePlayer);
    this.togglePlayer();
  }

  scoreChance(val: number) {
    console.log('score chance', val);
    let chanceTempSum: number = 0;

    chanceTempSum = this.rolledDiceArray.reduce((a, b) => {
      return a + b;
    });
    if (this.activePlayer === 1) {
      this.player1_Chance = chanceTempSum;
    } else {
      this.player2_Chance = chanceTempSum;
    }
    this.resetDice();
    this.disableAddBtn(val, this.activePlayer);
    this.togglePlayer();
  }

  getOccurrence(arr: number[], value: number) {
    this.scoringArray.push(arr.filter((v: number) => v === value).length);
    console.log(this.scoringArray);
  }

  disableAddBtn(val: number, player: number) {
    console.log(val, player);
    if (val === 1 && player === 1) {
      this.player1_AcesBtnDisabled = true;
    }
    if (val === 1 && player === 2) {
      this.player2_AcesBtnDisabled = true;
    }
    if (val === 2 && player === 1) {
      this.player1_TwosBtnDisabled = true;
    }
    if (val === 2 && player === 2) {
      this.player2_TwosBtnDisabled = true;
    }
    if (val === 3 && player === 1) {
      this.player1_ThreesBtnDisabled = true;
    }
    if (val === 3 && player === 2) {
      this.player2_ThreesBtnDisabled = true;
    }
    if (val === 4 && player === 1) {
      this.player1_FoursBtnDisabled = true;
    }
    if (val === 4 && player === 2) {
      this.player2_FoursBtnDisabled = true;
    }
    if (val === 5 && player === 1) {
      this.player1_FivesBtnDisabled = true;
    }
    if (val === 5 && player === 2) {
      this.player2_FivesBtnDisabled = true;
    }
    if (val === 6 && player === 1) {
      this.player1_SixesBtnDisabled = true;
    }
    if (val === 6 && player === 2) {
      this.player2_SixesBtnDisabled = true;
    }
    if (val === 7 && player === 1) {
      this.player1_ThreeKindBtnDisabled = true;
    }
    if (val === 7 && player === 2) {
      this.player2_ThreeKindBtnDisabled = true;
    }
    if (val === 8 && player === 1) {
      this.player1_FourKindBtnDisabled = true;
    }
    if (val === 8 && player === 2) {
      this.player2_FourKindBtnDisabled = true;
    }
    if (val === 9 && player === 1) {
      this.player1_FullHouseBtnDisabled = true;
    }
    if (val === 9 && player === 2) {
      this.player2_FullHouseBtnDisabled = true;
    }
    if (val === 10 && player === 1) {
      this.player1_SmStraightBtnDisabled = true;
    }
    if (val === 10 && player === 2) {
      this.player2_SmStraightBtnDisabled = true;
    }
    if (val === 11 && player === 1) {
      this.player1_LgStraightBtnDisabled = true;
    }
    if (val === 11 && player === 2) {
      this.player2_LgStraightBtnDisabled = true;
    }
    if (val === 12 && player === 1) {
      this.player1_YahtzeeBtnDisabled = true;
    }
    if (val === 12 && player === 2) {
      this.player2_YahtzeeBtnDisabled = true;
    }
    if (val === 13 && player === 1) {
      this.player1_ChanceBtnDisabled = true;
    }
    if (val === 13 && player === 2) {
      this.player2_ChanceBtnDisabled = true;
    }
  }

  togglePlayer() {
    console.log('toggle player');
  }

  resetDice() {
    this.rollCount = 0;
    this.diceRollMax = false;
    this.dice1Value = 0;
    this.dice2Value = 0;
    this.dice3Value = 0;
    this.dice4Value = 0;
    this.dice5Value = 0;

    this.dice1Disabled = false;
    this.dice2Disabled = false;
    this.dice3Disabled = false;
    this.dice4Disabled = false;
    this.dice5Disabled = false;
  }

  resetPlayer1() {
    console.log('resetting player 1');
    this.player1_Score = 0;
    this.player1_Aces = 0;
    this.player1_Twos = 0;
    this.player1_Threes = 0;
    this.player1_Fours = 0;
    this.player1_Fives = 0;
    this.player1_Sixes = 0;
    this.player1_UpperSubtotal = 0;
    this.player1_UpperBonus = 0;
    this.player1_ThreeOfaKind = 0;
    this.player1_FourOfaKind = 0;
    this.player1_FullHouse = 0;
    this.player1_SmStraight = 0;
    this.player1_LgStraight = 0;
    this.player1_Yahtzee = 0;
    this.player1_Chance = 0;
    this.player1_UpperTotal = 0;
    this.player1_LowerTotal = 0;
    this.player1_GrandTotal = 0;

    this.player1_hasAces = false;
    this.player1_hasTwos = false;
    this.player1_hasThrees = false;
    this.player1_hasFours = false;
    this.player1_hasFives = false;
    this.player1_hasSixes = false;
    this.player1_hasThreeKind = false;
    this.player1_hasFourKind = false;
    this.player1_hasFullHouse = false;
    this.player1_hasSmStraight = false;
    this.player1_hasLgStraight = false;
    this.player1_hasYahtzee = false;
    this.player1_hasChance = false;
  }

  resetPlayer2() {
    console.log('resetting player 2');
    this.player2_Score;
    this.player1_Aces = 0;
    this.player2_Twos = 0;
    this.player2_Threes = 0;
    this.player2_Fours = 0;
    this.player2_Fives = 0;
    this.player2_Sixes = 0;
    this.player2_UpperSubtotal = 0;
    this.player2_UpperBonus = 0;
    this.player2_ThreeOfaKind = 0;
    this.player2_FourOfaKind = 0;
    this.player2_FullHouse = 0;
    this.player2_SmStraight = 0;
    this.player2_LgStraight = 0;
    this.player2_Yahtzee = 0;
    this.player2_Chance = 0;
    this.player2_UpperTotal = 0;
    this.player2_LowerTotal = 0;
    this.player2_GrandTotal = 0;

    this.player2_hasAces = false;
    this.player2_hasTwos = false;
    this.player2_hasThrees = false;
    this.player2_hasFours = false;
    this.player2_hasFives = false;
    this.player2_hasSixes = false;
    this.player2_hasThreeKind = false;
    this.player2_hasFourKind = false;
    this.player2_hasFullHouse = false;
    this.player2_hasSmStraight = false;
    this.player2_hasLgStraight = false;
    this.player2_hasYahtzee = false;
    this.player2_hasChance = false;
  }

  newGame() {
    console.log('New Game');
    this.resetPlayer1();
    this.resetPlayer2();
  }
}
