import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-front-layout',
  standalone: true,
  templateUrl: './front-layout.component.html',
  styleUrl: './front-layout.component.scss',
  imports: [RouterOutlet, NavbarComponent, FooterComponent]
})
export class FrontLayoutComponent {

}
