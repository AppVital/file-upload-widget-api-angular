import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApvFilepickerModule } from '@appvitalinc/file-upload-widget-api-angular';
import { MultiFileUploadComponent } from './components/multi-file-upload/multi-file-upload.component';
import { SingleFileUploadComponent } from './components/single-file-upload/single-file-upload.component';
import { GenerateThumbnailsComponent } from './components/generate-thumbnails/generate-thumbnails.component';
import { ApplyWatermarkComponent } from './components/apply-watermark/apply-watermark.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiFileUploadComponent,
    SingleFileUploadComponent,
    GenerateThumbnailsComponent,
    ApplyWatermarkComponent
  ],
  imports: [
    BrowserModule,
    ApvFilepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
