import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

// Просто тестовый компонент, в котором будет кнопка выхода
export class ContentComponent implements OnInit {

  welcomeType = "Ура, вы попали в приложение!"

  constructor() { }

  ngOnInit(): void {
  }

  content() : string{
    return this.welcomeType;
}

  logout(){
    console.log('Logout button was clicked')
  }

}
