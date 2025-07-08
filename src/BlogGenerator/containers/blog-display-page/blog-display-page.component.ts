import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-blog-display-page',
  templateUrl: './blog-display-page.component.html',
  styleUrls: ['./blog-display-page.component.css']
})
export class BlogDisplayPageComponent {

  @Input() job: any = '';
  generatedBlogHtml: string = '';


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['job'] && this.job && this.job.companyName) {
      var isWFH = this.job.remote ? 'Work from home' : 'Work from office';
      if(this.job.salary === '') {
        this.job.salary = 'Not disclosed';
      }
      if(this.job.remote === true) {
        this.job.location = 'Work from home';
      }

      this.generatedBlogHtml = `
<div>
    <a href="https://rightjobsonline.blogspot.com/2025/06/genpact-hiring-process-developer-for.html" style="margin-left: 1em; margin-right: 1em;" target="_blank"><img border="0" data-original-height="1260" data-original-width="2240" height="313" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJ4YoM5jwGo2iCdyASF6xW0DmtUOfRu9V8NckbXk654iP2wsHK6MTVOwr_z-enCmNxuunbAcYiRJwUtaKgOw5SBCyVTiqsjR8jWvqVYeeBeNgKkb6cS76sh04GxFzPg7xMsdCAsuYnJ7J5Q-_Y8Xmz9D3r-RtUJ1nbLv3zv3eAjU4aV-fvj1ZLLPHvDVTS/w556-h313/14.png" width="556" />
    </a>
</div>
<br />

<p>
  <span style="font-family: verdana;"><strong>`+ this.job.companyName +`</strong> is offering <strong>`+ isWFH +`</strong> opportunities to `+ this.job.qualification +` `+ this.job.experience +` for the role of 
  <strong>`+ this.job.jobProfile +`</strong>. Apply link, job requirements and all other details are provided below.
</span></p>

<p><span style="font-family: verdana;">
  `+ this.job.companyName +` is inviting online application for the role of `+ this.job.jobProfile +`. Candidates with 
  <strong>technical/industrial training or other comparable qualification</strong> are preferred for this job.
</span></p>

<h3 style="text-align: left;"><span style="font-family: verdana;">
  `+ this.job.companyName +` : Job details
</span></h3>

<table style="border-collapse: collapse; border: 1px solid rgb(10, 10, 10); font-family: verdana; text-align: left;">
  <tbody>
    <tr>
      <td style="border: 1px solid rgb(204, 204, 204);"><strong><span style="font-family: verdana;">Role</span></strong></td>
      <td style="border: 1px solid rgb(204, 204, 204);"><span style="font-family: verdana;">`+ this.job.jobProfile +`</span></td>
    </tr>
    <tr>
      <td style="border: 1px solid rgb(204, 204, 204);"><strong><span style="font-family: verdana;">Qualification</span></strong></td>
      <td style="border: 1px solid rgb(204, 204, 204);"><span style="font-family: verdana;">`+ this.job.qualification +`</span></td>
    </tr>
    <tr>
      <td style="border: 1px solid rgb(204, 204, 204);"><strong><span style="font-family: verdana;">Experience</span></strong></td>
      <td style="border: 1px solid rgb(204, 204, 204);"><span style="font-family: verdana;">`+ this.job.experience +`</span></td>
    </tr>
    <tr>
      <td style="border: 1px solid rgb(204, 204, 204);"><strong><span style="font-family: verdana;">Salary</span></strong></td>
      <td style="border: 1px solid rgb(204, 204, 204);"><span style="font-family: verdana;">`+ this.job.salary +`</span></td>
    </tr>
    <tr>
      <td style="border: 1px solid rgb(204, 204, 204);"><strong><span style="font-family: verdana;">Location</span></strong></td>
      <td style="border: 1px solid rgb(204, 204, 204);"><span style="font-family: verdana;">`+ this.job.location +`</span></td>
    </tr>
    <tr>
      <td style="border: 1px solid rgb(204, 204, 204);"><strong><span style="font-family: verdana;">Website</span></strong></td>
      <td style="border: 1px solid rgb(204, 204, 204);"><span style="font-family: verdana;">`+ this.job.website +`</span></td>
    </tr>
  </tbody>
</table>
<div><br /></div><div><a href="https://rightjobsonline.blogspot.com/2025/06/genpact-hiring-process-developer-for.html" style="margin-left: 1em; margin-right: 1em; text-align: center;" target="_blank"><img border="0" data-original-height="1260" data-original-width="2240" height="313" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJ4YoM5jwGo2iCdyASF6xW0DmtUOfRu9V8NckbXk654iP2wsHK6MTVOwr_z-enCmNxuunbAcYiRJwUtaKgOw5SBCyVTiqsjR8jWvqVYeeBeNgKkb6cS76sh04GxFzPg7xMsdCAsuYnJ7J5Q-_Y8Xmz9D3r-RtUJ1nbLv3zv3eAjU4aV-fvj1ZLLPHvDVTS/w556-h313/14.png" width="556" />
    </a>
</div><div><br /></div>

<h3 style="text-align: left;"><span style="font-family: verdana;">
  Who is eligible for the position of `+ this.job.jobProfile +` at `+ this.job.companyName +`?
</span></h3>

<ul>
    <li><span style="font-family: verdana;">`+ this.job.eligible +`</span></li>
</ul><div><span style="font-family: verdana;"><br /></span></div>

<h3 style="text-align: left;"><span style="font-family: verdana;">
  What are the responsibilities of `+ this.job.jobProfile +` at `+ this.job.companyName +`?
</span></h3>

<ul>
  <li><span style="font-family: verdana;">`+ this.job.responsibilities +`</span></li>
</ul><div><span style="font-family: verdana;"><br /></span></div>

<h3 style="text-align: left;"><span style="font-family: verdana;">
  How to apply for the position of `+ this.job.jobProfile +` at `+ this.job.companyName +`?
</span></h3>

<p><span style="font-family: verdana;">
  You can apply for this job directly through the official `+ this.job.companyName +` website using the link below.
</span></p>

<ul>
  <li><span style="font-family: verdana;">Click the link below to go to the official `+ this.job.companyName +` careers page</span></li>
  <li><span style="font-family: verdana;">Click the “Apply” button</span></li>
  <li><span style="font-family: verdana;">Fill in your details and upload your resume</span></li>
  <li><span style="font-family: verdana;">Submit your application</span></li>
</ul><div><span style="font-family: verdana;"><br /></span></div>

<div>
  <a href="`+ this.job.jobApplyUrl +`" target="_blank"><span style="font-family: verdana;">
    <button style="background-color: green; border-radius: 5px; border: none; color: white; font-size: 20px; padding: 15px 30px;" type="button">
      APPLY NOW</button></span></a>
</div>
      `;
    }
  }

  copyToClipboard(textArea: HTMLTextAreaElement): void {
    textArea.select();
    document.execCommand('copy');
    alert('Blog HTML copied to clipboard!');
  }
}
