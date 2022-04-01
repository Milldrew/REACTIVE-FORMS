import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CreateReadDeleteService } from '../services/create-read-delete.service';
export type Person = {
  firstName: string;
  lastName: string;
};

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css'],
})
export class NameEditorComponent implements OnInit {
  people: any[] = [];
  profileForm = new FormGroup({
    firstName: new FormControl('first'),
    lastName: new FormControl('last'),
  });
  constructor(public createReadDeleteService: CreateReadDeleteService) {}

  onSubmit(profileFormValue: any | never) {
    console.log(profileFormValue);
    this.createReadDeleteService.createPerson$(profileFormValue);
    setTimeout(() => {
      let payload = this.createReadDeleteService.getPeople$();
      payload.subscribe((value: any) =>
        console.log({ value }, (this.people = value))
      );
    }, 400);
  }

  ngOnAfterContentChecked() {}
  ngOnInit(): void {
    let payload = this.createReadDeleteService.getPeople$();
    payload.subscribe((value: any) =>
      console.log({ value }, (this.people = value))
    );
  }
}
