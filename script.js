var moodData = {
 
  happy: {
    emoji:   "😊",
    message: "You're radiating sunshine today! ☀️",
    blob1:   "#ffe066",               // blob background colours
    blob2:   "#ffb347",
    blob3:   "#ffd580",
    cursor:  "rgba(220,120,0,0.35)",  // custom cursor colour
    particles: ["#ffe066", "#ffb347", "#ffd580", "#fff", "rgba(255,255,255,0.6)"],
    quotes: [
      "Happiness is not something ready-made — it comes from your own actions.",
      "Count your age by friends, not years. Count your life by smiles, not tears.",
      "The most wasted day is one without laughter.",
      "Joy is the simplest form of gratitude.",
      "A smile is the shortest distance between two people.",
      "Be so happy that when others look at you, they become happy too.",
      "The secret of happiness is not in doing what one likes, but in liking what one does.",
      "Happiness is a warm cup of tea and nowhere you have to be.",
      "Even a small star shines in the darkness — and today, you are that star.",
      "Let your joy be in your journey, not in some distant goal.",
      "The present moment is filled with joy and happiness if you are attentive.",
      "Happiness blooms from within.",
      "Do more of what makes you forget to check your phone.",
      "Dance like nobody's watching — because life is too short to stand still.",
      "Collect moments, not things.",
      "There is no path to happiness — happiness is the path.",
      "Keep your face always toward the sunshine and shadows will fall behind you.",
      "Life is better when you're laughing.",
      "Happiness is letting go of what you think your life is supposed to look like.",
      "You are the reason someone smiled today.",
      "Good things are coming down the road — just don't stop walking.",
      "Joy shared is joy doubled.",
      "Choose to be optimistic. It feels better.",
      "The sun himself is weak when he first rises, and gathers strength as the day gets on.",
      "Every day may not be good, but there is something good in every day."
    ]
  },
 
  sad: {
    emoji:   "😔",
    message: "It's okay to feel sad. You're not alone 💙",
    blob1:   "#88b4e0",
    blob2:   "#4e81b0",
    blob3:   "#a8ccec",
    cursor:  "rgba(30,90,160,0.35)",
    particles: ["#88b4e0", "#4e81b0", "#a8ccec", "#fff", "rgba(255,255,255,0.6)"],
    quotes: [
      "Even the darkest night will end, and the sun will rise.",
      "Tears are words the heart can't fully express.",
      "Sadness flies away on the wings of time.",
      "You are allowed to be both a masterpiece and a work in progress.",
      "Every storm runs out of rain.",
      "You don't have to be positive all the time. It's perfectly okay to feel sad.",
      "Grief is the price we pay for love — and it is always worth it.",
      "Rainy days make the flowers grow.",
      "Sometimes you have to go through the worst to arrive at your best.",
      "The wound is the place where the light enters you.",
      "Stars can't shine without darkness.",
      "It's okay to not be okay — as long as you don't stay that way.",
      "Your feelings are valid. You don't have to earn the right to feel them.",
      "One small crack does not mean that you are broken — it means you were put to the test.",
      "Pain is temporary. It may last a minute, an hour, or a year — but it will subside.",
      "Heavy hearts, like heavy clouds, are best relieved by the letting of a little water.",
      "The soul would have no rainbow if the eyes had no tears.",
      "You are braver than you believe and stronger than you seem.",
      "Crying is not weakness — it is being honest with your emotions.",
      "Allow yourself to feel what you feel without judging it.",
      "This too shall pass — slowly, gently, one breath at a time.",
      "Not all those who wander are lost — sometimes they are just finding their way back.",
      "Behind every cloud is another cloud — but eventually, there is sunlight.",
      "Your sadness is not a flaw. It is proof that you feel deeply.",
      "Even the longest night is followed by a morning."
    ]
  },
 
  angry: {
    emoji:   "😠",
    message: "Take a deep breath. This feeling will pass 🔥",
    blob1:   "#ff6b6b",
    blob2:   "#c0392b",
    blob3:   "#e05050",
    cursor:  "rgba(160,30,30,0.4)",
    particles: ["#ff6b6b", "#c0392b", "#e05050", "#fff", "rgba(255,255,255,0.6)"],
    quotes: [
      "Speak when you are angry and you will make the best speech you'll ever regret.",
      "Anger is one letter short of danger.",
      "In the middle of difficulty lies opportunity.",
      "Breathe. It's just a bad day, not a bad life.",
      "The best fighter is never angry.",
      "Holding onto anger is like drinking poison and expecting the other person to die.",
      "For every minute you are angry, you lose sixty seconds of peace.",
      "Anger is a signal — listen to it, but don't let it drive.",
      "Your calm is your superpower.",
      "Before you speak, ask yourself: is it kind, is it necessary, is it true?",
      "The greatest remedy for anger is delay.",
      "When you feel like exploding, choose to expand instead.",
      "Respond, don't react. There is a powerful difference.",
      "Cool heads find better solutions than hot ones.",
      "Take a deep breath. Your reaction today could shape your tomorrow.",
      "Anger is an acid that can do more harm to the vessel storing it than to anything it touches.",
      "Peace begins with a pause.",
      "You can't shake hands with a clenched fist.",
      "Don't let the behaviour of others destroy your inner peace.",
      "Channel your fire — let it fuel you, not consume you.",
      "The strong person overcomes themselves when angry, not others.",
      "Between stimulus and response there is a space — in that space lies your power.",
      "It is wise to direct your anger towards problems, not people.",
      "What you resist, persists. Breathe it through instead.",
      "A moment of patience in anger can save a thousand moments of regret."
    ]
  },
 
  calm: {
    emoji:   "😌",
    message: "Peace looks good on you 🌿",
    blob1:   "#8fe8a8",
    blob2:   "#4dbd72",
    blob3:   "#b8f0c8",
    cursor:  "rgba(20,120,60,0.35)",
    particles: ["#8fe8a8", "#4dbd72", "#b8f0c8", "#fff", "rgba(255,255,255,0.6)"],
    quotes: [
      "Calm mind brings inner strength and self-confidence.",
      "In stillness, the world resets.",
      "Nothing is so strong as gentleness, nothing so gentle as real strength.",
      "Within you there is a stillness and a sanctuary you can retreat to any time.",
      "Peace is the result of retraining your mind to process life as it is.",
      "Breathe in deeply to bring your mind home to your body.",
      "Serenity is not freedom from the storm — it is peace within it.",
      "Almost everything will work again if you unplug it for a few minutes — including you.",
      "The quieter you become, the more you can hear.",
      "Nature does not hurry, yet everything is accomplished.",
      "You are allowed to be both a work in progress and a human being at rest.",
      "Slow down and everything you are chasing will come around and catch you.",
      "In today's rush we all think too much, seek too much — and forget the joy of just being.",
      "Let go of what you can't control. Peace is found in acceptance.",
      "A calm sailor conquers any sea.",
      "Inhale peace. Exhale everything that no longer serves you.",
      "The present moment always will have been. Rest in it.",
      "Silence is not empty — it is full of answers.",
      "The mind is like water. When it is turbulent, it's difficult to see. When calm, everything becomes clear.",
      "Rest is not idleness — it is the most productive thing a tired soul can do.",
      "Be like a tree — stay grounded, keep growing, and know when to let things go.",
      "There is a calmness to a life lived in gratitude.",
      "You don't always need a plan. Sometimes you just need to breathe, trust, and let go.",
      "Peace comes from within. Do not seek it without.",
      "Soft and slow wins the race — and enjoys the scenery along the way."
    ]
  }
 
}; // end moodData
 
 
/* ──────────────────────────────────────────────────────────
   STEP 2: GRAB HTML ELEMENTS
   Store references so we don't have to search the page
   every single time we need to update something.
   ────────────────────────────────────────────────────────── */
var moodApp          = document.getElementById("moodApp");
var bigEmoji         = document.getElementById("bigEmoji");
var subtitle         = document.getElementById("subtitle");
var resultBox        = document.getElementById("resultBox");
var moodMsg          = document.getElementById("moodMsg");
var quoteText        = document.getElementById("quoteText");
var moodCursor       = document.getElementById("moodCursor");
var blob1            = document.getElementById("blob1");
var blob2            = document.getElementById("blob2");
var blob3            = document.getElementById("blob3");
var particleContainer = document.getElementById("particleContainer");
var allButtons       = document.querySelectorAll(".mood-btn");  // NodeList of all 4 buttons
 
 
/* ──────────────────────────────────────────────────────────
   STEP 3: CUSTOM CURSOR
   Move the custom cursor dot to wherever the mouse is.
   ────────────────────────────────────────────────────────── */
 
// On every mouse move, update the cursor dot position
document.addEventListener("mousemove", function(event) {
  moodCursor.style.left = event.clientX + "px";
  moodCursor.style.top  = event.clientY + "px";
});
 
// Make cursor bigger when hovering a mood button
allButtons.forEach(function(btn) {
  btn.addEventListener("mouseenter", function() {
    moodCursor.classList.add("big");
  });
  btn.addEventListener("mouseleave", function() {
    moodCursor.classList.remove("big");
  });
});
 
 
/* ──────────────────────────────────────────────────────────
   STEP 4: FLOATING PARTICLES
   Every 0.9 seconds, create a new tiny bubble that floats
   upward and fades out, then gets deleted from the page.
   ────────────────────────────────────────────────────────── */
 
// We'll update this array when the mood changes
var currentParticleColors = ["#fff", "#ffe066", "#88d8b0", "#ff9aa2", "#b5eaff"];
 
function spawnParticle() {
  // Create a new <div> element in JavaScript
  var particle = document.createElement("div");
  particle.className = "particle";
 
  // Random size between 5px and 15px
  var size = Math.random() * 10 + 5;
  particle.style.width  = size + "px";
  particle.style.height = size + "px";
 
  // Random position across the bottom portion of the app
  particle.style.left = Math.random() * 90 + "%";
  particle.style.top  = Math.random() * 70 + 20 + "%";
 
  // Pick a random colour from the current mood's palette
  var randomIndex = Math.floor(Math.random() * currentParticleColors.length);
  particle.style.background = currentParticleColors[randomIndex];
 
  // Random speed and delay so they don't all look the same
  particle.style.animationDuration = (Math.random() * 2 + 3) + "s";
  particle.style.animationDelay    = (Math.random() * 2) + "s";
 
  // Add to the page
  particleContainer.appendChild(particle);
 
  // Remove it after 5.5 seconds so we don't fill the DOM
  setTimeout(function() {
    particle.remove();
  }, 5500);
}
 
// Run spawnParticle every 900 milliseconds
setInterval(spawnParticle, 900);
 
 
/* ──────────────────────────────────────────────────────────
   STEP 5: NO-REPEAT QUOTE PICKER
   We track the last quote shown per mood so the same quote
   never appears twice in a row — even on the same button.
 
   lastQuoteIndex stores: { happy: 2, sad: 0, ... }
   ────────────────────────────────────────────────────────── */
 
// Keeps track of which quote index was last shown for each mood
var lastQuoteIndex = {};
 
function getRandomQuote(moodName) {
  var quotes = moodData[moodName].quotes;
 
  // Build a list of every index EXCEPT the one we just showed
  var available = [];
  for (var i = 0; i < quotes.length; i++) {
    if (i !== lastQuoteIndex[moodName]) {
      available.push(i);
    }
  }
 
  // Pick a random index from the available ones
  var pick = available[Math.floor(Math.random() * available.length)];
 
  // Remember it so next time we exclude it
  lastQuoteIndex[moodName] = pick;
 
  return quotes[pick];
}
 
 
/* ──────────────────────────────────────────────────────────
   STEP 6: RIPPLE EFFECT FUNCTION
   Creates an expanding circle on the button when clicked.
   ────────────────────────────────────────────────────────── */
function addRipple(button, event) {
  var ripple = document.createElement("span");
  ripple.className = "ripple";
 
  // Figure out click position relative to the button
  var rect  = button.getBoundingClientRect();
  var size  = Math.max(rect.width, rect.height);
  ripple.style.width  = size + "px";
  ripple.style.height = size + "px";
  ripple.style.left   = (event.clientX - rect.left  - size / 2) + "px";
  ripple.style.top    = (event.clientY - rect.top   - size / 2) + "px";
 
  button.appendChild(ripple);
 
  // Remove the ripple element after the animation finishes
  setTimeout(function() {
    ripple.remove();
  }, 600);
}
 
 
/* ──────────────────────────────────────────────────────────
   STEP 7: MAIN FUNCTION — changeMood()
   Called every time a mood button is clicked.
   Does ALL the updating: emoji, text, colours, storage.
   ────────────────────────────────────────────────────────── */
function changeMood(moodName, event) {
 
  // 7a. Look up this mood's data in our object
  var mood = moodData[moodName];
 
  // 7b. Ripple effect on the button that was clicked
  if (event) {
    addRipple(event.currentTarget, event);
  }
 
  // 7c. Update the big emoji
  bigEmoji.textContent = mood.emoji;
 
  // 7d. Update the subtitle text
  subtitle.textContent = "Here's your " + moodName + " experience!";
 
  // 7e. Update message and quote
  moodMsg.textContent   = mood.message;
  quoteText.textContent = getRandomQuote(moodName);
 
  // 7f. Show the result box with a re-triggered fade-in animation
  //     Remove the class first → browser resets → then add it back
  resultBox.classList.remove("visible");
  setTimeout(function() {
    resultBox.classList.add("visible");
  }, 40);
 
  // 7g. Change background — set data-mood attribute on the app div
  //     CSS handles the actual colour change using [data-mood="..."] rules
  moodApp.setAttribute("data-mood", moodName);
 
  // 7h. Change blob colours
  blob1.style.background = mood.blob1;
  blob2.style.background = mood.blob2;
  blob3.style.background = mood.blob3;
 
  // 7i. Change custom cursor colour
  moodCursor.style.background = mood.cursor;
 
  // 7j. Update particle colours for new particles
  currentParticleColors = mood.particles;
 
  // 7k. Highlight the active button
  //     First remove "active" from all buttons, then add to the clicked one
  allButtons.forEach(function(btn) {
    btn.classList.remove("active");
  });
  var clickedButton = document.querySelector('.mood-btn[data-mood="' + moodName + '"]');
  if (clickedButton) {
    clickedButton.classList.add("active");
  }
 
  // 7l. Save mood to localStorage so it persists after page reload
  localStorage.setItem("lastMood", moodName);
 
} // end changeMood
 
 
/* ──────────────────────────────────────────────────────────
   STEP 8: RESTORE SAVED MOOD ON PAGE LOAD
   When the page opens, check if a mood was saved before.
   If yes, apply it immediately as if the user clicked it.
   ────────────────────────────────────────────────────────── */
function restoreSavedMood() {
  var savedMood = localStorage.getItem("lastMood");
 
  // Check it exists AND is a valid mood name in our object
  if (savedMood && moodData[savedMood]) {
    changeMood(savedMood, null);  // null because there's no click event
  }
}
 
// Run as soon as the script loads
restoreSavedMood();