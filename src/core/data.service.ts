import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable ,of} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { IData } from '../shared/interface';
import { Iimage } from '../shared/imginterface';

@Injectable({
    providedIn: 'root'
})

export class DataService{

    private Url = 'http://da55875e.ngrok.io/api/OrgEmployees';
    baseUrl = 'http://da55875e.ngrok.io/api/OrgEmployees';
    imagereturl = 'http://b8cdd207.ngrok.io/api/Image/';
    constructor(private http:HttpClient, private route: ActivatedRoute){}
    public imgret;
    public lol;

    getData():Observable<IData[]>{
        var lol = this.http.get<IData[]>(this.baseUrl);
        return lol;
    }
    
    getImage():Observable<Iimage[]>{
        var imgret = this.http.get<Iimage[]>(this.imagereturl+2);
        return imgret;
    }
 /** GET hero by id. Will 404 if id not found */
 getIDs(id: number): Observable<IData> {
    const url = `${this.Url}/${id}`;
    return this.http.get<IData>(url);
  }

  postFile(fileToUpload : File){
    const endpoint = 'http://bf9b736a.ngrok.io/api/uploadimage';
    const formData : FormData = new FormData();
    formData.append('Image', fileToUpload,fileToUpload.name);
    return this.http.post(endpoint, formData);
  }
      
      
}