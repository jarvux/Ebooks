import { Component, OnInit, Input } from '@angular/core';
import { trigger,state,style,transition, animate, animation } from "@angular/animations";
import { User } from "../../../auth/models/user/user";


@Component({
  selector: 'app-aside-left',
  templateUrl: './aside-left.component.html',
  styleUrls: ['./aside-left.component.css'],
  animations: [
    trigger('asideAnimation', [
      state('close', style({
        width: '50px'
      })),
      state('open', style({
        width: '300px'
      })),
      transition('open => close', animate('100ms ease-out')),
      transition('close => open', animate('100ms ease-in'))
    ])
  ]
})
export class AsideLeftComponent implements OnInit {

  user: User;
  @Input() asideState: string;

  constructor() { }

  ngOnInit() {
    this.user = {
      name: "usuario",
      lastname: "prueba",
      username: "pruebaUser",
      email: "usuario@prueba.com",
      urlImage: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
    }    
  }

}
