window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var player = GetPlayer();

// Prevent multiple intervals
if (!window.storylineTimerStarted) {
  window.storylineTimerStarted = true;

  setInterval(function () {

    // 🔴 CHECK TIMER FLAG
    if (!player.GetVar("TimerOn")) {
      return; // do nothing if timer is off
    }

    // Get current elapsed seconds
    var seconds = player.GetVar("ElapsedSeconds");
    seconds++;
    player.SetVar("ElapsedSeconds", seconds);

    // Calculate minutes and seconds
    var minutes = Math.floor(seconds / 60);
    var secs = seconds % 60;

    // Pad with leading zeros
    var displayMinutes = minutes < 10 ? "0" + minutes : "" + minutes;
    var displaySeconds = secs < 10 ? "0" + secs : "" + secs;

    // Set variables for Storyline
    player.SetVar("Minutes", displayMinutes);
    player.SetVar("Seconds", displaySeconds);

  }, 1000);
}

}

window.Script2 = function()
{
  var player = GetPlayer();

// Prevent multiple intervals
if (!window.storylineTimerStarted) {
  window.storylineTimerStarted = true;

  setInterval(function () {

    // 🔴 CHECK TIMER FLAG
    if (!player.GetVar("TimerOn")) {
      return; // do nothing if timer is off
    }

    // Get current elapsed seconds
    var seconds = player.GetVar("ElapsedSeconds");
    seconds++;
    player.SetVar("ElapsedSeconds", seconds);

    // Calculate minutes and seconds
    var minutes = Math.floor(seconds / 60);
    var secs = seconds % 60;

    // Pad with leading zeros
    var displayMinutes = minutes < 10 ? "0" + minutes : "" + minutes;
    var displaySeconds = secs < 10 ? "0" + secs : "" + secs;

    // Set variables for Storyline
    player.SetVar("Minutes", displayMinutes);
    player.SetVar("Seconds", displaySeconds);

  }, 1000);
}

}

window.Script3 = function()
{
  var player = GetPlayer();

// Prevent multiple intervals
if (!window.storylineTimerStarted) {
  window.storylineTimerStarted = true;

  setInterval(function () {

    // 🔴 CHECK TIMER FLAG
    if (!player.GetVar("TimerOn")) {
      return; // do nothing if timer is off
    }

    // Get current elapsed seconds
    var seconds = player.GetVar("ElapsedSeconds");
    seconds++;
    player.SetVar("ElapsedSeconds", seconds);

    // Calculate minutes and seconds
    var minutes = Math.floor(seconds / 60);
    var secs = seconds % 60;

    // Pad with leading zeros
    var displayMinutes = minutes < 10 ? "0" + minutes : "" + minutes;
    var displaySeconds = secs < 10 ? "0" + secs : "" + secs;

    // Set variables for Storyline
    player.SetVar("Minutes", displayMinutes);
    player.SetVar("Seconds", displaySeconds);

  }, 1000);
}

}

window.Script4 = function()
{
  var player = GetPlayer();

// 🔴 STOP TIMER
player.SetVar("TimerOn", false);

// Read variables
var team = player.GetVar("team");
var time = player.GetVar("Minutes") + ":" + player.GetVar("Seconds");

// Google Apps Script URL
var url = "https://script.google.com/macros/s/AKfycbwQPq8ch7x_FVIdMZrjN86h8J9PWIx2CBdVb9EF9pZT3JG2ID-RKW36xvazY8TIKyEM3w/exec";

// Create hidden iframe
var iframe = document.createElement("iframe");
iframe.name = "hidden_iframe";
iframe.style.display = "none";
document.body.appendChild(iframe);

// Create form
var form = document.createElement("form");
form.method = "POST";
form.action = url;
form.target = "hidden_iframe";

// Team field
var inputTeam = document.createElement("input");
inputTeam.name = "team";
inputTeam.value = team;

// Time field
var inputTime = document.createElement("input");
inputTime.name = "time";
inputTime.value = time;

// Append & submit
form.appendChild(inputTeam);
form.appendChild(inputTime);
document.body.appendChild(form);
form.submit();

// ✅ USER FEEDBACK
alert("✅ Your result has been submitted successfully!");

}

window.Script5 = function()
{
  var player = GetPlayer();

// 🔴 STOP TIMER
player.SetVar("TimerOn", false);

// Read variables
var team = player.GetVar("teams");
var time = player.GetVar("Minutes") + ":" + player.GetVar("Seconds");

// Google Apps Script URL
var url = "https://script.google.com/macros/s/AKfycbwctSbXUORlx3a4q-cop99EUDJ-lALxA9C_43tbQOLvIw2_9boS0CFumOShtaPEcVDwDw/exec";

// Create hidden iframe
var iframe = document.createElement("iframe");
iframe.name = "hidden_iframe";
iframe.style.display = "none";
document.body.appendChild(iframe);

// Create form
var form = document.createElement("form");
form.method = "POST";
form.action = url;
form.target = "hidden_iframe";

// Team field
var inputTeam = document.createElement("input");
inputTeam.name = "team";
inputTeam.value = team;

// Time field
var inputTime = document.createElement("input");
inputTime.name = "time";
inputTime.value = time;

// Append & submit
form.appendChild(inputTeam);
form.appendChild(inputTime);
document.body.appendChild(form);
form.submit();

// ✅ USER FEEDBACK
alert("✅ Activity Done & Your result has been submitted successfully!");

}

};
