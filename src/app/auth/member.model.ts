export class Member {
  constructor(
    public email: string,
    public id: string,
    private token2: string,
    private tokenExpirationDate2: Date
  ) {}

  get token() {
    if (!this.tokenExpirationDate2 || new Date() > this.tokenExpirationDate2) {
      return null;
    }
    return this.token2;
  }
}
