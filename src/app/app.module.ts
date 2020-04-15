import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormulateComponent } from './shared/formulate/formulate.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
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
