import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name: 'order'})
export class Order {

    @PrimaryGeneratedColumn('uuid')
    @Column({nullable: false,unique: true})
    id: string 

    @Column({type: 'decimal', nullable: false})
    price: number

    @Column({type: 'decimal', nullable: false})
    pay_method: string

    @Column({type: 'int', nullable: true, default: 1})
    installments: number
}