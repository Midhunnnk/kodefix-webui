import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kodefix-webui';
  items = [
    {
      imageUrl: 'https://via.placeholder.com/150',
      description: 'Description for item 1'
    },
    {
      imageUrl: 'https://via.placeholder.com/150',
      description: 'Description for item 2'
    },
    {
      imageUrl: 'https://via.placeholder.com/150',
      description: 'Description for item 3'
    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      description: 'Description for item 4 (spans two columns)'
    },
    {
      imageUrl: 'https://via.placeholder.com/150',
      description: 'Description for item 5'
    },
    {
      imageUrl: 'https://via.placeholder.com/150',
      description: 'Description for item 6'
    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      description: 'Description for item 7 (spans two columns)'
    }
  ];
}
