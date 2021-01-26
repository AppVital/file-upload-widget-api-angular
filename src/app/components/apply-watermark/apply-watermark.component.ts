import { Component, OnInit } from '@angular/core';
import {
  ApvFilePickerOptions,
  ApvFilePickerResponse,
  ApvFilePickerFile
} from '@appvitalinc/file-upload-widget-api-angular';

@Component({
  selector: 'app-apply-watermark',
  templateUrl: './apply-watermark.component.html',
  styleUrls: ['./apply-watermark.component.scss'],
})
export class ApplyWatermarkComponent implements OnInit {

  apikey: string = 'YOUR-APPLICATION-KEY';

  singleFileuploadOption: ApvFilePickerOptions = {
    multiple: false,
    outputfileoptions: {
      width: 500,
      height: 281,
      resizetype: 'fit',
      resizeconflict: 'crop',
      watermark: {
        type: 'image',
        url:
          'https://apv-customer.s3.amazonaws.com/watermark/demo-watermark.png', //your watermakr image url
        position: 'bottomright',
        margin: 30,
        opacity: 0.8,
        scale: 1.0, // 0.1-10
        rotate: 0, //0-360
        repeat: 'no-repeat', //repeat | repeat-top| repeat-bottom| repeat-middle | repeat-brick
      },
      storage: [
        {
          code: 'AWS-S3-Storage-Demo',
          path: '/file-picker-demo/',
        },
      ],
    },
    inputfileoptions: {
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
