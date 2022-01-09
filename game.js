let canvas = document.getElementById("myCanvas")
let drawing = canvas.getContext("2d")

drawing.beginPath()
drawing.fillRect(0, 0, 150, 75)
drawing.stroke()

drawing.beginPath()
drawing.arc(500, 530, 30, 0, 2 * Math.PI)
// drawing.arc(700, 530, 20, 0, 5 * Math.PI)
drawing.fillStyle = "red"
drawing.fill()
drawing.stroke()

drawing.beginPath()
drawing.arc(700, 530, 10, 0, 2 * Math.PI)
drawing.fillStyle = "yellow"
drawing.fill()
drawing.stroke()

drawing.beginPath()
drawing.moveTo(210, 180)
drawing.lineTo(190, 140)
drawing.lineTo(170, 180)
drawing.fillStyle = "blue"
drawing.fill()
drawing.stroke()
