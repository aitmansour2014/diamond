import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BecomeHostessComponent } from './components/become-hostess/become-hostess.component';
import { BookingComponent } from './components/booking/booking.component';
import { AgencyComponent } from './components/agency/agency.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { AbsencesComponent } from './components/absences/absences.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'becomeHostess', component:  BecomeHostessComponent },
    { path: 'agency', component:  AgencyComponent },
    { path: 'contact', component:  ContactComponent },
    { path: 'login', component:  LoginComponent },
    { path: 'absence', component:  AbsencesComponent },
    { path: 'booking', component:  BookingComponent }
];
