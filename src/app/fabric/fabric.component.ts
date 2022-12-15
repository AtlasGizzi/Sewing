import { Component } from '@angular/core';
import { UiService } from '../ui.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fabric',
  templateUrl: './fabric.component.html',
  styleUrls: ['./fabric.component.css']
})
export class FabricComponent {
  fabricForm!: NgForm;
constructor(public ui:UiService) {

}
}
