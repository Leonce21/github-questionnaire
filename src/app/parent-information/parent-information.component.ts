import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-parent-information',
  templateUrl: './parent-information.component.html',
  styleUrls: ['./parent-information.component.css']
})
export class ParentInformationComponent implements OnInit{

  formData !:FormGroup;

  submitted = false;
  
  constructor(
    private fb: FormBuilder, 
    private http:HttpClient,
    private toastr: ToastrService,
    )
    {
      this.formData = this.fb.group({
        Q1:'',
        Q2:'',
        Q3:'',
        Q4:'',
        Q5:'',
        Q6:'',
        Q7_Mon:'',
        Q7_Tues:'',
        Q7_Wed:'',
        Q7_Thur:'',
        Q7_Fri:'',
        Q7_Sat:'',
        Q7_Sun:'',
        adultName: ['',Validators.required],
        adultRegion: ['',Validators.required],
        adultLocation: ['',Validators.required],
        adultFixPhone:'',
        adultMobilePhone:'',
        adultEmail:'',
        adultPObox:'',
        studentName:'',
        studentRegion:'',
        studentLocation:'',
        studentFixPhone:'',
        studentMobilePhone:'',
        studentEmail:'',
        studentPOBox:'',
        InternetUsage:'',
        InternetUsage_duartion:'',
        mozartCours_Promotion:''
  
      });
   }

  //validation
  ngOnInit(): void {
   
  }
 

  Infosubmit(){
    if(this.formData.valid)
      {
        this.submitted =true
        const formValues = this.formData.value;

        this.http.post('http://localhost:3001/api/informationform', formValues).subscribe(
          (response) => {
            console.log('Data successfully stored in the database', response);
            this.toastr.success('Data successfully sent', 'Information Sent');
            this.formData.reset({});
          },
          (error) => {
            this.toastr.error('information not send', 'Check connection');
            console.error('Error storing data in the database:', error);
          }
        );
      }
    }

    onCancel() {
      // Reset the form when the "Cancel" button is clicked
      this.formData.reset();
    }
    
}
