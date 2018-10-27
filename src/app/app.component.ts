import { Component } from '@angular/core';
import { YmlComparisonService } from './yml-comparison.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private mockResponse: JSON;
  private error: any;
  private fileSelected = true;
  constructor(private ymlService: YmlComparisonService) {}
  title = 'YAML Convertor';
  compare() {
    const fileInput1 = (<HTMLInputElement>document.getElementById('file1')).value;
    const fileInput2 = (<HTMLInputElement>document.getElementById('file2')).value;
    if (fileInput1 && fileInput1 !== '' && fileInput2 && fileInput2 !== '') {
      this.fileSelected = true;
      this.ymlService.getComparison()
        .subscribe((data: JSON) => {
            this.mockResponse = data;
          },
          error => this.error = error);
    } else {
      this.fileSelected = false;
    }
  }
  reset() {
  this.mockResponse = null;
  this.error = null;
  this.fileSelected = true;
  (<HTMLInputElement>document.getElementById('file1')).value =
    (<HTMLInputElement>document.getElementById('file1')).defaultValue;
    (<HTMLInputElement>document.getElementById('file2')).value =
      (<HTMLInputElement>document.getElementById('file2')).defaultValue;
  }
}
