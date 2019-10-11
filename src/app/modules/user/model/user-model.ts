import { Required, requiredFields } from './../decorators/user-decorators';

export class UserModel {
  @Required
  private nickName: string;

  @Required
  private secretKey: string;

  @Required
  private email: string;

  private lastname: string;

  private firstname: string;

  public get _nickName(): string {
    return this.nickName;
  }

  public get _secretKey(): string {
    return this.secretKey;
  }

  public get _email(): string {
    return this.email;
  }

  public get _lastName(): string {
    return this.lastName;
  }

  public get _firstName(): string {
    return this.firstName;
  }

  public getRequired() {
    console.log(JSON.stringify(requiredFields));
  }

  public deserialize(datas: any): UserModel {
    Object.assign(this, datas);
    this.lastname = datas.lastName;
    this.firstname = datas.firstName;
    return this;
  }
}
