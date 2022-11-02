import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { EditaccountComponent } from './editaccount/editaccount.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const appRoutes: Routes=[

  {path:'', component:HomeComponent},
  {path:'emailconfirmation', component:EmailConfirmationComponent},
  {path:'login', component:LoginComponent},
  {path:'myaccount', component:MyAccountComponent},
  {path:'editaccount', component:EditaccountComponent},
  {path:'resetPassword', component:ResetPasswordComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmailConfirmationComponent,
    HomeComponent,
    LoginComponent,
    MyAccountComponent,
    EditaccountComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
