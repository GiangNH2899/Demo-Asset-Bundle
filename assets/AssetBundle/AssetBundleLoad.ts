import { _decorator, assetManager, Button, Component, director, Label, Node, ProgressBar, Scene } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AssetBundleLoad')
export class AssetBundleLoad extends Component {

    @property(Label)
    private labelStatus: Label
    @property(ProgressBar)
    private progress: ProgressBar

    loadMainScene() {
        this.labelStatus.string = 'hello boy'
        assetManager.loadBundle("http://localhost:8000/bundles", (err, bundles) => {
            if (err) {
                this.labelStatus.string = `error: ${err.stack}`
                return
            }
            this.labelStatus.string = `load bundle success: ${bundles}`
            console.log(`load bundle success:`)
            bundles.loadScene("MainScene", (finished, total, item) => {
                this.progress.progress = finished / total
            }, (err, scene) => {
                if (err) {
                    this.labelStatus.string = `error: ${err}`
                    return
                }
                director.runScene(scene)
            })

            // bundles.load("bundles", (finished, total, item) => {
            //     this.progress.progress = finished / total
            // }, (err, bundle) => {
            //     // if (err) {
            //     //     this.labelStatus.string = `error: ${err}`
            //     //     return
            //     // }

            // })
        })
    }
}


