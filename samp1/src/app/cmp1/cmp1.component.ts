import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
@Component({
  selector: 'app-cmp1',
  templateUrl: './cmp1.component.html',
  styleUrls: ['./cmp1.component.css']
})
export class Cmp1Component implements OnInit {
val;
  constructor(private ds:DataService) { }
public show(){
this.ds.getdata().subscribe(data=>{
  console.log(data)
  this.val=data;
})
}
  ngOnInit() {
  }

}
