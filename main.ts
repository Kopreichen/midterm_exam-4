let index = 0
let x = 0
let y = 0
let j = 0
let i = 0
basic.forever(function () {
    index = 0
    x = 2
    y += 2
    for (let n = 0; n <= 2; n++) {
        for (let index2 = 0; index2 < 2; index2++) {
            if (index == 1) {
                j = 0
                i = n
                index += -1
            } else if (index == 0) {
                i = 0
                j = n
                index += 1
            }
            led.plot(x + j, y + i)
            led.plot(x - j, y - i)
        }
        basic.pause(500)
    }
    basic.clearScreen()
})
