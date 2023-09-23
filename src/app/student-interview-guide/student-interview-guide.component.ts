import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-interview-guide',
  templateUrl: './student-interview-guide.component.html',
  styleUrls: ['./student-interview-guide.component.css']
})
export class StudentInterviewGuideComponent implements OnInit{

  formData !: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder, 
    private http:HttpClient,
    private toastr: ToastrService)
  {
    this.formData = this.fb.group({ 
      Name: ['',Validators.required],
      date_of_birth: ['',Validators.required],
      sex: '',
      CurrentInstitution:'',
      CurrentInstitutionPeriod:'',
      Classattended: '',
      repeating: '',
      PreviousInstitution: '',
      Annualaverage: '',
      studentquality: '',
      Subject1: '',
      Subject2: '',
      Subject3: '',
      Subject4: '',
      SubjectRating1: '',
      SubjectRating2: '',
      SubjectRating3: '',
      SubjectRating4: '',
      SubjectRatingReasons1: '',
      SubjectRatingReasons2: '',
      SubjectRatingReasons3: '',
      SubjectRatingReasons4: '',
      Subjectdisturbance1: '',
      Subjectdisturbance2: '',
      Subjectdisturbance3: '',
      Subjectdisturbance4: '',
      SubjectExp1: '',
      SubjectExp2: '',
      SubjectExp3: '',
      SubjectExp4: '',
      SubjectExp5: '',
      Subjectperiod1: '',
      Subjectperiod2: '',
      Subjectperiod3: '',
      Subjectperiod4: '',
      Subjectperiod5: '',
      SubjectSatisfaction1: '',
      SubjectSatisfaction2: '',
      SubjectSatisfaction3: '',
      SubjectSatisfaction4: '',
      SubjectSatisfaction5: '',
      group_collaboration: '',
      learningApproach: '',
      learning_Motivation: '',
      LearningProfile: '' 
    });
  }

  ngOnInit(): void {
    
  }

  submit(){
    if(this.formData.valid)
      {
        this.submitted =true
        const formValues = this.formData.value;

        this.http.post('http://localhost:3001/api/studentinterview', formValues).subscribe(
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
