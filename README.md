
# NestJs with DDD

This is an example of using DDD with nestjs, only for proof of concept and framework study
If you want more documentation of it, click here [Nest](https://github.com/nestjs/nest) 

## Branch Definitions
 * **master**: Flat structure with mongo connection
 * **flat-structure-sql**: Flat structure with connection to sqlite can be easily changed to any connection that allows sequelizejs
 * **ddd-mongo**: [IN PROGRESS] Exagonal structure with mongo connection 

## Getting Started

```
git clone git@github.com:ecaminero/nestjs-ddd.git
```

### Structure
```
├── src
│   ├── app.module.ts
│   ├── constants.ts
│   ├── database
│   │   ├── database.module.ts
│   │   └── database.providers.ts
│   ├── main.ts
│   └── user
│       ├── __test__
│       │   ├── *.controller.spec.ts
│       │   ├── *.service.spec.ts
│       ├── controller
│       │   ├── *.controller.ts
│       ├── dto
│       │   └── *.dto.ts
│       ├── entity
│       │   ├── *.entity.ts
│       ├── model 
│       │   └── *.model.ts
│       ├── repository
│       │   └── *.repository.ts
│       ├── user.module.ts
│       ├── user.provider.ts
│       └── user.service.ts
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── tsconfig.build.json
├── tsconfig.json
└── tslint.json
```

### Prerequisites

  * node 10+
  * mongo DB 
  * Sqlite

```bash
$ docker run --name dev-mongo -p 27017:27017 -d mongo
```

### Installing

  ```bash
$ npm install 
```

If you see this everything all fine 
```

added 898 packages from 578 contributors and audited 876746 packages in 11.087s
found 0 vulnerabilities

```

## Running the tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# coverage
$ npm run test:cov

```


## Built With

* [Nest](https://github.com/nestjs/nest)  - The framework used

* [Mongoosejs](https://mongoosejs.com/) - elegant object modeling for Nodejs

* [node.js](https://nodejs.org/en/)- Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine

* [jestjs](https://jestjs.io/en/) Jest is a delightful JavaScript Testing Framework with a focus on simplicity


* [sequelizejs](http://docs.sequelizejs.com/) Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.
  

## Authors

*  **Edwin Caminero** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/ecaminero/nestjs-ddd/contributors) who participated in this project.

  
## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


## Acknowledgments

* Inspiration
* Hexagonal architecture concept tests
