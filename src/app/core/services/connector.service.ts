import { Injectable, Signal, signal } from '@angular/core';
import { LineData, Machine, Status, StatusData } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class Connector {

  //@ts-ignore ok mr nullable
  private lineDataSignal = signal<LineData>(null);
    //@ts-ignore ok mr nullable
  private machineStatusesSignal = signal<StatusData>(null);

  // irl these would be separated in data service
  // signal store, or redux or something similar
  lineData: Signal<LineData> = this.lineDataSignal.asReadonly();
  statusData: Signal<StatusData> = this.machineStatusesSignal.asReadonly();

  // irl this would be api fetch + error handling 
  async loadLineData() {
    try {
      const response = await fetch('mock-data.json');
      const data = await response.json();
      this.lineDataSignal.set(data);
    } catch (e) {
      console.error('Err:', e);
    }
  }

  fetchStatusUpdates() {
    const mockStatuses = {
      [Machine.Scale]: this.randomStatus(),
      [Machine.Attacher]: this.randomStatus(),
      [Machine.Packer]: this.randomStatus(),
      [Machine.Closer]: Status.Running
    }
    this.machineStatusesSignal.set(mockStatuses);
  }

  private randomStatus(): Status {
    const s = [Status.Running, Status.Alarm, Status.Warn];
    return s[Math.floor(Math.random() * s.length)];
  }
}