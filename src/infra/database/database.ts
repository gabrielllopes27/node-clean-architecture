import pgPromise from 'pg-promise'

const pgp = pgPromise({});

const db = pgp({
    user: '',
    password: '',
    host: 'localhost',  
    port: 5432,
    database: '',
    idleTimeoutMillis: 100
});

export default db;