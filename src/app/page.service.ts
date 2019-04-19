import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private currentPage = 0;
  private totalPageCount = 3;

  constructor() {}

  getCurrentPage(): number {
    return this.currentPage;
  }

  isFirstPage(): boolean {
    return this.currentPage === 0;
  }

  isLastPage(): boolean {
    return this.currentPage + 1 === this.totalPageCount;
  }

  /**
   * Increment the page number. Returns boolean indicating whether page was incremented
   * depending on whether the max page count has been reached.
   * @return boolean true if page was incremented otherwise false 
   */
  incrementPage(): boolean {
    if (this.currentPage + 1 === this.totalPageCount) {
      return false;
    } else {
      this.currentPage++;
      return true;
    }
  }

  /**
   * Decrement the page number. Returns boolean indicating whether page was decremented
   * depending on whether page zero was reached.
   */
  decrementPage() {
    if(this.currentPage === 0) {
      return false;
    } else {
      this.currentPage--;
      return true;
    }
  }
}
