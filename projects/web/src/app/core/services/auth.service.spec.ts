import { async, TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';
import { LocalStorageService } from './local-storage.service';

describe('AuthService', async () => {
  let service: AuthService;
  // https://stackoverflow.com/a/51911033/4115894
  const angularFireAuthStub = {
    authState: new BehaviorSubject({}),
    auth: {
      signInWithPopup: jasmine.createSpy('signInWithPopup'),
    },
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        AuthService,
        { provide: AngularFireAuth, useValue: angularFireAuthStub },
      ],
    });
    service = TestBed.get(AuthService);
  });

  it('should be created', async () => {
    expect(service).toBeTruthy();
  });

  /* it('init should be executable', async () => {
    spyOn(service, 'init');
    service.init();
    expect(service.init).toHaveBeenCalled();
  }); */
});
