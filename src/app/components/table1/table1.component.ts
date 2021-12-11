import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.scss'],
})
export class Table1Component implements OnInit {
  player1_Aces: number = 0;
  player1_Twos: number = 0;
  player1_Threes: number = 0;
  player1_Fours: number = 0;
  player1_Fives: number = 0;
  player1_Sixes: number = 0;

  player2_Aces: number = 0;
  player2_Twos: number = 0;
  player2_Threes: number = 0;
  player2_Fours: number = 0;
  player2_Fives: number = 0;
  player2_Sixes: number = 0;

  constructor() {}

  ngOnInit(): void {}

  addAces() {
    this.player1_Aces += 1;
    console.log(this.player1_Aces);
  }
}
