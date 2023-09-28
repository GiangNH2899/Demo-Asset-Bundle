import { _decorator, Component, Label, Node, Sprite } from 'cc';
import { EnemyCardData } from './EnemyCardData';
const { ccclass, property } = _decorator;

@ccclass('EnemyCard')
export class EnemyCard extends Component {
    @property({
        type: Sprite,
    })
    private spritePortrait: Sprite

    @property({
        type: Label,
    })
    private lableAttack: Label
    @property({
        type: Label,
    })
    private lableHealth: Label
    private data: EnemyCardData;

    initCard(data: EnemyCardData) {
        this.data
        this.lableAttack.string = data.attack.toString()
        this.lableHealth.string = data.health.toString()
        if(data.portrait != null) this.spritePortrait.spriteFrame = data.portrait;
    }

    attack() {
        return this.data.attack
    }

    health(){
        return this.data.health
    }
}


