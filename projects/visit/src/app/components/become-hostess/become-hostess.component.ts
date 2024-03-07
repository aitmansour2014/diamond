import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-become-hostess',
  standalone: true,
  imports: [NgIf],
  templateUrl: './become-hostess.component.html',
  styleUrl: './become-hostess.component.css'
})
export class BecomeHostessComponent {
  imghost: string = 'assets/hostesseimg.jpg';
  
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
