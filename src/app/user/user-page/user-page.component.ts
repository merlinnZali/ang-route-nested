import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-page',
  template: `
  <aside class="sidebar w-20">
      <app-user-sidebar></app-user-sidebar>
  </aside>
  <section class="details w-80">
      <!-- on peut avoir une page avec tabulation
      chaque tab est une sous page qui a un tableau d element.
      au clic sur continuer apres avoir selectionner un element du tableau
      dans une sous page on aplique une sous route like users:id qui
      va ouvrir une nouvelle page
      -->
      <router-outlet></router-outlet>
  </section>
  `,
  styles: [

  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPageComponent implements OnInit {

  constructor() {console.log("AAHERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRE") }

  ngOnInit(): void {
    console.log("BBHERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRE")
  }

}
