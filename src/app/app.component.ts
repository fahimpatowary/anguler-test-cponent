import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DailaogComponent } from './shared/dailaog/dailaog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(private matDialog:MatDialog){}
  openDialog(){
    this.matDialog.open(DailaogComponent,{
      width: '350px',
      // height: '60vh',
      
    })
  }
}
