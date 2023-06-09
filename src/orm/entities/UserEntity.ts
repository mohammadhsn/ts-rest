import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;
}
