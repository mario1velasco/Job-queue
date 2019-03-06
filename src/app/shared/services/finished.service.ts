import { Injectable } from '@angular/core';
import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class FinishedService {
  private jobs: Array<Job> = new Array<Job>();

  constructor() { }

  addJobToQueue(job: Job): any {
    this.jobs.push(job);
  }
}
