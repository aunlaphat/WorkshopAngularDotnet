import { Component, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private meta = inject(Meta)

  ngOnInit(): void {
    this.meta.addTag(
      {
        name: 'title',
        content: 'ติดต่อเรา | Stock Management'
      },
    )
    this.meta.addTag(
      {
        name: 'description',
        content: 'ติดต่อเรา, Stock Management is a web application that allows users to manage their stock inventory.'
      },
    )
    this.meta.addTag(
      {
        name: 'keywords',
        content: 'ติดต่อเรา, management, inventory, web application, stock management, inventory management, stock inventory, stock management web application, inventory management web application, stock inventory web application, stock management inventory, stock management inventory web application, stock management inventory management'
      },
    )
  }

}
