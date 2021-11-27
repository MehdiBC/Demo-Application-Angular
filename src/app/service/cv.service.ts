import { Injectable } from '@angular/core';
import {Person} from '../model/Person';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private persons: Person[];
  private personsHired: Person[] = [];
  constructor() {
    this.persons = [
      new Person(1, 'BEN CHIKHA', 'Mehdi', 21, 'mehdi.png', '14328337', 'student'),
      new Person(2, 'SouSou', 'SouSou', 16, 'hela.png', '', 'student'),
      new Person(3, 'Daoud', 'Ghassen', 53, 'mondher.png', '156897569', 'engineer')
    ];
  }

  getPersons(): Person[] {
    return this.persons;
  }

  hirePerson(person: Person): void{
    if (this.personsHired.indexOf(person) === -1) {
      this.personsHired.push(person);
    }
  }

  getHiredPersons(): Person[] {
    return this.personsHired;
  }
}
