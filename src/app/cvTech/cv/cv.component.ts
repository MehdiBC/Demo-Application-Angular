import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../../Model/Personne';
import {CvService} from '../cv.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  @Input() personnel: Personne[] | undefined;
  selectedPersonne: Personne | undefined;
  constructor(private cvService: CvService, private http: HttpClient) { }

  ngOnInit(): void {
    this.personnel = this.cvService.getPersonnes();
    this.http.get('http://localhost:8080/persons/').subscribe(
      (response) => {
        console.log(response);
        },
      () => {
      },
      () => {}
    );
  }
  selectedPerson(selectedPersonne: any): void{
    this.selectedPersonne = selectedPersonne;
  }
}
