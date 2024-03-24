// Extends (Наследование)

type PaymentStatus = 'new' | 'paid'

class Payment {
    id: number
    status: PaymentStatus = 'new'

    constructor(id: number) {
        this.id = id
    }

    pay() {
        this.status = 'paid'
    }
}

class PersistedPayment extends Payment {
    paidAt!: Date

    constructor() {
        const id = Math.random()
        super(id)
    }

    override pay(date?: Date) {
        super.pay()
        if (date) {
            this.paidAt = date
        }
    }
}

export {}
