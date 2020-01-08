import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit{
  title = 'my-app';
  data : any;
  constructor(private http : HttpClient)
  {
    
  }

  ngOnInit()
  {
    
    this.http.get('https://reqres.in/api/users?page=1').subscribe((res:any) =>{

    this.data = res
    


    console.log(this.data);
    });
  }
}
