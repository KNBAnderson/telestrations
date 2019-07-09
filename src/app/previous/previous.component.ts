import { Component, OnInit } from '@angular/core';
import { Player } from '../../../models/Player';
import { Game } from '../../../models/Game';

@Component({
  selector: 'app-previous',
  templateUrl: './previous.component.html',
  styleUrls: ['./previous.component.css']
})
export class PreviousComponent implements OnInit {

  previousSheet;

  constructor(public player: Player) { }

  getPreviousSheet() {
    var previousPlayer = this.player.findPlayerIndex() - 1;
    var previousPlayerSheets = this.player.getSheetsByPlayerIndex(previousPlayer);
    this.previousSheet = previousPlayerSheets[this.player.currentGame.turn - 1];
  }

  ngOnInit() {

  }

}
