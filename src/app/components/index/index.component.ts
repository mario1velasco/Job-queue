import { PendingComponent } from './../pending/pending.component';
import { FinishedService } from './../../shared/services/finished.service';
import { PendingService } from './../../shared/services/pending.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Job } from 'src/app/shared/models/job.model';
import { RunningService } from 'src/app/shared/services/running.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  pendingJobs: Array<Job> = new Array<Job>();
  runningJobs: Array<Job> = new Array<Job>();
  finishedJobs: Array<Job> = new Array<Job>();
  threads = 0;
  jobs = 0;
  running = false;

  constructor(
    private router: Router,
    private pendingService: PendingService,
    private runningService: RunningService,
    private finishedService: FinishedService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {

  }

  // Call the component dialog and pass it the current values from the queue taht you selected
  openPending(queue: string) {
    const dialogRef = this.dialog.open(PendingComponent, {
      width: '550px',
      data: this.getDataFromSelectQueu(queue)
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // load N times the running process that you selected on the input threads
  startThreads(): void {
    this.running = true;
    for (let index = 0; index < this.threads; index++) {
      this.start();
    }
  }

  // Start running process
  start(): void {
    if (this.pendingJobs.length === 0 && this.finishedJobs.length === 0) {
      this.pendingJobs = this.pendingService.initialize(this.jobs);
    }
    if ((this.runningJobs.length < this.threads) && this.pendingJobs.length !== 0) {
      let job = this.pendingService.finishJobPending();
      this.runningJobs.push(job);
      this.runningService.startJob(job).then(() => {
        console.log('Task Complete!');
        this.runningService.finishJobExecution();
        this.finishedService.addJobToQueue(job);
        this.finishedJobs.push(this.runningJobs.shift());
        // this.finishedJobs = this.finishedService.getJobs();
        this.start();
      });
    }
  }

  getDataFromSelectQueu(queue: string): any {
    let data;
    switch (queue) {
      case 'pending':
        data = this.pendingJobs;
        break;
        case 'running':
        data = this.runningJobs;
        break;
        case 'finished':
        data = this.finishedJobs;
        break;
    }
    return data;
  }

  restart(): void {
    window.location.reload();
  }
}
