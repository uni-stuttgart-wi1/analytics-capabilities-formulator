import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export interface Capability {
  actions: string[];
  expectedOutcomes: string[];
  businessTasks: string[];
  environmentRestrictions: string[];
  formulation: string;
}

@Injectable({
  providedIn: 'root'
})
export class StageService {

  capabilites: BehaviorSubject<Capability[]> = new BehaviorSubject<Capability[]>([]);

  constructor() { }

  addCapability(capability: Capability) {
    const c = this.capabilites.getValue();
    c.push(capability);
    this.capabilites.next(c);
  }

  removeCapability(capability: Capability) {
    const c = this.capabilites.getValue();
    const index = c.indexOf(capability, 0);
    if (index > -1) {
      c.splice(index, 1);
    }
    this.capabilites.next(c);
  }

}
