import { Injectable } from '@angular/core';
import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class RunningService {
  private jobs: Array<Job> = new Array<Job>();

  constructor() { }

  getJobs(): Array<Job> {
    return this.jobs;
  }

  startJob(job: Job): any {
    job.startRunning = new Date();
    job.time = Math.floor((Math.random() * 19) + 2);
    this.jobs.push(job);
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Async Work Complete');
        resolve();
      }, (job.time * 1000));
    });
    return promise;
  }

  finishJobExecution(): Job {
    return this.jobs.shift();
  }
}
