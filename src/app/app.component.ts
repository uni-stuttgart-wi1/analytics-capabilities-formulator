import { Component } from '@angular/core';
import {Capability, StageService} from './shared/stage.service';
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  year: number;
  capabilities: Capability[] = [];
  mailStringSafe: SafeUrl = '';

  constructor(private stage: StageService, private sanitizer: DomSanitizer) {
    this.year = new Date().getFullYear();

    this.stage.capabilities.subscribe(capabilities => {
      if (capabilities) {
        this.capabilities = capabilities;
        this.updateMailstring();
      }
    });

  }

  updateMailstring() {
    let mailString = 'We suggest the following analytics capabilites:\n\n';
    let i = 1;
    for (const capability of this.capabilities) {
      mailString = mailString + '\n' + i + ') ' + capability.formulation + '\n\nProducts to implement this capability: \n';
      for (const product of capability.products) {
        mailString =  mailString + '- ' + product + '\n';
      }
      i++;
    }
    this.mailStringSafe = 'mailto:info-wi@bwi.uni-stuttgart.de?subject=' +
      encodeURIComponent('Analytics Capability Submission')  +
      '&body=' + encodeURIComponent(mailString);
  }
}
