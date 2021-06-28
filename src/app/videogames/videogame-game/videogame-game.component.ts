import { Component, OnInit, Input } from '@angular/core';
import { Videogame } from '../videogame.model';


@Component({
  selector: 'app-videogame-game',
  templateUrl: './videogame-game.component.html',
  styleUrls: ['./videogame-game.component.css']
})
export class VideogameGameComponent implements OnInit {
  @Input() videogame: Videogame;
  @Input() index: number;

  ngOnInit() {
  }


}
