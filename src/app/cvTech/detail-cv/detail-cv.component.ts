import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../../model/Person';
import {CvService} from '../../service/cv.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {
  @Input() person!: Person;
  constructor(
    private readonly cvService: CvService,
    private readonly toasterService: ToastrService
  ) { }

  ngOnInit(): void {
  }

  hire(): void {
    if (this.cvService.hirePerson(this.person)){
      this.toasterService.success(`La personne ${this.person.firstName} embauchée avec succès`, `Succès d'embauche`);
    }else {
      this.toasterService.error(`La personne ${this.person.firstName} est déja embauchée`, `Echec d'embauche`);
    }
  }
}
