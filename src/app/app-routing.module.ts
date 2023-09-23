import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentInformationComponent } from './parent-information/parent-information.component';
import { QuestionnaireGuideComponent } from './questionnaire-guide/questionnaire-guide.component';
import { TeacherRecrutementSheetComponent } from './teacher-recrutement-sheet/teacher-recrutement-sheet.component';
import { StudentInterviewGuideComponent } from './student-interview-guide/student-interview-guide.component';
import { TeacherInterviewGuideComponent } from './teacher-interview-guide/teacher-interview-guide.component';
import { AcademicSupportComponent } from './academic-support/academic-support.component';

const routes: Routes = [
  {path: '', redirectTo: 'parent-information', pathMatch: 'full'},
  
  {path: 'parent-information', component:ParentInformationComponent},
  {path: 'questionnaire-guide', component:QuestionnaireGuideComponent},
  {path: 'student-interview', component:StudentInterviewGuideComponent},
  {path: 'teacher-interview', component:TeacherInterviewGuideComponent},
  {path: 'teacher-recrutement', component:TeacherRecrutementSheetComponent},
  {path: 'academic-support', component:AcademicSupportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
