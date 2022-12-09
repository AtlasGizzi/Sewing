import { Component } from '@angular/core';
import { UiService } from '../ui.service';

@Component({
  selector: 'app-pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.css']
})
export class PatternComponent {
  constructor(public ui: UiService){
    
  }
}
