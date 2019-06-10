import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormulateComponent } from './shared/formulate/formulate.component';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatExpansionModule,
  MatInputModule,
  MatListModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {PapaParseModule} from 'ngx-papaparse';
import { CapabilityComponent } from './shared/capability/capability.component';
@NgModule({
  declarations: [
    AppComponent,
    FormulateComponent,
    CapabilityComponent
  ],
  imports: [
    HttpClientModule,
    PapaParseModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
