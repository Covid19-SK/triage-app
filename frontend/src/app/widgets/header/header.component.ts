import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { TranslationService } from '../../shared/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input()
  public icon: IconDefinition;

  @Input()
  public title: string;

  @Input()
  public subTitle: string;

  @Input()
  public language: string;

  public constructor(private translate: TranslationService) {}

  public changeLanguage(): void {
    this.translate.switchLanguage();
  }
}
