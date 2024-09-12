for (let i = 0; i < 200; i++) {
    spawnConfetti();
}

function spawnConfetti() {
    const colors = ['#0CD977', '#FF1C1C', '#FF93DE', '#5767ED', '#FFC61C', '#8497B0'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomRotation = Math.random() * 360; // Random rotation angle
    const randomDelay = Math.random() * 5; // Random delay between 0s and 5s

    // Create confetti piece
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.backgroundColor = randomColor;
    confetti.style.transform = `rotate(${randomRotation}deg)`; // Random rotation
    confetti.style.animationDelay = `${randomDelay}s`; // Random animation delay

    // Set random position and add to wrapper
    const randomX = Math.random() * window.innerWidth;
    confetti.style.left = `${randomX}px`;

    document.getElementById("confetti-wrapper").appendChild(confetti);
}

let rotateRight = true;
function rotateBox() {
    const spin = document.getElementById('spin');
    if(rotateRight){
        spin.style.animation = 'rotateButton 2s';
        rotateRight = false;
    }else{
        spin.style.animation = 'rotateButtonReverse 2s';
        rotateRight = true;
    }
}

fetchWether();
async function fetchWether() {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=57.309&longitude=25.2677&current=temperature_2m&timezone=auto";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    
    const place = document.getElementById('place');
    const temperature = document.getElementById('tempereture');
  
    if(place){
      place.innerHTML = json.timezone;
      temperature.innerHTML = json.current.temperature_2m + ' C';
    }
  
  } catch (error) {
    console.error(error.message);
  }

}