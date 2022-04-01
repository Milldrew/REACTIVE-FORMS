import { Component, Input, OnInit } from '@angular/core';
import { CreateReadDeleteService } from 'src/app/services/create-read-delete.service';
import { Person } from '../name-editor.component';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
})
export class PeopleListComponent implements OnInit {
  constructor(public createReadDeleteService: CreateReadDeleteService) {}
  hasPerson() {
    return !!this.personList[0];
  }

  deletePerson(id: any) {
    this.createReadDeleteService.deletePerson(id).subscribe();
    setTimeout(() => {
      this.createReadDeleteService
        .getPeople$()
        .subscribe((data) => (this.personList = data));
    }, 300);
  }

  @Input()
  personList: any;

  ngOnInit(): void {}
}
