export class Singleton<T> {
    private static _instance: any
    public constructor() {}

    public static getInstance(): any {
        if (!this._instance) {
            this._instance = new this()
        }
        return this._instance
    }
}

export default Singleton;