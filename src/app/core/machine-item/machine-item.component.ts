import { Component, Input, OnInit } from '@angular/core';
import { Machine, Status } from '../../../models';

@Component({
  selector: 'app-machine-item',
  templateUrl: './machine-item.component.html',
  styleUrl: './machine-item.component.scss',
  standalone: false,
})
export class MachineItemComponent implements OnInit {
  // @ts-ignore not doing null handling now
  @Input({ required: true }) machine: Machine = <Machine>null;
  // @ts-ignore 
  @Input({ required: true }) status: Status = <Status>null;
  @Input({ required: true }) mini: boolean = true;

  name: string = '';
  icon: string = '';
  // @ts-ignore not doing null handling now
  visualStatus: StatusVisual = null;


  ngOnInit() {
    this.initItem()
  }

  // irl this would be loaded from different services
  //   status service
  //   some dictionary of machine names
  //   some map of machine - icon
  // + there would be fallbacks
  private initItem() {
    this.name = this.getMachineName(this.machine);
    this.icon = this.getMachineIcon(this.machine);
    this.visualStatus = this.getStatusVis(this.machine);
  }

  // mock loading
  private getMachineName(m: Machine): string {
    const src: {[k in Machine]: string} = {
      [Machine.Scale]: 'Scale',
      [Machine.Attacher]: 'Attacher',
      [Machine.Packer]: 'Packer',
      [Machine.Closer]: 'Closer',
    }
    return src[m]
  }

  private getMachineIcon(m: Machine): string {
    const src: {[k in Machine]: string} = {
      [Machine.Scale]: 'input',
      [Machine.Attacher]: 'chrome_reader_mode',
      [Machine.Packer]: 'aspect_ratio',
      [Machine.Closer]: 'chrome_reader_mode',
    }
    return src[m];
  }

  private getStatusVis(m: Machine): StatusVisual { 
    const iconsMap: {[k in Status]: StatusVisual} = { // colors would be stored as enums as per specs
      [Status.Running]: {color: 'black', bgcolor: '#dcdcdc', icon: 'sync', iconColor: '#2d990d'},
      [Status.Alarm]: {color: 'white', bgcolor: '#fe3636', icon: 'error_outline', iconColor: 'white'},
      [Status.Warn]: {color: 'white', bgcolor: '#ff9705', icon: 'warning', iconColor: 'white'}
    }
    return iconsMap[this.status]
  }

}

interface StatusVisual {
  color: string;
  bgcolor: string;
  icon: string;
  iconColor: string;
}
