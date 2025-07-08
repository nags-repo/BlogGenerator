import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogGeneratorPageComponent } from 'src/BlogGenerator/containers/blog-generator-page/blog-generator-page.component';
import { BlogDisplayPageComponent } from 'src/BlogGenerator/containers/blog-display-page/blog-display-page.component';
import { LinkedinPostGeneratorComponent } from '../BlogGenerator/containers/linkedin-post-generator/linkedin-post-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogGeneratorPageComponent,
    BlogDisplayPageComponent,
    LinkedinPostGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
