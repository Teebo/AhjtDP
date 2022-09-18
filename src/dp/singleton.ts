export interface ISession {
  username: string;
}

/**
 * Session class
 */

export class Session implements ISession {
  constructor(public username: string){}
}