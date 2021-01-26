import { Component } from '@angular/core';
import {
  ApvFilePickerOptions,
  ApvFilePickerResponse,
} from '@appvitalinc/file-upload-widget-api-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  urlroot =
    'https://apv-filepicker-demo-uploads.s3.amazonaws.com/file-picker-demo/';

  apikey: string = 'fpkr-8e30yXCGozvXy0g3GikaVrbwfhsWWlmy';

  singleFileuploadOption: ApvFilePickerOptions = {
    multiple: false,
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

  handleSingleFileUpload(data: ApvFilePickerResponse) {
    console.log('files uploaded !!');
    console.log(data); //array of file metadata object received
    var markup = '';

    if (data.files) {
      var photoFormats = ['.jpg', '.png', '.gif', '.bmp'];

      //Replace this URL path to your own storage location here
      let url = '';
      Array.from(data.files).forEach((file) => {
        url = '';

        if (photoFormats.includes(file.extension)) {
          url = `${this.urlroot}${file.fileName}`; // urlroot.concat(file.fileName);
        } else {
          // for non-image file types show a generic image
          url =
            'https://cdn.appvital.com/app/fpicker/1.0.0/img/file-all-lg.png';
        }

        markup = `${markup}
                <div class="row mb-3">
                    <div class="col">
                      <img src="${url}" />
                    </div>
                    <div class="col jumbotron mb-0">
                      File Name: ${file.fileName}<br>
                      Type: ${file.type}<br>
                      Size: ${file.size}<br>
                      Extension: ${file.extension}<br>
                      Source: ${file.source}
                    </div>
                  </div>`;

        document.getElementById('single-upload').innerHTML = markup;
      });
    }
  }
}
