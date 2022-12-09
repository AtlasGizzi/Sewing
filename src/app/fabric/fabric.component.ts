import { Component } from '@angular/core';
import { UiService } from '../ui.service';

@Component({
  selector: 'app-fabric',
  templateUrl: './fabric.component.html',
  styleUrls: ['./fabric.component.css']
})
export class FabricComponent {
constructor(public ui:UiService) {

}
}
