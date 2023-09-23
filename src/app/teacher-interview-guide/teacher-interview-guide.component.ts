import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-teacher-interview-guide',
  templateUrl: './teacher-interview-guide.component.html',
  styleUrls: ['./teacher-interview-guide.component.css']
})
export class TeacherInterviewGuideComponent implements OnInit{

  formData !: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder, 
    private toastr: ToastrService,
    private http:HttpClient,)
    {
      this.formData = this.fb.group({ 
        Name:  ['',Validators.required],
        School: '',
        School_period: '',
        date_of_birth:  ['',Validators.required],
        sex: '',
        MaritalStatus:  ['',Validators.required],
        Education_Section:  ['',Validators.required],
        teacher_diploma:  ['',Validators.required],
        teacher_activity: '',
        location:  ['',Validators.required],
        teacher_description: '',
        subject_tutoring: '',
        tutoring_problem: '',
        thingyoudontlike: '',
        thingyoulike: '',
        support_class: '',
        support_classDuration: '',
        Subject1: '',
        Subject2: '',
        Subject3: '',
        Subject4: '',
        Subject5: '',
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
        tutoring: '',
        teaching_Strengths: '',
        computerMastering: '',
        learning_Motivation: '',
        LearningProfile: ''
  
      });
    }

    ngOnInit(): void {
    
    }
  
    GuideSubmit(){
      if(this.formData.valid)
      {
        this.submitted =true
        const formValues = this.formData.value;

        this.http.post('http://localhost:3001/api/teacherinterview', formValues).subscribe(
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
