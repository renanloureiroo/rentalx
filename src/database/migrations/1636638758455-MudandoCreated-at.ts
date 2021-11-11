import { MigrationInterface, QueryRunner } from 'typeorm';

export class MudandoCreatedAt1636638758455 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('categories', 'created-at', 'created_at');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('categories', 'created_at', 'created-at');
  }
}
