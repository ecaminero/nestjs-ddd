import * as dotenv from 'dotenv';
dotenv.config();

export const DB_PROVIDER = 'DbConnectionToken';
export const USER_MODEL_PROVIDER = 'UserModelToken';
export const SERVICE = 'DB_MONGO_SERVICE';
export const APP_NAME = process.env.APP_NAME || 'mongo.database.service';
export const DATABASE_SERVICE = process.env.DATABASE_SERVICE || 'DATABASE_SERVICE';
export const DB_SERVER = process.env.DB_SERVER || 'mongodb://localhost/testing';
export const APP_PORT = process.env.PORT || 4000;

// Sql
export const DB_HOST = process.env.DB_HOST || 'localhost.sqlite';
export const DB_NAME = process.env.DB_NAME || 'test';
export const DB_STORAGE = process.env.DB_STORAGE || ':memory:';
export const DB_DIALECT = process.env.DB_DIALECT || 'sqlite';
// tslint:disable-next-line: radix
export const DB_PORT = parseInt(process.env.DB_PORT) || 3306;
export const DB_USERNAME = process.env.DB_USERNAME || 'dev';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'dev';
