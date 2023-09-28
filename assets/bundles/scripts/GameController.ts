import { _decorator, Component, Node, Sprite } from 'cc';
import { EnemyCard } from './EnemyCard';
const { ccclass, property } = _decorator;

@ccclass('GameController')
export class GameController extends Component {
    @property({
        type: Node,
    })
    private enemyCardPrefab: Node

    start() {

    }
}

enum GameState{
    StartLevel,
    ChooseUpgrade,
}


