import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Papa} from 'ngx-papaparse';

export interface Capability {
  actions: string[];
  expectedOutcomes: string[];
  businessTasks: string[];
  environmentRestrictions: string[];
  formulation: string;
  products?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class StageService {

  capabilities: BehaviorSubject<Capability[]> = new BehaviorSubject<Capability[]>([]);
  productsCollection = 'https://raw.githubusercontent.com/uni-stuttgart-wi1/analytics-capabilities-collection/master/products.csv';
  products: string[] = [];

  constructor(private http: HttpClient, private papa: Papa) { }

  addCapability(capability: Capability) {
    const c = this.capabilities.getValue();
    c.push(capability);
    this.capabilities.next(c);
  }

  removeCapability(capability: Capability) {
    const c = this.capabilities.getValue();
    const index = c.indexOf(capability, 0);
    if (index > -1) {
      c.splice(index, 1);
    }
    this.capabilities.next(c);
  }

  async getProducts() {
    if (this.products.length > 0) {
      return this.products;
    }
    return this.loadProducts();
  }

  async loadProducts() {
    this.http.get(this.productsCollection, {responseType: 'text'}).subscribe(csvData => {
      this.papa.parse(csvData,{
        header: true,
        complete: (result) => {
          for (const entry of result.data) {
            this.products.push(entry.Product + ' (' + entry.Type + ')');
          }
        }
      });
    });
    return this.products;
  }

}
