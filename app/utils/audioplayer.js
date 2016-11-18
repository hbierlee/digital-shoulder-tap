export function playAudio() {
  const audio = new Audio(this.props.path);
  audio.play('../resources/notification.mp3');
}
