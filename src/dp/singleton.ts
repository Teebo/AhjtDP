export interface ISession {
  username: string;
  token: string;
}

/**
 * Session class
 */

export class Session implements ISession {
  private static instance: Session;
  public username: string;
  public _token: string;

  private constructor(session: ISession) {
    this.username = session.username;
    this._token = session.token;
  }


  set token(token: string) {
    this._token = token;
  }

  get token(): string {
    return this._token;
  }

  /**
   * 
   * @param session An object of type ISession
   * @returns A session instance
   */

  static createSession(session: ISession): Session {
    if(this.instance) {
      console.error(`You tried to create another session instance...returning the existing one..\n`);
      return this.instance;
    }

    this.instance = new Session(session);

    return this.instance;
  }
}
