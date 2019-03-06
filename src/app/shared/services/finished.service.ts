import { Injectable } from '@angular/core';
import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class FinishedService {
  private jobs: Array<Job> = new Array<Job>();

  constructor() { }

  getJobs(): Array<Job> {
    return this.jobs;
  }

  addJobToQueue(job: Job): any {
    this.jobs.push(this.jobFinishCorrect(job));
  }

  jobFinishCorrect(job: Job): Job {
    const random = Math.round(Math.random());
    if (random === 0) {
      job.success = true;
    } else {
      job.success = false;
    }
    return job;
  }
}
