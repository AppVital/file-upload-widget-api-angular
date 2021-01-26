import { Component, OnInit } from '@angular/core';
import {
  ApvFilePickerOptions,
  ApvFilePickerResponse,
  ApvFilePickerFile
} from '@appvitalinc/file-upload-widget-api-angular';

@Component({
  selector: 'app-multi-file-upload',
  templateUrl: './multi-file-upload.component.html',
  styleUrls: ['./multi-file-upload.component.scss'],
})
export class MultiFileUploadComponent implements OnInit {

  apikey: string = 'YOUR-APPLICATION-KEY';

  singleFileuploadOption: ApvFilePickerOptions = {
    multiple: true,
    maxfiles: 3,
    outputfileoptions: {
      width: 500,
      height: 281,
      resizetype: 'fit',
      resizeconflict: 'crop',
      storage: [
        {
          code: 'AWS-S3-Storage-Demo',
          path: '/file-picker-demo/',
        },
      ],
    },
    inputfileoptions: {
      sources: '',
      allowedfileformats: 'jpg,jpeg,gif,bmp,png,zip,pdf,doc,docx,txt,xml',
      note:
        'File type restricted to: JPG, JPEG, PNG, GIF, BMP, PDF, DOC, DOCX, TXT, XML and ZIP.',
    },
  };

  constructor() {}

  ngOnInit(): void {}

  /**
   * Manage filepicker handler
   * @param data ApvFilePickerResponse
   */
  handleFileUpload(data: ApvFilePickerResponse) {
    // YOUR-STORAGE-CODE
    console.log('files uploaded !!');
    console.log(data); //array of file metadata object received

    if (data.files) {
      data.files.forEach((file: ApvFilePickerFile) => {
        console.log(file);
        console.log(
          'YOUR-STORAGE-CODE-ALIAS | YOUR-STORAGE-PATH-IF-ANY',
          file.fileName
        );
      });
    }
  }
}
