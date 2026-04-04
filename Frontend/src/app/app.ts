import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  selectedFile: any;
  result: any = null;
  loading = false;
  isDragOver = false;

  constructor(private http: HttpClient) {}

  onFileSelect(event: any) {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      this.selectedFile = file;
    } else {
      alert('Please select a valid PDF file');
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;
    
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type === 'application/pdf') {
        this.selectedFile = file;
      } else {
        alert('Please upload a PDF file');
      }
    }
  }

  removeFile() {
    this.selectedFile = null;
    this.result = null;
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  getScoreClass(score: string): string {
    const numericScore = parseInt(score.replace('%', ''));
    if (numericScore >= 80) return 'high';
    if (numericScore >= 60) return 'medium';
    return 'low';
  }

  trackByFn(index: number, item: any): number {
    return index;
  }

  resetAnalysis() {
    this.selectedFile = null;
    this.result = null;
    this.loading = false;
  }

  downloadReport() {
    if (!this.result) return;
    
    const reportContent = `
RESUME ANALYSIS REPORT
=====================

ATS Score: ${this.result.ats_score}

STRENGTHS:
${this.result.strengths.map((s: string, i: number) => `${i + 1}. ${s}`).join('\n')}

AREAS FOR IMPROVEMENT:
${this.result.weaknesses.map((w: string, i: number) => `${i + 1}. ${w}`).join('\n')}

RECOMMENDATIONS:
${this.result.suggestions.map((s: string, i: number) => `${i + 1}. ${s}`).join('\n')}

IMPROVED SUMMARY:
${this.result.improved_summary}

Generated on: ${new Date().toLocaleString()}
    `;
    
    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `resume-analysis-${new Date().getTime()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
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