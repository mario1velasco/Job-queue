// This component render a table which paint the queues

import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {
  displayedColumns: string[] = ['name', 'success', 'time'];
  // This.data could be any of the 3 queues
  dataSource = this.data;

  constructor(
    public dialogRef: MatDialogRef<PendingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
}
