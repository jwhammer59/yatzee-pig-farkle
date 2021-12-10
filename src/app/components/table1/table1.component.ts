import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.scss'],
})
export class Table1Component implements OnInit {
  player1_Aces: number = 0;
  player2_Aces: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
