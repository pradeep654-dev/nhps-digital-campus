import { Component } from '@angular/core';
import { Header } from '../header/header';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [Header],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {

}
