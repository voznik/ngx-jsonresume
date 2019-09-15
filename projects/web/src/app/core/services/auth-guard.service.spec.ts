import { async, TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { LocalStorageService } from './local-storage.service';

describe('AuthGuardService', async () => {
  let service: AuthGuardService;
  let authService: AuthService;
  const angularFireAuthStub = {
    authState: {},
    auth: {
      signInWithPopup: jasmine.createSpy('signInWithPopup'),
    },
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        AuthService,
        AuthGuardService,
        { provide: AngularFireAuth, useValue: angularFireAuthStub },
      ],
    });
    service = TestBed.get(AuthGuardService);
    authService = TestBed.get(AuthService);
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
