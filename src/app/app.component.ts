import { Component } from '@angular/core';
import { HeaderComponent } from "./core/header/header.component";
import { MainComponent } from "./core/main/main.component";
import { CommonModule } from '@angular/common';
import { Connector } from './core/services/connector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false
})
export class AppComponent {

  constructor(connectorService: Connector) {
    connectorService.loadLineData(); // irl there would also be 'loaded' flag as guard in template
    connectorService.fetchStatusUpdates(); // irl this would be some persistent connection or polling
  }
}
