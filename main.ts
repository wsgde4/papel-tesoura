let numero = 0
input.onGesture(Gesture.Shake, function () {
    numero = randint(1, 3)
    if (numero == 1) {
        basic.showLeds(`
            . . . . .
            . # # # #
            . # # # #
            . . . # #
            . . . . .
            `)
    } else if (numero == 2) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    } else if (numero == 3) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # #
            . # # # .
            . . . . .
            `)
    }
})
