import { _decorator, Component, Label, Node, Sprite, SpriteFrame, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlayerCard')
export class PlayerCard extends Component {
    @property({
        type: Sprite,
    })
    private spritePortrait: Sprite

    @property({
        type: Label,
    })
    private lableDescription: Label
    private data: PlayerCardData;

    protected start(): void {
        tween(this.node.position).to(1, new Vec3(this.node.position.x + 100, this.node.position.y, this.node.position.z), {
            easing: "backIn", onUpdate: (target: Vec3, ratio: number) => {
                this.node.position = target
            }
        }).to(1, new Vec3(this.node.position.x, this.node.position.y, this.node.position.z), {
            easing: "backOut", onUpdate: (target: Vec3, ratio: number) => {
                this.node.position = target
            }
        }).union().repeatForever().start()
        console.log("hello girl")
    }

    initCard(data: PlayerCardData) {
        this.data = data
        this.lableDescription.string = data.description
        if (data.portrait != null) this.spritePortrait.spriteFrame = data.portrait;
    }
}

export class PlayerCardData {
    public readonly id: number
    public readonly portrait: SpriteFrame
    public readonly description: string
    public readonly effect: CardEffect
    public readonly effectValue: number
    public readonly actionCost: number

    constructor(id: number, effect: CardEffect, effectValue: number, actionCost: number, portrait: SpriteFrame = null) {
        this.id = id
        this.effect = effect
        this.portrait = portrait
        this.effectValue = effectValue
        this.actionCost = actionCost
        switch (effect) {
            case CardEffect.DealDamageSingleTarget:
                this.description = `Deal ${effectValue} damage to an enemy`
                break
            case CardEffect.DealDamageAllTargets:
                this.description = `Deal ${effectValue} damage to all enemies`
                break
            case CardEffect.DrawCard:
                if (effectValue == 1) {
                    this.description = `Draw a card`
                } else {
                    this.description = `Draw ${effectValue} cards`
                }
                break
            case CardEffect.GainAction:
                if (effectValue == 1) {
                    this.description = `Gain an action`
                } else {
                    this.description = `Gain ${effectValue} actions`
                }
                break
            case CardEffect.Health:
                this.description = `Restore ${effectValue} health`
                break
        }

    }
}

export enum CardEffect {
    DealDamageSingleTarget,
    DealDamageAllTargets,
    DrawCard,
    GainAction,
    Health
}
