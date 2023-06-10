import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeDataService {
  private apiUrl = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

  constructor() { }

  getData(): Observable<any> {
    return new Observable<any>(observer => {
      axios.get(this.apiUrl)
        .then(response => {
            observer.next(response.data);
            // observer.next(console.log(response.data, 'serv'));
            observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }
}