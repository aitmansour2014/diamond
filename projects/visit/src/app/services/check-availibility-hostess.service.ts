import { Injectable } from '@angular/core';

import { Absences } from '../model/absences.model';

@Injectable({
  providedIn: 'root'
})
export class CheckAvailibilityHostessService {

  absences: Absences[] = [
    { 
      id: 1,
      idHostesse: 1,
      dateStart: "2024-03-06T15:48:59",
      dateEnd: "2024-03-07T15:48:59",
      category: " ",
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
    }
  ];

  constructor() { }

  isHostessAvailable(dateStart: string, dateEnd: string): boolean {
    const startDate = new Date(dateStart);
    const endDate = new Date(dateEnd);

    for (const absence of this.absences) {
      const absenceStartDate = new Date(absence.dateStart);
      const absenceEndDate = new Date(absence.dateEnd);

      // Check if the absence overlaps with the given period
      if (
        (startDate >= absenceStartDate && startDate <= absenceEndDate) ||
        (endDate >= absenceStartDate && endDate <= absenceEndDate) ||
        (startDate <= absenceStartDate && endDate >= absenceEndDate)
      ) {
        // Hostess is not available
        return false;
      }
    }

    // Hostess is available
    return true;
  }
}
