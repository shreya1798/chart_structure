import { Component, OnInit } from '@angular/core';
import { read } from 'fs';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css'],
  providers: [DataService]
})
export class UploadImageComponent implements OnInit {

  imageUrl: string = '../assets/avatar.png';
  fileToUpload : File = null;

  constructor(private imageService: DataService ) { }

  ngOnInit() {
  }

  handleFileInput(file: FileList){
    this.fileToUpload = file.item(0);

    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  OnSubmit(Image){
    this.imageService.postFile(this.fileToUpload).subscribe(
      data => {
        console.log('upload is done');
        Image.value=null;
        this.imageUrl = '../assets/avatar.png';
      }
    );
  }

}

