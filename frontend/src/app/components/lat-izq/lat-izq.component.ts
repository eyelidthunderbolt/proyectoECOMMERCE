import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-lat-izq',
  templateUrl: './lat-izq.component.html',
  styleUrls: ['./lat-izq.component.css']
})
export class LatIzqComponent {

  visibilidad : boolean = true;

  constructor(private dataService : DataService){}

  ngOnInit(): void {

    this.dataService.myData$.subscribe((data) => {
      this.visibilidad = data;
    });
  }


}
