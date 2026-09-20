import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Middle } from './middle/middle';
import { Middle2 } from './middle2/middle2';
import { SearchInvalid } from './search-invalid/search-invalid';

type ViewName = 'offer' | 'projects' | 'pricing' | 'search';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [CommonModule, FormsModule, Middle, Middle2, SearchInvalid],
})
export class App {
  protected readonly title = signal('L-Bud');

  readonly companyLinks = ['Szkolenia', 'Referencje'];
  readonly navItems: Array<{ label: string; view: Exclude<ViewName, 'search'> }> = [
    { label: 'Oferta', view: 'offer' },
    { label: 'Realizacje', view: 'projects' },
    { label: 'Cennik', view: 'pricing' },
  ];
  readonly searchSuggestions = ['Leszek', 'Łukasz'];

  activeView: ViewName = 'projects';
  isCompanyMenuVisible = false;
  isSearchVisible = false;
  searchValue = '';
  readonly defaultSearchText = 'Wpisz imię, np. Leszek';

  setView(view: ViewName): void {
    this.activeView = view;
    this.isCompanyMenuVisible = false;
  }

  showCompanyMenu(): void {
    this.isCompanyMenuVisible = true;
  }

  hideCompanyMenu(): void {
    this.isCompanyMenuVisible = false;
  }

  keepCompanyMenuVisible(): void {
    this.isCompanyMenuVisible = true;
  }

  toggleSearch(): void {
    this.isSearchVisible = !this.isSearchVisible;

    if (!this.isSearchVisible) {
      this.searchValue = '';
    }
  }

  get filteredSuggestions(): string[] {
    const query = this.searchValue.trim().toLowerCase();

    if (!query) {
      return this.searchSuggestions;
    }

    return this.searchSuggestions.filter((name) =>
      name.toLowerCase().includes(query),
    );
  }

  submitSearch(): void {
    const value = this.searchValue.trim();

    if (!value) {
      return;
    }

    this.isSearchVisible = false;
    this.activeView = 'search';
  }

  selectSuggestion(name: string): void {
    this.searchValue = name;
    this.submitSearch();
  }

  handleSearchKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.submitSearch();
    }
  }
}

