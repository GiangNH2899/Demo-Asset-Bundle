import { _decorator, Button, Component, game, Node, Sprite } from 'cc';
import { EnemyCard } from './EnemyCard';
const { ccclass, property } = _decorator;

@ccclass('GameController')
export class GameController extends Component {
    @property({
        type: Node,
    })
    private enemyCardPrefab: Node


    resetGame() {
        game.restart()
    }
}

enum GameState{
    StartLevel,
    ChooseUpgrade,
}


