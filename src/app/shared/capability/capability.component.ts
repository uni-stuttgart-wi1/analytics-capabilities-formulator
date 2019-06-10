import {Component, Input } from '@angular/core';
import {Capability, StageService} from "../stage.service";

@Component({
  selector: 'app-capability',
  templateUrl: './capability.component.html',
  styleUrls: ['./capability.component.scss']
})
export class CapabilityComponent {

  @Input() capability: Capability;

  constructor(private stage: StageService) { }

  remove(capability: Capability) {
    this.stage.removeCapability(capability);
  }

}
