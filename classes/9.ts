// Видимость свойств

class Vehicle {
    public make!: string
    private damages!: string[]
    private _model!: string
    protected run!: number
    #price!: number

    set model(m: string) {
        this._model = m
    }

    get model() {
        return this._model
    }

    isPriceEqual(v: Vehicle) {
        return this.#price == v.#price
    }

    private addDamage(d: string) {
        this.damages.push(d)
    }
}

class EuroTruck extends Vehicle {
    setRun(km: number) {
        this.run = km / 0.62
    }
}

new Vehicle()
new EuroTruck()

export {}
