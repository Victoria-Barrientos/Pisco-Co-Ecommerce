import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name: 'cart'})
export class Cart {
    
    @PrimaryGeneratedColumn("uuid")
    @Column({nullable: false,unique: true})
    id: string 

    @Column({type: 'string',nullable: false, default: 'Empty'})
    current_state: string

    @Column({type: 'date', nullable: false, default: () => "NOW()" })
    date: Date

    @Column({type: 'decimal', default: 0.00, nullable: false})
    total_price: number

    @Column({type: 'string', nullable: false})
    currency_id: string

    @Column({type: 'boolean', nullable: false, default: false})
    promotion_active: boolean

} 