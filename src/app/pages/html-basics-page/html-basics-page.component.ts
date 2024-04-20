import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-html-basics-page',
  templateUrl: './html-basics-page.component.html',
  styleUrls: ['./html-basics-page.component.scss'],
})
export class HtmlBasicsPageComponent implements OnInit {
  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.firebaseService
      .getLessons('html')
      .pipe(
        map((data: any[]) => {
          const html1Object = data.find((obj) => obj.html1);
          return html1Object ? html1Object.html1 : null;
        })
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
