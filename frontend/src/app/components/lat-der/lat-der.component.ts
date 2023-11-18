import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-lat-der',
  templateUrl: './lat-der.component.html',
  styleUrls: ['./lat-der.component.css']
})
export class LatDerComponent {

  visibilidad : boolean = true;

  constructor(private dataService : DataService){}

  ngOnInit(): void {

    this.dataService.myData$.subscribe((data) => {
      this.visibilidad = data;
    });
  }
}


