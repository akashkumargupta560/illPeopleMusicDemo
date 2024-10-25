import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  value:any;
  constructor(private userSrc:UsersService){}

  ngOnInit():void{
    this.getUser()
  }

  getUser(){
    this.userSrc.getBeatsData().subscribe((res:any) =>{
      this.value =res.beats;
      console.log('user-data', this.value)
    })
  }
}
