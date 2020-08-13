import {Entity, PrimaryColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryColumn('uuid')
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}
