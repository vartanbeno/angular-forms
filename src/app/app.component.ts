import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;

  userModel = new User('Vartan', 'v@b.com', 5551231234, 'default', 'morning', true);
  
  validateTopic(value: string) {
    if (value === 'default') {
      this.topicHasError = true;
    }
    else {
      this.topicHasError = false;
    }
  }
}
