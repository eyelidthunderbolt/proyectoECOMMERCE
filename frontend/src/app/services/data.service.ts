import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private myDataSubject = new BehaviorSubject<boolean>(true);
  myData$ = this.myDataSubject.asObservable();

  updateVisibilidad(nuevaVisibilidad: boolean) {
    this.myDataSubject.next(nuevaVisibilidad);
  }
}