import { Component } from '@angular/core';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Absences } from '../../model/absences.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModuleModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
  fileName = ""
  imageUrl: any;
  selectImage(event:any) {
    this.fileName = event.target.value
    console.log(event.target.files[0])
    this.handleFileInput(event)
    //this.image=event.target.files[0]
   // this.newTaskForm.get('image')?.setValue(event.target.files[0])
  }
   // Cette variable stockera l'URL de l'image convertie

  handleFileInput(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
    };

    reader.readAsDataURL(file); // Convertit le contenu du fichier en URL de données
  }
 
}
