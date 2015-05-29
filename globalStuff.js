// *** SOUNDS ***

var soundNext = 'http://www.javascriptoo.com/application/html/pong.wav';
var soundOfVictory = 'http://soundbible.com/mp3/SMALL_CROWD_APPLAUSE-Yannick_Lemieux-1268806408.mp3';
var soundWinner = 'sounds/winner.mp3';
var soundMagicStart = 'http://soundbible.com/mp3/Computer_Magic-Microsift-1901299923.mp3';
var soundBoo = 'http://soundbible.com/mp3/Crowd Boo 1-SoundBible.com-183064743.mp3';
var soundAhh = 'http://soundbible.com/mp3/Aww-SoundBible.com-1421700712.mp3';

function playSound(sound) {
  var player = new Howl({urls: [sound]});
    player.play();
}

// *** END SOUNDS ***