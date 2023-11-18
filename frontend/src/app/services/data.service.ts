import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private myDataSubject = new BehaviorSubject<boolean>(true);
  myData$ = this.myDataSubject.asObservable();

  updateData(nuevaVisibilidad: boolean) {
    this.myDataSubject.next(nuevaVisibilidad);
  }
}