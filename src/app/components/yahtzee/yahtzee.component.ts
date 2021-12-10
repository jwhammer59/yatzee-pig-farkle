import { Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable } from '@angular/material/table';

interface TableElements {
  id: string;
  rowName: string;
  rowScoring: string;
  rowPlayer1: number;
  rowPlayer2: number;
}

@Component({
  selector: 'app-yahtzee',
  templateUrl: './yahtzee.component.html',
  styleUrls: ['./yahtzee.component.scss'],
})
export class YahtzeeComponent {
  @ViewChild(MatTable, { static: true })
  table!: MatTable<any>;

  activePlayer: number = 1;
  winningScore: number = 0;

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

  rolledDiceArray: number[] = [];
  rollCount: number = 0;
  diceRollMax: boolean = false;

  currentScore: number = 0;

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

  UPPER_DATA: TableElements[] = [
    {
      id: 'one',
      rowName: 'Aces',
      rowScoring: 'Add only Aces.',
      rowPlayer1: this.player1_Aces,
      rowPlayer2: this.player2_Aces,
    },
    {
      id: 'two',
      rowName: 'Two',
      rowScoring: 'Add only Twos.',
      rowPlayer1: this.player1_Twos,
      rowPlayer2: this.player2_Twos,
    },
    {
      id: 'three',
      rowName: 'Threes',
      rowScoring: 'Add only Threes',
      rowPlayer1: this.player1_Threes,
      rowPlayer2: this.player2_Threes,
    },
    {
      id: 'four',
      rowName: 'Fours',
      rowScoring: 'Add only Fours',
      rowPlayer1: this.player1_Fours,
      rowPlayer2: this.player2_Fours,
    },
    {
      id: 'five',
      rowName: 'Fives',
      rowScoring: 'Add only Fives',
      rowPlayer1: this.player1_Fives,
      rowPlayer2: this.player2_Fives,
    },
    {
      id: 'six',
      rowName: 'Sixes',
      rowScoring: 'Add only Sixes',
      rowPlayer1: this.player1_Sixes,
      rowPlayer2: this.player2_Sixes,
    },
    {
      id: 'total',
      rowName: 'Total',
      rowScoring: '==>',
      rowPlayer1: this.player1_UpperSubtotal,
      rowPlayer2: this.player2_UpperSubtotal,
    },
    {
      id: 'bonus',
      rowName: 'Bonus',
      rowScoring: '==>',
      rowPlayer1: this.player1_UpperBonus,
      rowPlayer2: this.player2_UpperBonus,
    },
    {
      id: 'upper-total',
      rowName: 'Upper Total',
      rowScoring: '==>',
      rowPlayer1: this.player1_UpperTotal,
      rowPlayer2: this.player2_UpperTotal,
    },
  ];

  LOWER_DATA: TableElements[] = [
    {
      id: '3kind',
      rowName: '3 of a Kind',
      rowScoring: 'Add all dice.',
      rowPlayer1: this.player1_ThreeOfaKind,
      rowPlayer2: this.player2_ThreeOfaKind,
    },
    {
      id: '4kind',
      rowName: '4 of a Kind',
      rowScoring: 'Add all dice.',
      rowPlayer1: this.player1_FourOfaKind,
      rowPlayer2: this.player2_FourOfaKind,
    },
    {
      id: 'full-house',
      rowName: 'Full House',
      rowScoring: 'Score 25',
      rowPlayer1: this.player1_FullHouse,
      rowPlayer2: this.player2_FullHouse,
    },
    {
      id: 'sm-straight',
      rowName: 'Small Straight',
      rowScoring: 'Score 30',
      rowPlayer1: this.player1_SmStraight,
      rowPlayer2: this.player2_SmStraight,
    },
    {
      id: 'lg-straight',
      rowName: 'Large Straight',
      rowScoring: 'Score 40',
      rowPlayer1: this.player1_LgStraight,
      rowPlayer2: this.player2_LgStraight,
    },
    {
      id: 'yahtzee',
      rowName: 'Yahtzee',
      rowScoring: 'Score 50',
      rowPlayer1: this.player1_Yahtzee,
      rowPlayer2: this.player2_Yahtzee,
    },
    {
      id: 'chance',
      rowName: 'Chance',
      rowScoring: 'Add all dice.',
      rowPlayer1: this.player1_Chance,
      rowPlayer2: this.player2_Chance,
    },
    {
      id: 'lower-total',
      rowName: 'Lower Total',
      rowScoring: '==>',
      rowPlayer1: this.player1_LowerTotal,
      rowPlayer2: this.player2_LowerTotal,
    },
    {
      id: 'lower-upper-total',
      rowName: 'Upper Total',
      rowScoring: '==>',
      rowPlayer1: this.player1_UpperTotal,
      rowPlayer2: this.player2_UpperTotal,
    },
    {
      id: 'grand-total',
      rowName: 'Grand Total',
      rowScoring: '==>',
      rowPlayer1: this.player1_GrandTotal,
      rowPlayer2: this.player2_GrandTotal,
    },
  ];

  lowerColumns: string[] = [
    'rowName',
    'rowScoring',
    'rowPlayer1',
    'rowPlayer2',
    'buttons',
  ];

  upperDataSource = this.UPPER_DATA;
  lowerDataSource = this.LOWER_DATA;

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

  scoreDice(el: string) {
    console.log(el);
    if (this.activePlayer === 1) {
      if (el === 'one' && !this.player1_hasAces) {
        this.rolledDiceArray.forEach((el) => {
          if (el === 1) {
            this.player1_Aces += 1;
          }
        });
        console.log(this.player1_Aces);
        this.table.renderRows();
        console.log(this.table);
      }
    }
  }

  newGame() {
    console.log('New Game');
  }
}
