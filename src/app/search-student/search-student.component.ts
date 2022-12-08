import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent {


  admno=""

  constructor(private api :ApiService, private route : Router){}

  
searchData:any=[]

  readValues=()=>
  {
    let data:any={"admno":this.admno}
    this.api.serachStudent(data).subscribe(
     

      (response:any)=>
      {
         console.log(response)
         this.searchData=response
      }

    )
    
  }

  deletebuttonClick=(id:any)=>
  {
   let data:any ={"id":id}
   this.api.deleteStudent(data).subscribe(
    
    (response:any)=>
    {
      console.log(response)
      if(response.status == "success")
      {
        alert("added")
        window.location.reload()

      }
      else
      {
        alert("not deleted")
      }
    }

   )
  }

}
