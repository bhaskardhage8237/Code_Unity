import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-file-icon',
  templateUrl: './file-icon.component.html',
 })
export class FileIconComponent {
  @Input() fileName: string = '';

  getFileIconClassByType() {
    const parts = this.fileName.split('.');
    const extension = parts[parts.length - 1];
    switch (extension) {
      case 'jpg':
      case 'JPG':
      case 'jpeg':
      case 'JPEG':
      case 'png':
      case 'PNG':
        return 'k-icon k-i-file-image';
      case 'doc':
      case 'DOC':
      case 'docx':
      case 'DOCX':
        return 'k-icon k-i-file-word';
      case 'pdf':
      case 'PDF':
        return 'k-icon k-i-file-pdf';
      default:
        return 'k-icon k-i-file';
    }
  }
}
