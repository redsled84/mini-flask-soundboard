$(() => {
  const stopAndPlay = (audioSource) => {
    if (!audioSource.paused) {
      audioSource.pause();
      audioSource.currentTime = 0;
      audioSource.play();
    } else {
      audioSource.play();
    }
  }

  const heres_johnny = new Audio("static/heres_johnny.mp3");
  const say_what_again = new Audio("static/say_what_again.mp3");
  const damn = new Audio("static/damn.mp3");
  $("#heres_johnny").click(() => {
    stopAndPlay(heres_johnny);
  });
  $("#say_what_again").click(() => {
    stopAndPlay(say_what_again);
  });
  $("#damn").click(() => {
    stopAndPlay(damn);
  });
});