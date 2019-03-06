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

  constructor(
    private pendingService: PendingService,
    private runningService: RunningService
  ) { }

  ngOnInit() {
    this.pendingJobs = this.pendingService.initialize(8);
  }

  start(): void {
    debugger
    if (this.runningJobs.length === 0){
      let job = this.pendingService.finishJobPending();
      this.runningJobs.push(job);
      this.runningService.addJobToQueue(job).then(() => {
        debugger
        console.log("Task Complete!");
        this.runningService.finishJobExecution();
        this.runningJobs.shift();
        this.start();
      });
    }
  }


}
