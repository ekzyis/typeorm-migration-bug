import {MigrationInterface, QueryRunner} from "typeorm";

export class addColumn1597324084864 implements MigrationInterface {
    name = 'addColumn1597324084864'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "test" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "test"`);
    }

}
