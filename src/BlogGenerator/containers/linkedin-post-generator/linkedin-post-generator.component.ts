import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-linkedin-post-generator',
  templateUrl: './linkedin-post-generator.component.html',
  styleUrls: ['./linkedin-post-generator.component.css']
})
export class LinkedinPostGeneratorComponent {

  @Input() job: any = {
    companyName: '',
    jobProfile: '',
    experience: '',
    location: '',
    remote: false,
    qualification: '',
    salary: '',
    website: '',
    jobApplyUrl: '',
    eligible: '',
    responsibilities: ''
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['job'] && this.job?.experience === 'Freshers/Experienced') {
      this.job.experience = '#Fresher and #Experienced';
    }
    console.log('job', this.job);
    console.log('experience', this.job.experience);
  }
}
