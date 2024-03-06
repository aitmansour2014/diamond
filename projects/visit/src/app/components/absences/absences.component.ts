import { Component, ElementRef } from '@angular/core';
import { Absences } from '../../model/absences.model';
import { NgFor, NgIf } from '@angular/common';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import dayGridPlugin from '@fullcalendar/daygrid'; // Importez le plugin dayGrid
import { FullCalendarModule } from '@fullcalendar/angular';
import { Calendar } from '@fullcalendar/core'


@Component({
  selector: 'app-absences',
  standalone: true,
  imports: [NgIf, NgFor, SharedModuleModule,FullCalendarModule],
  templateUrl: './absences.component.html',
  styleUrl: './absences.component.css'
})
export class AbsencesComponent {
  //disponibilites: any[] = [];
  plugins = [dayGridPlugin];

 // Liste des plugins à utiliser
  absences: Absences[] = [{ 
    id: 1,
    idHostesse: 1,
    dateStart: "Wed Mar 06 2024 15:48:59 GMT+0100 (UTC+01:00)",
    dateEnd: "Wed Mar 07 2024 15:48:59 GMT+0100 (UTC+01:00)",
    category: " ",
    reason: " " 
  },
  { 
    id: 2,
    idHostesse: 1,
    dateStart: "Wed Mar 08 2024 15:48:59 GMT+0100 (UTC+01:00)",
    dateEnd: "Wed Mar 09 2024 15:48:59 GMT+0100 (UTC+01:00)",
    category: " ",
    reason: " " 
  },
  { 
    id:3,
    idHostesse: 1,
    dateStart: "Wed Mar 10 2024 15:48:59 GMT+0100 (UTC+01:00)",
    dateEnd: "Wed Mar 11 2024 15:48:59 GMT+0100 (UTC+01:00)",
    category: " ",
    reason: " " 
  }];

  constructor(private elementRef: ElementRef) {
    
  }
  ngAfterViewInit() {
    const calendarEl: HTMLElement = this.elementRef.nativeElement.querySelector('#calendar');

    const calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin],
      initialView: 'dayGridMonth',
      weekends: false,
      events: [
        { title: 'Meeting', start: new Date() },
        { title: 'Meeting1', start: new Date('2024-03-10T15:48:59'), end: new Date('2024-03-11T15:48:59') },
        { title: 'Meeting2', start: new Date('2024-03-12T15:48:59'), end: new Date('2024-03-13T15:48:59') }
      ]
    });

    calendar.render();

  }
  ajouterAbsence(dateDebut: string, dateFin: string) {
    this.absences.push({ 
      id: 0,
      idHostesse: 0,
      dateStart: dateDebut,
      dateEnd: dateFin,
      category: " ",
      reason: " " 
    });
    console.log(this.absences)
    console.log(new Date())
    
  }

  supprimerAbsence(index: number) {
    this.absences.splice(index, 1);
  }
   // Méthode pour convertir les disponibilités en format d'événement attendu par FullCalendar
   convertirDisponibilitesEnEvenements(absences: Absences[]): any[] {
    return absences.map(absence => ({
      title: absence.reason,
      start: absence.dateStart,
      end: absence.dateEnd
    }));
  }

  // Suppose que disponibilites est mis à jour dès qu'une nouvelle disponibilité est ajoutée ou supprimée
  ngOnChanges() {
    this.absences = this.convertirDisponibilitesEnEvenements(this.absences);
  }
}
