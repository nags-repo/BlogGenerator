import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDisplayPageComponent } from 'src/BlogGenerator/containers/blog-display-page/blog-display-page.component';
import { BlogGeneratorPageComponent } from 'src/BlogGenerator/containers/blog-generator-page/blog-generator-page.component';
import { LinkedinPostGeneratorComponent } from 'src/BlogGenerator/containers/linkedin-post-generator/linkedin-post-generator.component';

const routes: Routes = [
  { path: '', component: BlogGeneratorPageComponent },
  { path: 'display', component: BlogDisplayPageComponent },
  { path: 'glpost', component: LinkedinPostGeneratorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
