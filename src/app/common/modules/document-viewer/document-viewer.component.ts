import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-document-viewer',
  templateUrl: './document-viewer.component.html',
 })
export class DocumentViewerComponent {
  @Input() url: any = null;
  @Input() fileName: any = null;
  @Input() isFileUrl: boolean = true;
  @Input() isButton: boolean = true;
  @Input() buttonName: string = 'View';
  @Input() showFileIconInBtn: boolean = false;

  opened: boolean = false;

  isImageFile() {
    return this.isFileOfType(this.url, ['jpg', 'jpeg', 'png']);
  }

  isDocumentFile() {
    return this.isFileOfType(this.url, ['doc', 'docx', 'txt', 'pdf']);
  }

  isFileOfType(url: string, extensions: string[]): boolean {
    const lowercaseUrl = url.toLowerCase();
    for (const extension of extensions) {
      if (lowercaseUrl.endsWith(`.${extension}`)) {
        return true;
      }
    }
    return false;
  }
}
