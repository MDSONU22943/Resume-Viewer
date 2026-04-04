import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html'
})
export class App {

  selectedFile: any;
  result: any = null;
  loading = false;

  constructor(private http: HttpClient) {}

  onFileSelect(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadResume() {
    if (!this.selectedFile) {
      alert("Please select file");
      return;
    }

    this.loading = true;
    // console.log("API CAL START")

    const formData = new FormData();
    formData.append('resume', this.selectedFile);

    this.http.post('https://resume-viewer-backend.onrender.com/review', formData)
      .subscribe({
        next: (res: any) => {
          // console.log("API RESPONSE:",res)
          this.result = res.feedback;
          this.loading = false;
        },
        error: (err) => {
          console.error(err);
          this.loading = false;
        }
      });
  }
}