<p align="center"><img src="https://appvital.com/images/logo-appvital-dark-top.png" align="center" height="100"/></p>
<h1 align="center">
  appvital-file-upload-widget-api-angular
</h1>
<p align="center">
  Angular wrapper library to quickly integrate Appvital File picker & cloud uploader in your application with just few lines of code.
</p>

<p align="center">
  <img src="https://cdn.appvital.com/appsite/static/appvital-file-picker-cloud-uploader.gif"  align="center" height="340"/>
</p>

## Core Features

*   **Drag & Drop** or **Copy & Paste** any file
*   Pick files from **multiple sources** including popular **online file shares**
*   **Upload** files straight to **your own** cloud storages: Amazon S3 bucket, Azure Blob container
*   Manage large file uploads efficiently using **multipart chunk** uploads.
*   Crop, rotate, flip and **enhance photos** to perfection with **built-in photo editor**
*   Generate **thumbnails**, apply text or image **watermarks**
*   **Complete control** with configurable options and **much more**

## Demo/Examples

Angular version of all examples are included in this wrapper library.

See file picker in [action here](https://appvital.com/example/cloud-file-uploader) with example configurations demonstrating various features.

## Quick Start

Install using npm:

```bash
npm install @appvitalinc/file-upload-widget-api-angular --save
```

Include `ApvFilepickerModule` in `app.module.ts`

```javascript
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ApvFilepickerModule } from "@appvitalinc/file-upload-widget-api-angular";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ApvFilepickerModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

UI code in .html file

```html
<button apvFilepicker apikey="YOUR_API_KEY">Open Filepicker</button>
```

### Available inputs

| Name    | Type                 | Required | Default | Description                                                         |
| ------- | -------------------- | -------- | ------- | ------------------------------------------------------------------- |
| apiKey  | String               | True     |         | Filepicker api key                                                  |
| options | ApvFilePickerOptions |          |         | Check [ApvFilePickerOptions](https://appvital.com/docs/file-uploader) |

### Callbacks

| Name            | Function                  | Required | Default | Description                            |
| --------------- | --------------------- | -------- | ------- | -------------------------------------- |
| onOpen          | ()              |          |         | Fires when filepicker has been initialized and is ready.     |    
| onClose         | ()              |          |         | Fires when filepicker popup is closed.  |
| onCancel        | ()              |          |         | Fires when filepicker is canceled.         |
| onUploadStarted | ()              |          |         | Fires when file(s) uploading starts.  |
| onUploadDone    | (ApvFilePickerResponse) |          |         | Fires when uploading completes.     |
| onUploadError   | (error)       |          |         | Fires when file(s) upload is failed.   |

### Examples

Below you can find some quick basic implementations.

#### Open picker - Single file upload

`component.ts`

```typescript
import { ApvFilePickerResponse, ApvFilePickerOptions } from '@appvitalinc/file-upload-widget-api-angular';

export class AppComponent implements OnInit {
  apikey: string;
  options: ApvFilePickerOptions;

  ngOnInit() {
    this.apikey = "YOUR_API_KEY";
    this.options = {
      multiple: false,
      outputfileoptions: {
        width: 500,
        height: 281,
        resizetype: "fit",
        resizeconflict: "pad",
        storage: [
          {
            name: "YOUR_STORAGE_CODE_ALIAS",  //add one at your account dashbaord
            path: "YOUR_STORAGE_FOLDER_PATH", //optional
          },
        ],
      },
      inputfileoptions: {
        allowedfileformats: "jpg,jpeg,gif,bmp,png,webp,zip,pdf",
        maxfilesize: 700000000,
        note:
          "File size restricted to: 10000 KB / File type restricted to: JPG, PNG, JPEG, PDF, DOC, DOCX, TXT, XML and ZIP.",
      },
    };
  }

  onOpen() {
    console.log("Modal open");
  }

  onClose() {
    console.log("Modal Close");
  }

  onCancel() {
    console.log("On Cancel");
  }

  onUploadDone(data: ApvFilePickerResponse) {
    console.log("onUploadStart", data);
  }

  onUploadStart() {
    console.log("onUploadStart");
  }

  onUploadError(error: string) {
    console.log("onUploadError", error);
  }
}
```

`component.html`

```html
<button
  apvFilepicker
  [apikey]="apikey"
  (onOpen)="onOpen()"
  (onClose)="onClose()"
  (onCancel)="onCancel()"
  (onUploadDone)="onUploadDone($event)"
  (onUploadStarted)="onUploadStart()"
  (onUploadError)="onUploadError($event)"
>
  Open Filepicker
</button>
```

## Documentation

You can find further documentation about available filepicker options and configuration details here at https://appvital.com/docs/file-uploader#Quickstart-Angular

## Contributing

Any of your contributions or ideas are more than welcome. Please consider that we follow the conventional commits specification to ensure consistent commit messages and changelog formatting.
