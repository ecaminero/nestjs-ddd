import * as dotenv from 'dotenv';
dotenv.config();

export const DB_PROVIDER = 'DbConnectionToken';
export const USER_MODEL_PROVIDER = 'UserModelToken';
export const SERVICE = 'DB_MONGO_SERVICE';
export const APP_NAME = process.env.APP_NAME || 'mongo.database.service';
export const DATABASE_SERVICE = process.env.DATABASE_SERVICE || 'DATABASE_SERVICE';
export const DB_SERVER = process.env.DB_SERVER || 'mongodb://localhost/testing';
export const APP_PORT = process.env.PORT || 4000;
