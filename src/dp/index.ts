import { Session } from './singleton';

console.warn(`***Singleton***`);
console.log(`-----------------\n`);

// Create a session instance
console.log(`Create a session instance\n`);

const session = Session.createSession({token: 'jwt', username: 'User1'});

console.log(session);
console.log(session.username);
console.log(session.token);

// Create another session instance
console.log(`\nCreate another session instance\n`);

const session2 = Session.createSession({token: 'jwt2', username: 'User2'}); // Cannot instantiate another session.

console.log(session2);
console.log(session2.username);
console.log(session2.token);