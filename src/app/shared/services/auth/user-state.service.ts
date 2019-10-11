import { Injectable, Inject } from '@angular/core';
import { StorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';
import { UserState } from 'src/app/modules/user/model/user-state';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {
  private static readonly STORAGE_KEY: string = 'user-sate';

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public store(user: UserState) {
    this.storage.set(UserStateService.STORAGE_KEY, user);
  }

  public hasUser(): boolean {
    return this.storage.get(UserStateService.STORAGE_KEY) === undefined ? false : true;
  }

  public get userName(): string {
    if (!this.hasUser()) {
      return '';
    }
    const user: any = this.storage.get(UserStateService.STORAGE_KEY);
    return user.nickName;
  }

  public isLoggedIn(): boolean {
    const user: any = this.storage.get(UserStateService.STORAGE_KEY);


    if (user !== undefined) {
      if (user.isLoggedIn) {
        return true;
      }
    }
    return false;
  }

  public update(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      const user: UserState = this.storage.get(UserStateService.STORAGE_KEY);
      user.isLoggedIn = true;
      this.store(user);
      console.log('User stored ' + JSON.stringify(user));
      resolve(true);
    });

  }
}
