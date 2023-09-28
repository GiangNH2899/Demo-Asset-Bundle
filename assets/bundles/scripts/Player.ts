import { PlayerSingletonData } from './PlayerSingletonData';
import { _decorator, Component, log, Node } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {
    start() {
        log(PlayerSingletonData.getInstance().data)
    }
}


