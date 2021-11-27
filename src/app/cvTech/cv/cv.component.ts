import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../../model/Person';
import {CvService} from '../../service/cv.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  @Input() personnel: Person[] = [];
  selectedPersonne!: Person;
  constructor(private cvService: CvService, private http: HttpClient) { }

  ngOnInit(): void {
    this.personnel = this.cvService.getPersons();
  }
  selectedPerson(selectedPersonne: Person): void{
    this.selectedPersonne = selectedPersonne;
  }
}
