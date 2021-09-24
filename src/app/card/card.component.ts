import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardTitle: string | undefined;

  constructor() { }

  ngOnInit(): void {
    let test:any = "yo"
    let deux:string = 'texte'
  }

}
