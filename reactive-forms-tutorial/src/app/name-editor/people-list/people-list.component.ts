import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../name-editor.component';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
})
export class PeopleListComponent implements OnInit {
  hasPerson() {
    return !!this.personList[0];
  }

  @Input()
  personList: any;
  constructor() {}

  ngOnInit(): void {}
}
