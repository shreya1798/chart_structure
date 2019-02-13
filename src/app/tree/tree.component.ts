import { Component, OnInit } from '@angular/core';

import {IData } from '../../shared/interface';
import { DataService } from '../../core/data.service';


@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  public loading = false;

  constructor(private dataservice: DataService) { }
  data:IData[] = [];
  ngOnInit() {
    this.dataservice.getData().subscribe((metadata:IData[])=>{ this.data = metadata
      this.loading=false;
    });
  
  }
  

}
