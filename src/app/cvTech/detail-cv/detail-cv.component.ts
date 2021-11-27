import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../../model/Person';
import {CvService} from '../../service/cv.service';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {
  @Input() person!: Person;
  constructor(private readonly cvService: CvService) { }

  ngOnInit(): void {
  }

  hire(): void {
    this.cvService.hirePerson(this.person);
  }
}
