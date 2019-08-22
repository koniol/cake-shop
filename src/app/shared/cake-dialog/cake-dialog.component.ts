import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

export interface ICakeDialog {
  image: string;
}

@Component({
  selector: 'app-cake-dialog',
  templateUrl: './cake-dialog.component.html',
  styleUrls: ['./cake-dialog.component.scss']
})
export class CakeDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ICakeDialog
  ) {
  }

  ngOnInit() {
  }

}
