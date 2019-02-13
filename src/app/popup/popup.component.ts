import { Component, OnInit } from '@angular/core';
import { IData } from '../../shared/interface';
import { DataService } from '../../core/data.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  data: IData;
  imageUrl:string ='../assets/avatar.png';
  fileToUpload:File = null;
  constructor(private route: ActivatedRoute, private dataservice: DataService) { }
  ngOnInit(): void {
    this.getIDs();
  }
  
  getIDs(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataservice.getIDs(id)
      .subscribe(data => this.data = data);
  }
  handleFileInput(file:FileList){
    this.fileToUpload = file.item(0);
    //show preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

}
