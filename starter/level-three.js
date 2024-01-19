document.addEventListener("DOMContentLoaded", () => {
    // Get the ball elements
    const balls = document.querySelectorAll(".ball")
    const scoreDisplay = document.querySelector(".score")
    const levelWinner = document.querySelector(".level-winner")

    let score = 0

    // Define an array of colors
    const colors = ["blue", "yellow", "red"]

    // Add click event listener to each ball
    balls.forEach((ball, index) => {
        // Assign a color to each ball based on the index
        ball.style.backgroundColor = colors[index]

        ball.addEventListener("click", () => {
            score += parseInt(ball.dataset.increment)

            // Check if the score goes over 100
            if (score > 100) {
                score = 0 // Reset the score back to 0
                levelWinner.style.opacity = 0 // Hide the level winner message
            }

            // Update the score display
            scoreDisplay.textContent = score

            // Check if the score reaches 100
            if (score >= 100) {
                levelWinner.style.opacity = 1
                balls.forEach((ball) => {
                    ball.removeEventListener("click", handleClick)
                })
            }
        })
    })
})