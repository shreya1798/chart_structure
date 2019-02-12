import { Component, OnInit } from '@angular/core';
import { Iperson } from '../shared/person';
import { HelloService } from '../shared/hello.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
  providers: [HelloService]
})
export class TreeComponent implements OnInit {

  
  persons: Iperson[] = [];

  constructor(private helloService: HelloService) { }

  ngOnInit() {
    this.helloService.getDetails().subscribe((people: Iperson[]) => this.persons = people);
    console.log(this.persons[3]);
  }
  

}
