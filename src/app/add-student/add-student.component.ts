import { Component } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  studentname=""
  rollno=""
  admissionno=""
  mobile=""
  college=""
  parentname=""
  parentmobno=""
  username=""
  password=""

  entry=()=>
  {
    let data:any = {"studentname":this.studentname,"rollno":this.rollno,"admissionno":this.admissionno,"mobile":this.mobile,
    "college":this.college,"parentname":this.parentname,"parentmobno":this.parentmobno,"username":this.username,"password":this.password}
    console.log(data)
  }

}
