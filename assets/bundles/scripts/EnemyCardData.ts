import { SpriteFrame } from 'cc';

export class EnemyCardData {
    public readonly portrait: SpriteFrame
    public readonly attack: number
    public readonly health: number

    constructor(attack: number, health: number, portrait: SpriteFrame = null) {
        this.attack = attack
        this.health = health
        this.portrait = portrait
    }

}