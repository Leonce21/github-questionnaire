import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-academic-support',
  templateUrl: './academic-support.component.html',
  styleUrls: ['./academic-support.component.css']
})
export class AcademicSupportComponent implements OnInit{
  formData !:FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder, 
    private http:HttpClient,
    private toastr: ToastrService) 
    {
      this.formData = this.fb.group({
        firstname:['',Validators.required],
        Q1: '',
        Q2: '',
        Q3: '',
        Q4: '',
        Q5: '',
        Q6: '',
        Q7: '',
        Q8: '',
        Q9: '',
        Q10: '',
        salaryexpectation: ''
  
      });
    }


    ngOnInit(): void {
    }

    Submit(){

      if(this.formData.valid)
      {
        this.submitted =true
        const formValues = this.formData.value;

        this.http.post('http://localhost:3001/api/academicsupport', formValues).subscribe(
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
