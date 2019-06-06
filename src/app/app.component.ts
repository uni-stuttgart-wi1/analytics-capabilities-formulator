import { Component } from '@angular/core';
import {Capability, StageService} from './shared/stage.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  year: number;
  capabilities: Capability[] = [];

  constructor(private stage: StageService) {
    this.year = new Date().getFullYear();

    this.stage.capabilites.subscribe( capabilities => {
      if (capabilities) {
        this.capabilities = capabilities;
      }
    });

  }

  remove(capability: Capability) {
    this.stage.removeCapability(capability);
  }

}
