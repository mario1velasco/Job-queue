import { Injectable } from '@angular/core';
import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class PendingService {
  private jobs: Array<Job> = new Array<Job>();

  constructor() { }

  initialize(quantity: number): Array<Job> {
    for (let index = 0; index < quantity; index++) {
      let newJob: Job = new Job();
      newJob.name = this.createName();
      this.jobs.push(newJob);
    }
    return this.jobs;
  }

  finishJobPending(): Job {
    return this.jobs.shift();
  }

  createName(): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 8; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}
