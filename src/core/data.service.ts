import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable ,of} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { IData } from '../shared/interface';


@Injectable({
    providedIn: 'root'
})

export class DataService{
    private Url = 'http://098deb2b.ngrok.io/api/OrgEmployees'
    baseUrl = 'http://098deb2b.ngrok.io/api/OrgEmployees';
    constructor(private http:HttpClient, private route: ActivatedRoute){}
    public lol;
    getData():Observable<IData[]>{
        var lol = this.http.get<IData[]>(this.baseUrl);
        return lol;
    }
    
 /** GET hero by id. Will 404 if id not found */
 getIDs(id: number): Observable<IData> {
    const url = `${this.Url}/${id}`;
    return this.http.get<IData>(url);
  }
      
      
}