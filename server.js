var Rpg = require('rpgjs').onConnect(1337, function(rpg) {

	rpg.start(function() {

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
				rpg.player.setTypeMove("real");
				rpg.player.useMouse(false);
				rpg.setScreenIn("Player"); 
			});
      });
  });