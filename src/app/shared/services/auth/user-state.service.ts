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
}
