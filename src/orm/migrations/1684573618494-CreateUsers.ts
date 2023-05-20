import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsers1684573618494 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
           CREATE TABLE users (
                id serial PRIMARY KEY,
                email VARCHAR ( 255 ) UNIQUE NOT NULL
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE users`);
    }
}
