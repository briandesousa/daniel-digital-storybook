import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from './page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'daniel-digital-storybook';

  private disablePrevious = false;
  private disableNext = false;

  constructor(
    private router: Router,
    private pageService: PageService) {}

  previousPage() {
    if (this.pageService.decrementPage()) {
      if(this.pageService.isFirstPage()) {
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['/page' + this.pageService.getCurrentPage()]);
      }
    }

    this.updatePageButtons();
  }

  nextPage() {
    if (this.pageService.incrementPage()) {
      this.router.navigate(['/page' + this.pageService.getCurrentPage()]);
    }

    this.updatePageButtons();
  }

  private updatePageButtons() {
    this.disablePrevious = this.pageService.isFirstPage();
    this.disableNext = this.pageService.isLastPage();
  }

  getPageCount(): number {
    return this.pageService.getCurrentPage() + 1;
  }
}
