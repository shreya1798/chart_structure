import { Component, OnInit } from '@angular/core';
import { Iperson } from '../shared/person';
import { HelloService } from '../shared/hello.service';

import {IData } from '../../shared/interface';
import { DataService } from '../../core/data.service';


@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
  providers: [HelloService]
})
export class TreeComponent implements OnInit {

  constructor(private dataservice: DataService) { }
  data:IData[] = [];
  ngOnInit() {
    this.dataservice.getData().subscribe((metadata:IData[])=> this.data = metadata);
  
  }
  

}
