import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { head } from 'lodash-es';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private translationsSubject$: Subject<any> = new Subject();
  public translations$: Observable<
    any
  > = this.translationsSubject$.asObservable();

  public constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'sk']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    this.changeLanguage(browserLang.match(/en|sk/) ? browserLang : 'en');
  }

  public changeLanguage(language: string): void {
    this.translate.use(language).subscribe(lang => this.onLanguageChange(lang));
  }

  public switchLanguage(): void {
    const newLanguage = head(
      this.translate.getLangs().filter(l => l !== this.translate.currentLang),
    );
    this.changeLanguage(newLanguage);
  }

  private onLanguageChange(language: string): void {
    this.translationsSubject$.next(language);
  }
}
