/*
 * DOTS: Level Two
 *
 */
document.addEventListener("DOMContentLoaded", () => {
    // Get the ball elements
    const balls = document.querySelectorAll(".ball")
    const scoreDisplay = document.querySelector(".score")
    const levelWinner = document.querySelector(".level-winner") // Add missing variable declaration

    let score = 0

    // Add click event listener to each ball
    balls.forEach((ball) => {
        ball.addEventListener("click", () => {
            // Increment the score by 10
            score += 10

            // Update the score display
            scoreDisplay.textContent = score;

            // Check if the score reaches 100
            if (score == 100) {
                levelWinner.style.opacity = 1
                goToNextLevel()
            }
        })

      
    })

    function goToNextLevel() {
    }
})