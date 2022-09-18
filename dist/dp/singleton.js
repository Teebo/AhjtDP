"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Session = void 0;
/**
 * Session class
 */
class Session {
    constructor(session) {
        this.username = session.username;
        this._token = session.token;
    }
    set token(token) {
        this._token = token;
    }
    get token() {
        return this._token;
    }
    /**
     *
     * @param session An object of type ISession
     * @returns A session instance
     */
    static createSession(session) {
        if (this.instance) {
            console.error(`You tried to create another session instance...returning the existing one..\n`);
            return this.instance;
        }
        this.instance = new Session(session);
        return this.instance;
    }
}
exports.Session = Session;
