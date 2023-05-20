import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Images } from '@core/interfaces/images';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private apiUrl = 'http://localhost:3000/images';

  constructor(private http: HttpClient) { }

  getImages():Observable<Images[]>{
    return this.http.get<Images[]>(this.apiUrl)
  }
}
