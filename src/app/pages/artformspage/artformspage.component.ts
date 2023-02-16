import { Component } from '@angular/core';
import { data } from 'src/assets/data';

@Component({
  selector: 'app-artformspage',
  templateUrl: './artformspage.component.html',
  styleUrls: ['./artformspage.component.css']
})
export class ArtformspageComponent 
{
  artforms=data;
  ngOninit():void{
    this.artforms=data;
}
}