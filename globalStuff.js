/*
var soundNext = 'http://www.javascriptoo.com/application/html/pong.wav';
var soundOfVictory = 'http://soundbible.com/mp3/SMALL_CROWD_APPLAUSE-Yannick_Lemieux-1268806408.mp3';
var soundBoo = 'http://soundbible.com/mp3/Crowd Boo 1-SoundBible.com-183064743.mp3';
var soundAhh = 'http://soundbible.com/mp3/Aww-SoundBible.com-1421700712.mp3';
*/

var soundMagicStart = 'http://soundbible.com/mp3/Computer_Magic-Microsift-1901299923.mp3';
var soundDontThinkSo = 'sounds/male_says_i_dont_think_so_.mp3';
var soundAhAhAh = 'sounds/male_says_ah_ah_ah_reaction.mp3';
var soundWinner = 'sounds/winner.mp3';
var soundBullsEye = 'sounds/bullseye.mp3';
var soundYeehaa = 'sounds/comedy_male_yelling_yee_ha.mp3';
var soundOpenDoor = 'sounds/sci_fi_space_door.mp3';
var soundShooting = 'sounds/extreme_loud_war_battle.mp3';
var soundMagic = 'sounds/magic_spell_trick_sound_001.mp3';

var imgNinjago1 = 'img/ninjago_mural_by_struphic-d41ciit.png';
var	imgMatrix = 'img/Matrix.png';

var globalStuff = {

	images: [imgNinjago1, imgMatrix],

	playSound: function playSound(sound) {
		var player = new Howl({urls: [sound]});
		player.play();
	},

	getRandomNumberFrom: function(range){
  		return Math.floor((Math.random() * range) + 0);
	}
};