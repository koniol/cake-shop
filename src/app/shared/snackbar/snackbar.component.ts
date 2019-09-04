import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {
  message: string;

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) private data: any,
  ) {
  }

  ngOnInit() {
    this.message = this.data.message;
  }
}
