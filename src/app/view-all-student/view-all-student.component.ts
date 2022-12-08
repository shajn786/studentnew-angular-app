import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-student',
  templateUrl: './view-all-student.component.html',
  styleUrls: ['./view-all-student.component.css']
})
export class ViewAllStudentComponent {

  constructor(private api : ApiService)
  
  {
       this.api.fetcStudent().subscribe(

        (response:any)=>
        {
          this.data=response
        }
        


       )
  }

  data:any = []

}
