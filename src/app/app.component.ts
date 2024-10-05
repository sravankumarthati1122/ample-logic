import { Component } from '@angular/core';
import { ToastrService, ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ample';
  progress = 0; // Progress starts from 0
  interval:any ;

  constructor(private toastr: ToastrService) {}

  showSuccess() {
    this.toastr.success('Migration applied successfully.', 'Success');
  }

  startProgress() {
    if((this.progress = 100) || (this.progress = 0)){
    clearInterval(this.interval)
    document.getElementById('offcanvasPopup')?.classList.remove('hidden');
    document.getElementById('toggle')?.classList.remove('down');
    this.progress = 0;
    this.interval = setInterval(() => {
      this.progress += 1;
      const progressBar = document.getElementById('progressBar');

      if (progressBar) {
        progressBar.style.width = this.progress + '%';
      }

      if (this.progress === 100) {
        clearInterval(this.interval);
        this.toggle()
        document.getElementById('toggle')?.classList.add('down');
        this.showSuccess();
        
      }
    }, 100);
    
  }// Adjust the interval timing based on desired speed
  }

  hideOffcanvas() {
    const offcanvasPopup = document.getElementById('offcanvasPopup');
    if (offcanvasPopup) {
      document.getElementById('toggle')?.classList.toggle('down');
    }
  }

  toggle() {
    document.getElementById('toggle-image')?.classList.toggle('rotate-image');
    document.getElementById('offcanvasPopup')?.classList.toggle('hidden');
    document.getElementById('toggle')?.classList.toggle('down');
  }
}
