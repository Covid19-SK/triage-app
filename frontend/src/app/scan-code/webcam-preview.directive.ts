import {
  Directive,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
} from '@angular/core';
import { Camera, ScanCodeService } from './scan-code.service';

@Directive({
  selector: 'video[appWebcamPreview]',
  exportAs: 'webCamPreview',
})
export class WebcamPreviewDirective implements OnDestroy {
  @Output() public readonly codeScanned: EventEmitter<
    string
  > = new EventEmitter();
  public constructor(
    private readonly elementRef: ElementRef<HTMLVideoElement>,
    private readonly scanCodeService: ScanCodeService,
  ) {
    this.scanCodeService
      .scanCodeCam(this.elementRef.nativeElement)
      .subscribe(result => {
        this.codeScanned.next(result);
      });
  }
  public useCamera(camera: Camera): void {
    this.scanCodeService.stopScanning();
    this.scanCodeService
      .scanUsingWebCam(this.elementRef.nativeElement, camera)
      .subscribe(result => {
        this.codeScanned.next(result);
      });
  }
  public ngOnDestroy(): void {
    this.scanCodeService.stopScanning();
  }
}
