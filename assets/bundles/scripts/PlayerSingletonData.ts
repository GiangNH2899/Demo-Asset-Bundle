import { _decorator, Component, log, Node } from 'cc';
const { ccclass, property } = _decorator;
import { PlayerCardData, CardEffect} from './PlayerCard';
import Singleton from './Singleton';

@ccclass('PlayerSingletonData')
export class PlayerSingletonData extends Singleton<PlayerSingletonData>{

    public data: PlayerCardData[] = [
        new PlayerCardData(1, CardEffect.DealDamageSingleTarget, 2, 1),
        new PlayerCardData(2, CardEffect.DealDamageAllTargets, 1, 1),
        new PlayerCardData(3, CardEffect.DrawCard, 1, 0),
        new PlayerCardData(4, CardEffect.GainAction, 1, 0),
        new PlayerCardData(5, CardEffect.Health, 4, 1),
    ]
}

