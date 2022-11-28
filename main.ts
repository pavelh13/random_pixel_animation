let buffer = 0
let x2 = 0
let x1 = 0
let ROW = 0
let COL = 0
let seznam: number[] = []
for (let pořadí = 0; pořadí <= 24; pořadí++) {
    seznam[pořadí] = pořadí
}
basic.forever(function () {
    for (let pořadí = 0; pořadí <= 24; pořadí++) {
        COL = seznam[pořadí] % 5
        ROW = seznam[pořadí] / 5
        for (let pořadí = 0; pořadí <= 255; pořadí++) {
            led.plotBrightness(COL, ROW, 255 - pořadí)
            control.waitMicros(1000)
        }
    }
    for (let pořadí = 0; pořadí <= 10; pořadí++) {
        x1 = randint(0, 24)
        while (x1 == x2) {
            x2 = randint(0, 24)
        }
        buffer = seznam[x1]
        seznam[x1] = seznam[x2]
        seznam[x2] = buffer
    }
})
