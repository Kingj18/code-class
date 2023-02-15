let input_a = 0
let answer = 0
let input_b = 0
input.onButtonPressed(Button.A, function () {
    input_a += 1
    basic.showNumber(input_a)
})
input.onGesture(Gesture.LogoUp, function () {
    answer = input_a + input_b
    basic.showNumber(answer)
})
input.onButtonPressed(Button.B, function () {
    input_b += 1
    basic.showNumber(input_b)
})
input.onGesture(Gesture.LogoDown, function () {
    answer += input_a - input_b
})
basic.forever(function () {
	
})
