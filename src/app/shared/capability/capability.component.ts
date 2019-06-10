import {Component, Input } from '@angular/core';
import {Capability} from "../stage.service";

@Component({
  selector: 'app-capability',
  templateUrl: './capability.component.html',
  styleUrls: ['./capability.component.scss']
})
export class CapabilityComponent {

  @Input() capability: Capability;

  constructor() { }

}
