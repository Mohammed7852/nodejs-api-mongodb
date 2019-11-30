import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class BitcoinAddress {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    privateKey: string;
    @Column()
    addressCompressed: string;
    @Column()
    addressUnCompressed: string;
    @Column()
    index: string;
}