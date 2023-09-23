import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-questionnaire-guide',
  templateUrl: './questionnaire-guide.component.html',
  styleUrls: ['./questionnaire-guide.component.css']
})
export class QuestionnaireGuideComponent implements OnInit{

  formData!: FormGroup;

  submitted = false;

  constructor(
    private fb: FormBuilder, 
    private http: HttpClient,
    private toastr: ToastrService,
    )
  {
    this.formData = this.fb.group({
      id: '',
      FamilyName: ['',Validators.required],
      StudentName:['',Validators.required],
      FirstTeacherName: '',
      SecondTeacherName: '',
      ThirdTeacherName: '',
      SubjectsTaken: '',
      SubjectsTaught: '',
      Q_one: '',
      Q_two: '',
      Q_three: '',
      Q_four: '',
      Q_five: '',
      Q_six: '',
      Q_seven: '',
      Q_eight: '',
      TeacherNumber: '',
      Q_nine: '',
      Q_ten: '',
      Q_eleven: '',
      Q_twelve: '',
      Q_thirteen: '',
      Q_fourteen: '',
      Q_fourteenText: '',
      SubjectForCourse1: '',
      SubjectForCourse2: '',
      SubjectForCourse3: '',
      SubjectForCourse4: '',
      SubjectMark1: '',
      SubjectMark2: '',
      SubjectMark3: '',
      SubjectMark4: '',
      Evaluationdate1: '',
      Evaluationdate2: '',
      Evaluationdate3: '',
      Evaluationdate4: '',
      ReasonsForMarks1: '',
      ReasonsForMarks2: '',
      ReasonsForMarks3: '',
      ReasonsForMarks4: '',
      Subjectdifficulty1: '',
      Subjectdifficulty2: '',
      Subjectdifficulty3: '',
      Subjectdifficulty4: '',
      dissatisfaction1: '',
      dissatisfaction2: ''    
    });
  }

  ngOnInit(): void {
    
  }

  submit() {
    if(this.formData.valid)
      {
        this.submitted =true
        const formValues = this.formData.value;

        this.http.post('http://localhost:3001/api/serviceguide', formValues).subscribe(
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
