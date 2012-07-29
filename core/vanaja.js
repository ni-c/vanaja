var rpg;
RPGJS.loadPath = "rpgjs/core/";
RPGJS.load(function() {
	rpg = new Rpg("canvas_rpg");
	rpg.setVolumeAudio(1);
	rpg.loadMap('Wood', {
		tileset: 'Swamp.png',
		autotiles: ['Swamp1.png', 'Swamp2.png', 'Swamp3.png', 'Swamp4.png', 'Swamp5.png'],
		bgm: {mp3: 'TomFahy_WoodlawnAtNight', ogg: 'TomFahy_WoodlawnAtNight'},
		player:  {
			speedAnimation: 10,
			speed: 10,
			x: 4, 
			y: 4, 
			filename: 'Ark.png'
		}
	}, function () { 
		rpg.player.setTypeMove("real");
		rpg.player.useMouse(false);
		rpg.setScreenIn("Player"); 
	});
Input.lock(rpg.canvas, true);
});