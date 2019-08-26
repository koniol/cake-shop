import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() icon: string;
  @Input() buttonName: string;
  iconName: string;

  constructor() {
  }

  ngOnInit() {
    if (this.icon) {
      this.iconName = `fa fa-2x fa-${this.icon}`;
    }
  }

}
