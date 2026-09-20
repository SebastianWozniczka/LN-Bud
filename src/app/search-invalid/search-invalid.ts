import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

type PersonProfile = {
  name: string;
  description: string;
};

@Component({
  selector: 'app-search-invalid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-invalid.html',
  styleUrls: ['./search-invalid.css'],
})
export class SearchInvalid {
  @Input() personName = '';

  readonly people: PersonProfile[] = [
    {
      name: 'Leszek',
      description:
        'Leszek to doświadczony murarz, który zawsze wykonuje pracę rzetelnie i dokładnie. Jest ceniony za punktualność oraz solidność w realizacji zleceń.',
    },
    {
      name: 'Łukasz',
      description:
        'Łukasz to wszechstronny specjalista, który świetnie radzi sobie z różnorodnymi zadaniami. Charakteryzuje go odpowiedzialność, kreatywność i zaangażowanie w każdą pracę.',
    },
  ];

  get selectedPerson(): PersonProfile | null {
    const query = this.personName.trim().toLowerCase();

    if (!query) {
      return null;
    }

    return (
      this.people.find((person) => person.name.toLowerCase() === query) ??
      this.people.find((person) => person.name.toLowerCase().includes(query)) ??
      null
    );
  }
}
