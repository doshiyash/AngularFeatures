import { Component, ViewEncapsulation } from '@angular/core';
import {FormControl} from '@angular/forms';
import { MultiSelectComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'dnd';
  files: any[] = [];
  public mulObj: MultiSelectComponent;
  public data: string[] = ['Badminton', 'Basketball', 'Cricket', 'Football' ];

  value = [""];
  // maps the appropriate column to fields property
  public fields: Object = { text: 'Game', value: 'Id' };
  // set the placeholder to MultiSelect input element
  public waterMark: string = 'Favorite Sports';    
  // set the type of mode for how to visualized the selected items in input element.
  public default : string = 'Default';
  public box : string = 'Box';
  public delimiter : string = 'Delimiter';
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  onFileDropped($event) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files) {
    this.prepareFilesList(files);
  }

  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
  }
  formatBytes(bytes, decimals) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  deleteFile(index: number) {
    this.files.splice(index, 1);
  }

  getUpdatedValues() {
    // var classes = this.value
    for(const classes of this.value) {
      if(classes != "")
        console.log(classes);
    }
    
  }
}
