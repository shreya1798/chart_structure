import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/data.service';
import { Iimage } from '../../shared/imginterface';


@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',

  styleUrls: ['./upload-image.component.css'],
  providers: [DataService]
})
export class UploadImageComponent implements OnInit {

  imageUrl: string = '../assets/avatar.png';
  fileToUpload : File = null;
  image:Iimage[] = [];
  constructor(private imageService: DataService ) { }

  ngOnInit(): void {
   
    this.imageService.getImage().subscribe((metaimage:Iimage[])=>{ this.image = metaimage});
    
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


