import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';

import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { NgxNavbarCollapseComponent } from 'ngx-bootstrap-navbar/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BodyComponent } from './body/body.component';
import { TeacherInterviewGuideComponent } from './teacher-interview-guide/teacher-interview-guide.component';
import { TeacherRecrutementSheetComponent } from './teacher-recrutement-sheet/teacher-recrutement-sheet.component';
import { StudentInterviewGuideComponent } from './student-interview-guide/student-interview-guide.component';
import { ParentInformationComponent } from './parent-information/parent-information.component';
import { AcademicSupportComponent } from './academic-support/academic-support.component';
import { QuestionnaireGuideComponent } from './questionnaire-guide/questionnaire-guide.component';
import { MatNativeDateModule } from '@angular/material/core';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    BodyComponent,
    TeacherInterviewGuideComponent,
    TeacherRecrutementSheetComponent,
    StudentInterviewGuideComponent,
    ParentInformationComponent,
    AcademicSupportComponent,
    QuestionnaireGuideComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MdbCollapseModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatTableModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatSortModule,
    MatPaginatorModule,
    MatTabsModule,
    NgxNavbarModule,
    ToastrModule.forRoot({
      
    })// ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
