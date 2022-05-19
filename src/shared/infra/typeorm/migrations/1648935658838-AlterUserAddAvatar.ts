import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";
// Adicionar Coluna avatar na tabela de users

export class AlterUserAddAvatar1648935658838 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("users", 
        new TableColumn ({
            name: "avatar",
            type: "varchar",
            isNullable: true,
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "avatar");
    }

}
