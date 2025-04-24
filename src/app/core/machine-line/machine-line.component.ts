import { Component, computed, Input } from '@angular/core';
import { Connector } from '../services/connector.service';
import { LineData, StatusData } from '../../../models';

@Component({
  selector: 'app-machine-line',
  templateUrl: './machine-line.component.html',
  styleUrl: './machine-line.component.scss',
  standalone: false,
})
export class MachineLineComponent {
  @Input() mini: boolean = true

  constructor(public connectorService: Connector) {    
  }

  machineData = computed(() => ({
    lineData: this.connectorService.lineData(),
    statusData: this.connectorService.statusData(),
  }));

}
