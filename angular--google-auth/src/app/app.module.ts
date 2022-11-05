import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { MatStepperModule } from '@angular/material/stepper';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StagesComponent } from './stages/stages.component';
// import { AgGridModule } from 'ag-grid-angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { MatRadioModule } from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

const googleLoginOptions = {
  scope: 'profile email',
  plugin_name:'login' //you can use any name here
}; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    StagesComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormlyBootstrapModule,
    AgGridModule,
    FormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false},
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '233448583683-4b4vfbv2d2f4fstvkrkvvsdga1ljmn2q.apps.googleusercontent.com',
              googleLoginOptions 
            )
          }
        ]
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
