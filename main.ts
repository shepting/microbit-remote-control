joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    joystickbit.Vibration_Motor(100)
    basic.showString("E")
    radio.sendString("E")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    joystickbit.Vibration_Motor(100)
    basic.showString("F")
    radio.sendString("F")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    joystickbit.Vibration_Motor(100)
    basic.showString("D")
    radio.sendString("D")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    joystickbit.Vibration_Motor(100)
    basic.showString("C")
    radio.sendString("C")
})
radio.setGroup(148)
joystickbit.initJoystickBit()
music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
basic.forever(function () {
	
})
