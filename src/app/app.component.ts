import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Resian-Project';

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      "facebook", 
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/Facebook_icon.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "twitter", 
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/Twitter_icon.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "instagram", 
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/Instagram_icon.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "snapchat",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/Snapchat_icon.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "youtube",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/Youtube_icon.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "linkedin",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/Linkedin_icon.svg")
    );
  }
}
