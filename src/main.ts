import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

//การทำscroll ให้เริ่มต้นที่ด้านบน
import { InMemoryScrollingOptions, provideRouter, withInMemoryScrolling,withViewTransitions } from '@angular/router';
import { routes } from './app/app.routes';

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled'
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling(scrollConfig),
      withViewTransitions()
    )
  ]
}).catch(err => console.error(err))
