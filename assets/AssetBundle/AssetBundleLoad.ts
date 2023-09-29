import { _decorator, assetManager, Button, Component, director, ImageAsset, Label, Node, ProgressBar, Scene, Sprite, SpriteFrame, Texture2D } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AssetBundleLoad')
export class AssetBundleLoad extends Component {

    @property(Label)
    private labelStatus: Label
    @property(ProgressBar)
    private progress: ProgressBar
    @property(Sprite)
    private spriteBgImage: Sprite

    loadMainScene() {
        this.labelStatus.string = 'hello boy'
        assetManager.loadBundle("https://dev.sandinh.com/haoln/Chan6Bundles/bundles", (err, bundles) => {
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
        assetManager.loadRemote<ImageAsset>("https://dev.sandinh.com/haoln/Chan6Bundles/battleback1.png", (err, image) => {
            if (err) {
                this.labelStatus.string = `error: ${err.stack}`
                return
            }
            this.labelStatus.string = "load success"
            const spriteFrame = new SpriteFrame();
            const texture = new Texture2D();
            texture.image = image;
            spriteFrame.texture = texture;
            this.spriteBgImage.spriteFrame = spriteFrame
        })
    }
}


