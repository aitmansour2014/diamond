import { Component, ElementRef, OnInit } from '@angular/core';
import { Absences } from '../../model/absences.model';
import { NgFor, NgIf } from '@angular/common';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import dayGridPlugin from '@fullcalendar/daygrid'; // Importez le plugin dayGrid
import { FullCalendarModule } from '@fullcalendar/angular';
import { Calendar } from '@fullcalendar/core'
import { DatePipe } from '@angular/common';
import { CheckAvailibilityHostessService } from '../../services/check-availibility-hostess.service';

import timeGridPlugin from '@fullcalendar/timegrid';

interface Categorie1 {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-absences',
  standalone: true,
  imports: [NgIf, NgFor, SharedModuleModule,FullCalendarModule],
  templateUrl: './absences.component.html',
  providers: [DatePipe],
  styleUrl: './absences.component.css'
})
export class AbsencesComponent implements OnInit{
  //disponibilites: any[] = [];
  plugins = [dayGridPlugin, timeGridPlugin];

 // Liste des plugins à utiliser
 categorieAbbsence: Categorie1[] = [
  {value: 'MALADIE', viewValue: 'Maladie'},
  {value: 'VACANCE', viewValue: 'Vacance'},
  {value: 'TRAVAIL', viewValue: 'Travail'},
  {value: 'ÉVÉNEMENT FAMILIAL', viewValue: 'Événement Familial'},
];

  absences: Absences[] = [{ 
    id: 1,
    idHostesse: 1,
    dateStart: "2024-03-06T15:48:59",
    dateEnd: "2024-03-07T15:48:59",
    category: "booking",
    reason: "Salam Aleicom " 
  },
  { 
    id: 2,
    idHostesse: 1,
    dateStart: "2024-03-08T15:48:59",
    dateEnd: "2024-03-09T15:48:59",
    category: " ",
    reason: "aaa " 
  },
  { 
    id:3,
    idHostesse: 1,
    dateStart: "2024-03-10T15:48:59",
    dateEnd: "2024-03-11T15:48:59",
    category: " ",
    reason: " bbbb" 
  }];

  constructor(private elementRef: ElementRef, private datePipe: DatePipe, private checkAvailibilityHostessService: CheckAvailibilityHostessService) {
    
  }
  ngOnInit(): void {
    this. calendrier()
   // throw new Error('Method not implemented.');
  }
  calendrier() {
    const calendarEl: HTMLElement = this.elementRef.nativeElement.querySelector('#calendar');
    console.log(this.absences)
    const events = this.convertirDisponibilitesEnEvenements(this.absences)
    console.log(events)
    const calendar = new Calendar(calendarEl, {
     navLinks:true,
     editable: true,
     
     headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },


      plugins: [ dayGridPlugin,
        timeGridPlugin],
      initialView: 'dayGridMonth',
      weekends: false,
      events:events,
      eventClick: function(info) {
        alert('Event: ' + info.event.title);
        alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
        alert('View: ' + info.view.type);
    
        // change the border color just for fun
        info.el.style.borderColor = 'red';
      }
    });

    calendar.render();

  }
  ajouterAbsence(dateDebut: string, dateFin: string , raison: string , categorie: string) {
    this.absences.push({ 
      id: 0,
      idHostesse: 0,
      dateStart: dateDebut,
      dateEnd: dateFin,
      category: categorie,
      reason: raison 
    });
    this. calendrier()
    
  }
  convertDateFormat(originalDate: string) {
    const parsedDate = new Date(originalDate);
    const formattedDate = this.datePipe.transform(parsedDate, 'dd/MM/yyyy HH:mm');
   // console.log(formattedDate); // Output: 2024-03-11T15:48:59
    return formattedDate
  }

  supprimerAbsence(index: number) {
    this.absences.splice(index, 1);
    this. calendrier()
    this.checkAvailability()
  }
   // Méthode pour convertir les disponibilités en format d'événement attendu par FullCalendar
   convertirDisponibilitesEnEvenements(absences: Absences[]): any[] {
    return absences.map(absence => ({
      title: absence.category+" : " + absence.reason,
      start:  absence.dateStart,
      textColor: absence.category==='booking' ? '#000' : '#fff',
      backgroundColor: absence.category==='booking' ? '#0f0' : '#00f',
      borderColor: absence.category==='booking' ? '#0f0' : '#00f',
      end:  absence.dateEnd
   }));  }

  // Suppose que disponibilites est mis à jour dès qu'une nouvelle disponibilité est ajoutée ou supprimée
  // ngOnChanges() {
  //   this.absences = this.convertirDisponibilitesEnEvenements(this.absences);
  // }
  checkAvailability() {
    const dateStart = "2024-03-08T15:48:59";
    const dateEnd = "2024-03-10T15:48:59";
    const isAvailable = this.checkAvailibilityHostessService.isHostessAvailable(dateStart, dateEnd);
    
    if (isAvailable) {
      console.log('Hostess is available within the specified period.');
    } else {
      console.log('Hostess is not available within the specified period.');
    }
  }
}
