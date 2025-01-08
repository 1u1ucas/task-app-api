import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TimestampEntity } from "../../Generic/timestamp.entity";

@Entity('task')
export class TaskEntity extends TimestampEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 255, nullable: false})
    title: string;

    @Column({type: 'text', nullable: true})
    description: string;

    @Column({type: 'boolean', default: false})
    completed: boolean;
}
