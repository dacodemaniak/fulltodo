import { TestBed } from '@angular/core/testing';

import { LoggedInService } from './logged-in.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

describe('LoggedInService', () => {

  const routerMock = {navigate: jasmine.createSpy('navigate')};
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: Router, useValue: routerMock }
    ]
  }));

  it('should be created', () => {
    const service: LoggedInService = TestBed.get(LoggedInService);
    expect(service).toBeTruthy();
  });

  it ('should canActivate return false', () => {
    const service: LoggedInService = TestBed.get(LoggedInService);
    const routeMock: any = { snapshot: {}};
    const routeStateMock: any = { snapshot: {}, url: '/authentication'};
    const result: boolean = service.canActivate(routeMock, routeStateMock);
    expect(result).toBe(false);
  });
});
