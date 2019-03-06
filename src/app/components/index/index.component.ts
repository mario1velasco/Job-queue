import { FinishedService } from './../../shared/services/finished.service';
import { PendingService } from './../../shared/services/pending.service';
import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/shared/models/job.model';
import { RunningService } from 'src/app/shared/services/running.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  pendingJobs: Array<Job>;
  runningJobs: Array<Job> = new Array<Job>();
  finishedJobs: Array<Job> = new Array<Job>();

  constructor(
    private pendingService: PendingService,
    private runningService: RunningService,
    private finishedService: FinishedService
  ) { }

  ngOnInit() {
    this.pendingJobs = this.pendingService.initialize(8);
  }

  start(): void {
    if ((this.runningJobs.length === 0) && this.pendingJobs.length !== 0) {
      let job = this.pendingService.finishJobPending();
      this.runningJobs.push(job);
      this.runningService.addJobToQueue(job).then(() => {
        console.log('Task Complete!');
        this.runningService.finishJobExecution();
        this.finishedJobs.push(this.runningJobs.shift());
        this.finishedService.addJobToQueue(job);
        this.start();
      });
    }
  }


}
