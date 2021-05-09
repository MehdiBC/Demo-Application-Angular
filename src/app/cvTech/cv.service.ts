import { Injectable } from '@angular/core';
import {Personne} from '../Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Personne[];
  constructor() {
    this.personnes = [
      new Personne(1, 'BEN CHIKHA', 'Mehdi', 21, 'mehdi.png', 14328337, 'student'),
      new Personne(2, 'BEN CHIKHA', 'Hela', 16, 'hela.png', 0, 'student'),
      new Personne(3, 'BEN CHIKHA', 'Mondher', 53, 'mondher.png', 156897569, 'engineer')
    ];
  }

  getPersonnes(): Personne[] {
    return this.personnes;
  }
}
