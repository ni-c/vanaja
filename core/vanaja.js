var rpg;
RPGJS.loadPath = "rpgjs/core/";
RPGJS.load({
		plugins: ["arpg"]
	}, function() {
	rpg = new Rpg("canvas_rpg");
	rpg.setVolumeAudio(1);
				
	/* Enemy attack action */		
	rpg.addAction('EnemyAttack', {
		action: 'attack',
		suffix_motion: [''],
		duration_motion: 1,
		block_movement: true,
		wait_finish: 1
	});
			
	/*Prepare to dynamically add events on the map */
	rpg.prepareEventAjax('Mushroom');
				
	/* Player attack animation */
	rpg.addAction('MyAttack', {
		action: 'attack',
		suffix_motion: ['_Attack'],
		duration_motion: 1,
		block_movement: true,
		wait_finish: 5,
		speed: 10,
		keypress: [Input.Ctrl]
	});

	/* Load the map Wood */
	rpg.loadMap('Wood', {
		tileset: 'Swamp.png',
		autotiles: ['Swamp1.png', 'Swamp2.png', 'Swamp3.png', 'Swamp4.png', 'Swamp5.png'],
		bgm: {mp3: 'TomFahy_WoodlawnAtNight', ogg: 'TomFahy_WoodlawnAtNight'},
		player:  {
			speedAnimation: 10,
			speed: 10,
			x: 4, 
			y: 4, 
			filename: 'Ark.png',
			actionBattle: {
				hp_max: 200,
				actions: ['MyAttack']
			},
			actions: ['MyAttack']
		}
	}, function () { 
	 	createMonster('Mushroom', 20, 20);
	 	createMonster('Mushroom', 30, 15);
		rpg.player.setTypeMove("real");
		rpg.player.useMouse(false);
		rpg.setScreenIn("Player"); 
	});
	
	function createMonster(name, x, y) {
		rpg.setEventPrepared(name, {x: x, y: y});
		rpg.addEventPrepared(name);
	}
	
	Input.lock(rpg.canvas, true);
});