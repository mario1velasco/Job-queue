import { Injectable } from '@angular/core';
import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class RunningService {
  private jobs: Array<Job> = new Array<Job>();

  constructor() { }

  addJobToQueue(job: Job): any {
    // let d: Date = new Date();
    // debugger
    job.startRunning = new Date();
    job.time = Math.floor((Math.random() * 2) + 2);
    this.jobs.push(job);
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        // debugger
        console.log('Async Work Complete');
        resolve();
        // if (Error) {
        //   reject();
        // } else {
        //   resolve();
        // }
      }, job.time);
    });
    return promise;
  }

  finishJobExecution(): Job {
    return this.jobs.shift();
  }
}
