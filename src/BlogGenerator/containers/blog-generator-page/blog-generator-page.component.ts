import { Component } from '@angular/core';
import { BlogDisplayPageComponent } from '../blog-display-page/blog-display-page.component';

@Component({
  selector: 'app-blog-generator-page',
  templateUrl: './blog-generator-page.component.html',
  styleUrls: ['./blog-generator-page.component.css']
})
export class BlogGeneratorPageComponent {
  job = {
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

  isSubmitted = false;

  onSubmit() {
    console.log('Job details submitted:', this.job);
    this.isSubmitted = true;
    // Add your submission logic here (e.g., call API)
  }

  onReset() {
    this.job = {
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
    this.isSubmitted = false;
  }
  onEdit() {
    this.isSubmitted = false;
    // Logic to allow editing the job details
    // This could involve resetting the form or navigating to a different component
    console.log('Editing job details:', this.job);
  }

}
