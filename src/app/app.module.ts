import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { MainComponent } from './core/main/main.component';
import { BrowserModule } from '@angular/platform-browser';
import { MachineLineComponent } from './core/machine-line/machine-line.component';
import { MachineItemComponent } from './core/machine-item/machine-item.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    MachineLineComponent,
    MachineItemComponent,
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatIconModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
