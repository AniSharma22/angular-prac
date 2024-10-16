import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  standalone: false,
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.scss'
})
export class EditFormComponent {
  
  // Define the form with the controls and their types
  form = new FormGroup({
    title: new FormControl<string>('', {
      validators : [Validators.required]
    }),
    price: new FormControl<number>(0, {
      validators : [Validators.required]
    }), 
    description: new FormControl<string>('', {
      validators : [Validators.required]
    }),
    categoryId: new FormControl<number>(1, {
      validators : [Validators.required]
    }),
    imageUrl: new FormControl<string>('', {
      validators : [Validators.required]
    })
  });


  onSubmit(){
    if( this.form.valid){
      
    }
  }
}
