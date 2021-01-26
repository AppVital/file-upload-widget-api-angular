import { Component, OnInit } from '@angular/core';
import {
  ApvFilePickerOptions,
  ApvFilePickerResponse,
  ApvFilePickerFile
} from '@appvitalinc/file-upload-widget-api-angular';

@Component({
  selector: 'app-generate-thumbnails',
  templateUrl: './generate-thumbnails.component.html',
  styleUrls: ['./generate-thumbnails.component.scss'],
})
export class GenerateThumbnailsComponent implements OnInit {

  apikey: string = 'YOUR-APPLICATION-KEY';

  singleFileuploadOption: ApvFilePickerOptions = {
    multiple: true,
    maxfiles: 3,
    outputfileoptions: {
      width: 500,
      height: 281,
      resizetype: 'fit',
      resizeconflict: 'crop',
      thumbnails: [
        {
          width: 400,
          height: 225,
          resizetype: 'fit',
          resizeconflict: 'crop',
          fileformat: 'png',
          filenamesuffix: 'thumb400',
        },
        {
          width: 200,
          height: 200,
          resizetype: 'fit',
          resizeconflict: 'pad',
          backgroundcolor: '#6D7E8F',
          fileformat: 'png',
          filenamesuffix: 'thumb200',
        },
        {
          width: 50,
          height: 50,
          resizetype: 'fit',
          resizeconflict: 'crop',
          fileformat: 'png',
          filenamesuffix: 'thumb50',
        },
      ],
      storage: [
        {
          code: 'AWS-S3-Storage-Demo',
          path: '/file-picker-demo/',
        },
      ],
    },
    inputfileoptions: {
      sources: '',
      allowedfileformats: 'jpg,jpeg,gif,bmp,png',
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
