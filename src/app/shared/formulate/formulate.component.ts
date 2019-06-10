import { Component } from '@angular/core';
import {StageService} from '../stage.service';

@Component({
  selector: 'app-formulate',
  templateUrl: './formulate.component.html',
  styleUrls: ['./formulate.component.scss']
})
export class FormulateComponent  {

  actions = [
    'Visualize',
    'Transform',
    'Integrate',
    'Store',
    'Extract',
  ];

  expectedOutcomes = [
    'accuracy',
    'accessibility',
    'completeness',
    'consistency',
    'timeliness',
    'privacy',
    'security',
  ];

  environmentRestrictions = [
    'technical reach',
    'organizational reach',
    'agility',
    'specifity',
    'scalability',
  ];

  action = '';
  expectedOutcome = '';
  businessTask = '';
  environmentRestriction = '';

  products: string[] = [];
  selectedOptions: string[] = [];

  constructor(private stage: StageService) {
    stage.getProducts().then(r => {
      this.products = r;
    });
  }


  add() {
    // tslint:disable-next-line:max-line-length
    const f = 'We need to ' + this.action + ' to get insights with ' + this.expectedOutcome + ' in order to support ' + this.businessTask + ' in an environment with ' + this.environmentRestriction;
    this.stage.addCapability({
      actions: [this.action],
      expectedOutcomes: [this.expectedOutcome],
      environmentRestrictions: [this.environmentRestriction],
      businessTasks: [this.businessTask],
      formulation: f,
      products: this.selectedOptions
    });
    this.action = '';
    this.expectedOutcome = '';
    this.environmentRestriction = '';
    this.businessTask = '';
    this.selectedOptions = [];
  }

}
