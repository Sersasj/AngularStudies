import { Component } from '@angular/core';




@Component({
  selector: 'app-root',

  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="false">
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>
`,

})
export class AppComponent {
  title = 'homes';
}
