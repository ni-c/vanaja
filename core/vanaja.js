var rpg;
RPGJS.loadPath = "rpgjs/core/";
RPGJS.load({
		plugins: ["arpg"]
	}, function() {
	rpg = new Rpg("canvas_rpg");
	rpg.setVolumeAudio(1);
	
	rpg.setGraphicAnimation(192, 192);

	rpg.addAnimation(Database.animation['enemy_offensive']);
	rpg.addAnimation(Database.animation['attack_player']);
			
	/* Enemy attack action */		
	rpg.addAction('attack_enemy', {
		action: 'attack',
		suffix_motion: [''],
		duration_motion: 1,
		block_movement: true,
		wait_finish: 1
	});
			
	/*Prepare to dynamically add events on the map */
	rpg.prepareEventAjax('Mushroom');
				
	/* Player attack animation */
	rpg.addAction('attack_player', {
		action: 'attack',
		suffix_motion: ['_Attack'],
		duration_motion: 1,
		block_movement: true,
		wait_finish: 0,
		speed: 16,
		keypress: [Input.Ctrl],
		onStart: function() {
				rpg.animations['attack_player'].setPositionEvent(rpg.player);				rpg.animations['attack_player'].play();
		}
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
			regX: 85, 
			regY: 100, 
			actionBattle: {
				hp_max: 200,
				actions: ['attack_player']
			},
			actions: ['attack_player']
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