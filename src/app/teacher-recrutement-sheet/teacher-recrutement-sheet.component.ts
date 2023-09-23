import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-teacher-recrutement-sheet',
  templateUrl: './teacher-recrutement-sheet.component.html',
  styleUrls: ['./teacher-recrutement-sheet.component.css']
})
export class TeacherRecrutementSheetComponent implements OnInit{

  
  formData !:FormGroup;

  submitted = false;

  constructor(
    private fb: FormBuilder, 
    private http:HttpClient,
    private toastr: ToastrService,
    )
    {
      this.formData = this.fb.group({
        Name: '',
        nationality: '',
        date_of_birth: '',
        District: '',
        Date_Issued:'',
        FixPhone:'',
        MobilePhone:'',
        Email:'',
        PObox:'',
        mozartCours_Promotion:'',
        MeansOfTransport:'',
        CurrentSituation:'',
        degreeobtained:'',
        year_of_degree:'',
        Speciality:'',
        institution:'',
        private_class:'',
        support_class:'',
        experience:'',
        teachingmotivation:'',
        InternetUsage:'',
        InternetUsage_duartion:'',
        Subject1:'',
        Subject2:'',
        Subject3:'',
        Subject4:'',
        Subject5:'',
        levels1:'',
        levels2:'',
        levels3:'',
        levels4:'',
        levels5:'',
        hoursOfLesson:'',
        geographicPreferences:'',
        Monday:'',
        Tuesday:'',
        Wednesday:'',
        Thursday:'',
        Friday:'',
        Saturday:'',
        Sunday:''
          
      });
   }

  //validation
  ngOnInit(): void {
  }

  submit(){
    if(this.formData)
      {
        this.submitted =true
        const formValues = this.formData.value;

        this.http.post('http://localhost:3001/api/TeacherRecruitement', formValues).subscribe(
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
