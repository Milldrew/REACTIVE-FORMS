import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css'],
})
export class NameEditorComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl('first'),
    lastName: new FormControl('last'),
  });
  constructor() {}

  onSubmit(profileFormValue: any) {
    console.log(profileFormValue);
  }
  setValue() {
    //    this.profileForm.firstName.setValue('Beast Mode');
  }
  ngOnInit(): void {
    this.setValue();
  }
}
