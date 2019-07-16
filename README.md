## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
TODO: 
Documentation in progress
## Requirements

```bash
# Mysql
docker run --name mysqll -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_USER=dev -e MYSQL_PASSWORD=dev -p 3306:3306  -d mysql

# Mongo DB
docker run --name -p 27017:27017 mongo -d mongo
```

## Installation
```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```