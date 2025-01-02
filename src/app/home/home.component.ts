import { Component } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedin, faGoogleScholar } from '@fortawesome/free-brands-svg-icons'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  envelop = faEnvelope
  github = faGithub
  linkedin = faLinkedin
  scholar = faGoogleScholar
  check = faCircleCheck
}
