import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl='https://api-server.illpeoplemusic.com/api/v2/playlist/oneScroll/0'
  constructor(private http:HttpClient) { }

  ngOnInit():void{}

  getBeatsData(){
    return this.http.get<any>(this.apiUrl).pipe(map((res:any)=>{
      return res;
    }))
  }
}
