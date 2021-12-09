import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

interface TableElements {
  rowName: string;
  rowPlay: string;
  rowPlayer1: number;
  rowPlayer2: number;
}

@Component({
  selector: 'app-yahtzee',
  templateUrl: './yahtzee.component.html',
  styleUrls: ['./yahtzee.component.scss'],
})
export class YahtzeeComponent {
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
      rowName: 'Aces',
      rowPlay: 'Add only Aces.',
      rowPlayer1: this.player1_Aces,
      rowPlayer2: this.player2_Aces,
    },
    {
      rowName: 'Two',
      rowPlay: 'Add only Twos.',
      rowPlayer1: this.player1_Twos,
      rowPlayer2: this.player2_Twos,
    },
    {
      rowName: 'Threes',
      rowPlay: 'Add only Threes',
      rowPlayer1: this.player1_Threes,
      rowPlayer2: this.player2_Threes,
    },
    {
      rowName: 'Fours',
      rowPlay: 'Add only Fours',
      rowPlayer1: this.player1_Fours,
      rowPlayer2: this.player2_Fours,
    },
    {
      rowName: 'Fives',
      rowPlay: 'Add only Fives',
      rowPlayer1: this.player1_Fives,
      rowPlayer2: this.player2_Fives,
    },
    {
      rowName: 'Sixes',
      rowPlay: 'Add only Sixes',
      rowPlayer1: this.player1_Sixes,
      rowPlayer2: this.player2_Sixes,
    },
    {
      rowName: 'Total',
      rowPlay: '==>',
      rowPlayer1: this.player1_UpperSubtotal,
      rowPlayer2: this.player2_UpperSubtotal,
    },
    {
      rowName: 'Bonus',
      rowPlay: '==>',
      rowPlayer1: this.player1_UpperBonus,
      rowPlayer2: this.player2_UpperBonus,
    },
    {
      rowName: 'Upper Total',
      rowPlay: '==>',
      rowPlayer1: this.player1_UpperTotal,
      rowPlayer2: this.player2_UpperTotal,
    },
  ];

  LOWER_DATA: TableElements[] = [
    {
      rowName: '3 of a Kind',
      rowPlay: 'Add all dice.',
      rowPlayer1: this.player1_ThreeOfaKind,
      rowPlayer2: this.player2_ThreeOfaKind,
    },
    {
      rowName: '4 of a Kind',
      rowPlay: 'Add all dice.',
      rowPlayer1: this.player1_FourOfaKind,
      rowPlayer2: this.player2_FourOfaKind,
    },
    {
      rowName: 'Full House',
      rowPlay: 'Score 25',
      rowPlayer1: this.player1_FullHouse,
      rowPlayer2: this.player2_FullHouse,
    },
    {
      rowName: 'Small Straight',
      rowPlay: 'Score 30',
      rowPlayer1: this.player1_SmStraight,
      rowPlayer2: this.player2_SmStraight,
    },
    {
      rowName: 'Large Straight',
      rowPlay: 'Score 40',
      rowPlayer1: this.player1_LgStraight,
      rowPlayer2: this.player2_LgStraight,
    },
    {
      rowName: 'Yahtzee',
      rowPlay: 'Score 50',
      rowPlayer1: this.player1_Yahtzee,
      rowPlayer2: this.player2_Yahtzee,
    },
    {
      rowName: 'Chance',
      rowPlay: 'Add all dice.',
      rowPlayer1: this.player1_Chance,
      rowPlayer2: this.player2_Chance,
    },
    {
      rowName: 'Lower Total',
      rowPlay: '==>',
      rowPlayer1: this.player1_LowerTotal,
      rowPlayer2: this.player2_LowerTotal,
    },
    {
      rowName: 'Upper Total',
      rowPlay: '==>',
      rowPlayer1: this.player1_UpperTotal,
      rowPlayer2: this.player2_UpperTotal,
    },
    {
      rowName: 'Grand Total',
      rowPlay: '==>',
      rowPlayer1: this.player1_GrandTotal,
      rowPlayer2: this.player2_GrandTotal,
    },
  ];

  lowerColumns: string[] = [
    'rowName',
    'rowPlay',
    'rowPlayer1',
    'rowPlayer2',
    'buttons',
  ];

  upperDataSource = this.UPPER_DATA;
  lowerDataSource = this.LOWER_DATA;

  constructor(private snackBar: MatSnackBar) {}

  selectDice(num: number) {
    console.log(num);
  }
}
