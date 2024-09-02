import { Component, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  
  private meta = inject(Meta)

  ngOnInit(): void {
    this.meta.addTag(
      {
        name: 'title',
        content: 'เกี่ยวกับเรา | Stock Management'
      },
    )
    this.meta.addTag(
      {
        name: 'description',
        content: 'เกี่ยวกับเรา, Stock Management is a web application that allows users to manage their stock inventory.'
      },
    )
    this.meta.addTag(
      {
        name: 'keywords',
        content: 'เกี่ยวกับเรา, management, inventory, web application, stock management, inventory management, stock inventory, stock management web application, inventory management web application, stock inventory web application, stock management inventory, stock management inventory web application, stock management inventory management'
      },
    )
  }

}
