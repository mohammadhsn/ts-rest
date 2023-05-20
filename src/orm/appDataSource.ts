import {DataSource} from "typeorm";
import {UserEntity} from "./entities/UserEntity";

export const appDataSource: DataSource = new DataSource({
    type: "postgres",
    host: "127.0.01",
    port: 5432,
    username: "pg",
    password: "pg",
    database: "service",
    entities: [UserEntity],
    migrations: [__dirname + '/migrations/*.ts']
});
