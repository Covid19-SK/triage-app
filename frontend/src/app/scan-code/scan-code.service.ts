import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

export interface Camera {
  name: string;
}

declare const Instascan: any;

@Injectable({
  providedIn: 'root',
})
export class ScanCodeService {
  private scanner: any;
  public readonly cameras$ = new Observable<Camera[]>(
    (subject: Subscriber<Camera[]>) => {
      (Instascan.Camera.getCameras() as Promise<Camera[]>)
        .then((cameras: Camera[]) => {
          subject.next(cameras);
          subject.complete();
        })
        .catch(error => {
          subject.error(error);
        });
    },
  );

  public stopScanning(): void {
    if (this.scanner) {
      this.scanner.stop();
    }
  }

  public scanCodeCam(video: HTMLVideoElement): Observable<string> {
    return new Observable<string>((subject: Subscriber<string>) => {
      this.scanCodePromise(video)
        .then(result => {
          subject.next(result);
          subject.complete();
        })
        .catch(error => subject.error(error));
    });
  }
  public scanUsingWebCam(
    video: HTMLVideoElement,
    camera: Camera,
  ): Observable<string> {
    return new Observable<string>((subject: Subscriber<string>) => {
      this.scanUsingWebCamPromise(video, camera)
        .then(result => {
          subject.next(result);
          subject.complete();
        })
        .catch(error => subject.error(error));
    });
  }

  private async scanUsingWebCamPromise(
    video: HTMLVideoElement,
    camera: Camera,
  ): Promise<string> {
    this.scanner = new Instascan.Scanner({ video, mirror: false });

    return new Promise(async (success, reject) => {
      this.scanner.addListener('scan', (id: string) => {
        success(id);
      });

      if (!camera) {
        reject('No cameras found.');
      }
      this.scanner.start(camera);
    });
  }

  private async scanCodePromise(video: HTMLVideoElement): Promise<string> {
    this.scanner = new Instascan.Scanner({ video, mirror: false });

    return new Promise(async (success, reject) => {
      this.scanner.addListener('scan', (id: string) => {
        success(id);
      });

      const cameras = await Instascan.Camera.getCameras();
      if (cameras.length <= 0) {
        reject('No cameras found.');

        return;
      }
      this.scanner.start(cameras[cameras.length - 1]);
    });
  }
}
