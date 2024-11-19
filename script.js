const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let drawing = false;
let startX, startY;
let lastRadius = 0; // Store the last drawn radius
const perfectRadius = 50; // Define a perfect radius for rating

// Set the canvas dimensions to fill the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineWidth = 5;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.strokeStyle = '#00ff00'; // Default stroke color

// Event listeners for mouse actions
canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    startX = e.offsetX;
    startY = e.offsetY;
    ctx.beginPath();
    ctx.moveTo(startX, startY); // Start path at the mouse down position
});

canvas.addEventListener('mouseup', (e) => {
    drawing = false;
    ctx.closePath();
    calculateRating(e.offsetX, e.offsetY); // Calculate rating on mouse up
    resetDrawing(); // Reset for the next drawing
});

canvas.addEventListener('mousemove', (e) => {
    if (!drawing) return;
    drawWithGradient(e);
});

// Recalculate canvas size on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas on resize
});

// Calculate rating based on the drawn circle's radius
function calculateRating(endX, endY) {
    const radius = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
    lastRadius = radius; // Store the last radius for color indication
    const deviation = Math.abs(radius - perfectRadius);
    const score = Math.max(0, Math.min(100, 100 - (deviation / perfectRadius * 100))); // Scale to 1-100
    showRating(Math.round(score)); // Round to nearest integer
}

// Show rating and message based on the score
function showRating(score) {
    const ratingDiv = document.getElementById('rating');
    ratingDiv.innerText = `${score}% - ${getRatingMessage(score)}`;
    ratingDiv.style.display = 'block';
    animateRating(score);
    setTimeout(() => {
        ratingDiv.style.display = 'none';
    }, 3000); // Hide rating after 3 seconds
}

// Animate rating display based on score
function animateRating(score) {
    const robotDiv = document.createElement('div');
    robotDiv.className = 'robot';
    document.body.appendChild(robotDiv);
    if (score === 1) {
        robotDiv.innerText = "🤖🤖🤖🤖🤖"; // Reaction for 1% - still trying
        robotDiv.classList.add('shake');
    } else if (score === 2) {
        robotDiv.innerText = "👾👾👾👾👾"; // Reaction for 2% - starting
        robotDiv.classList.add('shake');
    } else if (score === 3) {
        robotDiv.innerText = "🔧🔧🔧🔧🔧"; // Reaction for 3% - tools in use!
        robotDiv.classList.add('shake');
    } else if (score === 4) {
        robotDiv.innerText = "⚙️⚙️⚙️⚙️⚙️"; // Reaction for 4% - keep working
        robotDiv.classList.add('shake');
    } else if (score === 5) {
        robotDiv.innerText = "🔩🔩🔩🔩🔩"; // Reaction for 5% - still trying
        robotDiv.classList.add('shake');
    } else if (score === 6) {
        robotDiv.innerText = "🙄🙄🙄🙄🙄"; // Reaction for 6% - keep at it
        robotDiv.classList.add('bounce');
    } else if (score === 7) {
        robotDiv.innerText = "😐😐😐😐😐"; // Reaction for 7% - it's okay, keep going
        robotDiv.classList.add('bounce');
    } else if (score === 8) {
        robotDiv.innerText = "🤔🤔🤔🤔🤔"; // Reaction for 8% - thinking it through
        robotDiv.classList.add('bounce');
    } else if (score === 9) {
        robotDiv.innerText = "😑😑😑😑😑"; // Reaction for 9% - almost there!
        robotDiv.classList.add('bounce');
    } else if (score === 10) {
        robotDiv.innerText = "🙂🙂🙂🙂🙂"; // Reaction for 10% - you're improving
        robotDiv.classList.add('bounce');
    } else if (score === 11) {
        robotDiv.innerText = "😊😊😊😊😊"; // Reaction for 11% - good progress
        robotDiv.classList.add('bounce');
    } else if (score === 12) {
        robotDiv.innerText = "😁😁😁😁😁"; // Reaction for 12% - nice work!
        robotDiv.classList.add('bounce');
    } else if (score === 13) {
        robotDiv.innerText = "😄😄😄😄😄"; // Reaction for 13% - you're on the right track!
        robotDiv.classList.add('bounce');
    } else if (score === 14) {
        robotDiv.innerText = "😆😆😆😆😆"; // Reaction for 14% - progress feels good!
        robotDiv.classList.add('bounce');
    } else if (score === 15) {
        robotDiv.innerText = "😎😎😎😎😎"; // Reaction for 15% - feeling confident
        robotDiv.classList.add('bounce');
    } else if (score === 16) {
        robotDiv.innerText = "🥳🥳🥳🥳🥳"; // Reaction for 16% - progress!
        robotDiv.classList.add('jump');
    } else if (score === 17) {
        robotDiv.innerText = "🎉🎉🎉🎉🎉"; // Reaction for 17% - great work!
        robotDiv.classList.add('jump');
    } else if (score === 18) {
        robotDiv.innerText = "🎊🎊🎊🎊🎊"; // Reaction for 18% - keep pushing forward!
        robotDiv.classList.add('jump');
    } else if (score === 19) {
        robotDiv.innerText = "🎇🎇🎇🎇🎇"; // Reaction for 19% - good effort!
        robotDiv.classList.add('jump');
    } else if (score === 20) {
        robotDiv.innerText = "🎆🎆🎆🎆🎆"; // Reaction for 20% - still going strong
        robotDiv.classList.add('jump');
    } else if (score === 21) {
        robotDiv.innerText = "✨✨✨✨✨"; // Reaction for 21% - just getting started
        robotDiv.classList.add('jump');
    } else if (score === 22) {
        robotDiv.innerText = "🌟🌟🌟🌟🌟"; // Reaction for 22% - shining brighter
        robotDiv.classList.add('jump');
    } else if (score === 23) {
        robotDiv.innerText = "💥💥💥💥💥"; // Reaction for 23% - you're doing it
        robotDiv.classList.add('jump');
    } else if (score === 24) {
        robotDiv.innerText = "🌈🌈🌈🌈🌈"; // Reaction for 24% - colorful progress!
        robotDiv.classList.add('jump');
    } else if (score === 25) {
        robotDiv.innerText = "🎇🎇🎇🎇🎇"; // Reaction for 25% - you're on track
        robotDiv.classList.add('jump');
    } else if (score === 26) {
        robotDiv.innerText = "🎆🎆🎆🎆🎆"; // Reaction for 26% - keep going!
        robotDiv.classList.add('jump');
    } else if (score === 27) {
        robotDiv.innerText = "🎊🎉🎊🎉🎊"; // Reaction for 27% - moving up!
        robotDiv.classList.add('jump');
    } else if (score === 28) {
        robotDiv.innerText = "💥🎆🎇🎆🎆"; // Reaction for 28% - well done!
        robotDiv.classList.add('jump');
    } else if (score === 29) {
        robotDiv.innerText = "✨🎉🎊🎆🎇"; // Reaction for 29% - keep the momentum!
        robotDiv.classList.add('jump');
    } else if (score === 30) {
        robotDiv.innerText = "🎆🎇🎉🎇🎆"; // Reaction for 30% - you're getting there
        robotDiv.classList.add('jump');
    } else if (score === 31) {
        robotDiv.innerText = "🎇🎆🎇🎆🎇"; // Reaction for 31% - nice work
        robotDiv.classList.add('jump');
    } else if (score === 32) {
        robotDiv.innerText = "🎆🎇🎇🎇🎆"; // Reaction for 32% - steady progress
        robotDiv.classList.add('jump');
    } else if (score === 33) {
        robotDiv.innerText = "🎇🎉🎇🎉🎇"; // Reaction for 33% - you're improving!
        robotDiv.classList.add('jump');
    } else if (score === 34) {
        robotDiv.innerText = "🌟🎉🎆🎇🎇"; // Reaction for 34% - great improvement
        robotDiv.classList.add('jump');
    } else if (score === 35) {
        robotDiv.innerText = "🌟🎇🎆🎆🎇"; // Reaction for 35% - very good
        robotDiv.classList.add('jump');
    } else if (score === 36) {
        robotDiv.innerText = "💥🎆🎇🌟🎉"; // Reaction for 36% - progress!
        robotDiv.classList.add('jump');
    } else if (score === 37) {
        robotDiv.innerText = "✨💥🎇🌈🎉"; // Reaction for 37% - you're getting there!
        robotDiv.classList.add('jump');
    } else if (score === 38) {
        robotDiv.innerText = "🌟🎆🎇💥🎇"; // Reaction for 38% - keep going!
        robotDiv.classList.add('jump');
    } else if (score === 39) {
        robotDiv.innerText = "🎇💥🎉🎇🌈"; // Reaction for 39% - almost there!
        robotDiv.classList.add('jump');
    } else if (score === 40) {
        robotDiv.innerText = "🎆🌟🎇🎉🎇"; // Reaction for 40% - 40% done, keep going!
        robotDiv.classList.add('jump');
    } else if (score === 41) {
        robotDiv.innerText = "🎆🎇🎇🎇🎆"; // Reaction for 41% - good work
        robotDiv.classList.add('jump');
    } else if (score === 42) {
        robotDiv.innerText = "🌈🎇🎆🎇🎇"; // Reaction for 42% - almost halfway!
        robotDiv.classList.add('jump');
    } else if (score === 43) {
        robotDiv.innerText = "🎉🎇🎆🎇🎇"; // Reaction for 43% - nice job!
        robotDiv.classList.add('jump');
    } else if (score === 44) {
        robotDiv.innerText = "💥🎆🎇🎇🎇"; // Reaction for 44% - you're getting better
        robotDiv.classList.add('jump');
    } else if (score === 45) {
        robotDiv.innerText = "🎇🎆🎇🎇🎆"; // Reaction for 45% - good job!
        robotDiv.classList.add('jump');
    } else if (score === 46) {
        robotDiv.innerText = "🌟🎉🎆🎇🎇"; // Reaction for 46% - well done!
        robotDiv.classList.add('celebrate');
    } else if (score === 47) {
        robotDiv.innerText = "🎉🎇🎆🎆🎇"; // Reaction for 47% - keep it up!
        robotDiv.classList.add('celebrate');
    } else if (score === 48) {
        robotDiv.innerText = "🎇🎆🎇🎇🎆"; // Reaction for 48% - you're improving!
        robotDiv.classList.add('celebrate');
    } else if (score === 49) {
        robotDiv.innerText = "🎆🎇🎇🎇🎇"; // Reaction for 49% - pushing forward
        robotDiv.classList.add('celebrate');
    } else if (score === 50) {
        robotDiv.innerText = "🎉🎇🎆🎇🎆"; // Reaction for 50% - halfway there!
        robotDiv.classList.add('celebrate');
    } else if (score === 51) {
        robotDiv.innerText = "🎇🎆🎇🎇🎆"; // Reaction for 51% - nice, keep going!
        robotDiv.classList.add('celebrate');
    } else if (score === 52) {
        robotDiv.innerText = "🎇🎆🎇🎇🎆"; // Reaction for 52% - getting better!
        robotDiv.classList.add('celebrate');
    } else if (score === 53) {
        robotDiv.innerText = "🎇🎆🎆🎆🎇"; // Reaction for 53% - nice progress!
        robotDiv.classList.add('celebrate');
    } else if (score === 54) {
        robotDiv.innerText = "🎆🎇🎇🎇🎇"; // Reaction for 54% - keep at it!
        robotDiv.classList.add('celebrate');
    } else if (score === 55) {
        robotDiv.innerText = "🌟🎆🎇🎆🎇"; // Reaction for 55% - keep it up!
        robotDiv.classList.add('celebrate');
    } else if (score === 56) {
        robotDiv.innerText = "🎆🎇🎇🎆🎇"; // Reaction for 56% - you're on the right path!
        robotDiv.classList.add('celebrate');
    } else if (score === 57) {
        robotDiv.innerText = "🎇🎆🎆🎆🎇"; // Reaction for 57% - good work
        robotDiv.classList.add('celebrate');
    } else if (score === 58) {
        robotDiv.innerText = "🎆🎇🎇🎆🎇"; // Reaction for 58% - almost there
        robotDiv.classList.add('celebrate');
    } else if (score === 59) {
        robotDiv.innerText = "🎇🎆🎇🎆🎇"; // Reaction for 59% - very good
        robotDiv.classList.add('celebrate');
    } else if (score === 60) {
        robotDiv.innerText = "🎆🎇🎇🎆🎇"; // Reaction for 60% - you're halfway!
        robotDiv.classList.add('celebrate');
    } else if (score === 61) {
        robotDiv.innerText = "🎇🎆🎇🎇🎆"; // Reaction for 61% - keep going!
        robotDiv.classList.add('celebrate');
    } else if (score === 62) {
        robotDiv.innerText = "🎆🎇🎇🎇🎆"; // Reaction for 62% - nice work!
        robotDiv.classList.add('celebrate');
    } else if (score === 63) {
        robotDiv.innerText = "🎇🎆🎇🎆🎇"; // Reaction for 63% - keep it up!
        robotDiv.classList.add('celebrate');
    } else if (score === 64) {
        robotDiv.innerText = "🎆🎇🎆🎆🎇"; // Reaction for 64% - excellent progress!
        robotDiv.classList.add('celebrate');
    } else if (score === 65) {
        robotDiv.innerText = "🎇🎆🎇🎇🎆"; // Reaction for 65% - well done!
        robotDiv.classList.add('celebrate');
    } else if (score === 66) {
        robotDiv.innerText = "🎆🎇🎇🎆🎇"; // Reaction for 66% - strong progress!
        robotDiv.classList.add('celebrate');
    } else if (score === 67) {
        robotDiv.innerText = "🎇🎆🎇🎇🎇"; // Reaction for 67% - keep going!
        robotDiv.classList.add('celebrate');
    } else if (score === 68) {
        robotDiv.innerText = "🎆🎇🎇🎇🎆"; // Reaction for 68% - almost there!
        robotDiv.classList.add('celebrate');
    } else if (score === 69) {
        robotDiv.innerText = "🎇🎆🎇🎇🎆"; // Reaction for 69% - great effort!
        robotDiv.classList.add('celebrate');
    } else if (score === 70) {
        robotDiv.innerText = "🎆🎇🎇🎇🎇"; // Reaction for 70% - awesome progress!
        robotDiv.classList.add('celebrate');
    } else if (score === 71) {
        robotDiv.innerText = "🎇🎆🎇🎇🎆"; // Reaction for 71% - you're almost there!
        robotDiv.classList.add('celebrate');
    } else if (score === 72) {
        robotDiv.innerText = "🎆🎇🎇🎆🎇"; // Reaction for 72% - looking great!
        robotDiv.classList.add('celebrate');
    } else if (score === 73) {
        robotDiv.innerText = "🎆🎇🎇🎇🎇"; // Reaction for 73% - keep up the pace!
        robotDiv.classList.add('celebrate');
    } else if (score === 74) {
        robotDiv.innerText = "🎇🎆🎇🎇🎆"; // Reaction for 74% - you're doing great
        robotDiv.classList.add('celebrate');
    } else if (score === 75) {
        robotDiv.innerText = "🎆🎇🎇🎇🎇"; // Reaction for 75% - fantastic!
        robotDiv.classList.add('celebrate');
    } else if (score === 76) {
        robotDiv.innerText = "🎇🎆🎇🎆🎇"; // Reaction for 76% - amazing work
        robotDiv.classList.add('celebrate');
    } else if (score === 77) {
        robotDiv.innerText = "🎆🎇🎇🎇🎆"; // Reaction for 77% - you're almost there!
        robotDiv.classList.add('celebrate');
    } else if (score === 78) {
        robotDiv.innerText = "🎇🎆🎇🎇🎆"; // Reaction for 78% - excellent effort
        robotDiv.classList.add('celebrate');
    } else if (score === 79) {
        robotDiv.innerText = "🎇🎆🎇🎇🎆"; // Reaction for 79% - fantastic work
        robotDiv.classList.add('celebrate');
    } else if (score === 80) {
        robotDiv.innerText = "🎇🎆🎇🎇🎆"; // Reaction for 80% - great job!
        robotDiv.classList.add('celebrate');
    } else if (score === 81) {
        robotDiv.innerText = "🎆🎇🎇🎇🎆"; // Reaction for 81% - nice work!
        robotDiv.classList.add('celebrate');
    } else if (score === 82) {
        robotDiv.innerText = "🎇🎆🎇🎇🎆"; // Reaction for 82% - keep going strong
        robotDiv.classList.add('celebrate');
    } else if (score === 83) {
        robotDiv.innerText = "🎆🎇🎇🎇🎇"; // Reaction for 83% - great!
        robotDiv.classList.add('celebrate');
    } else if (score === 84) {
        robotDiv.innerText = "🎇🎆🎇🎇🎇"; // Reaction for 84% - so close!
        robotDiv.classList.add('celebrate');
    } else if (score === 85) {
        robotDiv.innerText = "🎆🎇🎇🎇🎇"; // Reaction for 85% - nice!
        robotDiv.classList.add('celebrate');
    } else if (score === 86) {
        robotDiv.innerText = "🎆🎇🎇🎇🎇"; // Reaction for 86% - fantastic!
        robotDiv.classList.add('celebrate');
    } else if (score === 87) {
        robotDiv.innerText = "🎇🎆🎇🎇🎆"; // Reaction for 87% - almost there!
        robotDiv.classList.add('celebrate');
    } else if (score === 88) {
        robotDiv.innerText = "🎆🎇🎇🎆🎇"; // Reaction for 88% - excellent job!
        robotDiv.classList.add('celebrate');
    } else if (score === 89) {
        robotDiv.innerText = "🎆🎇🎇🎆🎇"; // Reaction for 89% - keep pushing!
        robotDiv.classList.add('celebrate');
    } else if (score === 90) {
        robotDiv.innerText = "🎆🎇🎇🎇🎆"; // Reaction for 90% - almost there!
        robotDiv.classList.add('celebrate');
    } else if (score === 91) {
        robotDiv.innerText = "🎇🎆🎇🎆🎇"; // Reaction for 91% - fantastic!
        robotDiv.classList.add('celebrate');
    } else if (score === 92) {
        robotDiv.innerText = "🎇🎆🎇🎆🎇"; // Reaction for 92% - keep it up!
        robotDiv.classList.add('celebrate');
    } else if (score === 93) {
        robotDiv.innerText = "🎆🎇🎇🎇🎇"; // Reaction for 93% - great effort!
        robotDiv.classList.add('celebrate');
    } else if (score === 94) {
        robotDiv.innerText = "🎇🎆🎇🎇🎇"; // Reaction for 94% - amazing!
        robotDiv.classList.add('celebrate');
    } else if (score === 95) {
        robotDiv.innerText = "🎇🎆🎇🎇🎇"; // Reaction for 95% - outstanding!
        robotDiv.classList.add('celebrate');
    } else if (score === 96) {
        robotDiv.innerText = "🎆🎇🎇🎇🎆"; // Reaction for 96% - almost perfect!
        robotDiv.classList.add('celebrate');
    } else if (score === 97) {
        robotDiv.innerText = "🎇🎆🎇🎇🎇"; // Reaction for 97% - almost there!
        robotDiv.classList.add('celebrate');
    } else if (score === 98) {
        robotDiv.innerText = "🎆🎇🎇🎇🎇"; // Reaction for 98% - you're almost at the top!
        robotDiv.classList.add('celebrate');
    } else if (score === 99) {
        robotDiv.innerText = "🎇🎆🎇🎇🎇"; // Reaction for 99% - so close!
        robotDiv.classList.add('celebrate');
    } else if (score === 100) {
        robotDiv.innerText = "🎉🎉🎉🎉🎉"; // Reaction for 100% - fantastic work!
        robotDiv.classList.add('celebrate');
    }
    

    
    setTimeout(() => {
        robotDiv.remove(); // Remove robot after animation
    }, 2000); // Keep it for 2 seconds
}

// Get message based on score
function getRatingMessage(score) {
    // Handle score of 0 or invalid inputs
    if (score === 0) {
        return "🚫 Zero! But don't worry, it's just the beginning. Start your journey now! 🚀";
    }
    
    // Handle undefined, negative, or invalid scores
    if (score < 0 || score > 100 || isNaN(score)) {
        return "⚠️ Invalid score! Please enter a score between 1 and 100. ⚠️";
    }

    // Unique messages for each score from 1 to 100
    if (score === 1) {
        return "❌ Barely started! But don't give up, you can do this! ❌";
    } else if (score === 2) {
        return "❌ Still early, but you're getting there! Keep going! ❌";
    } else if (score === 3) {
        return "❌ Progress is progress, keep pushing! ❌";
    } else if (score === 4) {
        return "❌ Every step counts, keep moving forward! ❌";
    } else if (score === 5) {
        return "❌ You're building momentum, stay strong! ❌";
    } else if (score === 6) {
        return "❌ A little more effort and you'll be there! ❌";
    } else if (score === 7) {
        return "❌ Small steps lead to big results, keep going! ❌";
    } else if (score === 8) {
        return "❌ You're on your way, just keep pushing! ❌";
    } else if (score === 9) {
        return "❌ You're improving with every step! ❌";
    } else if (score === 10) {
        return "❌ Great start, now keep the momentum going! ❌";
    } else if (score === 11) {
        return "🔄 Slowly but surely, you're making progress! 🔄";
    } else if (score === 12) {
        return "🔄 You’re getting there, one step at a time! 🔄";
    } else if (score === 13) {
        return "🔄 Keep at it, you're on the right track! 🔄";
    } else if (score === 14) {
        return "🔄 You're making good progress, keep going! 🔄";
    } else if (score === 15) {
        return "🔄 Nice work, keep that momentum up! 🔄";
    } else if (score === 16) {
        return "🚀 You're getting better! Stay focused! 🚀";
    } else if (score === 17) {
        return "🚀 You're on fire! Keep pushing, you're almost there! 🚀";
    } else if (score === 18) {
        return "🚀 Great effort, don’t stop now! 🚀";
    } else if (score === 19) {
        return "🚀 You're moving forward, stay focused! 🚀";
    } else if (score === 20) {
        return "🚀 You're doing well, keep going strong! 🚀";
    } else if (score === 21) {
        return "🔝 You’re improving, stay on track! 🔝";
    } else if (score === 22) {
        return "🔝 Keep pushing forward, you're doing great! 🔝";
    } else if (score === 23) {
        return "🔝 Keep the focus, you're progressing well! 🔝";
    } else if (score === 24) {
        return "🔝 You're getting closer, stay determined! 🔝";
    } else if (score === 25) {
        return "💪 Well done! Keep it up, you're halfway there! 💪";
    } else if (score === 26) {
        return "💪 You're on the right track, stay strong! 💪";
    } else if (score === 27) {
        return "💪 Great effort, you’re doing amazing! 💪";
    } else if (score === 28) {
        return "💪 Keep pushing, you're getting there! 💪";
    } else if (score === 29) {
        return "💪 Stay focused, success is within reach! 💪";
    } else if (score === 30) {
        return "🌟 You’re progressing fast, keep up the great work! 🌟";
    } else if (score === 31) {
        return "🌟 Almost there, keep going strong! 🌟";
    } else if (score === 32) {
        return "🌟 You’re moving in the right direction, keep pushing! 🌟";
    } else if (score === 33) {
        return "🌟 Excellent progress! Keep up the effort! 🌟";
    } else if (score === 34) {
        return "🌟 You’re improving every day, keep at it! 🌟";
    } else if (score === 35) {
        return "💥 Great job! You’re almost there, stay focused! 💥";
    } else if (score === 36) {
        return "💥 Keep it up! You’re doing awesome! 💥";
    } else if (score === 37) {
        return "💥 You're getting closer to your goal, don’t stop now! 💥";
    } else if (score === 38) {
        return "💥 Keep the momentum going, you're doing great! 💥";
    } else if (score === 39) {
        return "💥 Almost there! Keep pushing, you're doing fantastic! 💥";
    } else if (score === 40) {
        return "🏆 Fantastic effort! You’re doing amazing, stay on track! 🏆";
    } else if (score === 41) {
        return "🏆 You're doing great, keep the hard work up! 🏆";
    } else if (score === 42) {
        return "🏆 Keep it up, you're making great progress! 🏆";
    } else if (score === 43) {
        return "🏆 You’re so close to your goal, don’t stop now! 🏆";
    } else if (score === 44) {
        return "🏆 You're doing awesome, keep moving forward! 🏆";
    } else if (score === 45) {
        return "🔥 You’re getting there! Stay focused! 🔥";
    } else if (score === 46) {
        return "🔥 Keep the fire going! You’re almost there! 🔥";
    } else if (score === 47) {
        return "🔥 Great job, don't slow down now! 🔥";
    } else if (score === 48) {
        return "🔥 You're getting closer, keep pushing! 🔥";
    } else if (score === 49) {
        return "🔥 Almost there! Keep up the great effort! 🔥";
    } else if (score === 50) {
        return "🎯 Halfway there! Keep pushing, you're doing great! 🎯";
    } else if (score === 51) {
        return "🎯 Keep it up, you're improving every day! 🎯";
    } else if (score === 52) {
        return "🎯 Almost at the top! Keep pushing forward! 🎯";
    } else if (score === 53) {
        return "🎯 You're getting there, don’t stop now! 🎯";
    } else if (score === 54) {
        return "🎯 You’re doing awesome, keep going! 🎯";
    } else if (score === 55) {
        return "💡 Keep up the great work! You're halfway to the finish line! 💡";
    } else if (score === 56) {
        return "💡 You're making steady progress, keep going! 💡";
    } else if (score === 57) {
        return "💡 Stay focused, success is within your reach! 💡";
    } else if (score === 58) {
        return "💡 Keep pushing, you're doing fantastic! 💡";
    } else if (score === 59) {
        return "💡 Almost there! Keep the momentum going! 💡";
    } else if (score === 60) {
        return "🎉 Great job! You're almost there, keep going! 🎉";
    } else if (score === 61) {
        return "🎉 You're making great strides! Keep up the effort! 🎉";
    } else if (score === 62) {
        return "🎉 Almost at the top! You're doing amazing! 🎉";
    } else if (score === 63) {
        return "🎉 Fantastic! You’re so close to the finish line! 🎉";
    } else if (score === 64) {
        return "🎉 Keep it up! You're on the right track! 🎉";
    } else if (score === 65) {
        return "🚀 Almost there, keep pushing yourself! 🚀";
    } else if (score === 66) {
        return "🚀 You're doing awesome, don't slow down now! 🚀";
    } else if (score === 67) {
        return "🚀 Great job! Keep the momentum going! 🚀";
    } else if (score === 68) {
        return "🚀 Almost there! Keep pushing, you're doing great! 🚀";
    } else if (score === 69) {
        return "🚀 You're getting there! Keep it up! 🚀";
    } else if (score === 70) {
        return "🌟 You’re doing amazing, keep going! 🌟";
    } else if (score === 71) {
        return "🌟 Almost there, don’t stop now! 🌟";
    } else if (score === 72) {
        return "🌟 Keep pushing, you're doing fantastic! 🌟";
    } else if (score === 73) {
        return "🌟 Stay focused, you’re almost at the finish line! 🌟";
    } else if (score === 74) {
        return "🌟 You're doing great, keep moving forward! 🌟";
    } else if (score === 75) {
        return "🎯 Great work, you're nearly there! 🎯";
    } else if (score === 76) {
        return "🎯 Keep it up, you're doing amazing! 🎯";
    } else if (score === 77) {
        return "🎯 You're almost at the top, don’t stop! 🎯";
    } else if (score === 78) {
        return "🎯 Keep pushing, you’re doing awesome! 🎯";
    } else if (score === 79) {
        return "🎯 Almost there! Keep going! 🎯";
    } else if (score === 80) {
        return "🔥 You're doing great, keep up the amazing effort! 🔥";
    } else if (score === 81) {
        return "🔥 Almost there, stay focused! 🔥";
    } else if (score === 82) {
        return "🔥 Keep pushing forward, you're so close! 🔥";
    } else if (score === 83) {
        return "🔥 Keep the fire burning, you're doing great! 🔥";
    } else if (score === 84) {
        return "🔥 Fantastic job, stay focused! 🔥";
    } else if (score === 85) {
        return "💪 You’re doing awesome, don’t stop now! 💪";
    } else if (score === 86) {
        return "💪 Keep pushing, you’re almost there! 💪";
    } else if (score === 87) {
        return "💪 Keep up the great work, you're doing amazing! 💪";
    } else if (score === 88) {
        return "💪 You're getting closer, keep going! 💪";
    } else if (score === 89) {
        return "💪 Almost there, keep going strong! 💪";
    } else if (score === 90) {
        return "🌟 Perfect Circle! You're on top of your game! 🌟";
    } else if (score === 91) {
        return "🌟 Fantastic! You’re doing absolutely amazing! 🌟";
    } else if (score === 92) {
        return "🌟 You're doing incredible, keep it up! 🌟";
    } else if (score === 93) {
        return "🌟 Excellent progress! Keep pushing yourself! 🌟";
    } else if (score === 94) {
        return "🌟 You're doing phenomenal, don’t stop! 🌟";
    } else if (score === 95) {
        return "🎉 Almost perfect! You're on fire! 🎉";
    } else if (score === 96) {
        return "🎉 Keep it up! You're doing incredible! 🎉";
    } else if (score === 97) {
        return "🎉 Almost there, don't give up now! 🎉";
    } else if (score === 98) {
        return "🎉 Fantastic job! Keep going, you’re nearly perfect! 🎉";
    } else if (score === 99) {
        return "🎉 Almost perfect! Just a bit more to go! 🎉";
    } else if (score === 100) {
        return "🌟 Perfect Circle! Outstanding work, you made it! 🌟";
    }
}


// Draw with gradient color based on distance from starting point
function drawWithGradient(e) {
    const currentX = e.offsetX;
    const currentY = e.offsetY;

    // Calculate the distance from the starting point
    const radius = Math.sqrt(Math.pow(currentX - startX, 2) + Math.pow(currentY - startY, 2));
    
    // Determine color based on distance
    const color = getColorForDistance(radius);
    
    // Set stroke style
    ctx.strokeStyle = color;
    ctx.lineTo(currentX, currentY);
    ctx.stroke();
}

// Get color based on distance from the perfect circle
function getColorForDistance(radius) {
    if (radius < perfectRadius * 0.8) {
        return interpolateColor('green', 'yellow', (radius - perfectRadius * 0.8) / (perfectRadius * 0.2));
    } else if (radius < perfectRadius * 1.2) {
        return interpolateColor('yellow', 'red', (radius - perfectRadius * 0.8) / (perfectRadius * 0.4));
    } else {
        return 'red'; // Far off
    }
}

// Interpolate color between two colors based on a factor (0 to 1)
function interpolateColor(color1, color2, factor) {
    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);
    const result = rgb1.map((c, i) => Math.round(c + factor * (rgb2[i] - c)));
    return `rgb(${result[0]}, ${result[1]}, ${result[2]})`;
}

// Convert hex color to RGB
function hexToRgb(hex) {
    const bigint = parseInt(hex.replace('#', ''), 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

// Reset drawing after mouse up
function resetDrawing() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.beginPath(); // Reset path
}

// Clear Canvas button functionality
const clearCanvasButton = document.getElementById('clearCanvas');
clearCanvasButton.addEventListener('click', resetCanvas);

function resetCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.beginPath(); // Reset path
}

// Color picker and line width controls
const colorPicker = document.getElementById('colorPicker');
const lineWidthInput = document.getElementById('lineWidth');

colorPicker.addEventListener('input', (e) => {
    ctx.strokeStyle = e.target.value; // Update stroke color
});

lineWidthInput.addEventListener('input', (e) => {
    ctx.lineWidth = e.target.value; // Update line width
});



























