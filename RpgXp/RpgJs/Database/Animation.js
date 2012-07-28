/**
* Module Database
* Generated : Sat Jul 28 18:00:03 2012
*
* Use the following manner :
*
* var rpg = new Rpg("canvas_tag");
* rpg.addAnimation(Database.animation[NAME]);
*
* NAME is the name of the animation
* ---------------------------------
*/

Database.animation = {

          
/* ----------------------------------------------------------
* Animation #1
* Name : Special Move
* Number of frames : 16
* ----------------------------------------------------------- */
'Special Move': {
    name: 'Special Move',
    graphic: '001-Action01.png',
    sound: '086-Action01.ogg',
    frames: [
		[{pattern: 1, x: 0, y: 16, zoom: 30, rotation: 0, opacity: 100}],
		[{pattern: 1, x: 0, y: 0, zoom: 50, rotation: 0, opacity: 130}],
		[{pattern: 1, x: 0, y: -16, zoom: 80, rotation: 0, opacity: 150}],
		[{pattern: 1, x: 0, y: -24, zoom: 90, rotation: 0, opacity: 180}, {pattern: 2, x: 24, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: -24, zoom: 100, rotation: 0, opacity: 200}, {pattern: 2, x: 24, y: -8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: -24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 24, y: -32, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: -24, zoom: 100, rotation: 0, opacity: 200}, {pattern: 2, x: 24, y: -48, zoom: 100, rotation: 0, opacity: 200}, {pattern: 2, x: -24, y: 16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: -24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 24, y: -64, zoom: 100, rotation: 0, opacity: 200}, {pattern: 2, x: -24, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: -32, zoom: 110, rotation: 0, opacity: 200}, {pattern: 2, x: 24, y: -80, zoom: 100, rotation: 0, opacity: 150}, {pattern: 2, x: -24, y: -24, zoom: 100, rotation: 0, opacity: 200}, {pattern: 2, x: 0, y: 24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: -32, zoom: 110, rotation: 0, opacity: 255}, {pattern: 2, x: 24, y: -96, zoom: 100, rotation: 0, opacity: 150}, {pattern: 2, x: -24, y: -40, zoom: 100, rotation: 0, opacity: 200}, {pattern: 2, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: -40, zoom: 120, rotation: 0, opacity: 150}, {pattern: 2, x: 24, y: -112, zoom: 100, rotation: 0, opacity: 100}, {pattern: 2, x: -24, y: -64, zoom: 100, rotation: 0, opacity: 150}, {pattern: 2, x: 0, y: -32, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 1, x: 0, y: -40, zoom: 120, rotation: 0, opacity: 255}, {pattern: 2, x: 24, y: -120, zoom: 100, rotation: 0, opacity: 100}, {pattern: 2, x: -24, y: -80, zoom: 100, rotation: 0, opacity: 150}, {pattern: 2, x: 0, y: -48, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 1, x: 0, y: -40, zoom: 120, rotation: 0, opacity: 200}, {pattern: 2, x: -24, y: -104, zoom: 100, rotation: 0, opacity: 100}, {pattern: 2, x: 0, y: -72, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 1, x: 0, y: -40, zoom: 120, rotation: 0, opacity: 100}, {pattern: 2, x: -24, y: -104, zoom: 100, rotation: 0, opacity: 100}, {pattern: 2, x: 0, y: -72, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 2, x: 0, y: -120, zoom: 100, rotation: 0, opacity: 100}],
		[{pattern: 2, x: 0, y: -120, zoom: 100, rotation: 0, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #2
* Name : Cast Magic
* Number of frames : 16
* ----------------------------------------------------------- */
'Cast Magic': {
    name: 'Cast Magic',
    graphic: '001-Action01.png',
    sound: '087-Action02.ogg',
    frames: [
		[{pattern: 3, x: 0, y: -40, zoom: 100, rotation: 0, opacity: 120}],
		[{pattern: 4, x: 0, y: -40, zoom: 100, rotation: 0, opacity: 120}],
		[{pattern: 3, x: 0, y: -40, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: -40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 6, x: -56, y: 24, zoom: 50, rotation: 0, opacity: 255}, {pattern: 6, x: 0, y: 48, zoom: 30, rotation: 0, opacity: 255}, {pattern: 6, x: 56, y: 16, zoom: 40, rotation: 0, opacity: 255}],
		[{pattern: 5, x: 0, y: -40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 6, x: 56, y: -8, zoom: 40, rotation: 0, opacity: 255}, {pattern: 6, x: -32, y: 16, zoom: 30, rotation: 0, opacity: 255}, {pattern: 6, x: -56, y: -8, zoom: 50, rotation: 0, opacity: 255}, {pattern: 6, x: 0, y: 24, zoom: 30, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: -40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 6, x: -56, y: -32, zoom: 50, rotation: 0, opacity: 255}, {pattern: 6, x: 56, y: -32, zoom: 40, rotation: 0, opacity: 255}, {pattern: 6, x: 0, y: 8, zoom: 30, rotation: 0, opacity: 255}, {pattern: 6, x: -32, y: -16, zoom: 30, rotation: 0, opacity: 255}],
		[{pattern: 5, x: 0, y: -40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 6, x: -56, y: -48, zoom: 50, rotation: 0, opacity: 255}, {pattern: 6, x: 56, y: -48, zoom: 40, rotation: 0, opacity: 255}, {pattern: 6, x: 0, y: -8, zoom: 30, rotation: 0, opacity: 255}, {pattern: 6, x: -32, y: -32, zoom: 30, rotation: 0, opacity: 255}, {pattern: 0, x: -104, y: -64, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: -40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 6, x: -56, y: -64, zoom: 50, rotation: 0, opacity: 255}, {pattern: 6, x: 56, y: -64, zoom: 40, rotation: 0, opacity: 255}, {pattern: 6, x: 0, y: -8, zoom: 30, rotation: 0, opacity: 255}, {pattern: 6, x: -32, y: -40, zoom: 30, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: -40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 6, x: -56, y: -80, zoom: 50, rotation: 0, opacity: 150}, {pattern: 6, x: 56, y: -72, zoom: 40, rotation: 0, opacity: 150}, {pattern: 6, x: 0, y: -32, zoom: 30, rotation: 0, opacity: 150}, {pattern: 6, x: -32, y: -48, zoom: 30, rotation: 0, opacity: 150}],
		[{pattern: 4, x: 0, y: -40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 6, x: -56, y: -96, zoom: 50, rotation: 0, opacity: 150}, {pattern: 6, x: 56, y: -88, zoom: 40, rotation: 0, opacity: 150}, {pattern: 6, x: 0, y: -48, zoom: 30, rotation: 0, opacity: 150}, {pattern: 6, x: -32, y: -64, zoom: 30, rotation: 0, opacity: 150}],
		[{pattern: 5, x: 0, y: -40, zoom: 100, rotation: 0, opacity: 120}, {pattern: 6, x: -56, y: -112, zoom: 50, rotation: 0, opacity: 80}, {pattern: 6, x: 56, y: -112, zoom: 40, rotation: 0, opacity: 100}, {pattern: 6, x: -32, y: -80, zoom: 30, rotation: 0, opacity: 100}, {pattern: 6, x: 0, y: -64, zoom: 30, rotation: 0, opacity: 100}],
		[{pattern: 5, x: 0, y: -40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 6, x: -56, y: -128, zoom: 50, rotation: 0, opacity: 80}, {pattern: 6, x: 56, y: -128, zoom: 40, rotation: 0, opacity: 100}, {pattern: 6, x: -32, y: -96, zoom: 30, rotation: 0, opacity: 100}, {pattern: 6, x: 0, y: -88, zoom: 30, rotation: 0, opacity: 100}],
		[{pattern: 4, x: 0, y: -40, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: -40, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: -40, zoom: 100, rotation: 0, opacity: 80}],
		[{pattern: 3, x: 0, y: -40, zoom: 100, rotation: 0, opacity: 80}]
	]
},
          
/* ----------------------------------------------------------
* Animation #3
* Name : Use Item
* Number of frames : 16
* ----------------------------------------------------------- */
'Use Item': {
    name: 'Use Item',
    graphic: '002-Action02.png',
    sound: '088-Action03.ogg',
    frames: [
		[{pattern: 1, x: 0, y: -40, zoom: 50, rotation: 0, opacity: 120}],
		[{pattern: 1, x: 0, y: -40, zoom: 70, rotation: 0, opacity: 150}],
		[{pattern: 1, x: 0, y: -40, zoom: 90, rotation: 0, opacity: 150}],
		[{pattern: 1, x: 0, y: -40, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 2, x: 0, y: -40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 6, x: -8, y: -32, zoom: 60, rotation: 0, opacity: 150}],
		[{pattern: 3, x: 0, y: -40, zoom: 100, rotation: 0, opacity: 150}, {pattern: 6, x: -8, y: -16, zoom: 80, rotation: 0, opacity: 150}, {pattern: 5, x: -56, y: -96, zoom: 40, rotation: 0, opacity: 255}, {pattern: 5, x: 56, y: -8, zoom: 40, rotation: 0, opacity: 255}, {pattern: 5, x: -48, y: 0, zoom: 40, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: -40, zoom: 100, rotation: 0, opacity: 150}, {pattern: 6, x: -8, y: -16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 0, y: -64, zoom: 80, rotation: 0, opacity: 150}, {pattern: 5, x: -56, y: -96, zoom: 60, rotation: 0, opacity: 255}, {pattern: 5, x: 56, y: -8, zoom: 60, rotation: 0, opacity: 255}, {pattern: 5, x: -48, y: 0, zoom: 60, rotation: 0, opacity: 255}, {pattern: 5, x: 40, y: -96, zoom: 40, rotation: 0, opacity: 255}],
		[{pattern: 6, x: -8, y: -24, zoom: 110, rotation: 0, opacity: 150}, {pattern: 3, x: 0, y: -40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: -16, y: -64, zoom: 100, rotation: 0, opacity: 150}, {pattern: 5, x: 48, y: -96, zoom: 60, rotation: 0, opacity: 255}, {pattern: 5, x: -56, y: -96, zoom: 70, rotation: 0, opacity: 255}, {pattern: 5, x: 56, y: -8, zoom: 70, rotation: 0, opacity: 255}, {pattern: 5, x: -48, y: 0, zoom: 70, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: -40, zoom: 100, rotation: 0, opacity: 150}, {pattern: 6, x: 8, y: -32, zoom: 120, rotation: 0, opacity: 255}, {pattern: 10, x: 0, y: -24, zoom: 90, rotation: 0, opacity: 150}, {pattern: 5, x: -48, y: 0, zoom: 80, rotation: 0, opacity: 255}, {pattern: 5, x: 56, y: -8, zoom: 80, rotation: 0, opacity: 255}, {pattern: 5, x: -56, y: -96, zoom: 80, rotation: 0, opacity: 255}, {pattern: 0, x: -112, y: 72, zoom: 100, rotation: 0, opacity: 255}, {pattern: 5, x: 48, y: -96, zoom: 70, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: -40, zoom: 100, rotation: 0, opacity: 150}, {pattern: 6, x: 0, y: -32, zoom: 130, rotation: 0, opacity: 150}, {pattern: 10, x: -16, y: -64, zoom: 100, rotation: 0, opacity: 150}, {pattern: 5, x: 48, y: -96, zoom: 80, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: -40, zoom: 100, rotation: 0, opacity: 150}, {pattern: 10, x: 0, y: -40, zoom: 80, rotation: 0, opacity: 100}, {pattern: 6, x: -16, y: -24, zoom: 140, rotation: 0, opacity: 100}, {pattern: 5, x: 48, y: -96, zoom: 90, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: -40, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 3, x: 0, y: -40, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 3, x: 0, y: -40, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 3, x: 0, y: -40, zoom: 100, rotation: 0, opacity: 100}],
		[{pattern: 3, x: 0, y: -40, zoom: 100, rotation: 0, opacity: 50}]
	]
},
          
/* ----------------------------------------------------------
* Animation #4
* Name : Hit
* Number of frames : 8
* ----------------------------------------------------------- */
'Hit': {
    name: 'Hit',
    graphic: '003-Attack01.png',
    sound: '089-Attack01.ogg',
    frames: [
		[{pattern: 1, x: 0, y: 0, zoom: 30, rotation: 0, opacity: 120}],
		[{pattern: 1, x: 0, y: 0, zoom: 50, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: 0, zoom: 70, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 0, y: 0, zoom: 80, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 0, y: 0, zoom: 90, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: 0, zoom: 90, rotation: 0, opacity: 120}],
		[],
		[]
	]
},
          
/* ----------------------------------------------------------
* Animation #5
* Name : Claw
* Number of frames : 10
* ----------------------------------------------------------- */
'Claw': {
    name: 'Claw',
    graphic: '004-Attack02.png',
    sound: '092-Attack04.ogg',
    frames: [
		[{pattern: 1, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 7, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 8, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #6
* Name : Fang
* Number of frames : 8
* ----------------------------------------------------------- */
'Fang': {
    name: 'Fang',
    graphic: '005-Attack03.png',
    sound: '093-Attack05.ogg',
    frames: [
		[{pattern: 1, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 2, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 100}],
		[],
		[]
	]
},
          
/* ----------------------------------------------------------
* Animation #7
* Name : Sword
* Number of frames : 8
* ----------------------------------------------------------- */
'Sword': {
    name: 'Sword',
    graphic: '006-Weapon01.png',
    sound: '094-Attack06.ogg',
    frames: [
		[{pattern: 1, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 100}],
		[],
		[]
	]
},
          
/* ----------------------------------------------------------
* Animation #8
* Name : Spear
* Number of frames : 8
* ----------------------------------------------------------- */
'Spear': {
    name: 'Spear',
    graphic: '007-Weapon02.png',
    sound: '098-Attack10.ogg',
    frames: [
		[{pattern: 1, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 1, x: 0, y: 8, zoom: 80, rotation: 0, opacity: 200}, {pattern: 1, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 1, x: 0, y: 8, zoom: 80, rotation: 0, opacity: 150}, {pattern: 1, x: 0, y: 8, zoom: 60, rotation: 0, opacity: 200}],
		[{pattern: 1, x: 0, y: 8, zoom: 60, rotation: 0, opacity: 150}, {pattern: 2, x: 0, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: 8, zoom: 60, rotation: 0, opacity: 100}],
		[{pattern: 3, x: 0, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 0, x: 16, y: 112, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: 8, zoom: 60, rotation: 0, opacity: 80}],
		[{pattern: 2, x: 0, y: 16, zoom: 100, rotation: 0, opacity: 255}],
		[],
		[]
	]
},
          
/* ----------------------------------------------------------
* Animation #9
* Name : Axe
* Number of frames : 8
* ----------------------------------------------------------- */
'Axe': {
    name: 'Axe',
    graphic: '008-Weapon03.png',
    sound: '099-Attack11.ogg',
    frames: [
		[{pattern: 1, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 100}],
		[],
		[]
	]
},
          
/* ----------------------------------------------------------
* Animation #10
* Name : Knife
* Number of frames : 8
* ----------------------------------------------------------- */
'Knife': {
    name: 'Knife',
    graphic: '009-Weapon04.png',
    sound: '100-Attack12.ogg',
    frames: [
		[{pattern: 1, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 100}],
		[],
		[]
	]
},
          
/* ----------------------------------------------------------
* Animation #11
* Name : Bow
* Number of frames : 10
* ----------------------------------------------------------- */
'Bow': {
    name: 'Bow',
    graphic: '010-Weapon05.png',
    sound: '101-Attack13.ogg',
    frames: [
		[{pattern: 1, x: 8, y: 160, zoom: 120, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 8, y: 72, zoom: 110, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 8, y: -40, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 8, y: -104, zoom: 90, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 8, y: -160, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 8, y: -88, zoom: 90, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 8, y: -40, zoom: 80, rotation: 0, opacity: 255}, {pattern: 3, x: 8, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 8, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: 8, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 8, y: 8, zoom: 100, rotation: 0, opacity: 255}]
	]
},
          
/* ----------------------------------------------------------
* Animation #12
* Name : Gun
* Number of frames : 10
* ----------------------------------------------------------- */
'Gun': {
    name: 'Gun',
    graphic: '011-Weapon06.png',
    sound: '102-Attack14.ogg',
    frames: [
		[{pattern: 12, x: 0, y: 160, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 12, x: 0, y: 80, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 12, x: 0, y: 48, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 12, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: 0, zoom: 50, rotation: 0, opacity: 100}],
		[{pattern: 1, x: 0, y: 0, zoom: 70, rotation: 0, opacity: 150}],
		[{pattern: 2, x: 0, y: 0, zoom: 90, rotation: 0, opacity: 200}],
		[{pattern: 2, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: 8, zoom: 120, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: 8, zoom: 130, rotation: 0, opacity: 150}],
		[{pattern: 3, x: 0, y: 8, zoom: 140, rotation: 0, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #13
* Name : Mace
* Number of frames : 10
* ----------------------------------------------------------- */
'Mace': {
    name: 'Mace',
    graphic: '003-Attack01.png',
    sound: '103-Attack15.ogg',
    frames: [
		[{pattern: 9, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 9, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 8, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 7, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 150}, {pattern: 11, x: 0, y: 0, zoom: 80, rotation: 0, opacity: 150}],
		[{pattern: 10, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 10, x: 0, y: 0, zoom: 110, rotation: 0, opacity: 255}],
		[{pattern: 10, x: 0, y: 0, zoom: 120, rotation: 0, opacity: 150}],
		[{pattern: 10, x: 0, y: 0, zoom: 130, rotation: 0, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #14
* Name : Rod
* Number of frames : 8
* ----------------------------------------------------------- */
'Rod': {
    name: 'Rod',
    graphic: '003-Attack01.png',
    sound: '104-Attack16.ogg',
    frames: [
		[{pattern: 4, x: 0, y: 0, zoom: 30, rotation: 0, opacity: 120}],
		[{pattern: 5, x: 0, y: 8, zoom: 60, rotation: 0, opacity: 150}],
		[{pattern: 4, x: 0, y: 8, zoom: 90, rotation: 0, opacity: 255}],
		[{pattern: 5, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 4, x: 0, y: 8, zoom: 110, rotation: 0, opacity: 150}],
		[{pattern: 5, x: 0, y: 8, zoom: 120, rotation: 0, opacity: 100}],
		[],
		[]
	]
},
          
/* ----------------------------------------------------------
* Animation #15
* Name : HP Recovery 1
* Number of frames : 10
* ----------------------------------------------------------- */
'HP Recovery 1': {
    name: 'HP Recovery 1',
    graphic: '012-Heal01.png',
    sound: '105-Heal01.ogg',
    frames: [
		[{pattern: 1, x: 0, y: -8, zoom: 50, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: -16, zoom: 60, rotation: 0, opacity: 255}, {pattern: 4, x: 0, y: -8, zoom: 50, rotation: 0, opacity: 180}, {pattern: 3, x: 24, y: 0, zoom: 40, rotation: 0, opacity: 255}, {pattern: 3, x: -24, y: -24, zoom: 40, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: -16, zoom: 70, rotation: 0, opacity: 255}, {pattern: 4, x: 0, y: -8, zoom: 60, rotation: 0, opacity: 255}, {pattern: 3, x: -24, y: -40, zoom: 30, rotation: 0, opacity: 255}, {pattern: 3, x: 24, y: -16, zoom: 30, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: -16, zoom: 80, rotation: 0, opacity: 180}, {pattern: 4, x: 0, y: -16, zoom: 70, rotation: 0, opacity: 255}, {pattern: 3, x: -24, y: -56, zoom: 30, rotation: 0, opacity: 150}, {pattern: 3, x: 24, y: -32, zoom: 30, rotation: 0, opacity: 150}],
		[{pattern: 1, x: 0, y: -16, zoom: 90, rotation: 0, opacity: 120}, {pattern: 4, x: 0, y: -16, zoom: 80, rotation: 0, opacity: 180}],
		[{pattern: 1, x: 0, y: -16, zoom: 90, rotation: 0, opacity: 80}, {pattern: 1, x: 0, y: -8, zoom: 60, rotation: 0, opacity: 120}, {pattern: 4, x: 0, y: -16, zoom: 80, rotation: 0, opacity: 50}],
		[{pattern: 1, x: 0, y: -8, zoom: 70, rotation: 0, opacity: 80}],
		[{pattern: 1, x: 0, y: -24, zoom: 90, rotation: 0, opacity: 80}],
		[{pattern: 1, x: 0, y: -24, zoom: 100, rotation: 0, opacity: 50}],
		[{pattern: 1, x: 0, y: -24, zoom: 110, rotation: 0, opacity: 30}]
	]
},
          
/* ----------------------------------------------------------
* Animation #16
* Name : HP Recovery 2
* Number of frames : 13
* ----------------------------------------------------------- */
'HP Recovery 2': {
    name: 'HP Recovery 2',
    graphic: '012-Heal01.png',
    sound: '106-Heal02.ogg',
    frames: [
		[{pattern: 4, x: 0, y: -8, zoom: 60, rotation: 0, opacity: 100}, {pattern: 2, x: 0, y: -24, zoom: 100, rotation: 0, opacity: 80}, {pattern: 2, x: 40, y: -16, zoom: 100, rotation: 0, opacity: 80}, {pattern: 2, x: -32, y: -24, zoom: 100, rotation: 0, opacity: 80}],
		[{pattern: 4, x: 0, y: -8, zoom: 65, rotation: 0, opacity: 180}, {pattern: 2, x: 0, y: -40, zoom: 100, rotation: 0, opacity: 180}, {pattern: 2, x: 32, y: -16, zoom: 100, rotation: 0, opacity: 180}, {pattern: 2, x: -32, y: -24, zoom: 100, rotation: 0, opacity: 180}],
		[{pattern: 4, x: 0, y: -8, zoom: 70, rotation: 0, opacity: 220}, {pattern: 2, x: -32, y: -40, zoom: 100, rotation: 0, opacity: 220}, {pattern: 2, x: 32, y: -32, zoom: 100, rotation: 0, opacity: 180}, {pattern: 2, x: 0, y: -48, zoom: 100, rotation: 0, opacity: 180}],
		[{pattern: 4, x: 0, y: -16, zoom: 80, rotation: 0, opacity: 255}, {pattern: 2, x: -32, y: -48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 32, y: -40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: -56, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: -32, y: -64, zoom: 100, rotation: 0, opacity: 180}, {pattern: 2, x: 0, y: -72, zoom: 100, rotation: 0, opacity: 180}, {pattern: 2, x: 32, y: -56, zoom: 100, rotation: 0, opacity: 80}, {pattern: 4, x: 0, y: -16, zoom: 80, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: -16, zoom: 80, rotation: 0, opacity: 180}, {pattern: 2, x: -32, y: -80, zoom: 100, rotation: 0, opacity: 80}, {pattern: 2, x: 0, y: -88, zoom: 100, rotation: 0, opacity: 80}, {pattern: 2, x: 32, y: -72, zoom: 100, rotation: 0, opacity: 80}, {pattern: 1, x: 0, y: -40, zoom: 80, rotation: 0, opacity: 180}],
		[{pattern: 4, x: 0, y: -16, zoom: 80, rotation: 0, opacity: 80}, {pattern: 2, x: -32, y: -88, zoom: 100, rotation: 0, opacity: 50}, {pattern: 2, x: 0, y: -104, zoom: 100, rotation: 0, opacity: 80}, {pattern: 2, x: 32, y: -88, zoom: 100, rotation: 0, opacity: 50}, {pattern: 1, x: 0, y: -56, zoom: 80, rotation: 0, opacity: 80}],
		[{pattern: 4, x: 0, y: -16, zoom: 80, rotation: 0, opacity: 50}, {pattern: 1, x: 0, y: -64, zoom: 80, rotation: 0, opacity: 80}, {pattern: 1, x: 0, y: -32, zoom: 80, rotation: 0, opacity: 80}],
		[{pattern: 1, x: 0, y: -72, zoom: 80, rotation: 0, opacity: 80}, {pattern: 1, x: 0, y: -48, zoom: 80, rotation: 0, opacity: 80}],
		[{pattern: 1, x: 0, y: -88, zoom: 80, rotation: 0, opacity: 80}, {pattern: 1, x: 0, y: -64, zoom: 80, rotation: 0, opacity: 80}, {pattern: 1, x: 0, y: -40, zoom: 80, rotation: 0, opacity: 80}],
		[{pattern: 1, x: 0, y: -104, zoom: 80, rotation: 0, opacity: 80}, {pattern: 1, x: 0, y: -80, zoom: 80, rotation: 0, opacity: 80}, {pattern: 1, x: 0, y: -56, zoom: 80, rotation: 0, opacity: 80}, {pattern: 1, x: 0, y: -32, zoom: 80, rotation: 0, opacity: 80}],
		[{pattern: 1, x: 0, y: -120, zoom: 80, rotation: 0, opacity: 80}, {pattern: 1, x: 0, y: -96, zoom: 80, rotation: 0, opacity: 80}, {pattern: 1, x: 0, y: -72, zoom: 80, rotation: 0, opacity: 80}, {pattern: 1, x: 0, y: -48, zoom: 80, rotation: 0, opacity: 80}],
		[{pattern: 1, x: 0, y: -136, zoom: 80, rotation: 0, opacity: 80}, {pattern: 1, x: 0, y: -112, zoom: 80, rotation: 0, opacity: 80}, {pattern: 1, x: 0, y: -88, zoom: 80, rotation: 0, opacity: 80}, {pattern: 1, x: 0, y: -64, zoom: 80, rotation: 0, opacity: 80}]
	]
},
          
/* ----------------------------------------------------------
* Animation #17
* Name : HP Recovery 3
* Number of frames : 15
* ----------------------------------------------------------- */
'HP Recovery 3': {
    name: 'HP Recovery 3',
    graphic: '012-Heal01.png',
    sound: '107-Heal03.ogg',
    frames: [
		[{pattern: 1, x: 0, y: -8, zoom: 50, rotation: 0, opacity: 100}],
		[{pattern: 1, x: 0, y: -8, zoom: 70, rotation: 0, opacity: 150}, {pattern: 1, x: 0, y: -8, zoom: 50, rotation: 0, opacity: 100}],
		[{pattern: 1, x: 0, y: -16, zoom: 80, rotation: 0, opacity: 150}, {pattern: 1, x: 0, y: -8, zoom: 60, rotation: 0, opacity: 150}, {pattern: 1, x: 0, y: 0, zoom: 40, rotation: 0, opacity: 100}],
		[{pattern: 1, x: 0, y: -24, zoom: 90, rotation: 0, opacity: 120}, {pattern: 1, x: 0, y: -16, zoom: 70, rotation: 0, opacity: 150}, {pattern: 1, x: 0, y: -8, zoom: 50, rotation: 0, opacity: 150}],
		[{pattern: 1, x: 0, y: -24, zoom: 80, rotation: 0, opacity: 100}, {pattern: 1, x: 0, y: -24, zoom: 100, rotation: 0, opacity: 80}, {pattern: 1, x: 0, y: -16, zoom: 60, rotation: 0, opacity: 150}],
		[{pattern: 1, x: 0, y: -24, zoom: 90, rotation: 0, opacity: 80}, {pattern: 1, x: 0, y: -16, zoom: 70, rotation: 0, opacity: 150}, {pattern: 4, x: 0, y: 16, zoom: 30, rotation: 0, opacity: 100}],
		[{pattern: 1, x: 0, y: -16, zoom: 80, rotation: 0, opacity: 100}, {pattern: 4, x: 0, y: 0, zoom: 50, rotation: 0, opacity: 150}],
		[{pattern: 4, x: 0, y: -16, zoom: 70, rotation: 0, opacity: 150}, {pattern: 4, x: 0, y: 16, zoom: 40, rotation: 0, opacity: 100}],
		[{pattern: 4, x: 0, y: -32, zoom: 90, rotation: 0, opacity: 200}, {pattern: 4, x: 0, y: -8, zoom: 60, rotation: 0, opacity: 150}, {pattern: 2, x: -24, y: -16, zoom: 80, rotation: 0, opacity: 100}],
		[{pattern: 4, x: 0, y: -40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 4, x: 0, y: -24, zoom: 80, rotation: 0, opacity: 150}, {pattern: 1, x: 0, y: -40, zoom: 100, rotation: 0, opacity: 150}, {pattern: 2, x: -24, y: -56, zoom: 80, rotation: 0, opacity: 150}],
		[{pattern: 4, x: 0, y: -48, zoom: 110, rotation: 0, opacity: 255}, {pattern: 4, x: 0, y: -32, zoom: 90, rotation: 0, opacity: 200}, {pattern: 1, x: 0, y: -64, zoom: 100, rotation: 0, opacity: 150}, {pattern: 1, x: 0, y: -40, zoom: 100, rotation: 0, opacity: 150}, {pattern: 2, x: -24, y: -88, zoom: 80, rotation: 0, opacity: 200}, {pattern: 2, x: 24, y: -16, zoom: 70, rotation: 0, opacity: 150}],
		[{pattern: 4, x: 0, y: -56, zoom: 120, rotation: 0, opacity: 150}, {pattern: 4, x: 0, y: -40, zoom: 100, rotation: 0, opacity: 200}, {pattern: 1, x: 0, y: -88, zoom: 100, rotation: 0, opacity: 150}, {pattern: 1, x: 0, y: -64, zoom: 100, rotation: 0, opacity: 150}, {pattern: 2, x: -24, y: -120, zoom: 80, rotation: 0, opacity: 150}, {pattern: 2, x: 24, y: -56, zoom: 70, rotation: 0, opacity: 150}, {pattern: 3, x: 0, y: -16, zoom: 80, rotation: 0, opacity: 150}],
		[{pattern: 4, x: 0, y: -64, zoom: 130, rotation: 0, opacity: 100}, {pattern: 4, x: 0, y: -48, zoom: 110, rotation: 0, opacity: 150}, {pattern: 1, x: 0, y: -104, zoom: 100, rotation: 0, opacity: 130}, {pattern: 1, x: 0, y: -80, zoom: 100, rotation: 0, opacity: 150}, {pattern: 2, x: 24, y: -96, zoom: 70, rotation: 0, opacity: 150}, {pattern: 3, x: 0, y: -56, zoom: 80, rotation: 0, opacity: 200}],
		[{pattern: 4, x: 0, y: -64, zoom: 130, rotation: 0, opacity: 100}, {pattern: 1, x: 0, y: -136, zoom: 100, rotation: 0, opacity: 100}, {pattern: 1, x: 0, y: -112, zoom: 100, rotation: 0, opacity: 130}, {pattern: 2, x: 24, y: -128, zoom: 70, rotation: 0, opacity: 100}, {pattern: 3, x: 0, y: -96, zoom: 80, rotation: 0, opacity: 150}],
		[{pattern: 1, x: 0, y: -152, zoom: 100, rotation: 0, opacity: 100}, {pattern: 3, x: 0, y: -144, zoom: 80, rotation: 0, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #18
* Name : SP Recovery 1
* Number of frames : 10
* ----------------------------------------------------------- */
'SP Recovery 1': {
    name: 'SP Recovery 1',
    graphic: '013-Heal02.png',
    sound: '108-Heal04.ogg',
    frames: [
		[{pattern: 0, x: 0, y: 24, zoom: 70, rotation: 85, opacity: 255}, {pattern: 0, x: 0, y: 24, zoom: 70, rotation: 275, opacity: 255}, {pattern: 3, x: 0, y: 80, zoom: 70, rotation: 0, opacity: 80}, {pattern: 1, x: -24, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 40, y: 48, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 0, x: 0, y: 24, zoom: 70, rotation: 90, opacity: 255}, {pattern: 0, x: -8, y: 24, zoom: 70, rotation: 90, opacity: 255}, {pattern: 3, x: 0, y: 64, zoom: 70, rotation: 0, opacity: 100}, {pattern: 1, x: -40, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 48, y: 80, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: 48, zoom: 70, rotation: 0, opacity: 140}, {pattern: 1, x: -56, y: 72, zoom: 100, rotation: 90, opacity: 255}, {pattern: 1, x: 56, y: -24, zoom: 100, rotation: 90, opacity: 255}],
		[{pattern: 3, x: 0, y: 32, zoom: 70, rotation: 0, opacity: 200}, {pattern: 1, x: -40, y: -16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 48, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 48, y: -56, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: 16, zoom: 70, rotation: 0, opacity: 255}, {pattern: 1, x: -40, y: 40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 48, y: -16, zoom: 100, rotation: 90, opacity: 255}, {pattern: 1, x: -48, y: -24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: 0, zoom: 70, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: -16, zoom: 70, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: -32, zoom: 70, rotation: 0, opacity: 200}],
		[{pattern: 3, x: 0, y: -48, zoom: 70, rotation: 0, opacity: 150}],
		[{pattern: 3, x: 0, y: -64, zoom: 70, rotation: 0, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #19
* Name : SP Recovery 2
* Number of frames : 15
* ----------------------------------------------------------- */
'SP Recovery 2': {
    name: 'SP Recovery 2',
    graphic: '013-Heal02.png',
    sound: '109-Heal05.ogg',
    frames: [
		[{pattern: 2, x: 0, y: 32, zoom: 70, rotation: 20, opacity: 255}, {pattern: 2, x: 0, y: 32, zoom: 70, rotation: 340, opacity: 255}, {pattern: 2, x: 0, y: 40, zoom: 100, rotation: 170, opacity: 255}, {pattern: 2, x: 8, y: 32, zoom: 100, rotation: 20, opacity: 255}],
		[{pattern: 2, x: 0, y: 24, zoom: 70, rotation: 30, opacity: 255}, {pattern: 2, x: 0, y: 24, zoom: 70, rotation: 330, opacity: 255}, {pattern: 2, x: -8, y: 32, zoom: 100, rotation: 150, opacity: 255}, {pattern: 2, x: 8, y: 24, zoom: 100, rotation: 40, opacity: 255}],
		[{pattern: 2, x: 0, y: 24, zoom: 70, rotation: 40, opacity: 255}, {pattern: 2, x: 0, y: 24, zoom: 70, rotation: 320, opacity: 255}, {pattern: 2, x: -8, y: 32, zoom: 100, rotation: 130, opacity: 255}, {pattern: 2, x: 8, y: 32, zoom: 100, rotation: 60, opacity: 255}],
		[{pattern: 2, x: 0, y: 24, zoom: 70, rotation: 50, opacity: 255}, {pattern: 2, x: 0, y: 24, zoom: 70, rotation: 310, opacity: 255}, {pattern: 2, x: -8, y: 32, zoom: 100, rotation: 120, opacity: 255}, {pattern: 2, x: 8, y: 32, zoom: 100, rotation: 70, opacity: 255}],
		[{pattern: 2, x: 0, y: 24, zoom: 70, rotation: 60, opacity: 255}, {pattern: 2, x: 0, y: 24, zoom: 70, rotation: 300, opacity: 255}, {pattern: 2, x: -8, y: 32, zoom: 100, rotation: 110, opacity: 255}, {pattern: 2, x: 8, y: 32, zoom: 100, rotation: 80, opacity: 255}],
		[{pattern: 2, x: 0, y: 24, zoom: 70, rotation: 70, opacity: 255}, {pattern: 2, x: 0, y: 24, zoom: 70, rotation: 290, opacity: 255}, {pattern: 2, x: -8, y: 32, zoom: 100, rotation: 105, opacity: 255}, {pattern: 2, x: 8, y: 32, zoom: 100, rotation: 85, opacity: 255}],
		[{pattern: 2, x: 0, y: 24, zoom: 70, rotation: 85, opacity: 255}, {pattern: 2, x: 0, y: 24, zoom: 70, rotation: 275, opacity: 255}, {pattern: 3, x: 0, y: 80, zoom: 70, rotation: 0, opacity: 80}, {pattern: 1, x: -32, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 40, y: 48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: 32, zoom: 100, rotation: 100, opacity: 255}, {pattern: 2, x: 8, y: 32, zoom: 100, rotation: 90, opacity: 255}],
		[{pattern: 2, x: 0, y: 24, zoom: 70, rotation: 90, opacity: 255}, {pattern: 2, x: -8, y: 24, zoom: 70, rotation: 90, opacity: 255}, {pattern: 3, x: 0, y: 64, zoom: 70, rotation: 0, opacity: 100}, {pattern: 1, x: -40, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 48, y: 80, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 32, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: 48, zoom: 70, rotation: 0, opacity: 140}, {pattern: 1, x: -56, y: 72, zoom: 100, rotation: 90, opacity: 255}, {pattern: 1, x: 56, y: -24, zoom: 100, rotation: 90, opacity: 255}, {pattern: 3, x: 0, y: 72, zoom: 70, rotation: 0, opacity: 100}, {pattern: 1, x: -48, y: -32, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: 32, zoom: 70, rotation: 0, opacity: 200}, {pattern: 1, x: -40, y: -16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 48, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 48, y: -56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 3, x: 0, y: 56, zoom: 70, rotation: 0, opacity: 100}, {pattern: 1, x: 56, y: 56, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: 16, zoom: 70, rotation: 0, opacity: 255}, {pattern: 1, x: -40, y: 40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 48, y: -16, zoom: 100, rotation: 90, opacity: 255}, {pattern: 1, x: -48, y: -24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 3, x: 0, y: 40, zoom: 70, rotation: 0, opacity: 150}, {pattern: 1, x: 56, y: -40, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: 0, zoom: 70, rotation: 0, opacity: 255}, {pattern: 3, x: 0, y: 24, zoom: 70, rotation: 0, opacity: 150}, {pattern: 1, x: -32, y: -48, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: -16, zoom: 70, rotation: 0, opacity: 255}, {pattern: 3, x: 0, y: 8, zoom: 70, rotation: 0, opacity: 200}],
		[{pattern: 3, x: 0, y: -32, zoom: 70, rotation: 0, opacity: 180}, {pattern: 3, x: 0, y: -8, zoom: 70, rotation: 0, opacity: 150}],
		[{pattern: 3, x: 0, y: -48, zoom: 70, rotation: 0, opacity: 100}, {pattern: 3, x: 0, y: -24, zoom: 70, rotation: 0, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #20
* Name : SP Recovery 3
* Number of frames : 20
* ----------------------------------------------------------- */
'SP Recovery 3': {
    name: 'SP Recovery 3',
    graphic: '013-Heal02.png',
    sound: '110-Heal06.ogg',
    frames: [
		[{pattern: 4, x: -40, y: 0, zoom: 50, rotation: 0, opacity: 100}],
		[{pattern: 4, x: -40, y: 0, zoom: 60, rotation: 0, opacity: 150}, {pattern: 4, x: 56, y: 72, zoom: 50, rotation: 0, opacity: 100}],
		[{pattern: 4, x: -40, y: 0, zoom: 80, rotation: 0, opacity: 200}, {pattern: 4, x: 56, y: 72, zoom: 60, rotation: 0, opacity: 150}, {pattern: 4, x: 56, y: -32, zoom: 50, rotation: 0, opacity: 100}],
		[{pattern: 4, x: -40, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 4, x: 56, y: 72, zoom: 80, rotation: 0, opacity: 200}, {pattern: 4, x: 56, y: -32, zoom: 60, rotation: 0, opacity: 150}],
		[{pattern: 4, x: -40, y: 0, zoom: 100, rotation: 0, opacity: 200}, {pattern: 4, x: 56, y: 72, zoom: 100, rotation: 0, opacity: 255}, {pattern: 4, x: 56, y: -32, zoom: 80, rotation: 0, opacity: 200}],
		[{pattern: 4, x: 56, y: 72, zoom: 100, rotation: 0, opacity: 200}, {pattern: 4, x: 56, y: -32, zoom: 100, rotation: 0, opacity: 255}, {pattern: 4, x: -40, y: 0, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 4, x: 56, y: -32, zoom: 100, rotation: 0, opacity: 200}, {pattern: 4, x: 56, y: 72, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 4, x: 56, y: -32, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 2, x: 0, y: 32, zoom: 70, rotation: 20, opacity: 255}, {pattern: 2, x: 0, y: 32, zoom: 70, rotation: 340, opacity: 255}, {pattern: 2, x: 0, y: 40, zoom: 100, rotation: 170, opacity: 255}, {pattern: 2, x: 8, y: 32, zoom: 100, rotation: 20, opacity: 255}],
		[{pattern: 2, x: 0, y: 24, zoom: 70, rotation: 30, opacity: 255}, {pattern: 2, x: 0, y: 24, zoom: 70, rotation: 330, opacity: 255}, {pattern: 2, x: -8, y: 32, zoom: 100, rotation: 150, opacity: 255}, {pattern: 2, x: 8, y: 24, zoom: 100, rotation: 40, opacity: 255}],
		[{pattern: 2, x: 0, y: 24, zoom: 70, rotation: 40, opacity: 255}, {pattern: 2, x: 0, y: 24, zoom: 70, rotation: 320, opacity: 255}, {pattern: 2, x: -8, y: 32, zoom: 100, rotation: 130, opacity: 255}, {pattern: 2, x: 8, y: 32, zoom: 100, rotation: 60, opacity: 255}],
		[{pattern: 2, x: 0, y: 24, zoom: 70, rotation: 50, opacity: 255}, {pattern: 2, x: 0, y: 24, zoom: 70, rotation: 310, opacity: 255}, {pattern: 2, x: -8, y: 32, zoom: 100, rotation: 120, opacity: 255}, {pattern: 2, x: 8, y: 32, zoom: 100, rotation: 70, opacity: 255}],
		[{pattern: 2, x: 0, y: 24, zoom: 70, rotation: 70, opacity: 255}, {pattern: 2, x: 0, y: 24, zoom: 70, rotation: 290, opacity: 255}, {pattern: 2, x: -8, y: 32, zoom: 100, rotation: 105, opacity: 255}, {pattern: 2, x: 8, y: 32, zoom: 100, rotation: 85, opacity: 255}],
		[{pattern: 2, x: 0, y: 24, zoom: 70, rotation: 85, opacity: 255}, {pattern: 2, x: 0, y: 24, zoom: 70, rotation: 275, opacity: 255}, {pattern: 3, x: 0, y: 80, zoom: 70, rotation: 0, opacity: 80}, {pattern: 1, x: -32, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 40, y: 48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: 32, zoom: 100, rotation: 100, opacity: 255}, {pattern: 2, x: 8, y: 32, zoom: 100, rotation: 90, opacity: 255}],
		[{pattern: 3, x: 0, y: 48, zoom: 70, rotation: 0, opacity: 140}, {pattern: 1, x: -56, y: 72, zoom: 100, rotation: 90, opacity: 255}, {pattern: 1, x: 56, y: -24, zoom: 100, rotation: 90, opacity: 255}, {pattern: 3, x: 0, y: 72, zoom: 70, rotation: 0, opacity: 100}, {pattern: 1, x: -48, y: -32, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: 32, zoom: 70, rotation: 0, opacity: 200}, {pattern: 1, x: -40, y: -16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 48, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 48, y: -56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 3, x: 0, y: 56, zoom: 70, rotation: 0, opacity: 100}, {pattern: 1, x: 56, y: 56, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: 16, zoom: 70, rotation: 0, opacity: 255}, {pattern: 1, x: -40, y: 40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 48, y: -16, zoom: 100, rotation: 90, opacity: 255}, {pattern: 1, x: -48, y: -24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 3, x: 0, y: 40, zoom: 70, rotation: 0, opacity: 150}, {pattern: 1, x: 56, y: -40, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: -16, zoom: 70, rotation: 0, opacity: 255}, {pattern: 3, x: 0, y: 8, zoom: 70, rotation: 0, opacity: 200}],
		[{pattern: 3, x: 0, y: -32, zoom: 70, rotation: 0, opacity: 180}, {pattern: 3, x: 0, y: -8, zoom: 70, rotation: 0, opacity: 150}],
		[{pattern: 3, x: 0, y: -48, zoom: 70, rotation: 0, opacity: 100}, {pattern: 3, x: 0, y: -24, zoom: 70, rotation: 0, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #21
* Name : All Recovery 1
* Number of frames : 20
* ----------------------------------------------------------- */
'All Recovery 1': {
    name: 'All Recovery 1',
    graphic: '013-Heal02.png',
    sound: '111-Heal07.ogg',
    frames: [
		[{pattern: 6, x: -24, y: -56, zoom: 80, rotation: 0, opacity: 150}],
		[{pattern: 6, x: -24, y: -56, zoom: 90, rotation: 0, opacity: 150}, {pattern: 6, x: -24, y: -56, zoom: 80, rotation: 0, opacity: 150}, {pattern: 7, x: -24, y: -56, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 6, x: -24, y: -56, zoom: 100, rotation: 0, opacity: 150}, {pattern: 6, x: -24, y: -56, zoom: 90, rotation: 0, opacity: 150}, {pattern: 7, x: -24, y: -56, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 6, x: -24, y: -56, zoom: 100, rotation: 0, opacity: 150}, {pattern: 6, x: -24, y: -56, zoom: 100, rotation: 0, opacity: 150}, {pattern: 7, x: -24, y: -56, zoom: 100, rotation: 0, opacity: 150}, {pattern: 8, x: -64, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: 40, y: -80, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: -24, y: -56, zoom: 100, rotation: 0, opacity: 100}, {pattern: 6, x: -24, y: -56, zoom: 100, rotation: 0, opacity: 150}, {pattern: 7, x: -24, y: -56, zoom: 100, rotation: 0, opacity: 100}, {pattern: 8, x: 0, y: 24, zoom: 70, rotation: 0, opacity: 255}, {pattern: 8, x: 64, y: -32, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: -8, y: -96, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: -24, y: -56, zoom: 100, rotation: 0, opacity: 100}],
		[{pattern: 6, x: 32, y: 0, zoom: 80, rotation: 0, opacity: 150}, {pattern: 8, x: -48, y: -16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: 24, y: -56, zoom: 50, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 32, y: 0, zoom: 90, rotation: 0, opacity: 150}, {pattern: 6, x: 32, y: 0, zoom: 80, rotation: 0, opacity: 150}, {pattern: 7, x: 32, y: 0, zoom: 100, rotation: 0, opacity: 150}, {pattern: 8, x: -16, y: -56, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 32, y: 0, zoom: 100, rotation: 0, opacity: 150}, {pattern: 6, x: 32, y: 0, zoom: 90, rotation: 0, opacity: 150}, {pattern: 7, x: 32, y: 0, zoom: 100, rotation: 0, opacity: 200}, {pattern: 7, x: 32, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: 64, y: -16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 32, y: 0, zoom: 100, rotation: 0, opacity: 150}, {pattern: 6, x: 32, y: 0, zoom: 100, rotation: 0, opacity: 150}, {pattern: 7, x: 32, y: 0, zoom: 100, rotation: 0, opacity: 150}, {pattern: 8, x: 8, y: -56, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 32, y: 0, zoom: 100, rotation: 0, opacity: 100}, {pattern: 6, x: 32, y: 0, zoom: 100, rotation: 0, opacity: 150}, {pattern: 7, x: 32, y: 0, zoom: 100, rotation: 0, opacity: 100}, {pattern: 8, x: 48, y: -80, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: -16, y: 48, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 32, y: 0, zoom: 100, rotation: 0, opacity: 100}, {pattern: 8, x: -16, y: -56, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 0, y: -16, zoom: 80, rotation: 0, opacity: 150}, {pattern: 8, x: 40, y: 16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 0, y: -16, zoom: 90, rotation: 0, opacity: 150}, {pattern: 6, x: 0, y: -16, zoom: 80, rotation: 0, opacity: 150}, {pattern: 7, x: 0, y: -16, zoom: 100, rotation: 0, opacity: 150}, {pattern: 8, x: -32, y: 24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 0, y: -16, zoom: 100, rotation: 0, opacity: 150}, {pattern: 6, x: 0, y: -16, zoom: 90, rotation: 0, opacity: 150}, {pattern: 7, x: 0, y: -16, zoom: 100, rotation: 0, opacity: 200}, {pattern: 8, x: 24, y: -48, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 0, y: -16, zoom: 100, rotation: 0, opacity: 150}, {pattern: 6, x: 0, y: -16, zoom: 90, rotation: 0, opacity: 150}, {pattern: 7, x: 0, y: -16, zoom: 100, rotation: 0, opacity: 200}, {pattern: 8, x: -24, y: -56, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 0, y: -16, zoom: 100, rotation: 0, opacity: 150}, {pattern: 6, x: 0, y: -16, zoom: 100, rotation: 0, opacity: 150}, {pattern: 7, x: 0, y: -16, zoom: 100, rotation: 0, opacity: 150}, {pattern: 8, x: 48, y: 0, zoom: 60, rotation: 0, opacity: 255}, {pattern: 8, x: 16, y: -72, zoom: 90, rotation: 0, opacity: 255}, {pattern: 8, x: -48, y: 16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 0, y: -16, zoom: 100, rotation: 0, opacity: 100}, {pattern: 8, x: -24, y: -48, zoom: 100, rotation: 0, opacity: 255}],
		[],
		[]
	]
},
          
/* ----------------------------------------------------------
* Animation #22
* Name : All Recovery 2
* Number of frames : 20
* ----------------------------------------------------------- */
'All Recovery 2': {
    name: 'All Recovery 2',
    graphic: '013-Heal02.png',
    sound: '112-Heal08.ogg',
    frames: [
		[{pattern: 6, x: -24, y: -56, zoom: 80, rotation: 0, opacity: 150}],
		[{pattern: 6, x: -24, y: -56, zoom: 90, rotation: 0, opacity: 150}, {pattern: 6, x: -24, y: -56, zoom: 80, rotation: 0, opacity: 150}, {pattern: 7, x: -24, y: -56, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 6, x: -24, y: -56, zoom: 100, rotation: 0, opacity: 150}, {pattern: 6, x: -24, y: -56, zoom: 90, rotation: 0, opacity: 150}, {pattern: 7, x: -24, y: -56, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 6, x: -24, y: -56, zoom: 100, rotation: 0, opacity: 150}, {pattern: 6, x: -24, y: -56, zoom: 100, rotation: 0, opacity: 150}, {pattern: 7, x: -24, y: -56, zoom: 100, rotation: 0, opacity: 150}, {pattern: 8, x: -64, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: 40, y: -80, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: -24, y: -56, zoom: 100, rotation: 0, opacity: 100}, {pattern: 6, x: -24, y: -56, zoom: 100, rotation: 0, opacity: 150}, {pattern: 7, x: -24, y: -56, zoom: 100, rotation: 0, opacity: 100}, {pattern: 8, x: 0, y: 24, zoom: 70, rotation: 0, opacity: 255}, {pattern: 8, x: 64, y: -32, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: -8, y: -96, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: -24, y: -56, zoom: 100, rotation: 0, opacity: 100}],
		[{pattern: 6, x: 32, y: 0, zoom: 80, rotation: 0, opacity: 150}, {pattern: 8, x: -48, y: -16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: 24, y: -56, zoom: 50, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 32, y: 0, zoom: 90, rotation: 0, opacity: 150}, {pattern: 6, x: 32, y: 0, zoom: 80, rotation: 0, opacity: 150}, {pattern: 7, x: 32, y: 0, zoom: 100, rotation: 0, opacity: 150}, {pattern: 8, x: -16, y: -56, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 32, y: 0, zoom: 100, rotation: 0, opacity: 150}, {pattern: 6, x: 32, y: 0, zoom: 90, rotation: 0, opacity: 150}, {pattern: 7, x: 32, y: 0, zoom: 100, rotation: 0, opacity: 200}, {pattern: 7, x: 32, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: 64, y: -16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 32, y: 0, zoom: 100, rotation: 0, opacity: 150}, {pattern: 6, x: 32, y: 0, zoom: 100, rotation: 0, opacity: 150}, {pattern: 7, x: 32, y: 0, zoom: 100, rotation: 0, opacity: 150}, {pattern: 8, x: 8, y: -56, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 32, y: 0, zoom: 100, rotation: 0, opacity: 100}, {pattern: 6, x: 32, y: 0, zoom: 100, rotation: 0, opacity: 150}, {pattern: 7, x: 32, y: 0, zoom: 100, rotation: 0, opacity: 100}, {pattern: 8, x: 48, y: -80, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: -16, y: 48, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 32, y: 0, zoom: 100, rotation: 0, opacity: 100}, {pattern: 8, x: -16, y: -56, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 0, y: -16, zoom: 80, rotation: 0, opacity: 150}, {pattern: 8, x: 40, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: 0, y: 0, zoom: 60, rotation: 0, opacity: 100}],
		[{pattern: 6, x: 0, y: -16, zoom: 90, rotation: 0, opacity: 150}, {pattern: 6, x: 0, y: -16, zoom: 80, rotation: 0, opacity: 150}, {pattern: 7, x: 0, y: -16, zoom: 100, rotation: 0, opacity: 150}, {pattern: 8, x: -32, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: 0, y: -8, zoom: 70, rotation: 0, opacity: 150}],
		[{pattern: 6, x: 0, y: -16, zoom: 100, rotation: 0, opacity: 150}, {pattern: 6, x: 0, y: -16, zoom: 90, rotation: 0, opacity: 150}, {pattern: 7, x: 0, y: -16, zoom: 100, rotation: 0, opacity: 200}, {pattern: 8, x: 24, y: -48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: 0, y: -16, zoom: 80, rotation: 0, opacity: 150}],
		[{pattern: 6, x: 0, y: -16, zoom: 100, rotation: 0, opacity: 150}, {pattern: 6, x: 0, y: -16, zoom: 90, rotation: 0, opacity: 150}, {pattern: 7, x: 0, y: -16, zoom: 100, rotation: 0, opacity: 200}, {pattern: 8, x: -24, y: -56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: 0, y: -24, zoom: 90, rotation: 0, opacity: 200}],
		[{pattern: 6, x: 0, y: -16, zoom: 100, rotation: 0, opacity: 150}, {pattern: 6, x: 0, y: -16, zoom: 100, rotation: 0, opacity: 150}, {pattern: 7, x: 0, y: -16, zoom: 100, rotation: 0, opacity: 150}, {pattern: 8, x: 48, y: 0, zoom: 60, rotation: 0, opacity: 255}, {pattern: 8, x: 16, y: -72, zoom: 90, rotation: 0, opacity: 255}, {pattern: 8, x: -48, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: 0, y: -32, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 6, x: 0, y: -16, zoom: 100, rotation: 0, opacity: 100}, {pattern: 8, x: -24, y: -48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: 0, y: -40, zoom: 110, rotation: 0, opacity: 150}],
		[{pattern: 9, x: 0, y: -48, zoom: 120, rotation: 0, opacity: 100}],
		[]
	]
},
          
/* ----------------------------------------------------------
* Animation #23
* Name : Remedy 1
* Number of frames : 15
* ----------------------------------------------------------- */
'Remedy 1': {
    name: 'Remedy 1',
    graphic: '014-Heal03.png',
    sound: '113-Remedy01.ogg',
    frames: [
		[{pattern: 3, x: 0, y: 0, zoom: 20, rotation: 0, opacity: 50}],
		[{pattern: 3, x: 0, y: 0, zoom: 30, rotation: 0, opacity: 100}, {pattern: 3, x: 24, y: 32, zoom: 20, rotation: 0, opacity: 100}, {pattern: 3, x: -24, y: 32, zoom: 20, rotation: 0, opacity: 150}],
		[{pattern: 3, x: 32, y: -40, zoom: 20, rotation: 0, opacity: 50}, {pattern: 3, x: -40, y: 24, zoom: 20, rotation: 0, opacity: 100}, {pattern: 3, x: 40, y: 40, zoom: 30, rotation: 0, opacity: 100}, {pattern: 3, x: -16, y: -32, zoom: 30, rotation: 0, opacity: 150}],
		[],
		[{pattern: 3, x: -24, y: 8, zoom: 20, rotation: 0, opacity: 100}, {pattern: 3, x: 32, y: -24, zoom: 30, rotation: 0, opacity: 100}, {pattern: 3, x: 24, y: 32, zoom: 20, rotation: 0, opacity: 150}],
		[],
		[],
		[],
		[{pattern: 1, x: 0, y: 0, zoom: 50, rotation: 0, opacity: 50}],
		[{pattern: 1, x: 0, y: 0, zoom: 60, rotation: 0, opacity: 120}],
		[{pattern: 1, x: 0, y: 0, zoom: 80, rotation: 0, opacity: 180}, {pattern: 4, x: 0, y: 0, zoom: 80, rotation: 0, opacity: 80}],
		[{pattern: 1, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 5, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 100}],
		[{pattern: 1, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 180}, {pattern: 5, x: 0, y: 0, zoom: 120, rotation: 0, opacity: 120}],
		[{pattern: 1, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 100}],
		[{pattern: 1, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 50}]
	]
},
          
/* ----------------------------------------------------------
* Animation #24
* Name : Remedy 2
* Number of frames : 20
* ----------------------------------------------------------- */
'Remedy 2': {
    name: 'Remedy 2',
    graphic: '014-Heal03.png',
    sound: '114-Remedy02.ogg',
    frames: [
		[{pattern: 3, x: -8, y: 0, zoom: 20, rotation: 0, opacity: 50}],
		[{pattern: 3, x: -8, y: 0, zoom: 30, rotation: 0, opacity: 100}, {pattern: 3, x: 16, y: 32, zoom: 20, rotation: 0, opacity: 100}, {pattern: 3, x: -32, y: 32, zoom: 20, rotation: 0, opacity: 150}],
		[{pattern: 3, x: 24, y: -40, zoom: 20, rotation: 0, opacity: 50}, {pattern: 3, x: -48, y: 24, zoom: 20, rotation: 0, opacity: 100}, {pattern: 3, x: 32, y: 40, zoom: 30, rotation: 0, opacity: 100}, {pattern: 3, x: -24, y: -32, zoom: 30, rotation: 0, opacity: 150}],
		[],
		[{pattern: 3, x: -32, y: 8, zoom: 20, rotation: 0, opacity: 100}, {pattern: 3, x: 24, y: -24, zoom: 30, rotation: 0, opacity: 100}, {pattern: 3, x: 16, y: 32, zoom: 20, rotation: 0, opacity: 150}],
		[{pattern: 2, x: 0, y: 0, zoom: 40, rotation: 0, opacity: 100}],
		[{pattern: 2, x: 0, y: 0, zoom: 80, rotation: 0, opacity: 150}, {pattern: 1, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 100}],
		[{pattern: 2, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 200}, {pattern: 1, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 2, x: 0, y: 0, zoom: 90, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 0, y: 0, zoom: 110, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 0, y: 0, zoom: 90, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 0, y: 0, zoom: 70, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 0, y: 0, zoom: 110, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 0, y: 0, zoom: 90, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 0, y: 0, zoom: 70, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 0, y: 0, zoom: 70, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 0, y: 0, zoom: 80, rotation: 0, opacity: 150}, {pattern: 1, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 2, x: 0, y: 0, zoom: 90, rotation: 0, opacity: 100}, {pattern: 1, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #25
* Name : Raise 1
* Number of frames : 15
* ----------------------------------------------------------- */
'Raise 1': {
    name: 'Raise 1',
    graphic: '014-Heal03.png',
    sound: '115-Raise01.ogg',
    frames: [
		[{pattern: 6, x: 0, y: 80, zoom: 70, rotation: 0, opacity: 120}],
		[{pattern: 6, x: 0, y: 56, zoom: 70, rotation: 0, opacity: 180}],
		[{pattern: 6, x: 0, y: 24, zoom: 70, rotation: 0, opacity: 220}],
		[{pattern: 6, x: 0, y: 8, zoom: 70, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 0, y: 8, zoom: 70, rotation: 0, opacity: 255}, {pattern: 7, x: 0, y: 8, zoom: 70, rotation: 0, opacity: 100}],
		[{pattern: 6, x: 0, y: 8, zoom: 70, rotation: 0, opacity: 255}, {pattern: 7, x: 0, y: 8, zoom: 70, rotation: 0, opacity: 180}],
		[{pattern: 6, x: 0, y: 8, zoom: 70, rotation: 0, opacity: 255}, {pattern: 7, x: 0, y: 8, zoom: 70, rotation: 0, opacity: 255}, {pattern: 6, x: 0, y: 56, zoom: 70, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 0, y: 8, zoom: 70, rotation: 0, opacity: 255}, {pattern: 6, x: 0, y: 64, zoom: 70, rotation: 0, opacity: 255}, {pattern: 7, x: 0, y: 8, zoom: 70, rotation: 0, opacity: 120}],
		[{pattern: 7, x: 0, y: 8, zoom: 70, rotation: 0, opacity: 100}, {pattern: 6, x: 0, y: 8, zoom: 70, rotation: 0, opacity: 150}, {pattern: 6, x: 0, y: 80, zoom: 70, rotation: 0, opacity: 150}],
		[{pattern: 6, x: 0, y: 8, zoom: 70, rotation: 0, opacity: 80}, {pattern: 7, x: 0, y: 8, zoom: 70, rotation: 0, opacity: 50}, {pattern: 6, x: 0, y: 104, zoom: 70, rotation: 0, opacity: 120}],
		[{pattern: 6, x: 0, y: 120, zoom: 70, rotation: 0, opacity: 80}, {pattern: 6, x: 0, y: 8, zoom: 70, rotation: 0, opacity: 50}],
		[{pattern: 6, x: 0, y: 128, zoom: 80, rotation: 0, opacity: 80}],
		[{pattern: 6, x: 0, y: 136, zoom: 90, rotation: 0, opacity: 70}],
		[{pattern: 6, x: 0, y: 144, zoom: 100, rotation: 0, opacity: 60}],
		[{pattern: 6, x: 0, y: 160, zoom: 120, rotation: 0, opacity: 50}]
	]
},
          
/* ----------------------------------------------------------
* Animation #26
* Name : Raise 2
* Number of frames : 20
* ----------------------------------------------------------- */
'Raise 2': {
    name: 'Raise 2',
    graphic: '014-Heal03.png',
    sound: '116-Raise02.ogg',
    frames: [
		[{pattern: 8, x: 0, y: -32, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: 24, y: 32, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 8, x: 0, y: -16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: 24, y: 56, zoom: 100, rotation: 0, opacity: 120}],
		[{pattern: 8, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 8, x: 0, y: 24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 8, x: 0, y: 40, zoom: 100, rotation: 0, opacity: 200}, {pattern: 6, x: 0, y: 112, zoom: 100, rotation: 0, opacity: 50}],
		[{pattern: 8, x: 0, y: 56, zoom: 100, rotation: 0, opacity: 80}, {pattern: 6, x: 0, y: 112, zoom: 100, rotation: 0, opacity: 80}, {pattern: 6, x: 0, y: 96, zoom: 100, rotation: 0, opacity: 50}],
		[{pattern: 6, x: 0, y: 112, zoom: 100, rotation: 0, opacity: 120}, {pattern: 6, x: 0, y: 56, zoom: 100, rotation: 0, opacity: 50}, {pattern: 6, x: 0, y: 88, zoom: 100, rotation: 0, opacity: 50}],
		[{pattern: 6, x: 0, y: 112, zoom: 100, rotation: 0, opacity: 180}, {pattern: 6, x: 0, y: 64, zoom: 100, rotation: 0, opacity: 50}, {pattern: 6, x: 0, y: 32, zoom: 100, rotation: 0, opacity: 50}, {pattern: 6, x: 0, y: 88, zoom: 100, rotation: 0, opacity: 50}],
		[{pattern: 6, x: 0, y: 112, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 6, x: 0, y: 112, zoom: 100, rotation: 0, opacity: 255}, {pattern: 6, x: 0, y: 96, zoom: 100, rotation: 0, opacity: 50}, {pattern: 6, x: 0, y: 88, zoom: 100, rotation: 0, opacity: 50}, {pattern: 6, x: 0, y: 64, zoom: 100, rotation: 0, opacity: 50}, {pattern: 6, x: 0, y: 40, zoom: 100, rotation: 0, opacity: 50}, {pattern: 6, x: 0, y: 24, zoom: 100, rotation: 0, opacity: 50}, {pattern: 6, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 6, x: 0, y: 112, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 6, x: 0, y: 112, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 7, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 120}, {pattern: 6, x: 0, y: 112, zoom: 100, rotation: 0, opacity: 150}, {pattern: 6, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 150}, {pattern: 7, x: 0, y: 0, zoom: 90, rotation: 180, opacity: 50}],
		[{pattern: 6, x: 0, y: 112, zoom: 100, rotation: 0, opacity: 80}, {pattern: 7, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 180}, {pattern: 6, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 100}],
		[{pattern: 7, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 7, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 180}],
		[{pattern: 7, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 7, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 120}],
		[{pattern: 7, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 100}],
		[{pattern: 7, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 50}]
	]
},
          
/* ----------------------------------------------------------
* Animation #27
* Name : Fire 1
* Number of frames : 12
* ----------------------------------------------------------- */
'Fire 1': {
    name: 'Fire 1',
    graphic: '015-Fire01.png',
    sound: '117-Fire01.ogg',
    frames: [
		[{pattern: 1, x: -8, y: 0, zoom: 50, rotation: 0, opacity: 100}],
		[{pattern: 1, x: -16, y: 0, zoom: 80, rotation: 45, opacity: 180}],
		[{pattern: 1, x: -16, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: -16, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: -16, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: -16, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: -16, y: 0, zoom: 120, rotation: 0, opacity: 180}],
		[],
		[],
		[],
		[],
		[]
	]
},
          
/* ----------------------------------------------------------
* Animation #28
* Name : Fire 2
* Number of frames : 16
* ----------------------------------------------------------- */
'Fire 2': {
    name: 'Fire 2',
    graphic: '015-Fire01.png',
    sound: '118-Fire02.ogg',
    frames: [
		[{pattern: 6, x: 48, y: -32, zoom: 100, rotation: 0, opacity: 255}, {pattern: 5, x: 24, y: 0, zoom: 50, rotation: 0, opacity: 255}],
		[{pattern: 7, x: 32, y: -16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 5, x: 8, y: 16, zoom: 60, rotation: 0, opacity: 255}],
		[{pattern: 8, x: 16, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 5, x: 0, y: 32, zoom: 70, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 8, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 5, x: -16, y: 40, zoom: 80, rotation: 0, opacity: 255}],
		[{pattern: 7, x: 0, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 5, x: -16, y: 40, zoom: 80, rotation: 0, opacity: 200}],
		[{pattern: 8, x: 0, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 5, x: -16, y: 40, zoom: 80, rotation: 0, opacity: 255}],
		[{pattern: 7, x: 0, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 5, x: -16, y: 40, zoom: 80, rotation: 0, opacity: 200}],
		[{pattern: 6, x: 8, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 5, x: -16, y: 40, zoom: 80, rotation: 0, opacity: 255}],
		[{pattern: 7, x: 0, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 5, x: -16, y: 40, zoom: 80, rotation: 0, opacity: 200}],
		[{pattern: 6, x: 8, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 5, x: -16, y: 40, zoom: 80, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 0, y: 16, zoom: 100, rotation: 0, opacity: 180}],
		[{pattern: 7, x: 0, y: 16, zoom: 100, rotation: 0, opacity: 120}],
		[{pattern: 8, x: 0, y: 16, zoom: 100, rotation: 0, opacity: 80}],
		[],
		[],
		[]
	]
},
          
/* ----------------------------------------------------------
* Animation #29
* Name : Fire 3
* Number of frames : 20
* ----------------------------------------------------------- */
'Fire 3': {
    name: 'Fire 3',
    graphic: '015-Fire01.png',
    sound: '119-Fire03.ogg',
    frames: [
		[{pattern: 9, x: -256, y: 88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: -256, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 184, y: 88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 184, y: -104, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: -232, y: 88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: -232, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 168, y: 88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 168, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: -72, y: 88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: -72, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 48, y: -80, zoom: 80, rotation: 0, opacity: 150}],
		[{pattern: 9, x: -208, y: 88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: -208, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 152, y: 88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 152, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: -88, y: 88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: -88, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 48, y: -80, zoom: 90, rotation: 0, opacity: 200}],
		[{pattern: 9, x: -176, y: 88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: -176, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 136, y: 88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 136, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: -120, y: 88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: -120, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 48, y: -80, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: -144, y: 88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: -144, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 112, y: 88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 112, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: -128, y: 88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: -128, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 3, x: 48, y: -80, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: -224, y: 80, zoom: 80, rotation: 0, opacity: 150}, {pattern: 1, x: 200, y: 96, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 9, x: -88, y: 88, zoom: 100, rotation: 0, opacity: 200}, {pattern: 9, x: -88, y: -104, zoom: 100, rotation: 0, opacity: 200}, {pattern: 10, x: 80, y: 88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 80, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: -152, y: 88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: -152, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 4, x: 48, y: -80, zoom: 100, rotation: 0, opacity: 200}, {pattern: 1, x: -224, y: 80, zoom: 90, rotation: 0, opacity: 200}, {pattern: 1, x: 200, y: 96, zoom: 110, rotation: 0, opacity: 200}],
		[{pattern: 9, x: -64, y: 88, zoom: 100, rotation: 0, opacity: 150}, {pattern: 9, x: -64, y: -104, zoom: 100, rotation: 0, opacity: 150}, {pattern: 10, x: 56, y: 88, zoom: 100, rotation: 0, opacity: 200}, {pattern: 10, x: 56, y: -104, zoom: 100, rotation: 0, opacity: 200}, {pattern: 10, x: -168, y: 88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: -168, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: 304, y: 88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: 304, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 4, x: 48, y: -80, zoom: 110, rotation: 0, opacity: 100}, {pattern: 2, x: -224, y: 80, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 200, y: 96, zoom: 120, rotation: 0, opacity: 255}],
		[{pattern: 9, x: -56, y: 88, zoom: 100, rotation: 0, opacity: 100}, {pattern: 9, x: -56, y: -104, zoom: 100, rotation: 0, opacity: 100}, {pattern: 10, x: 16, y: 88, zoom: 100, rotation: 0, opacity: 100}, {pattern: 10, x: 16, y: -104, zoom: 100, rotation: 0, opacity: 100}, {pattern: 10, x: -200, y: 88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: -200, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: 288, y: 88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: 288, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 3, x: -224, y: 80, zoom: 100, rotation: 0, opacity: 255}, {pattern: 3, x: 200, y: 96, zoom: 120, rotation: 0, opacity: 255}],
		[{pattern: 10, x: -216, y: 72, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: -216, y: -120, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: 264, y: 88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: 264, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 4, x: -224, y: 80, zoom: 100, rotation: 0, opacity: 200}, {pattern: 4, x: 200, y: 96, zoom: 120, rotation: 0, opacity: 200}, {pattern: 1, x: 0, y: 0, zoom: 110, rotation: 0, opacity: 150}],
		[{pattern: 10, x: -256, y: 88, zoom: 100, rotation: 0, opacity: 200}, {pattern: 10, x: -256, y: -104, zoom: 100, rotation: 0, opacity: 200}, {pattern: 9, x: 248, y: 88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: 248, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: 8, y: 88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: 8, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 4, x: -232, y: 80, zoom: 110, rotation: 0, opacity: 100}, {pattern: 4, x: 200, y: 96, zoom: 130, rotation: 0, opacity: 100}, {pattern: 1, x: 0, y: 0, zoom: 120, rotation: 0, opacity: 200}],
		[{pattern: 10, x: -272, y: 88, zoom: 100, rotation: 0, opacity: 150}, {pattern: 10, x: -272, y: -104, zoom: 100, rotation: 0, opacity: 150}, {pattern: 9, x: 216, y: 88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: 216, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: 32, y: 88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: 32, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: 0, zoom: 120, rotation: 0, opacity: 255}],
		[{pattern: 10, x: -304, y: 88, zoom: 100, rotation: 0, opacity: 100}, {pattern: 10, x: -304, y: -104, zoom: 100, rotation: 0, opacity: 100}, {pattern: 9, x: 200, y: 88, zoom: 100, rotation: 0, opacity: 200}, {pattern: 9, x: 200, y: -104, zoom: 100, rotation: 0, opacity: 200}, {pattern: 9, x: 56, y: 88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: 56, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 3, x: 0, y: 0, zoom: 120, rotation: 0, opacity: 255}, {pattern: 1, x: -216, y: -112, zoom: 80, rotation: 0, opacity: 150}],
		[{pattern: 9, x: 176, y: 88, zoom: 100, rotation: 0, opacity: 150}, {pattern: 9, x: 176, y: -104, zoom: 100, rotation: 0, opacity: 150}, {pattern: 9, x: 88, y: 88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: 80, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: -32, y: 88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: -32, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 4, x: 0, y: 0, zoom: 120, rotation: 0, opacity: 200}, {pattern: 2, x: -216, y: -112, zoom: 90, rotation: 0, opacity: 200}, {pattern: 1, x: 216, y: -48, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 9, x: 120, y: 88, zoom: 100, rotation: 0, opacity: 100}, {pattern: 9, x: 120, y: -104, zoom: 100, rotation: 0, opacity: 100}, {pattern: 9, x: 88, y: 88, zoom: 100, rotation: 0, opacity: 200}, {pattern: 9, x: 88, y: -104, zoom: 100, rotation: 0, opacity: 200}, {pattern: 10, x: -40, y: 88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: -40, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 4, x: -8, y: 0, zoom: 130, rotation: 0, opacity: 100}, {pattern: 2, x: -216, y: -112, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 216, y: -48, zoom: 110, rotation: 0, opacity: 200}],
		[{pattern: 9, x: 152, y: 88, zoom: 100, rotation: 0, opacity: 150}, {pattern: 9, x: 152, y: -104, zoom: 100, rotation: 0, opacity: 150}, {pattern: 10, x: -72, y: 88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: -72, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 3, x: -216, y: -112, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 216, y: -48, zoom: 110, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 160, y: 88, zoom: 100, rotation: 0, opacity: 100}, {pattern: 9, x: 160, y: -104, zoom: 100, rotation: 0, opacity: 100}, {pattern: 10, x: -80, y: 88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: -80, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 4, x: -216, y: -112, zoom: 100, rotation: 0, opacity: 200}, {pattern: 3, x: 216, y: -48, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 10, x: -112, y: 88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: -112, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 4, x: -216, y: -112, zoom: 110, rotation: 0, opacity: 100}, {pattern: 4, x: 216, y: -48, zoom: 110, rotation: 0, opacity: 200}],
		[{pattern: 10, x: -128, y: 88, zoom: 100, rotation: 0, opacity: 200}, {pattern: 10, x: -128, y: -104, zoom: 100, rotation: 0, opacity: 200}, {pattern: 4, x: 216, y: -48, zoom: 120, rotation: 0, opacity: 100}],
		[{pattern: 10, x: -160, y: 88, zoom: 100, rotation: 0, opacity: 150}, {pattern: 10, x: -160, y: -104, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 10, x: -176, y: 88, zoom: 100, rotation: 0, opacity: 100}, {pattern: 10, x: -176, y: -104, zoom: 100, rotation: 0, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #30
* Name : Ice 1
* Number of frames : 12
* ----------------------------------------------------------- */
'Ice 1': {
    name: 'Ice 1',
    graphic: '016-Ice01.png',
    sound: '120-Ice01.ogg',
    frames: [
		[{pattern: 1, x: -104, y: -96, zoom: 80, rotation: 0, opacity: 100}],
		[{pattern: 1, x: -80, y: -72, zoom: 90, rotation: 0, opacity: 200}],
		[{pattern: 1, x: -32, y: -24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 1, x: -8, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 104, y: -144, zoom: 50, rotation: 130, opacity: 255}],
		[{pattern: 1, x: 8, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 72, y: -96, zoom: 80, rotation: 130, opacity: 255}],
		[{pattern: 1, x: 8, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 48, y: -48, zoom: 100, rotation: 130, opacity: 255}],
		[{pattern: 1, x: 8, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 8, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 8, y: -16, zoom: 100, rotation: 130, opacity: 255}],
		[{pattern: 2, x: 8, y: 16, zoom: 100, rotation: 0, opacity: 150}, {pattern: 1, x: -24, y: 24, zoom: 100, rotation: 130, opacity: 255}],
		[{pattern: 2, x: 8, y: 16, zoom: 100, rotation: 0, opacity: 100}, {pattern: 1, x: -24, y: 24, zoom: 100, rotation: 130, opacity: 255}],
		[{pattern: 1, x: -24, y: 24, zoom: 100, rotation: 130, opacity: 255}, {pattern: 2, x: -24, y: 24, zoom: 100, rotation: 130, opacity: 255}],
		[{pattern: 2, x: -24, y: 24, zoom: 100, rotation: 130, opacity: 150}],
		[{pattern: 2, x: -24, y: 24, zoom: 100, rotation: 130, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #31
* Name : Ice 2
* Number of frames : 20
* ----------------------------------------------------------- */
'Ice 2': {
    name: 'Ice 2',
    graphic: '016-Ice01.png',
    sound: '121-Ice02.ogg',
    frames: [
		[{pattern: 7, x: -56, y: -80, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: 104, y: 88, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 7, x: -32, y: -64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: 88, y: 64, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 7, x: -16, y: -48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: 72, y: 48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: -64, y: 80, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 8, x: 56, y: 32, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: -40, y: 64, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 8, x: 40, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: -24, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: 184, y: -152, zoom: 100, rotation: 0, opacity: 100}],
		[{pattern: 8, x: 24, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: -8, y: 40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: 168, y: -136, zoom: 100, rotation: 0, opacity: 150}, {pattern: 15, x: 0, y: 16, zoom: 50, rotation: 0, opacity: 100}],
		[{pattern: 14, x: 144, y: -120, zoom: 100, rotation: 0, opacity: 255}, {pattern: 15, x: 0, y: 8, zoom: 80, rotation: 0, opacity: 150}],
		[{pattern: 14, x: 120, y: -96, zoom: 100, rotation: 0, opacity: 255}, {pattern: 15, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 14, x: 96, y: -72, zoom: 100, rotation: 0, opacity: 255}, {pattern: 15, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 14, x: 72, y: -48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 15, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 14, x: 48, y: -24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 15, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 14, x: 24, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 15, x: 0, y: 8, zoom: 110, rotation: 0, opacity: 255}, {pattern: 10, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 11, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 15, x: 0, y: 8, zoom: 120, rotation: 0, opacity: 255}, {pattern: 11, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 15, x: 0, y: 8, zoom: 130, rotation: 0, opacity: 255}, {pattern: 11, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 150}, {pattern: 12, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 15, x: 0, y: 8, zoom: 150, rotation: 0, opacity: 150}, {pattern: 11, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 100}, {pattern: 12, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 15, x: 0, y: 8, zoom: 150, rotation: 0, opacity: 100}, {pattern: 12, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 12, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 12, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 100}, {pattern: 13, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 13, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 13, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #32
* Name : Ice 3
* Number of frames : 20
* ----------------------------------------------------------- */
'Ice 3': {
    name: 'Ice 3',
    graphic: '016-Ice01.png',
    sound: '122-Ice03.ogg',
    frames: [
		[{pattern: 16, x: 64, y: 64, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 17, x: 56, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 25, x: -16, y: 64, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 18, x: 48, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 24, x: -8, y: 64, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 19, x: 40, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 23, x: 0, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 25, x: -176, y: 64, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 19, x: 40, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 22, x: 8, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 24, x: -184, y: 64, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 19, x: 40, y: 64, zoom: 100, rotation: 0, opacity: 150}, {pattern: 21, x: 16, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 23, x: -192, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 16, x: -232, y: 64, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 21, x: 16, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 19, x: 40, y: 64, zoom: 100, rotation: 0, opacity: 100}, {pattern: 22, x: -200, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 17, x: -224, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: -152, y: 96, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: -144, y: 104, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 21, x: 16, y: 64, zoom: 100, rotation: 0, opacity: 150}, {pattern: 21, x: -208, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 18, x: -216, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 16, x: 192, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: -152, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: -144, y: 80, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 21, x: 16, y: 64, zoom: 100, rotation: 0, opacity: 100}, {pattern: 21, x: -208, y: 64, zoom: 100, rotation: 0, opacity: 150}, {pattern: 19, x: -208, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 17, x: 200, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 25, x: 264, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: -152, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: -144, y: 48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 15, x: -16, y: 128, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 21, x: -208, y: 64, zoom: 100, rotation: 0, opacity: 100}, {pattern: 19, x: -208, y: 64, zoom: 100, rotation: 0, opacity: 150}, {pattern: 18, x: 208, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 24, x: 256, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: -152, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: -144, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: -160, y: 40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 15, x: -16, y: 72, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: 8, y: 128, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 19, x: -208, y: 64, zoom: 100, rotation: 0, opacity: 100}, {pattern: 19, x: 216, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 23, x: 248, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 25, x: -56, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: -152, y: -56, zoom: 100, rotation: 0, opacity: 200}, {pattern: 8, x: -144, y: -40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: -160, y: -24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 15, x: -16, y: 32, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: 8, y: 96, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: -280, y: 144, zoom: 130, rotation: 0, opacity: 255}],
		[{pattern: 19, x: 216, y: 64, zoom: 100, rotation: 0, opacity: 150}, {pattern: 22, x: 240, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 24, x: -64, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: -152, y: -96, zoom: 100, rotation: 0, opacity: 150}, {pattern: 8, x: -144, y: -88, zoom: 100, rotation: 0, opacity: 150}, {pattern: 9, x: -160, y: -72, zoom: 100, rotation: 0, opacity: 255}, {pattern: 15, x: -16, y: -16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: 8, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: -288, y: 72, zoom: 120, rotation: 0, opacity: 255}],
		[{pattern: 19, x: 216, y: 64, zoom: 100, rotation: 0, opacity: 100}, {pattern: 21, x: 232, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 23, x: -72, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 16, x: -112, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: -152, y: -160, zoom: 100, rotation: 0, opacity: 100}, {pattern: 8, x: -144, y: -152, zoom: 100, rotation: 0, opacity: 100}, {pattern: 15, x: -16, y: -56, zoom: 100, rotation: 0, opacity: 200}, {pattern: 14, x: 8, y: 40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: 168, y: 120, zoom: 130, rotation: 0, opacity: 255}, {pattern: 8, x: -288, y: 32, zoom: 110, rotation: 0, opacity: 255}],
		[{pattern: 21, x: 232, y: 64, zoom: 100, rotation: 0, opacity: 150}, {pattern: 22, x: -80, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 17, x: -104, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 15, x: -16, y: -96, zoom: 100, rotation: 0, opacity: 150}, {pattern: 14, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: 168, y: 64, zoom: 130, rotation: 0, opacity: 255}, {pattern: 8, x: 152, y: 128, zoom: 150, rotation: 0, opacity: 255}, {pattern: 8, x: -288, y: -8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 21, x: 232, y: 64, zoom: 100, rotation: 0, opacity: 100}, {pattern: 21, x: -88, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 18, x: -96, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 15, x: -16, y: -152, zoom: 100, rotation: 0, opacity: 100}, {pattern: 14, x: 8, y: -32, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: 168, y: 8, zoom: 130, rotation: 0, opacity: 255}, {pattern: 8, x: 152, y: 88, zoom: 150, rotation: 0, opacity: 255}, {pattern: 8, x: -288, y: -64, zoom: 90, rotation: 0, opacity: 255}, {pattern: 15, x: 280, y: 144, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 21, x: -88, y: 64, zoom: 100, rotation: 0, opacity: 150}, {pattern: 19, x: -88, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: 8, y: -72, zoom: 100, rotation: 0, opacity: 200}, {pattern: 14, x: 168, y: -40, zoom: 130, rotation: 0, opacity: 200}, {pattern: 8, x: 152, y: 48, zoom: 150, rotation: 0, opacity: 255}, {pattern: 8, x: -288, y: -104, zoom: 90, rotation: 0, opacity: 150}, {pattern: 15, x: 280, y: 96, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 21, x: -88, y: 64, zoom: 100, rotation: 0, opacity: 100}, {pattern: 19, x: -88, y: 64, zoom: 100, rotation: 0, opacity: 150}, {pattern: 14, x: 8, y: -96, zoom: 100, rotation: 0, opacity: 150}, {pattern: 14, x: 168, y: -80, zoom: 130, rotation: 0, opacity: 255}, {pattern: 8, x: 152, y: 0, zoom: 150, rotation: 0, opacity: 255}, {pattern: 8, x: -288, y: -160, zoom: 90, rotation: 0, opacity: 100}, {pattern: 15, x: 280, y: 56, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 19, x: -88, y: 64, zoom: 100, rotation: 0, opacity: 100}, {pattern: 14, x: 8, y: -120, zoom: 100, rotation: 0, opacity: 100}, {pattern: 14, x: 168, y: -128, zoom: 130, rotation: 0, opacity: 150}, {pattern: 8, x: 152, y: -40, zoom: 150, rotation: 0, opacity: 255}, {pattern: 15, x: 280, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 14, x: 168, y: -160, zoom: 130, rotation: 0, opacity: 100}, {pattern: 8, x: 152, y: -72, zoom: 150, rotation: 0, opacity: 150}, {pattern: 15, x: 280, y: -56, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 8, x: 152, y: -136, zoom: 150, rotation: 0, opacity: 100}, {pattern: 15, x: 280, y: -96, zoom: 100, rotation: 0, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #33
* Name : Thunder 1
* Number of frames : 12
* ----------------------------------------------------------- */
'Thunder 1': {
    name: 'Thunder 1',
    graphic: '017-Thunder01.png',
    sound: '123-Thunder01.ogg',
    frames: [
		[{pattern: 1, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 100}],
		[{pattern: 1, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 2, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 1, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 100}],
		[{pattern: 1, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[],
		[],
		[],
		[]
	]
},
          
/* ----------------------------------------------------------
* Animation #34
* Name : Thunder 2
* Number of frames : 16
* ----------------------------------------------------------- */
'Thunder 2': {
    name: 'Thunder 2',
    graphic: '017-Thunder01.png',
    sound: '124-Thunder02.ogg',
    frames: [
		[{pattern: 3, x: 0, y: -56, zoom: 50, rotation: 0, opacity: 150}],
		[{pattern: 3, x: 0, y: -40, zoom: 70, rotation: 0, opacity: 200}],
		[{pattern: 3, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 4, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 160}],
		[{pattern: 3, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 1, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 2, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 2, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 1, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 100}],
		[]
	]
},
          
/* ----------------------------------------------------------
* Animation #35
* Name : Thunder 3
* Number of frames : 20
* ----------------------------------------------------------- */
'Thunder 3': {
    name: 'Thunder 3',
    graphic: '017-Thunder01.png',
    sound: '125-Thunder03.ogg',
    frames: [
		[{pattern: 3, x: 0, y: -112, zoom: 50, rotation: 0, opacity: 100}],
		[{pattern: 3, x: 0, y: -72, zoom: 90, rotation: 0, opacity: 150}],
		[{pattern: 4, x: -8, y: -16, zoom: 150, rotation: 0, opacity: 255}, {pattern: 4, x: 104, y: -104, zoom: 60, rotation: 0, opacity: 100}, {pattern: 2, x: 0, y: -16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: -8, y: 16, zoom: 180, rotation: 0, opacity: 255}, {pattern: 3, x: 104, y: -72, zoom: 90, rotation: 0, opacity: 150}, {pattern: 1, x: 0, y: 24, zoom: 150, rotation: 0, opacity: 255}],
		[{pattern: 6, x: -8, y: 16, zoom: 180, rotation: 0, opacity: 60}, {pattern: 5, x: 96, y: -16, zoom: 150, rotation: 0, opacity: 255}],
		[{pattern: 6, x: -8, y: 16, zoom: 180, rotation: 0, opacity: 255}, {pattern: 6, x: 96, y: -16, zoom: 150, rotation: 0, opacity: 150}, {pattern: 3, x: -248, y: -80, zoom: 80, rotation: 0, opacity: 100}, {pattern: 4, x: 256, y: -64, zoom: 100, rotation: 0, opacity: 100}],
		[{pattern: 5, x: -8, y: 16, zoom: 180, rotation: 0, opacity: 150}, {pattern: 4, x: 96, y: -16, zoom: 150, rotation: 0, opacity: 255}, {pattern: 2, x: -8, y: 8, zoom: 150, rotation: 0, opacity: 120}, {pattern: 3, x: -248, y: -64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 3, x: 256, y: -24, zoom: 140, rotation: 0, opacity: 150}],
		[{pattern: 5, x: -8, y: 16, zoom: 180, rotation: 0, opacity: 100}, {pattern: 3, x: 96, y: -16, zoom: 150, rotation: 0, opacity: 255}, {pattern: 2, x: -8, y: 8, zoom: 150, rotation: 0, opacity: 150}, {pattern: 4, x: -248, y: -16, zoom: 150, rotation: 0, opacity: 255}, {pattern: 5, x: 256, y: 16, zoom: 180, rotation: 0, opacity: 255}, {pattern: 1, x: 264, y: 16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: -8, y: 16, zoom: 180, rotation: 0, opacity: 255}, {pattern: 4, x: -8, y: 16, zoom: 180, rotation: 0, opacity: 255}, {pattern: 6, x: 96, y: -16, zoom: 150, rotation: 0, opacity: 150}, {pattern: 1, x: 8, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 6, x: -264, y: 16, zoom: 180, rotation: 0, opacity: 255}, {pattern: 1, x: -256, y: 16, zoom: 150, rotation: 0, opacity: 255}, {pattern: 5, x: 256, y: 16, zoom: 180, rotation: 0, opacity: 100}, {pattern: 1, x: 264, y: 16, zoom: 150, rotation: 0, opacity: 255}],
		[{pattern: 5, x: -8, y: 16, zoom: 180, rotation: 0, opacity: 255}, {pattern: 6, x: 96, y: -16, zoom: 150, rotation: 0, opacity: 255}, {pattern: 6, x: -264, y: 16, zoom: 180, rotation: 0, opacity: 100}, {pattern: 2, x: -256, y: 16, zoom: 150, rotation: 0, opacity: 255}, {pattern: 3, x: -136, y: -112, zoom: 50, rotation: 0, opacity: 100}, {pattern: 4, x: 256, y: 16, zoom: 180, rotation: 0, opacity: 255}, {pattern: 1, x: 264, y: 16, zoom: 150, rotation: 0, opacity: 150}],
		[{pattern: 5, x: -8, y: 16, zoom: 180, rotation: 0, opacity: 150}, {pattern: 5, x: 96, y: -16, zoom: 150, rotation: 0, opacity: 255}, {pattern: 1, x: -8, y: 16, zoom: 150, rotation: 0, opacity: 255}, {pattern: 5, x: -264, y: 16, zoom: 180, rotation: 0, opacity: 180}, {pattern: 2, x: -256, y: 16, zoom: 150, rotation: 0, opacity: 150}, {pattern: 3, x: -136, y: -72, zoom: 90, rotation: 0, opacity: 150}, {pattern: 4, x: 256, y: 16, zoom: 180, rotation: 0, opacity: 100}, {pattern: 2, x: 272, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: -8, y: 16, zoom: 180, rotation: 0, opacity: 100}, {pattern: 4, x: 96, y: -16, zoom: 150, rotation: 0, opacity: 150}, {pattern: 1, x: -8, y: 16, zoom: 150, rotation: 0, opacity: 150}, {pattern: 4, x: -264, y: 16, zoom: 180, rotation: 0, opacity: 255}, {pattern: 4, x: -144, y: -8, zoom: 160, rotation: 0, opacity: 255}, {pattern: 5, x: 256, y: 16, zoom: 180, rotation: 0, opacity: 255}, {pattern: 2, x: 256, y: 8, zoom: 150, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 96, y: -16, zoom: 150, rotation: 0, opacity: 100}, {pattern: 3, x: -264, y: 16, zoom: 180, rotation: 0, opacity: 255}, {pattern: 1, x: -256, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 5, x: -144, y: -8, zoom: 160, rotation: 0, opacity: 255}, {pattern: 6, x: 256, y: 16, zoom: 180, rotation: 0, opacity: 255}, {pattern: 1, x: 256, y: 8, zoom: 150, rotation: 0, opacity: 255}],
		[{pattern: 5, x: -264, y: 16, zoom: 180, rotation: 0, opacity: 150}, {pattern: 1, x: -248, y: 16, zoom: 150, rotation: 0, opacity: 190}, {pattern: 6, x: -144, y: -8, zoom: 160, rotation: 0, opacity: 255}, {pattern: 6, x: 256, y: 16, zoom: 180, rotation: 0, opacity: 150}, {pattern: 2, x: 256, y: 8, zoom: 150, rotation: 0, opacity: 100}],
		[{pattern: 6, x: -264, y: 16, zoom: 180, rotation: 0, opacity: 255}, {pattern: 2, x: -248, y: 16, zoom: 150, rotation: 0, opacity: 255}, {pattern: 4, x: -144, y: -8, zoom: 160, rotation: 0, opacity: 160}, {pattern: 3, x: 256, y: 16, zoom: 180, rotation: 0, opacity: 255}],
		[{pattern: 4, x: -264, y: 16, zoom: 180, rotation: 0, opacity: 255}, {pattern: 2, x: -248, y: 16, zoom: 150, rotation: 0, opacity: 160}, {pattern: 4, x: -144, y: -8, zoom: 160, rotation: 0, opacity: 255}, {pattern: 3, x: 256, y: 16, zoom: 180, rotation: 0, opacity: 100}, {pattern: 2, x: 256, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: -264, y: 16, zoom: 180, rotation: 0, opacity: 200}, {pattern: 1, x: -248, y: 16, zoom: 150, rotation: 0, opacity: 100}, {pattern: 5, x: -144, y: -8, zoom: 160, rotation: 0, opacity: 255}, {pattern: 4, x: 256, y: 16, zoom: 180, rotation: 0, opacity: 255}, {pattern: 1, x: 272, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: -264, y: 16, zoom: 180, rotation: 0, opacity: 100}, {pattern: 5, x: -144, y: -8, zoom: 160, rotation: 0, opacity: 150}, {pattern: 6, x: 256, y: 16, zoom: 180, rotation: 0, opacity: 255}],
		[{pattern: 3, x: -144, y: -8, zoom: 160, rotation: 0, opacity: 255}, {pattern: 6, x: 256, y: 16, zoom: 180, rotation: 0, opacity: 150}],
		[{pattern: 4, x: -144, y: -8, zoom: 160, rotation: 0, opacity: 150}, {pattern: 5, x: 256, y: 16, zoom: 180, rotation: 0, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #36
* Name : Water 1
* Number of frames : 12
* ----------------------------------------------------------- */
'Water 1': {
    name: 'Water 1',
    graphic: '018-Water01.png',
    sound: '126-Water01.ogg',
    frames: [
		[{pattern: 1, x: -56, y: -64, zoom: 100, rotation: 0, opacity: 110}],
		[{pattern: 1, x: -40, y: -48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: -56, y: 80, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 1, x: 64, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: -32, y: 40, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 1, x: -24, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 4, x: 40, y: 24, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 0, x: 48, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 4, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 0, x: 32, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 3, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 2, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 2, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 3, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 150}]
	]
},
          
/* ----------------------------------------------------------
* Animation #37
* Name : Water 2
* Number of frames : 16
* ----------------------------------------------------------- */
'Water 2': {
    name: 'Water 2',
    graphic: '018-Water01.png',
    sound: '127-Water02.ogg',
    frames: [
		[{pattern: 10, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 100}],
		[{pattern: 10, x: 0, y: -8, zoom: 80, rotation: 0, opacity: 150}],
		[{pattern: 10, x: 0, y: -8, zoom: 60, rotation: 0, opacity: 200}],
		[{pattern: 10, x: 0, y: -8, zoom: 40, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: -8, zoom: 150, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 0, y: -8, zoom: 50, rotation: 0, opacity: 150}],
		[{pattern: 8, x: 0, y: -8, zoom: 70, rotation: 0, opacity: 200}],
		[{pattern: 9, x: 0, y: -8, zoom: 90, rotation: 0, opacity: 255}],
		[{pattern: 8, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 8, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 9, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 8, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 100}, {pattern: 7, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 7, x: 0, y: -8, zoom: 100, rotation: 60, opacity: 150}],
		[{pattern: 7, x: 0, y: -8, zoom: 100, rotation: 90, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #38
* Name : Water 3
* Number of frames : 20
* ----------------------------------------------------------- */
'Water 3': {
    name: 'Water 3',
    graphic: '018-Water01.png',
    sound: '128-Water03.ogg',
    frames: [
		[{pattern: 11, x: 0, y: -136, zoom: 100, rotation: 0, opacity: 100}, {pattern: 14, x: -104, y: -48, zoom: 100, rotation: 0, opacity: 150}, {pattern: 13, x: 8, y: -16, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 11, x: 0, y: -136, zoom: 100, rotation: 0, opacity: 150}, {pattern: 14, x: -80, y: -72, zoom: 100, rotation: 0, opacity: 200}, {pattern: 1, x: 80, y: -8, zoom: 50, rotation: 0, opacity: 150}, {pattern: 13, x: 0, y: -48, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 11, x: 0, y: -136, zoom: 100, rotation: 0, opacity: 200}, {pattern: 14, x: -56, y: -96, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 40, y: -48, zoom: 50, rotation: 0, opacity: 200}, {pattern: 13, x: -8, y: -80, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 11, x: 0, y: -136, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: -32, y: -120, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 8, y: -88, zoom: 50, rotation: 0, opacity: 255}, {pattern: 13, x: -16, y: -112, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 11, x: 0, y: -136, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: -104, zoom: 50, rotation: 0, opacity: 255}],
		[{pattern: 11, x: 0, y: -136, zoom: 120, rotation: 0, opacity: 255}],
		[{pattern: 11, x: 0, y: -136, zoom: 140, rotation: 0, opacity: 255}],
		[{pattern: 11, x: 0, y: -136, zoom: 160, rotation: 0, opacity: 255}, {pattern: 13, x: -88, y: -120, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 11, x: 0, y: -136, zoom: 180, rotation: 0, opacity: 255}, {pattern: 13, x: -120, y: -112, zoom: 100, rotation: 0, opacity: 255}, {pattern: 11, x: 96, y: -144, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 11, x: 0, y: -136, zoom: 200, rotation: 0, opacity: 255}, {pattern: 13, x: -168, y: -96, zoom: 100, rotation: 0, opacity: 255}, {pattern: 11, x: 120, y: -112, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: -48, y: -80, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 11, x: 0, y: -136, zoom: 200, rotation: 0, opacity: 255}, {pattern: 13, x: -208, y: -72, zoom: 100, rotation: 0, opacity: 255}, {pattern: 11, x: 160, y: -88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: -80, y: -48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 208, y: 160, zoom: 70, rotation: 0, opacity: 255}],
		[{pattern: 11, x: 0, y: -136, zoom: 200, rotation: 0, opacity: 200}, {pattern: 13, x: -248, y: -48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 11, x: 200, y: -56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: -112, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 208, y: 96, zoom: 70, rotation: 0, opacity: 255}, {pattern: 1, x: -40, y: 160, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: -208, y: 128, zoom: 100, rotation: 0, opacity: 255}, {pattern: 11, x: 96, y: 120, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 11, x: 0, y: -136, zoom: 200, rotation: 0, opacity: 150}, {pattern: 11, x: 240, y: -24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: -152, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 12, x: -272, y: 144, zoom: 50, rotation: 0, opacity: 255}, {pattern: 10, x: 208, y: 48, zoom: 70, rotation: 0, opacity: 255}, {pattern: 1, x: -40, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: -208, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 11, x: 96, y: 88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 12, x: 312, y: 152, zoom: 70, rotation: 0, opacity: 255}, {pattern: 11, x: -152, y: 160, zoom: 100, rotation: 0, opacity: 255}, {pattern: 13, x: -64, y: 160, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: -208, y: 160, zoom: 70, rotation: 0, opacity: 255}],
		[{pattern: 11, x: 0, y: -136, zoom: 200, rotation: 0, opacity: 100}, {pattern: 11, x: 264, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: -192, y: 32, zoom: 100, rotation: 0, opacity: 255}, {pattern: 12, x: -272, y: 72, zoom: 50, rotation: 0, opacity: 255}, {pattern: 10, x: 208, y: 0, zoom: 70, rotation: 0, opacity: 225}, {pattern: 1, x: -40, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: -208, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 11, x: 96, y: 40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 12, x: 312, y: 96, zoom: 70, rotation: 0, opacity: 255}, {pattern: 11, x: -152, y: 96, zoom: 100, rotation: 0, opacity: 255}, {pattern: 13, x: -48, y: 80, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: -208, y: 120, zoom: 70, rotation: 0, opacity: 255}],
		[{pattern: 14, x: -224, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 12, x: -272, y: 8, zoom: 50, rotation: 0, opacity: 255}, {pattern: 10, x: 208, y: -32, zoom: 70, rotation: 0, opacity: 225}, {pattern: 1, x: -40, y: -88, zoom: 100, rotation: 0, opacity: 150}, {pattern: 14, x: -208, y: -24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 11, x: 96, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 12, x: 312, y: 48, zoom: 70, rotation: 0, opacity: 255}, {pattern: 11, x: -152, y: 48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 13, x: -64, y: 48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: -208, y: 80, zoom: 70, rotation: 0, opacity: 255}],
		[{pattern: 12, x: -272, y: -48, zoom: 50, rotation: 0, opacity: 150}, {pattern: 1, x: -40, y: -144, zoom: 100, rotation: 0, opacity: 100}, {pattern: 14, x: -208, y: -64, zoom: 100, rotation: 0, opacity: 150}, {pattern: 11, x: 96, y: -32, zoom: 100, rotation: 0, opacity: 255}, {pattern: 12, x: 312, y: 0, zoom: 70, rotation: 0, opacity: 255}, {pattern: 11, x: -152, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 208, y: -64, zoom: 70, rotation: 0, opacity: 255}, {pattern: 13, x: -64, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: -208, y: 48, zoom: 70, rotation: 0, opacity: 255}],
		[{pattern: 12, x: -272, y: -88, zoom: 50, rotation: 0, opacity: 100}, {pattern: 14, x: -208, y: -136, zoom: 100, rotation: 0, opacity: 100}, {pattern: 11, x: 96, y: -88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 12, x: 312, y: -32, zoom: 70, rotation: 0, opacity: 255}, {pattern: 11, x: -152, y: -40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 208, y: -104, zoom: 70, rotation: 0, opacity: 150}, {pattern: 13, x: -64, y: -56, zoom: 100, rotation: 0, opacity: 150}, {pattern: 1, x: -208, y: 16, zoom: 70, rotation: 0, opacity: 255}],
		[{pattern: 12, x: 312, y: -72, zoom: 70, rotation: 0, opacity: 255}, {pattern: 11, x: 96, y: -128, zoom: 100, rotation: 0, opacity: 150}, {pattern: 11, x: -144, y: -72, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 208, y: -136, zoom: 70, rotation: 0, opacity: 100}, {pattern: 13, x: -64, y: -96, zoom: 100, rotation: 0, opacity: 100}, {pattern: 1, x: -208, y: -16, zoom: 70, rotation: 0, opacity: 200}],
		[{pattern: 11, x: 96, y: -160, zoom: 100, rotation: 0, opacity: 100}, {pattern: 12, x: 312, y: -104, zoom: 70, rotation: 0, opacity: 150}, {pattern: 11, x: -144, y: -104, zoom: 100, rotation: 0, opacity: 150}, {pattern: 1, x: -208, y: -64, zoom: 70, rotation: 0, opacity: 150}],
		[{pattern: 12, x: 312, y: -152, zoom: 70, rotation: 0, opacity: 100}, {pattern: 11, x: -144, y: -152, zoom: 100, rotation: 0, opacity: 100}, {pattern: 1, x: -208, y: -104, zoom: 70, rotation: 0, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #39
* Name : Earth 1
* Number of frames : 14
* ----------------------------------------------------------- */
'Earth 1': {
    name: 'Earth 1',
    graphic: '019-Earth01.png',
    sound: '129-Earth01.ogg',
    frames: [
		[{pattern: 1, x: -32, y: 72, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 1, x: -32, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: 96, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 1, x: -32, y: 32, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: 48, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 1, x: -32, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: 8, y: 16, zoom: 60, rotation: 0, opacity: 100}],
		[{pattern: 1, x: -32, y: -32, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: -24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 48, y: 96, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: 8, y: 16, zoom: 90, rotation: 0, opacity: 200}],
		[{pattern: 1, x: -32, y: -72, zoom: 100, rotation: 0, opacity: 150}, {pattern: 2, x: 0, y: -56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 48, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: 8, y: 16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 1, x: -32, y: -112, zoom: 100, rotation: 0, opacity: 100}, {pattern: 2, x: 0, y: -128, zoom: 100, rotation: 0, opacity: 150}, {pattern: 1, x: 48, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 3, x: 8, y: 128, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: 0, y: 8, zoom: 60, rotation: 0, opacity: 100}, {pattern: 8, x: 8, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: -40, y: -56, zoom: 60, rotation: 0, opacity: 100}],
		[{pattern: 2, x: 0, y: -160, zoom: 100, rotation: 0, opacity: 100}, {pattern: 1, x: 48, y: -48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 3, x: 8, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: 8, y: 16, zoom: 100, rotation: 0, opacity: 200}, {pattern: 8, x: -40, y: -56, zoom: 90, rotation: 0, opacity: 200}],
		[{pattern: 1, x: 48, y: -96, zoom: 100, rotation: 0, opacity: 150}, {pattern: 3, x: 8, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: -32, y: 112, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 8, y: 160, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: 8, y: 16, zoom: 100, rotation: 0, opacity: 150}, {pattern: 8, x: -40, y: -56, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 48, y: -160, zoom: 100, rotation: 0, opacity: 100}, {pattern: 3, x: 8, y: -24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: -32, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 8, y: 96, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: -40, y: -56, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 8, y: -64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: -32, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 8, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: -40, y: -56, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 3, x: 8, y: -112, zoom: 100, rotation: 0, opacity: 150}, {pattern: 2, x: -32, y: -40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 8, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: -40, y: -56, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 3, x: 8, y: -160, zoom: 100, rotation: 0, opacity: 100}, {pattern: 2, x: -32, y: -88, zoom: 100, rotation: 0, opacity: 200}, {pattern: 1, x: 8, y: -72, zoom: 100, rotation: 0, opacity: 150}, {pattern: 8, x: -40, y: -56, zoom: 100, rotation: 0, opacity: 100}],
		[{pattern: 2, x: -32, y: -144, zoom: 100, rotation: 0, opacity: 150}, {pattern: 1, x: 8, y: -120, zoom: 100, rotation: 0, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #40
* Name : Earth 2
* Number of frames : 17
* ----------------------------------------------------------- */
'Earth 2': {
    name: 'Earth 2',
    graphic: '019-Earth01.png',
    sound: '130-Earth02.ogg',
    frames: [
		[{pattern: 4, x: 0, y: -64, zoom: 100, rotation: 0, opacity: 150}, {pattern: 1, x: -48, y: 40, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: -56, zoom: 100, rotation: 0, opacity: 200}, {pattern: 1, x: -48, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: -72, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: -48, y: -32, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 24, y: 40, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: 0, y: -80, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: -48, y: -72, zoom: 100, rotation: 0, opacity: 150}, {pattern: 2, x: 24, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: 0, y: -64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: -48, y: -128, zoom: 100, rotation: 0, opacity: 100}, {pattern: 2, x: 24, y: -56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 3, x: -32, y: 40, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 0, y: -72, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 24, y: -96, zoom: 100, rotation: 0, opacity: 255}, {pattern: 3, x: -32, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 72, y: 48, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 0, y: -64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 24, y: -128, zoom: 100, rotation: 0, opacity: 150}, {pattern: 3, x: -32, y: -40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 72, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 0, y: -80, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 24, y: -160, zoom: 100, rotation: 0, opacity: 100}, {pattern: 3, x: -32, y: -88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 72, y: -40, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 7, x: 0, y: -64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 3, x: -32, y: -136, zoom: 100, rotation: 0, opacity: 150}, {pattern: 1, x: 72, y: -96, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 56, y: 56, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 7, x: 0, y: -72, zoom: 100, rotation: 0, opacity: 255}, {pattern: 3, x: -32, y: -160, zoom: 100, rotation: 0, opacity: 100}, {pattern: 1, x: 72, y: -144, zoom: 100, rotation: 0, opacity: 150}, {pattern: 2, x: 56, y: 24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 7, x: 0, y: -56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 72, y: -160, zoom: 100, rotation: 0, opacity: 100}, {pattern: 2, x: 56, y: -16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 7, x: 0, y: -64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 56, y: -64, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 7, x: 0, y: -56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 56, y: -112, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 7, x: 0, y: -64, zoom: 100, rotation: 0, opacity: 250}, {pattern: 2, x: 56, y: -160, zoom: 100, rotation: 0, opacity: 100}],
		[{pattern: 7, x: 0, y: -56, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 7, x: 0, y: -64, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 7, x: 0, y: -56, zoom: 100, rotation: 0, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #41
* Name : Earth 3
* Number of frames : 20
* ----------------------------------------------------------- */
'Earth 3': {
    name: 'Earth 3',
    graphic: '019-Earth01.png',
    sound: '131-Earth03.ogg',
    frames: [
		[{pattern: 4, x: -120, y: 56, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: -120, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 12, x: 8, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: -48, y: 160, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: -120, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 12, x: 8, y: 48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: -48, y: 112, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 144, y: 152, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: -120, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 12, x: 8, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 4, x: 80, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: -48, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 144, y: 104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 8, y: 160, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: -120, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 11, x: 8, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 4, x: 80, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 4, x: 264, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: -48, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 144, y: 72, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 16, y: 104, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: -120, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 11, x: 8, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 4, x: 80, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 4, x: 264, y: 72, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: -48, y: -24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 144, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 16, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 3, x: -160, y: 136, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: -120, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 11, x: 8, y: 72, zoom: 100, rotation: 0, opacity: 255}, {pattern: 5, x: 80, y: 72, zoom: 100, rotation: 0, opacity: 255}, {pattern: 12, x: -240, y: 72, zoom: 100, rotation: 0, opacity: 255}, {pattern: 4, x: 264, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: -48, y: -80, zoom: 100, rotation: 0, opacity: 150}, {pattern: 2, x: 144, y: -40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 3, x: -160, y: 88, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: -120, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 11, x: 8, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 5, x: 80, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 12, x: -240, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 4, x: 264, y: 72, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: -48, y: -152, zoom: 100, rotation: 0, opacity: 100}, {pattern: 2, x: 144, y: -96, zoom: 100, rotation: 0, opacity: 150}, {pattern: 1, x: 16, y: -64, zoom: 100, rotation: 0, opacity: 150}, {pattern: 3, x: -160, y: 40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: -272, y: 144, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 168, y: 152, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: -120, y: 48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 11, x: 8, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 6, x: 80, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 12, x: -240, y: 72, zoom: 100, rotation: 0, opacity: 255}, {pattern: 5, x: 264, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 144, y: -160, zoom: 100, rotation: 0, opacity: 100}, {pattern: 1, x: 16, y: -112, zoom: 100, rotation: 0, opacity: 100}, {pattern: 3, x: -160, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: -272, y: 104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 168, y: 112, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: -120, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 8, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 6, x: 80, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 11, x: -240, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 5, x: 264, y: 72, zoom: 100, rotation: 0, opacity: 255}, {pattern: 12, x: 168, y: 72, zoom: 100, rotation: 0, opacity: 255}, {pattern: 3, x: -160, y: -48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: -272, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 168, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 3, x: 312, y: 144, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 7, x: -120, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 8, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 6, x: 80, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 11, x: -240, y: 72, zoom: 100, rotation: 0, opacity: 255}, {pattern: 5, x: 264, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 12, x: 168, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 3, x: -160, y: -104, zoom: 100, rotation: 0, opacity: 150}, {pattern: 2, x: -272, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 168, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 3, x: 312, y: 96, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 7, x: -120, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 8, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: 80, y: 48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 11, x: -240, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 6, x: 264, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 12, x: 168, y: 72, zoom: 100, rotation: 0, opacity: 255}, {pattern: 3, x: -160, y: -160, zoom: 100, rotation: 0, opacity: 100}, {pattern: 2, x: -272, y: -16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 168, y: -40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 3, x: 312, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: -32, y: 144, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 7, x: -120, y: 56, zoom: 100, rotation: 0, opacity: 150}, {pattern: 9, x: 8, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: 80, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: -240, y: 72, zoom: 100, rotation: 0, opacity: 255}, {pattern: 6, x: 264, y: 48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 12, x: 168, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: -272, y: -64, zoom: 100, rotation: 0, opacity: 150}, {pattern: 1, x: 168, y: -88, zoom: 100, rotation: 0, opacity: 150}, {pattern: 3, x: 312, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: -32, y: 120, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 8, y: 152, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 7, x: -120, y: 64, zoom: 100, rotation: 0, opacity: 100}, {pattern: 9, x: 8, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: 80, y: 48, zoom: 100, rotation: 0, opacity: 150}, {pattern: 4, x: -296, y: 72, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: -240, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 6, x: 264, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 11, x: 168, y: 72, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: -272, y: -136, zoom: 100, rotation: 0, opacity: 100}, {pattern: 1, x: 168, y: -160, zoom: 100, rotation: 0, opacity: 100}, {pattern: 3, x: 312, y: -40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: -32, y: 88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 8, y: 104, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 8, y: 64, zoom: 100, rotation: 0, opacity: 150}, {pattern: 7, x: 80, y: 64, zoom: 100, rotation: 0, opacity: 100}, {pattern: 5, x: -296, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: -240, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: 264, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 11, x: 168, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 3, x: 312, y: -88, zoom: 100, rotation: 0, opacity: 150}, {pattern: 2, x: -32, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 8, y: 64, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 8, y: 56, zoom: 100, rotation: 0, opacity: 100}, {pattern: 5, x: -296, y: 72, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: -232, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: 264, y: 72, zoom: 100, rotation: 0, opacity: 255}, {pattern: 11, x: 168, y: 64, zoom: 100, rotation: 0, opacity: 150}, {pattern: 3, x: 312, y: -144, zoom: 100, rotation: 0, opacity: 100}, {pattern: 2, x: -32, y: 32, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 8, y: 32, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: -296, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: -232, y: 64, zoom: 100, rotation: 0, opacity: 225}, {pattern: 7, x: 264, y: 64, zoom: 100, rotation: 0, opacity: 150}, {pattern: 10, x: 168, y: 56, zoom: 100, rotation: 0, opacity: 150}, {pattern: 2, x: -32, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 8, y: -16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 7, x: -296, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: -232, y: 56, zoom: 100, rotation: 0, opacity: 225}, {pattern: 7, x: 264, y: 72, zoom: 100, rotation: 0, opacity: 100}, {pattern: 10, x: 168, y: 64, zoom: 100, rotation: 0, opacity: 100}, {pattern: 2, x: -32, y: -32, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 8, y: -64, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 7, x: -296, y: 56, zoom: 100, rotation: 0, opacity: 150}, {pattern: 9, x: -232, y: 64, zoom: 100, rotation: 0, opacity: 150}, {pattern: 2, x: -32, y: -72, zoom: 100, rotation: 0, opacity: 150}, {pattern: 1, x: 8, y: -128, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 7, x: -296, y: 64, zoom: 100, rotation: 0, opacity: 100}, {pattern: 9, x: -232, y: 56, zoom: 100, rotation: 0, opacity: 100}, {pattern: 2, x: -32, y: -112, zoom: 100, rotation: 0, opacity: 100}, {pattern: 1, x: 8, y: -160, zoom: 100, rotation: 0, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #42
* Name : Wind 1
* Number of frames : 12
* ----------------------------------------------------------- */
'Wind 1': {
    name: 'Wind 1',
    graphic: '020-Wind01.png',
    sound: '132-Wind01.ogg',
    frames: [
		[{pattern: 4, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 100}],
		[{pattern: 5, x: 0, y: -8, zoom: 100, rotation: 180, opacity: 150}, {pattern: 1, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 100}],
		[{pattern: 4, x: 0, y: -8, zoom: 100, rotation: 40, opacity: 255}, {pattern: 2, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 5, x: 0, y: -8, zoom: 100, rotation: 60, opacity: 255}, {pattern: 3, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 4, x: 0, y: -8, zoom: 100, rotation: 110, opacity: 255}, {pattern: 1, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 5, x: 0, y: -8, zoom: 100, rotation: 150, opacity: 255}, {pattern: 2, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 4, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 3, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 5, x: 0, y: -8, zoom: 100, rotation: 170, opacity: 255}, {pattern: 1, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 4, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 5, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 3, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 4, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 150}, {pattern: 1, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 5, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 100}, {pattern: 2, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #43
* Name : Wind 2
* Number of frames : 16
* ----------------------------------------------------------- */
'Wind 2': {
    name: 'Wind 2',
    graphic: '020-Wind01.png',
    sound: '133-Wind02.ogg',
    frames: [
		[{pattern: 6, x: 0, y: 0, zoom: 60, rotation: 0, opacity: 120}],
		[{pattern: 7, x: 0, y: 0, zoom: 80, rotation: 0, opacity: 180}],
		[{pattern: 8, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 7, x: 0, y: 0, zoom: 80, rotation: 0, opacity: 150}],
		[{pattern: 8, x: 0, y: 0, zoom: 60, rotation: 0, opacity: 150}],
		[{pattern: 9, x: 0, y: 0, zoom: 80, rotation: 0, opacity: 160}],
		[{pattern: 6, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 7, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 8, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 0, y: 0, zoom: 80, rotation: 0, opacity: 160}],
		[{pattern: 6, x: 0, y: 0, zoom: 60, rotation: 0, opacity: 100}],
		[],
		[],
		[]
	]
},
          
/* ----------------------------------------------------------
* Animation #44
* Name : Wind 3
* Number of frames : 20
* ----------------------------------------------------------- */
'Wind 3': {
    name: 'Wind 3',
    graphic: '020-Wind01.png',
    sound: '134-Wind03.ogg',
    frames: [
		[{pattern: 10, x: 0, y: 112, zoom: 50, rotation: 0, opacity: 100}],
		[{pattern: 11, x: -8, y: 96, zoom: 70, rotation: 0, opacity: 150}],
		[{pattern: 12, x: 0, y: 80, zoom: 90, rotation: 0, opacity: 255}],
		[{pattern: 11, x: 0, y: 72, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 10, x: -8, y: 56, zoom: 120, rotation: 0, opacity: 255}, {pattern: 10, x: -264, y: 112, zoom: 50, rotation: 0, opacity: 100}],
		[{pattern: 12, x: -16, y: 40, zoom: 140, rotation: 0, opacity: 255}, {pattern: 11, x: -272, y: 96, zoom: 70, rotation: 0, opacity: 150}],
		[{pattern: 11, x: -8, y: 24, zoom: 160, rotation: 0, opacity: 255}, {pattern: 12, x: -264, y: 80, zoom: 90, rotation: 0, opacity: 200}, {pattern: 12, x: 264, y: 112, zoom: 50, rotation: 0, opacity: 100}],
		[{pattern: 10, x: -16, y: 8, zoom: 180, rotation: 0, opacity: 255}, {pattern: 11, x: -272, y: 72, zoom: 100, rotation: 0, opacity: 255}, {pattern: 11, x: 256, y: 104, zoom: 60, rotation: 0, opacity: 150}],
		[{pattern: 11, x: -16, y: -8, zoom: 200, rotation: 0, opacity: 255}, {pattern: 10, x: -256, y: 56, zoom: 120, rotation: 0, opacity: 255}, {pattern: 10, x: 264, y: 88, zoom: 80, rotation: 0, opacity: 200}],
		[{pattern: 12, x: -8, y: -8, zoom: 200, rotation: 0, opacity: 200}, {pattern: 11, x: -272, y: 40, zoom: 140, rotation: 0, opacity: 255}, {pattern: 11, x: 256, y: 72, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 11, x: 0, y: -8, zoom: 200, rotation: 0, opacity: 150}, {pattern: 12, x: -256, y: 16, zoom: 160, rotation: 0, opacity: 255}, {pattern: 12, x: 264, y: 56, zoom: 120, rotation: 0, opacity: 255}],
		[{pattern: 12, x: -8, y: -8, zoom: 200, rotation: 0, opacity: 100}, {pattern: 11, x: -280, y: 0, zoom: 180, rotation: 0, opacity: 255}, {pattern: 11, x: 256, y: 40, zoom: 140, rotation: 0, opacity: 255}],
		[{pattern: 10, x: -248, y: -16, zoom: 200, rotation: 0, opacity: 255}, {pattern: 10, x: 248, y: 24, zoom: 160, rotation: 0, opacity: 255}],
		[{pattern: 11, x: -256, y: -16, zoom: 200, rotation: 0, opacity: 255}, {pattern: 11, x: 256, y: 8, zoom: 180, rotation: 0, opacity: 255}],
		[{pattern: 12, x: -248, y: -16, zoom: 200, rotation: 0, opacity: 200}, {pattern: 12, x: 256, y: -8, zoom: 200, rotation: 0, opacity: 255}],
		[{pattern: 11, x: -256, y: -16, zoom: 200, rotation: 0, opacity: 150}, {pattern: 11, x: 264, y: -8, zoom: 200, rotation: 0, opacity: 255}],
		[{pattern: 10, x: -240, y: -16, zoom: 200, rotation: 0, opacity: 100}, {pattern: 10, x: 256, y: -8, zoom: 200, rotation: 0, opacity: 255}],
		[{pattern: 11, x: 264, y: -8, zoom: 200, rotation: 0, opacity: 200}],
		[{pattern: 12, x: 256, y: -8, zoom: 200, rotation: 0, opacity: 150}],
		[{pattern: 11, x: 248, y: -8, zoom: 200, rotation: 0, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #45
* Name : Light 1
* Number of frames : 12
* ----------------------------------------------------------- */
'Light 1': {
    name: 'Light 1',
    graphic: '021-Light01.png',
    sound: '135-Light01.ogg',
    frames: [
		[{pattern: 3, x: -24, y: -40, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 3, x: -24, y: -40, zoom: 120, rotation: 0, opacity: 255}],
		[{pattern: 1, x: -24, y: -40, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 1, x: -24, y: -40, zoom: 120, rotation: 0, opacity: 255}, {pattern: 2, x: 8, y: 16, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 1, x: -24, y: -40, zoom: 150, rotation: 0, opacity: 150}, {pattern: 2, x: 8, y: 16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 8, y: 16, zoom: 120, rotation: 0, opacity: 255}, {pattern: 3, x: 48, y: -8, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 2, x: 8, y: 16, zoom: 120, rotation: 0, opacity: 255}, {pattern: 3, x: 48, y: -8, zoom: 120, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 8, y: 16, zoom: 120, rotation: 0, opacity: 150}, {pattern: 1, x: 48, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 3, x: -32, y: 48, zoom: 100, rotation: 0, opacity: 150}, {pattern: 2, x: 32, y: 56, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 1, x: 48, y: -8, zoom: 120, rotation: 0, opacity: 255}, {pattern: 3, x: -32, y: 48, zoom: 120, rotation: 0, opacity: 255}, {pattern: 2, x: -48, y: -16, zoom: 100, rotation: 0, opacity: 150}, {pattern: 2, x: 32, y: 56, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 48, y: -8, zoom: 150, rotation: 0, opacity: 150}, {pattern: 1, x: -32, y: 48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: -48, y: -16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 32, y: 56, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: -48, y: -16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: -32, y: 48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 32, y: 56, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 1, x: -32, y: 48, zoom: 120, rotation: 0, opacity: 150}, {pattern: 2, x: -48, y: -16, zoom: 100, rotation: 0, opacity: 150}, {pattern: 2, x: 32, y: 56, zoom: 100, rotation: 0, opacity: 120}]
	]
},
          
/* ----------------------------------------------------------
* Animation #46
* Name : Light 2
* Number of frames : 16
* ----------------------------------------------------------- */
'Light 2': {
    name: 'Light 2',
    graphic: '021-Light01.png',
    sound: '136-Light02.ogg',
    frames: [
		[{pattern: 5, x: 48, y: -64, zoom: 50, rotation: 0, opacity: 100}],
		[{pattern: 5, x: 32, y: -80, zoom: 70, rotation: 0, opacity: 150}],
		[{pattern: 5, x: 0, y: -88, zoom: 90, rotation: 0, opacity: 200}],
		[{pattern: 5, x: -32, y: -96, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: -72, y: -88, zoom: 90, rotation: 0, opacity: 255}, {pattern: 2, x: 32, y: -56, zoom: 60, rotation: 0, opacity: 100}],
		[{pattern: 4, x: -96, y: -72, zoom: 100, rotation: 0, opacity: 255}, {pattern: 5, x: -56, y: 16, zoom: 50, rotation: 0, opacity: 100}, {pattern: 2, x: 32, y: -56, zoom: 80, rotation: 0, opacity: 150}],
		[{pattern: 4, x: -104, y: -56, zoom: 100, rotation: 0, opacity: 150}, {pattern: 5, x: -40, y: 32, zoom: 80, rotation: 0, opacity: 150}, {pattern: 2, x: 32, y: -56, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: -104, y: -40, zoom: 100, rotation: 0, opacity: 100}, {pattern: 5, x: -24, y: 56, zoom: 90, rotation: 0, opacity: 200}, {pattern: 2, x: 32, y: -56, zoom: 130, rotation: 0, opacity: 255}],
		[{pattern: 4, x: -88, y: -16, zoom: 100, rotation: 0, opacity: 60}, {pattern: 5, x: 8, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 32, y: -56, zoom: 150, rotation: 0, opacity: 150}, {pattern: 2, x: -64, y: 48, zoom: 50, rotation: 0, opacity: 100}],
		[{pattern: 5, x: 40, y: 40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 32, y: -56, zoom: 180, rotation: 0, opacity: 100}, {pattern: 2, x: -64, y: 48, zoom: 80, rotation: 0, opacity: 150}],
		[{pattern: 4, x: 64, y: 16, zoom: 90, rotation: 0, opacity: 255}, {pattern: 2, x: -64, y: 48, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 80, y: -16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: -64, y: 48, zoom: 120, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 80, y: -40, zoom: 100, rotation: 0, opacity: 200}, {pattern: 2, x: -64, y: 48, zoom: 150, rotation: 0, opacity: 150}],
		[{pattern: 4, x: 64, y: -56, zoom: 100, rotation: 0, opacity: 200}, {pattern: 2, x: -64, y: 48, zoom: 150, rotation: 0, opacity: 100}],
		[{pattern: 4, x: 48, y: -72, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 4, x: 32, y: -88, zoom: 100, rotation: 0, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #47
* Name : Light 3
* Number of frames : 18
* ----------------------------------------------------------- */
'Light 3': {
    name: 'Light 3',
    graphic: '021-Light01.png',
    sound: '137-Light03.ogg',
    frames: [
		[{pattern: 8, x: 8, y: 48, zoom: 100, rotation: 0, opacity: 100}],
		[{pattern: 9, x: 16, y: 56, zoom: 100, rotation: 0, opacity: 150}, {pattern: 10, x: -8, y: 64, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 8, x: 8, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 11, x: 24, y: 64, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 9, x: 24, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: -32, y: 64, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 8, x: 0, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 11, x: 56, y: 64, zoom: 100, rotation: 0, opacity: 200}, {pattern: 7, x: 8, y: 64, zoom: 60, rotation: 0, opacity: 100}],
		[{pattern: 9, x: 8, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: -72, y: 64, zoom: 110, rotation: 0, opacity: 255}, {pattern: 7, x: 8, y: 64, zoom: 80, rotation: 10, opacity: 150}, {pattern: 12, x: 8, y: 112, zoom: 50, rotation: 0, opacity: 150}],
		[{pattern: 9, x: 0, y: 56, zoom: 100, rotation: 0, opacity: 150}, {pattern: 11, x: 56, y: 64, zoom: 110, rotation: 0, opacity: 255}, {pattern: 7, x: 8, y: 64, zoom: 100, rotation: 160, opacity: 200}, {pattern: 12, x: 8, y: 88, zoom: 80, rotation: 0, opacity: 150}],
		[{pattern: 8, x: 16, y: 64, zoom: 100, rotation: 0, opacity: 100}, {pattern: 10, x: -136, y: 64, zoom: 120, rotation: 0, opacity: 255}, {pattern: 7, x: 8, y: 64, zoom: 110, rotation: 350, opacity: 200}, {pattern: 12, x: 8, y: 72, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 11, x: 112, y: 64, zoom: 120, rotation: 0, opacity: 255}, {pattern: 7, x: 8, y: 64, zoom: 120, rotation: 20, opacity: 200}, {pattern: 13, x: 8, y: 56, zoom: 120, rotation: 0, opacity: 200}],
		[{pattern: 10, x: -176, y: 64, zoom: 130, rotation: 0, opacity: 255}, {pattern: 7, x: 8, y: 64, zoom: 130, rotation: 340, opacity: 200}, {pattern: 13, x: 8, y: 40, zoom: 140, rotation: 0, opacity: 200}],
		[{pattern: 11, x: 184, y: 64, zoom: 130, rotation: 0, opacity: 255}, {pattern: 7, x: 8, y: 64, zoom: 140, rotation: 10, opacity: 200}, {pattern: 13, x: 8, y: 24, zoom: 160, rotation: 0, opacity: 200}],
		[{pattern: 7, x: 8, y: 64, zoom: 150, rotation: 350, opacity: 200}, {pattern: 14, x: 16, y: 8, zoom: 180, rotation: 0, opacity: 200}, {pattern: 10, x: -176, y: 64, zoom: 140, rotation: 0, opacity: 255}],
		[{pattern: 7, x: 8, y: 64, zoom: 160, rotation: 10, opacity: 200}, {pattern: 14, x: 8, y: -8, zoom: 200, rotation: 0, opacity: 200}, {pattern: 11, x: 176, y: 64, zoom: 150, rotation: 0, opacity: 230}],
		[{pattern: 7, x: 8, y: 64, zoom: 160, rotation: 350, opacity: 200}, {pattern: 15, x: 8, y: -24, zoom: 220, rotation: 0, opacity: 200}, {pattern: 10, x: -176, y: 64, zoom: 150, rotation: 0, opacity: 200}],
		[{pattern: 11, x: 184, y: 64, zoom: 150, rotation: 0, opacity: 150}, {pattern: 7, x: 8, y: 48, zoom: 170, rotation: 20, opacity: 200}, {pattern: 15, x: 16, y: -32, zoom: 230, rotation: 0, opacity: 150}],
		[{pattern: 15, x: 8, y: -40, zoom: 240, rotation: 0, opacity: 100}, {pattern: 7, x: 8, y: 48, zoom: 180, rotation: 350, opacity: 150}, {pattern: 10, x: -192, y: 64, zoom: 150, rotation: 0, opacity: 150}],
		[{pattern: 7, x: 8, y: 48, zoom: 190, rotation: 10, opacity: 100}, {pattern: 11, x: 200, y: 64, zoom: 150, rotation: 0, opacity: 100}, {pattern: 15, x: 16, y: -48, zoom: 250, rotation: 0, opacity: 50}],
		[{pattern: 7, x: 8, y: 48, zoom: 200, rotation: 350, opacity: 50}]
	]
},
          
/* ----------------------------------------------------------
* Animation #48
* Name : Darkness 1
* Number of frames : 12
* ----------------------------------------------------------- */
'Darkness 1': {
    name: 'Darkness 1',
    graphic: '022-Darkness01.png',
    sound: '138-Darkness01.ogg',
    frames: [
		[{pattern: 1, x: 0, y: 0, zoom: 50, rotation: 0, opacity: 100}],
		[{pattern: 2, x: 0, y: 0, zoom: 80, rotation: 0, opacity: 150}],
		[{pattern: 3, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 0, y: 0, zoom: 120, rotation: 0, opacity: 200}],
		[{pattern: 3, x: 0, y: 0, zoom: 140, rotation: 0, opacity: 180}],
		[{pattern: 1, x: 0, y: 0, zoom: 160, rotation: 0, opacity: 150}],
		[{pattern: 2, x: 0, y: 0, zoom: 180, rotation: 0, opacity: 120}],
		[{pattern: 3, x: 0, y: 0, zoom: 200, rotation: 0, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #49
* Name : Darkness 2
* Number of frames : 16
* ----------------------------------------------------------- */
'Darkness 2': {
    name: 'Darkness 2',
    graphic: '022-Darkness01.png',
    sound: '139-Darkness02.ogg',
    frames: [
		[{pattern: 7, x: 16, y: -8, zoom: 100, rotation: 0, opacity: 100}],
		[{pattern: 7, x: 16, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 4, x: 8, y: 0, zoom: 60, rotation: 0, opacity: 100}],
		[{pattern: 8, x: 16, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 5, x: 8, y: 0, zoom: 80, rotation: 0, opacity: 180}],
		[{pattern: 8, x: 16, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: -8, y: -24, zoom: 100, rotation: 0, opacity: 100}, {pattern: 6, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 16, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: -8, y: -24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 5, x: 8, y: 0, zoom: 70, rotation: 0, opacity: 180}],
		[{pattern: 9, x: 16, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: -8, y: -24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 4, x: 8, y: 0, zoom: 50, rotation: 0, opacity: 255}],
		[{pattern: 10, x: 16, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: -8, y: -24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 5, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 10, x: 16, y: -8, zoom: 100, rotation: 0, opacity: 122}, {pattern: 9, x: -8, y: -24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 6, x: 8, y: 0, zoom: 90, rotation: 0, opacity: 100}],
		[{pattern: 9, x: -8, y: -24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: 16, y: 8, zoom: 100, rotation: 0, opacity: 100}, {pattern: 5, x: 8, y: 0, zoom: 70, rotation: 0, opacity: 160}],
		[{pattern: 10, x: -8, y: -24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: 16, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 4, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 190}],
		[{pattern: 10, x: -8, y: -24, zoom: 100, rotation: 0, opacity: 122}, {pattern: 8, x: 16, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 5, x: 8, y: 0, zoom: 60, rotation: 0, opacity: 150}],
		[{pattern: 8, x: 16, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 6, x: 8, y: 0, zoom: 80, rotation: 0, opacity: 100}],
		[{pattern: 9, x: 16, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 16, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 10, x: 16, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 10, x: 16, y: 8, zoom: 100, rotation: 0, opacity: 122}]
	]
},
          
/* ----------------------------------------------------------
* Animation #50
* Name : Darkness 3
* Number of frames : 20
* ----------------------------------------------------------- */
'Darkness 3': {
    name: 'Darkness 3',
    graphic: '022-Darkness01.png',
    sound: '140-Darkness03.ogg',
    frames: [
		[{pattern: 11, x: -160, y: -16, zoom: 70, rotation: 0, opacity: 150}],
		[{pattern: 12, x: -160, y: -16, zoom: 80, rotation: 0, opacity: 200}, {pattern: 4, x: -240, y: 152, zoom: 50, rotation: 0, opacity: 100}],
		[{pattern: 13, x: -160, y: -16, zoom: 90, rotation: 0, opacity: 255}, {pattern: 4, x: -240, y: 152, zoom: 70, rotation: 0, opacity: 150}],
		[{pattern: 14, x: -160, y: -16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 12, x: 80, y: 80, zoom: 70, rotation: 0, opacity: 100}, {pattern: 4, x: -240, y: 152, zoom: 80, rotation: 0, opacity: 200}],
		[{pattern: 11, x: -160, y: -16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 13, x: 80, y: 80, zoom: 80, rotation: 0, opacity: 150}, {pattern: 5, x: -240, y: 152, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 12, x: -160, y: -16, zoom: 90, rotation: 0, opacity: 255}, {pattern: 14, x: 80, y: 80, zoom: 90, rotation: 0, opacity: 255}, {pattern: 13, x: 216, y: -88, zoom: 70, rotation: 0, opacity: 100}, {pattern: 6, x: -240, y: 152, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 13, x: -160, y: -16, zoom: 80, rotation: 0, opacity: 255}, {pattern: 11, x: 80, y: 80, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: 216, y: -88, zoom: 80, rotation: 0, opacity: 150}, {pattern: 6, x: -240, y: 152, zoom: 100, rotation: 0, opacity: 200}, {pattern: 4, x: 8, y: -48, zoom: 50, rotation: 0, opacity: 100}],
		[{pattern: 14, x: -160, y: -16, zoom: 70, rotation: 0, opacity: 255}, {pattern: 12, x: 80, y: 80, zoom: 100, rotation: 0, opacity: 255}, {pattern: 11, x: 216, y: -88, zoom: 90, rotation: 0, opacity: 255}, {pattern: 6, x: -240, y: 152, zoom: 100, rotation: 0, opacity: 150}, {pattern: 4, x: 8, y: -48, zoom: 70, rotation: 0, opacity: 150}],
		[{pattern: 11, x: -160, y: -16, zoom: 80, rotation: 0, opacity: 255}, {pattern: 13, x: 80, y: 80, zoom: 90, rotation: 0, opacity: 255}, {pattern: 12, x: 216, y: -88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 6, x: -240, y: 152, zoom: 100, rotation: 0, opacity: 100}, {pattern: 4, x: 8, y: -48, zoom: 80, rotation: 0, opacity: 200}, {pattern: 4, x: 232, y: 120, zoom: 50, rotation: 0, opacity: 100}],
		[{pattern: 12, x: -160, y: -16, zoom: 90, rotation: 0, opacity: 255}, {pattern: 14, x: 80, y: 80, zoom: 80, rotation: 0, opacity: 255}, {pattern: 13, x: 216, y: -88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 5, x: 8, y: -48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 4, x: 232, y: 120, zoom: 70, rotation: 0, opacity: 150}, {pattern: 11, x: -272, y: -104, zoom: 70, rotation: 0, opacity: 100}],
		[{pattern: 13, x: -160, y: -16, zoom: 100, rotation: 0, opacity: 150}, {pattern: 11, x: 80, y: 80, zoom: 70, rotation: 0, opacity: 255}, {pattern: 14, x: 216, y: -88, zoom: 90, rotation: 0, opacity: 255}, {pattern: 6, x: 8, y: -48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 4, x: 232, y: 120, zoom: 80, rotation: 0, opacity: 200}, {pattern: 12, x: -272, y: -104, zoom: 80, rotation: 0, opacity: 150}],
		[{pattern: 14, x: -160, y: -16, zoom: 100, rotation: 0, opacity: 100}, {pattern: 12, x: 80, y: 80, zoom: 80, rotation: 0, opacity: 255}, {pattern: 11, x: 224, y: -88, zoom: 80, rotation: 0, opacity: 255}, {pattern: 6, x: 8, y: -48, zoom: 100, rotation: 0, opacity: 150}, {pattern: 5, x: 232, y: 120, zoom: 100, rotation: 0, opacity: 255}, {pattern: 13, x: -272, y: -104, zoom: 90, rotation: 0, opacity: 200}],
		[{pattern: 13, x: 80, y: 80, zoom: 90, rotation: 0, opacity: 150}, {pattern: 12, x: 224, y: -88, zoom: 70, rotation: 0, opacity: 255}, {pattern: 6, x: 8, y: -48, zoom: 100, rotation: 0, opacity: 100}, {pattern: 6, x: 232, y: 120, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: -272, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 4, x: -144, y: 144, zoom: 50, rotation: 0, opacity: 100}],
		[{pattern: 14, x: 80, y: 80, zoom: 100, rotation: 0, opacity: 100}, {pattern: 13, x: 224, y: -88, zoom: 80, rotation: 0, opacity: 255}, {pattern: 6, x: 232, y: 120, zoom: 100, rotation: 0, opacity: 150}, {pattern: 11, x: -272, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 4, x: -144, y: 144, zoom: 80, rotation: 0, opacity: 150}],
		[{pattern: 14, x: 224, y: -88, zoom: 90, rotation: 0, opacity: 255}, {pattern: 6, x: 232, y: 120, zoom: 100, rotation: 0, opacity: 100}, {pattern: 12, x: -272, y: -104, zoom: 90, rotation: 0, opacity: 255}, {pattern: 4, x: -144, y: 144, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 11, x: 224, y: -88, zoom: 100, rotation: 0, opacity: 150}, {pattern: 13, x: -272, y: -104, zoom: 80, rotation: 0, opacity: 255}, {pattern: 5, x: -144, y: 144, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 12, x: 224, y: -88, zoom: 100, rotation: 0, opacity: 100}, {pattern: 14, x: -272, y: -104, zoom: 70, rotation: 0, opacity: 255}, {pattern: 6, x: -144, y: 144, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 11, x: -272, y: -104, zoom: 80, rotation: 0, opacity: 255}, {pattern: 6, x: -144, y: 144, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 12, x: -272, y: -104, zoom: 90, rotation: 0, opacity: 150}, {pattern: 6, x: -144, y: 144, zoom: 100, rotation: 0, opacity: 100}],
		[{pattern: 13, x: -272, y: -104, zoom: 100, rotation: 0, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #51
* Name : Non-elemental 1
* Number of frames : 12
* ----------------------------------------------------------- */
'Non-elemental 1': {
    name: 'Non-elemental 1',
    graphic: '023-Burst01.png',
    sound: '141-Burst01.ogg',
    frames: [
		[{pattern: 2, x: 0, y: 0, zoom: 60, rotation: 0, opacity: 150}, {pattern: 3, x: 0, y: 0, zoom: 50, rotation: 0, opacity: 150}],
		[{pattern: 2, x: 0, y: 0, zoom: 80, rotation: 0, opacity: 150}, {pattern: 4, x: 0, y: 0, zoom: 80, rotation: 0, opacity: 200}],
		[{pattern: 2, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 5, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 6, x: 0, y: 0, zoom: 130, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 7, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: 0, zoom: 90, rotation: 0, opacity: 150}],
		[{pattern: 8, x: 0, y: 0, zoom: 80, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: 0, zoom: 70, rotation: 0, opacity: 150}],
		[{pattern: 3, x: 0, y: 0, zoom: 50, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: 0, zoom: 50, rotation: 0, opacity: 150}],
		[{pattern: 4, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 5, x: 0, y: 0, zoom: 90, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: 0, zoom: 70, rotation: 0, opacity: 150}],
		[{pattern: 6, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 7, x: 0, y: 0, zoom: 70, rotation: 0, opacity: 200}, {pattern: 2, x: 0, y: 0, zoom: 80, rotation: 0, opacity: 150}],
		[{pattern: 8, x: 0, y: 0, zoom: 50, rotation: 0, opacity: 150}, {pattern: 2, x: 0, y: 0, zoom: 50, rotation: 0, opacity: 150}]
	]
},
          
/* ----------------------------------------------------------
* Animation #52
* Name : Non-elemental 2
* Number of frames : 24
* ----------------------------------------------------------- */
'Non-elemental 2': {
    name: 'Non-elemental 2',
    graphic: '023-Burst01.png',
    sound: '142-Burst02.ogg',
    frames: [
		[{pattern: 1, x: -256, y: 64, zoom: 100, rotation: 0, opacity: 150}, {pattern: 1, x: -64, y: 64, zoom: 100, rotation: 0, opacity: 150}, {pattern: 1, x: 128, y: 64, zoom: 100, rotation: 0, opacity: 150}, {pattern: 1, x: 320, y: 64, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 1, x: -264, y: 40, zoom: 130, rotation: 0, opacity: 200}, {pattern: 1, x: -16, y: 40, zoom: 130, rotation: 0, opacity: 200}, {pattern: 1, x: 232, y: 40, zoom: 130, rotation: 0, opacity: 200}],
		[{pattern: 1, x: -264, y: 16, zoom: 150, rotation: 0, opacity: 255}, {pattern: 1, x: 24, y: 16, zoom: 150, rotation: 0, opacity: 255}, {pattern: 1, x: 312, y: 16, zoom: 150, rotation: 0, opacity: 255}],
		[{pattern: 1, x: -176, y: -8, zoom: 180, rotation: 0, opacity: 255}, {pattern: 1, x: 168, y: -8, zoom: 180, rotation: 0, opacity: 255}],
		[{pattern: 1, x: -176, y: -16, zoom: 200, rotation: 0, opacity: 255}, {pattern: 1, x: 208, y: -16, zoom: 200, rotation: 0, opacity: 255}, {pattern: 0, x: -136, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 0, x: -136, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 160, y: -24, zoom: 60, rotation: 0, opacity: 100}],
		[{pattern: 1, x: -176, y: -16, zoom: 200, rotation: 0, opacity: 255}, {pattern: 1, x: 208, y: -16, zoom: 200, rotation: 0, opacity: 255}, {pattern: 0, x: -56, y: 72, zoom: 100, rotation: 0, opacity: 255}, {pattern: 0, x: -56, y: 72, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 160, y: -24, zoom: 80, rotation: 0, opacity: 150}, {pattern: 2, x: -232, y: -56, zoom: 60, rotation: 0, opacity: 100}],
		[{pattern: 1, x: -176, y: -16, zoom: 200, rotation: 0, opacity: 255}, {pattern: 1, x: 208, y: -16, zoom: 200, rotation: 0, opacity: 255}, {pattern: 0, x: 16, y: 80, zoom: 100, rotation: 0, opacity: 255}, {pattern: 0, x: 16, y: 80, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 160, y: -24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: -232, y: -56, zoom: 80, rotation: 0, opacity: 150}],
		[{pattern: 1, x: -176, y: -16, zoom: 200, rotation: 0, opacity: 255}, {pattern: 1, x: 208, y: -16, zoom: 200, rotation: 0, opacity: 255}, {pattern: 0, x: 136, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 0, x: 136, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 160, y: -24, zoom: 150, rotation: 0, opacity: 150}, {pattern: 2, x: -232, y: -56, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 1, x: -176, y: -16, zoom: 200, rotation: 0, opacity: 255}, {pattern: 1, x: 208, y: -16, zoom: 200, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: 88, zoom: 60, rotation: 0, opacity: 100}, {pattern: 0, x: 192, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: -232, y: -56, zoom: 150, rotation: 0, opacity: 150}],
		[{pattern: 1, x: -176, y: -16, zoom: 200, rotation: 0, opacity: 255}, {pattern: 1, x: 208, y: -16, zoom: 200, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: 88, zoom: 80, rotation: 0, opacity: 150}, {pattern: 2, x: 240, y: 16, zoom: 60, rotation: 0, opacity: 100}],
		[{pattern: 1, x: -176, y: -16, zoom: 200, rotation: 0, opacity: 255}, {pattern: 1, x: 208, y: -16, zoom: 200, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: 88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 240, y: 16, zoom: 80, rotation: 0, opacity: 150}, {pattern: 2, x: -216, y: -112, zoom: 60, rotation: 0, opacity: 100}],
		[{pattern: 1, x: -176, y: -16, zoom: 200, rotation: 0, opacity: 255}, {pattern: 1, x: 208, y: -16, zoom: 200, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: 88, zoom: 150, rotation: 0, opacity: 150}, {pattern: 2, x: 240, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: -216, y: -104, zoom: 80, rotation: 0, opacity: 150}],
		[{pattern: 1, x: 208, y: -16, zoom: 200, rotation: 0, opacity: 255}, {pattern: 2, x: 240, y: 16, zoom: 150, rotation: 0, opacity: 150}, {pattern: 1, x: -176, y: -16, zoom: 200, rotation: 0, opacity: 255}, {pattern: 2, x: -216, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 88, y: -152, zoom: 60, rotation: 0, opacity: 100}],
		[{pattern: 1, x: -176, y: -16, zoom: 200, rotation: 0, opacity: 255}, {pattern: 2, x: -216, y: -104, zoom: 150, rotation: 0, opacity: 150}, {pattern: 2, x: 88, y: -152, zoom: 80, rotation: 0, opacity: 150}, {pattern: 0, x: 208, y: -16, zoom: 80, rotation: 0, opacity: 150}, {pattern: 1, x: 208, y: -16, zoom: 200, rotation: 0, opacity: 255}, {pattern: 2, x: -288, y: 96, zoom: 60, rotation: 0, opacity: 100}],
		[{pattern: 1, x: -168, y: -16, zoom: 200, rotation: 0, opacity: 255}, {pattern: 2, x: 88, y: -152, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: -272, y: 96, zoom: 80, rotation: 0, opacity: 150}, {pattern: 1, x: 208, y: -16, zoom: 200, rotation: 0, opacity: 255}],
		[{pattern: 1, x: -176, y: -16, zoom: 200, rotation: 0, opacity: 255}, {pattern: 2, x: 88, y: -152, zoom: 150, rotation: 0, opacity: 150}, {pattern: 2, x: -272, y: 96, zoom: 100, rotation: 0, opacity: 255}, {pattern: 0, x: -176, y: -160, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 208, y: -16, zoom: 200, rotation: 0, opacity: 255}],
		[{pattern: 1, x: -176, y: -16, zoom: 200, rotation: 0, opacity: 255}, {pattern: 1, x: 208, y: -16, zoom: 200, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: 88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 240, y: 16, zoom: 80, rotation: 0, opacity: 150}, {pattern: 2, x: -216, y: -112, zoom: 60, rotation: 0, opacity: 100}],
		[{pattern: 1, x: -176, y: -16, zoom: 200, rotation: 0, opacity: 255}, {pattern: 1, x: 208, y: -16, zoom: 200, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: 88, zoom: 150, rotation: 0, opacity: 150}, {pattern: 2, x: 240, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: -216, y: -104, zoom: 80, rotation: 0, opacity: 150}],
		[{pattern: 1, x: 208, y: -16, zoom: 200, rotation: 0, opacity: 255}, {pattern: 2, x: 240, y: 16, zoom: 150, rotation: 0, opacity: 150}, {pattern: 1, x: -176, y: -16, zoom: 200, rotation: 0, opacity: 255}, {pattern: 2, x: -216, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 88, y: -152, zoom: 60, rotation: 0, opacity: 100}],
		[{pattern: 1, x: -176, y: -16, zoom: 200, rotation: 0, opacity: 255}, {pattern: 2, x: -216, y: -104, zoom: 150, rotation: 0, opacity: 150}, {pattern: 2, x: 88, y: -152, zoom: 80, rotation: 0, opacity: 150}, {pattern: 0, x: 208, y: -16, zoom: 80, rotation: 0, opacity: 150}, {pattern: 1, x: 208, y: -16, zoom: 200, rotation: 0, opacity: 255}, {pattern: 2, x: -288, y: 96, zoom: 60, rotation: 0, opacity: 100}],
		[{pattern: 1, x: -168, y: -16, zoom: 200, rotation: 0, opacity: 255}, {pattern: 2, x: 88, y: -152, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: -272, y: 96, zoom: 80, rotation: 0, opacity: 150}, {pattern: 1, x: 208, y: -16, zoom: 200, rotation: 0, opacity: 255}],
		[{pattern: 1, x: -176, y: -16, zoom: 200, rotation: 0, opacity: 255}, {pattern: 2, x: 88, y: -152, zoom: 150, rotation: 0, opacity: 150}, {pattern: 2, x: -272, y: 96, zoom: 100, rotation: 0, opacity: 255}, {pattern: 0, x: -176, y: -160, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 208, y: -16, zoom: 200, rotation: 0, opacity: 255}],
		[{pattern: 1, x: -176, y: -16, zoom: 200, rotation: 0, opacity: 150}, {pattern: 1, x: 208, y: -16, zoom: 200, rotation: 0, opacity: 150}, {pattern: 2, x: -272, y: 96, zoom: 150, rotation: 0, opacity: 150}],
		[{pattern: 1, x: -176, y: -16, zoom: 200, rotation: 0, opacity: 100}, {pattern: 1, x: 208, y: -16, zoom: 200, rotation: 0, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #53
* Name : Venom
* Number of frames : 16
* ----------------------------------------------------------- */
'Venom': {
    name: 'Venom',
    graphic: '024-Support01.png',
    sound: '143-Support01.ogg',
    frames: [
		[{pattern: 1, x: -24, y: 0, zoom: 20, rotation: 0, opacity: 255}, {pattern: 1, x: 24, y: 32, zoom: 50, rotation: 0, opacity: 255}],
		[{pattern: 1, x: -24, y: 0, zoom: 40, rotation: 0, opacity: 255}, {pattern: 1, x: 16, y: 32, zoom: 70, rotation: 0, opacity: 255}, {pattern: 1, x: 32, y: -16, zoom: 20, rotation: 0, opacity: 255}, {pattern: 1, x: -40, y: 48, zoom: 30, rotation: 0, opacity: 255}],
		[{pattern: 1, x: -32, y: 8, zoom: 60, rotation: 0, opacity: 255}, {pattern: 1, x: -40, y: 48, zoom: 40, rotation: 0, opacity: 255}, {pattern: 1, x: 24, y: -16, zoom: 30, rotation: 0, opacity: 255}, {pattern: 1, x: 16, y: 32, zoom: 80, rotation: 0, opacity: 255}],
		[{pattern: 1, x: -32, y: 8, zoom: 80, rotation: 0, opacity: 255}, {pattern: 1, x: 8, y: 64, zoom: 20, rotation: 0, opacity: 255}, {pattern: 1, x: 16, y: -16, zoom: 40, rotation: 0, opacity: 255}, {pattern: 1, x: -48, y: 56, zoom: 70, rotation: 0, opacity: 255}, {pattern: 1, x: 48, y: 32, zoom: 20, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 48, y: 32, zoom: 30, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: 64, zoom: 30, rotation: 0, opacity: 255}, {pattern: 1, x: 8, y: -16, zoom: 50, rotation: 0, opacity: 255}, {pattern: 1, x: -32, y: 16, zoom: 30, rotation: 0, opacity: 255}],
		[{pattern: 1, x: -24, y: -24, zoom: 30, rotation: 0, opacity: 255}, {pattern: 1, x: 8, y: -8, zoom: 70, rotation: 0, opacity: 255}, {pattern: 1, x: 40, y: 16, zoom: 30, rotation: 0, opacity: 255}, {pattern: 1, x: -32, y: 16, zoom: 40, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: 64, zoom: 50, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: 72, zoom: 60, rotation: 0, opacity: 255}, {pattern: 1, x: -40, y: 16, zoom: 50, rotation: 0, opacity: 255}, {pattern: 1, x: 40, y: 16, zoom: 40, rotation: 0, opacity: 255}, {pattern: 1, x: 24, y: -40, zoom: 30, rotation: 0, opacity: 255}, {pattern: 1, x: -32, y: 72, zoom: 20, rotation: 0, opacity: 255}],
		[{pattern: 1, x: -32, y: 80, zoom: 40, rotation: 0, opacity: 255}, {pattern: 1, x: -48, y: 16, zoom: 60, rotation: 0, opacity: 255}, {pattern: 1, x: 24, y: -40, zoom: 50, rotation: 0, opacity: 255}, {pattern: 1, x: 24, y: 48, zoom: 20, rotation: 0, opacity: 255}, {pattern: 1, x: -32, y: -56, zoom: 20, rotation: 0, opacity: 255}],
		[{pattern: 1, x: -32, y: -56, zoom: 30, rotation: 0, opacity: 200}, {pattern: 1, x: 24, y: -40, zoom: 60, rotation: 0, opacity: 200}, {pattern: 1, x: -48, y: 16, zoom: 70, rotation: 0, opacity: 200}, {pattern: 1, x: 24, y: 48, zoom: 30, rotation: 0, opacity: 200}, {pattern: 1, x: -32, y: 80, zoom: 50, rotation: 0, opacity: 200}],
		[{pattern: 1, x: -24, y: -24, zoom: 30, rotation: 0, opacity: 255}, {pattern: 1, x: 8, y: -8, zoom: 70, rotation: 0, opacity: 255}, {pattern: 1, x: 40, y: 16, zoom: 30, rotation: 0, opacity: 255}, {pattern: 1, x: -32, y: 16, zoom: 40, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: 64, zoom: 50, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: 72, zoom: 60, rotation: 0, opacity: 255}, {pattern: 1, x: -40, y: 16, zoom: 50, rotation: 0, opacity: 255}, {pattern: 1, x: 40, y: 16, zoom: 40, rotation: 0, opacity: 255}, {pattern: 1, x: 24, y: -40, zoom: 30, rotation: 0, opacity: 255}, {pattern: 1, x: -32, y: 72, zoom: 20, rotation: 0, opacity: 255}],
		[{pattern: 1, x: -32, y: 80, zoom: 40, rotation: 0, opacity: 255}, {pattern: 1, x: -48, y: 16, zoom: 60, rotation: 0, opacity: 255}, {pattern: 1, x: 24, y: -40, zoom: 50, rotation: 0, opacity: 255}, {pattern: 1, x: 24, y: 48, zoom: 20, rotation: 0, opacity: 255}, {pattern: 1, x: -32, y: -56, zoom: 20, rotation: 0, opacity: 255}],
		[{pattern: 1, x: -32, y: -56, zoom: 30, rotation: 0, opacity: 200}, {pattern: 1, x: 24, y: -40, zoom: 60, rotation: 0, opacity: 200}, {pattern: 1, x: -48, y: 16, zoom: 70, rotation: 0, opacity: 200}, {pattern: 1, x: 24, y: 48, zoom: 30, rotation: 0, opacity: 200}, {pattern: 1, x: -32, y: 80, zoom: 50, rotation: 0, opacity: 200}],
		[{pattern: 1, x: -32, y: -56, zoom: 40, rotation: 0, opacity: 160}, {pattern: 1, x: -32, y: 80, zoom: 70, rotation: 0, opacity: 180}, {pattern: 1, x: 16, y: 48, zoom: 40, rotation: 0, opacity: 180}],
		[{pattern: 1, x: -40, y: -48, zoom: 80, rotation: 0, opacity: 80}, {pattern: 1, x: 16, y: 56, zoom: 70, rotation: 0, opacity: 120}],
		[{pattern: 1, x: -32, y: -8, zoom: 30, rotation: 0, opacity: 100}, {pattern: 1, x: 24, y: 16, zoom: 30, rotation: 0, opacity: 100}, {pattern: 1, x: 32, y: -24, zoom: 40, rotation: 0, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #54
* Name : Dazzle
* Number of frames : 16
* ----------------------------------------------------------- */
'Dazzle': {
    name: 'Dazzle',
    graphic: '024-Support01.png',
    sound: '144-Support02.ogg',
    frames: [
		[{pattern: 1, x: 0, y: 8, zoom: 50, rotation: 0, opacity: 100}],
		[{pattern: 1, x: 0, y: 8, zoom: 100, rotation: 90, opacity: 200}],
		[{pattern: 1, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: 8, zoom: 100, rotation: 45, opacity: 255}],
		[{pattern: 1, x: 0, y: 8, zoom: 100, rotation: 90, opacity: 255}],
		[{pattern: 2, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 0, y: 0, zoom: 130, rotation: 45, opacity: 255}],
		[{pattern: 2, x: 0, y: 0, zoom: 150, rotation: 45, opacity: 255}],
		[{pattern: 2, x: 0, y: 0, zoom: 150, rotation: 90, opacity: 255}],
		[{pattern: 2, x: -8, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 1, x: -8, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 1, x: -8, y: 0, zoom: 100, rotation: 45, opacity: 255}],
		[{pattern: 3, x: -8, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: -8, y: 0, zoom: 100, rotation: 45, opacity: 255}],
		[{pattern: 3, x: 0, y: 0, zoom: 100, rotation: 90, opacity: 255}],
		[{pattern: 3, x: 0, y: 0, zoom: 150, rotation: 0, opacity: 120}]
	]
},
          
/* ----------------------------------------------------------
* Animation #55
* Name : Mute
* Number of frames : 16
* ----------------------------------------------------------- */
'Mute': {
    name: 'Mute',
    graphic: '024-Support01.png',
    sound: '145-Support03.ogg',
    frames: [
		[{pattern: 5, x: 16, y: 0, zoom: 150, rotation: 0, opacity: 100}],
		[{pattern: 6, x: 16, y: 0, zoom: 150, rotation: 0, opacity: 200}],
		[{pattern: 7, x: 16, y: 0, zoom: 170, rotation: 0, opacity: 200}],
		[{pattern: 6, x: 16, y: 0, zoom: 170, rotation: 0, opacity: 200}],
		[{pattern: 5, x: 16, y: 0, zoom: 150, rotation: 0, opacity: 200}],
		[{pattern: 6, x: 16, y: 0, zoom: 150, rotation: 0, opacity: 200}, {pattern: 4, x: 16, y: 8, zoom: 50, rotation: 0, opacity: 100}],
		[{pattern: 7, x: 16, y: 0, zoom: 150, rotation: 0, opacity: 180}, {pattern: 4, x: 16, y: 8, zoom: 70, rotation: 0, opacity: 150}],
		[{pattern: 6, x: 16, y: 0, zoom: 150, rotation: 0, opacity: 160}, {pattern: 4, x: 16, y: 8, zoom: 90, rotation: 0, opacity: 200}],
		[{pattern: 5, x: 16, y: 0, zoom: 140, rotation: 0, opacity: 140}, {pattern: 4, x: 16, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 16, y: 8, zoom: 120, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 16, y: 8, zoom: 140, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 16, y: 8, zoom: 150, rotation: 0, opacity: 200}, {pattern: 4, x: 0, y: 24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 16, y: 8, zoom: 160, rotation: 0, opacity: 150}, {pattern: 4, x: 0, y: 24, zoom: 110, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: 24, zoom: 130, rotation: 0, opacity: 200}],
		[{pattern: 4, x: 0, y: 24, zoom: 150, rotation: 0, opacity: 150}],
		[{pattern: 4, x: 0, y: 24, zoom: 180, rotation: 0, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #56
* Name : Confuse
* Number of frames : 16
* ----------------------------------------------------------- */
'Confuse': {
    name: 'Confuse',
    graphic: '025-Support02.png',
    sound: '146-Support04.ogg',
    frames: [
		[{pattern: 3, x: 0, y: -136, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: -112, zoom: 100, rotation: 20, opacity: 255}, {pattern: 5, x: 0, y: -144, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: -88, zoom: 100, rotation: 40, opacity: 255}, {pattern: 5, x: 0, y: -112, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: -48, zoom: 100, rotation: 60, opacity: 255}, {pattern: 5, x: 0, y: -88, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: 8, zoom: 100, rotation: 80, opacity: 255}, {pattern: 5, x: 0, y: -64, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: 16, zoom: 100, rotation: 100, opacity: 255}, {pattern: 5, x: 0, y: -40, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: 16, zoom: 100, rotation: 120, opacity: 255}],
		[{pattern: 3, x: 0, y: 16, zoom: 100, rotation: 140, opacity: 255}],
		[{pattern: 3, x: -24, y: 8, zoom: 100, rotation: 160, opacity: 255}],
		[{pattern: 3, x: -48, y: 0, zoom: 100, rotation: 180, opacity: 255}, {pattern: 4, x: 24, y: 24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: -72, y: -8, zoom: 100, rotation: 200, opacity: 255}, {pattern: 4, x: 56, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 6, x: 8, y: 32, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: -112, y: -8, zoom: 100, rotation: 220, opacity: 255}, {pattern: 4, x: 96, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 4, x: -24, y: 32, zoom: 100, rotation: 0, opacity: 255}, {pattern: 6, x: 16, y: 48, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: -152, y: 8, zoom: 100, rotation: 240, opacity: 255}, {pattern: 4, x: 136, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 4, x: -48, y: 16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 192, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 4, x: -72, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 6, x: 8, y: 40, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 200, y: 40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 4, x: -104, y: -8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: -136, y: 0, zoom: 100, rotation: 0, opacity: 255}]
	]
},
          
/* ----------------------------------------------------------
* Animation #57
* Name : Sleep
* Number of frames : 16
* ----------------------------------------------------------- */
'Sleep': {
    name: 'Sleep',
    graphic: '025-Support02.png',
    sound: '147-Support05.ogg',
    frames: [
		[{pattern: 1, x: -32, y: -56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 48, y: 32, zoom: 80, rotation: 0, opacity: 255}, {pattern: 1, x: -24, y: 8, zoom: 40, rotation: 0, opacity: 255}],
		[{pattern: 1, x: -16, y: -40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: 16, zoom: 50, rotation: 0, opacity: 255}, {pattern: 1, x: 48, y: -8, zoom: 80, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 48, y: 8, zoom: 80, rotation: 0, opacity: 255}, {pattern: 1, x: -32, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: -8, y: 8, zoom: 30, rotation: 0, opacity: 255}, {pattern: 1, x: -16, y: -48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 56, y: -56, zoom: 50, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 40, y: -48, zoom: 80, rotation: 0, opacity: 255}, {pattern: 1, x: -24, y: -56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: -8, y: 8, zoom: 30, rotation: 0, opacity: 255}, {pattern: 1, x: 56, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: -72, y: 16, zoom: 50, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 32, y: -56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 8, y: -8, zoom: 200, rotation: 0, opacity: 100}],
		[{pattern: 1, x: -48, y: 0, zoom: 50, rotation: 0, opacity: 255}, {pattern: 1, x: 32, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 64, y: -88, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 32, y: -56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 8, y: -8, zoom: 200, rotation: 0, opacity: 100}],
		[{pattern: 1, x: 8, y: -8, zoom: 200, rotation: 0, opacity: 200}],
		[{pattern: 1, x: 8, y: -8, zoom: 250, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 8, y: -16, zoom: 300, rotation: 0, opacity: 180}],
		[{pattern: 1, x: 8, y: -24, zoom: 300, rotation: 0, opacity: 100}, {pattern: 2, x: 0, y: -24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 8, y: -16, zoom: 300, rotation: 0, opacity: 50}, {pattern: 2, x: -8, y: -32, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: -16, y: -40, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: -24, y: -48, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: -32, y: -64, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: -40, y: -80, zoom: 100, rotation: 0, opacity: 255}]
	]
},
          
/* ----------------------------------------------------------
* Animation #58
* Name : Paralyze
* Number of frames : 16
* ----------------------------------------------------------- */
'Paralyze': {
    name: 'Paralyze',
    graphic: '025-Support02.png',
    sound: '148-Support06.ogg',
    frames: [
		[{pattern: 10, x: 0, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: -16, y: 24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 8, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: -24, y: 24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 24, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: -40, y: 24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 7, x: 40, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: -56, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: -8, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: -32, y: 24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 8, x: 72, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: -72, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: 16, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: -40, y: 24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 10, x: 48, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: -56, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: 8, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: -24, y: 24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 8, x: 72, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: -80, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: 32, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: -32, y: 24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 64, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: -64, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 0, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: -24, y: 24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 10, x: 96, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: -96, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: 40, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: -40, y: 24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 72, y: 24, zoom: 100, rotation: 0, opacity: 200}, {pattern: 9, x: -72, y: 24, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 7, x: 96, y: 24, zoom: 100, rotation: 0, opacity: 150}, {pattern: 10, x: -96, y: 24, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 7, x: 32, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: -48, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: -8, y: 32, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 8, x: 40, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: -56, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: -8, y: 32, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 7, x: 40, y: 24, zoom: 100, rotation: 0, opacity: 200}, {pattern: 10, x: -48, y: 24, zoom: 100, rotation: 0, opacity: 200}, {pattern: 10, x: -8, y: 32, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 10, x: 40, y: 24, zoom: 100, rotation: 0, opacity: 150}, {pattern: 8, x: -48, y: 24, zoom: 100, rotation: 0, opacity: 150}, {pattern: 7, x: -8, y: 32, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 8, x: 40, y: 24, zoom: 100, rotation: 0, opacity: 100}, {pattern: 9, x: -48, y: 24, zoom: 100, rotation: 0, opacity: 100}, {pattern: 9, x: -8, y: 32, zoom: 100, rotation: 0, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #59
* Name : Weaken
* Number of frames : 16
* ----------------------------------------------------------- */
'Weaken': {
    name: 'Weaken',
    graphic: '026-Support03.png',
    sound: '149-Support07.ogg',
    frames: [
		[{pattern: 1, x: 0, y: -72, zoom: 70, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: -48, zoom: 90, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: -16, zoom: 120, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: -80, zoom: 70, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: -40, zoom: 90, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: 72, zoom: 90, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: 8, zoom: 120, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: -96, zoom: 50, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: 120, zoom: 80, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: 40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: -56, zoom: 70, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: 88, zoom: 80, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: -16, zoom: 90, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: -104, zoom: 100, rotation: 0, opacity: 100}],
		[{pattern: 1, x: 0, y: 120, zoom: 60, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: 40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: -72, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 1, x: 0, y: 80, zoom: 80, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: -24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: 120, zoom: 60, rotation: 0, opacity: 255}, {pattern: 3, x: 0, y: 32, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: 72, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: 120, zoom: 100, rotation: 0, opacity: 255}],
		[],
		[],
		[],
		[]
	]
},
          
/* ----------------------------------------------------------
* Animation #60
* Name : Clumsy
* Number of frames : 16
* ----------------------------------------------------------- */
'Clumsy': {
    name: 'Clumsy',
    graphic: '026-Support03.png',
    sound: '150-Support08.ogg',
    frames: [
		[{pattern: 1, x: 0, y: -72, zoom: 70, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: -48, zoom: 90, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: -16, zoom: 120, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: -80, zoom: 70, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: -40, zoom: 90, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: 72, zoom: 90, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: 8, zoom: 120, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: -96, zoom: 50, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: 120, zoom: 80, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: 40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: -56, zoom: 70, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: 88, zoom: 80, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: -16, zoom: 90, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: -104, zoom: 100, rotation: 0, opacity: 100}],
		[{pattern: 1, x: 0, y: 120, zoom: 60, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: 40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: -72, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 1, x: 0, y: 80, zoom: 80, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: -24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: 120, zoom: 60, rotation: 0, opacity: 255}, {pattern: 3, x: 0, y: 32, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: 72, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: 120, zoom: 100, rotation: 0, opacity: 255}],
		[],
		[],
		[],
		[]
	]
},
          
/* ----------------------------------------------------------
* Animation #61
* Name : Delay
* Number of frames : 16
* ----------------------------------------------------------- */
'Delay': {
    name: 'Delay',
    graphic: '026-Support03.png',
    sound: '151-Support09.ogg',
    frames: [
		[{pattern: 1, x: 0, y: -72, zoom: 70, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: -48, zoom: 90, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: -16, zoom: 120, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: -80, zoom: 70, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: -40, zoom: 90, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: 72, zoom: 90, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: 8, zoom: 120, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: -96, zoom: 50, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: 120, zoom: 80, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: 40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: -56, zoom: 70, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: 88, zoom: 80, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: -16, zoom: 90, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: -104, zoom: 100, rotation: 0, opacity: 100}],
		[{pattern: 1, x: 0, y: 120, zoom: 60, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: 40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: -72, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 1, x: 0, y: 80, zoom: 80, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: -24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: 120, zoom: 60, rotation: 0, opacity: 255}, {pattern: 3, x: 0, y: 32, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: 72, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: 120, zoom: 100, rotation: 0, opacity: 255}],
		[],
		[],
		[],
		[]
	]
},
          
/* ----------------------------------------------------------
* Animation #62
* Name : Feeble
* Number of frames : 16
* ----------------------------------------------------------- */
'Feeble': {
    name: 'Feeble',
    graphic: '026-Support03.png',
    sound: '152-Support10.ogg',
    frames: [
		[{pattern: 1, x: 0, y: -72, zoom: 70, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: -48, zoom: 90, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: -16, zoom: 120, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: -80, zoom: 70, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: -40, zoom: 90, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: 72, zoom: 90, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: 8, zoom: 120, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: -96, zoom: 50, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: 120, zoom: 80, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: 40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: -56, zoom: 70, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: 88, zoom: 80, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: -16, zoom: 90, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: -104, zoom: 100, rotation: 0, opacity: 100}],
		[{pattern: 1, x: 0, y: 120, zoom: 60, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: 40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: -72, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 1, x: 0, y: 80, zoom: 80, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: -24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: 120, zoom: 60, rotation: 0, opacity: 255}, {pattern: 3, x: 0, y: 32, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: 72, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: 120, zoom: 100, rotation: 0, opacity: 255}],
		[],
		[],
		[],
		[]
	]
},
          
/* ----------------------------------------------------------
* Animation #63
* Name : Sharp
* Number of frames : 16
* ----------------------------------------------------------- */
'Sharp': {
    name: 'Sharp',
    graphic: '027-Support04.png',
    sound: '153-Support11.ogg',
    frames: [
		[{pattern: 9, x: 0, y: 80, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 0, y: 64, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 0, y: 40, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: 0, y: 80, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 0, y: 80, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 0, y: -32, zoom: 100, rotation: 0, opacity: 150}, {pattern: 9, x: 0, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 0, y: 24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 0, y: -80, zoom: 100, rotation: 0, opacity: 100}, {pattern: 9, x: 0, y: 40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 0, y: -16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 11, x: 0, y: -48, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 0, y: -32, zoom: 100, rotation: 0, opacity: 255}, {pattern: 12, x: 0, y: -56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: 0, y: 72, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 0, y: -80, zoom: 100, rotation: 0, opacity: 255}, {pattern: 12, x: 0, y: -80, zoom: 100, rotation: 0, opacity: 150}, {pattern: 9, x: 0, y: 24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 0, y: -24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: 0, y: 72, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 0, y: -56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: 0, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 0, y: 56, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 0, y: -88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: 0, y: -40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 0, y: -72, zoom: 100, rotation: 0, opacity: 150}, {pattern: 10, x: 0, y: -48, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 0, y: -104, zoom: 100, rotation: 0, opacity: 100}, {pattern: 11, x: 0, y: -64, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 11, x: 0, y: -80, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 12, x: 0, y: -88, zoom: 100, rotation: 0, opacity: 255}]
	]
},
          
/* ----------------------------------------------------------
* Animation #64
* Name : Barrier
* Number of frames : 16
* ----------------------------------------------------------- */
'Barrier': {
    name: 'Barrier',
    graphic: '027-Support04.png',
    sound: '154-Support12.ogg',
    frames: [
		[{pattern: 1, x: 0, y: 0, zoom: 50, rotation: 0, opacity: 100}],
		[{pattern: 1, x: 0, y: 0, zoom: 80, rotation: 0, opacity: 100}],
		[{pattern: 1, x: 0, y: 0, zoom: 90, rotation: 0, opacity: 100}, {pattern: 1, x: 0, y: 0, zoom: 50, rotation: 0, opacity: 180}],
		[{pattern: 1, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 100}, {pattern: 1, x: 0, y: 0, zoom: 80, rotation: 0, opacity: 180}],
		[{pattern: 1, x: 0, y: 0, zoom: 120, rotation: 0, opacity: 100}, {pattern: 1, x: 0, y: 0, zoom: 90, rotation: 0, opacity: 180}, {pattern: 1, x: 0, y: 0, zoom: 50, rotation: 0, opacity: 200}],
		[{pattern: 1, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 180}, {pattern: 1, x: 0, y: 0, zoom: 80, rotation: 0, opacity: 200}],
		[{pattern: 1, x: 0, y: 0, zoom: 120, rotation: 0, opacity: 180}, {pattern: 1, x: 0, y: 0, zoom: 90, rotation: 0, opacity: 200}],
		[{pattern: 1, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 1, x: 0, y: 0, zoom: 120, rotation: 0, opacity: 200}],
		[{pattern: 1, x: 0, y: 0, zoom: 130, rotation: 0, opacity: 200}],
		[{pattern: 1, x: 0, y: 0, zoom: 140, rotation: 0, opacity: 200}],
		[{pattern: 1, x: 0, y: 0, zoom: 150, rotation: 0, opacity: 200}],
		[{pattern: 1, x: 0, y: 0, zoom: 160, rotation: 0, opacity: 200}],
		[{pattern: 1, x: 0, y: 0, zoom: 160, rotation: 0, opacity: 180}],
		[{pattern: 1, x: 0, y: 0, zoom: 160, rotation: 0, opacity: 150}],
		[{pattern: 1, x: 0, y: 0, zoom: 160, rotation: 0, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #65
* Name : Resist
* Number of frames : 16
* ----------------------------------------------------------- */
'Resist': {
    name: 'Resist',
    graphic: '027-Support04.png',
    sound: '155-Support13.ogg',
    frames: [
		[{pattern: 7, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 7, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 3, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 200}, {pattern: 2, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 200}, {pattern: 8, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 100}],
		[{pattern: 3, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 100}, {pattern: 2, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 200}, {pattern: 8, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 2, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 2, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 200}, {pattern: 8, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 2, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 150}, {pattern: 8, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 2, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 100}, {pattern: 8, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #66
* Name : Blink
* Number of frames : 16
* ----------------------------------------------------------- */
'Blink': {
    name: 'Blink',
    graphic: '027-Support04.png',
    sound: '156-Support14.ogg',
    frames: [
		[{pattern: 9, x: 0, y: 80, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 0, y: 64, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 0, y: 40, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: 0, y: 80, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 0, y: 80, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 0, y: -32, zoom: 100, rotation: 0, opacity: 150}, {pattern: 9, x: 0, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 0, y: 24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 0, y: -80, zoom: 100, rotation: 0, opacity: 100}, {pattern: 9, x: 0, y: 40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 0, y: -16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 11, x: 0, y: -48, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 0, y: -32, zoom: 100, rotation: 0, opacity: 255}, {pattern: 12, x: 0, y: -56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: 0, y: 72, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 0, y: -80, zoom: 100, rotation: 0, opacity: 255}, {pattern: 12, x: 0, y: -80, zoom: 100, rotation: 0, opacity: 150}, {pattern: 9, x: 0, y: 24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 0, y: -24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: 0, y: 72, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 0, y: -56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: 0, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 0, y: 56, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 0, y: -88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: 0, y: -40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 0, y: -72, zoom: 100, rotation: 0, opacity: 150}, {pattern: 10, x: 0, y: -48, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 0, y: -104, zoom: 100, rotation: 0, opacity: 100}, {pattern: 11, x: 0, y: -64, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 11, x: 0, y: -80, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 12, x: 0, y: -88, zoom: 100, rotation: 0, opacity: 255}]
	]
},
          
/* ----------------------------------------------------------
* Animation #67
* Name : Sword-skill 1
* Number of frames : 14
* ----------------------------------------------------------- */
'Sword-skill 1': {
    name: 'Sword-skill 1',
    graphic: '006-Weapon01.png',
    sound: '157-Skill01.ogg',
    frames: [
		[{pattern: 11, x: -32, y: 8, zoom: 100, rotation: 0, opacity: 100}],
		[{pattern: 11, x: -24, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 12, x: -8, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 13, x: 8, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 13, x: 16, y: 16, zoom: 100, rotation: 0, opacity: 100}, {pattern: 11, x: 8, y: -56, zoom: 100, rotation: 90, opacity: 100}],
		[{pattern: 11, x: 8, y: -24, zoom: 100, rotation: 90, opacity: 255}],
		[{pattern: 12, x: 8, y: 0, zoom: 100, rotation: 90, opacity: 255}],
		[{pattern: 13, x: 8, y: 32, zoom: 100, rotation: 90, opacity: 255}],
		[{pattern: 13, x: 8, y: 56, zoom: 100, rotation: 90, opacity: 100}, {pattern: 14, x: 0, y: 16, zoom: 100, rotation: 0, opacity: 100}],
		[{pattern: 14, x: 0, y: 16, zoom: 110, rotation: 0, opacity: 200}],
		[{pattern: 14, x: 0, y: 16, zoom: 120, rotation: 0, opacity: 255}],
		[{pattern: 14, x: 0, y: 16, zoom: 120, rotation: 0, opacity: 200}],
		[{pattern: 14, x: 0, y: 16, zoom: 120, rotation: 0, opacity: 150}],
		[{pattern: 14, x: 0, y: 16, zoom: 120, rotation: 0, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #68
* Name : Sword-skill 2
* Number of frames : 13
* ----------------------------------------------------------- */
'Sword-skill 2': {
    name: 'Sword-skill 2',
    graphic: '006-Weapon01.png',
    sound: '158-Skill02.ogg',
    frames: [
		[{pattern: 1, x: -8, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: -8, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: -8, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: -8, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 3, x: -8, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: -8, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: -8, y: 8, zoom: 100, rotation: 0, opacity: 150}, {pattern: 16, x: -32, y: -32, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 18, x: -32, y: -32, zoom: 100, rotation: 0, opacity: 255}, {pattern: 17, x: 40, y: -56, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 17, x: -32, y: -32, zoom: 100, rotation: 0, opacity: 255}, {pattern: 18, x: 40, y: -56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 16, x: 0, y: -64, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 16, x: -32, y: -32, zoom: 100, rotation: 0, opacity: 255}, {pattern: 16, x: 40, y: -56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 18, x: 0, y: -64, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 18, x: -32, y: -32, zoom: 100, rotation: 0, opacity: 255}, {pattern: 18, x: 40, y: -56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 16, x: 0, y: -64, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 16, x: -32, y: -32, zoom: 100, rotation: 0, opacity: 255}, {pattern: 16, x: 40, y: -56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 18, x: 0, y: -64, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 18, x: 40, y: -56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 17, x: 0, y: -64, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 16, x: 0, y: -64, zoom: 100, rotation: 0, opacity: 255}]
	]
},
          
/* ----------------------------------------------------------
* Animation #69
* Name : Sword-skill 3
* Number of frames : 14
* ----------------------------------------------------------- */
'Sword-skill 3': {
    name: 'Sword-skill 3',
    graphic: '006-Weapon01.png',
    sound: '159-Skill03.ogg',
    frames: [
		[{pattern: 1, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 3, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 150}, {pattern: 20, x: 0, y: 32, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 20, x: 8, y: 16, zoom: 120, rotation: 0, opacity: 200}],
		[{pattern: 20, x: 0, y: 8, zoom: 130, rotation: 0, opacity: 255}, {pattern: 19, x: 0, y: 16, zoom: 120, rotation: 0, opacity: 150}],
		[{pattern: 20, x: 16, y: -8, zoom: 150, rotation: 0, opacity: 255}, {pattern: 19, x: 24, y: 0, zoom: 130, rotation: 0, opacity: 200}],
		[{pattern: 20, x: 0, y: -8, zoom: 150, rotation: 0, opacity: 255}, {pattern: 19, x: -8, y: -8, zoom: 140, rotation: 0, opacity: 200}],
		[{pattern: 20, x: 16, y: -8, zoom: 150, rotation: 0, opacity: 200}, {pattern: 19, x: 8, y: -8, zoom: 150, rotation: 0, opacity: 200}],
		[{pattern: 20, x: 8, y: -8, zoom: 150, rotation: 0, opacity: 150}, {pattern: 19, x: 16, y: -8, zoom: 150, rotation: 0, opacity: 150}],
		[{pattern: 19, x: 0, y: -8, zoom: 150, rotation: 0, opacity: 100}],
		[]
	]
},
          
/* ----------------------------------------------------------
* Animation #70
* Name : Sword-skill 4
* Number of frames : 18
* ----------------------------------------------------------- */
'Sword-skill 4': {
    name: 'Sword-skill 4',
    graphic: '006-Weapon01.png',
    sound: '160-Skill04.ogg',
    frames: [
		[{pattern: 6, x: 0, y: -32, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 7, x: 0, y: -32, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 8, x: 0, y: -32, zoom: 100, rotation: 0, opacity: 255}, {pattern: 6, x: 8, y: 16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 0, y: -32, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: 8, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 6, x: 16, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 10, x: 0, y: -32, zoom: 100, rotation: 0, opacity: 150}, {pattern: 8, x: 8, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: 16, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 10, x: 0, y: -32, zoom: 100, rotation: 0, opacity: 100}, {pattern: 9, x: 8, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: 16, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 6, x: -16, y: 24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 10, x: 8, y: 16, zoom: 100, rotation: 0, opacity: 150}, {pattern: 9, x: 16, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: -16, y: 24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 10, x: 8, y: 16, zoom: 100, rotation: 0, opacity: 100}, {pattern: 10, x: 16, y: 8, zoom: 100, rotation: 0, opacity: 150}, {pattern: 8, x: -16, y: 24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 10, x: 16, y: 8, zoom: 100, rotation: 0, opacity: 100}, {pattern: 9, x: -16, y: 24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 10, x: -16, y: 24, zoom: 100, rotation: 0, opacity: 150}, {pattern: 15, x: -32, y: -24, zoom: 80, rotation: 0, opacity: 255}],
		[{pattern: 10, x: -16, y: 24, zoom: 100, rotation: 0, opacity: 100}, {pattern: 15, x: -32, y: -24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 15, x: 24, y: 40, zoom: 80, rotation: 0, opacity: 255}],
		[{pattern: 15, x: -32, y: -24, zoom: 120, rotation: 0, opacity: 150}, {pattern: 15, x: 24, y: 40, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 15, x: -32, y: -24, zoom: 120, rotation: 0, opacity: 100}, {pattern: 15, x: 24, y: 40, zoom: 120, rotation: 0, opacity: 150}, {pattern: 15, x: -8, y: 16, zoom: 80, rotation: 0, opacity: 255}],
		[{pattern: 15, x: 24, y: 40, zoom: 120, rotation: 0, opacity: 100}, {pattern: 15, x: -8, y: 16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 15, x: -8, y: 16, zoom: 120, rotation: 0, opacity: 150}],
		[{pattern: 15, x: -8, y: 16, zoom: 120, rotation: 0, opacity: 100}],
		[],
		[]
	]
},
          
/* ----------------------------------------------------------
* Animation #71
* Name : Spear-skill 1
* Number of frames : 12
* ----------------------------------------------------------- */
'Spear-skill 1': {
    name: 'Spear-skill 1',
    graphic: '007-Weapon02.png',
    sound: '161-Skill05.ogg',
    frames: [
		[{pattern: 24, x: 16, y: 16, zoom: 100, rotation: 0, opacity: 100}, {pattern: 24, x: 16, y: 8, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 24, x: 16, y: 16, zoom: 100, rotation: 0, opacity: 150}, {pattern: 24, x: 16, y: 8, zoom: 100, rotation: 0, opacity: 200}, {pattern: 9, x: 24, y: 40, zoom: 50, rotation: 0, opacity: 150}],
		[{pattern: 23, x: 16, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: 24, y: 40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 23, x: 16, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: -24, y: 48, zoom: 50, rotation: 0, opacity: 150}],
		[{pattern: 22, x: 16, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 24, y: 40, zoom: 110, rotation: 0, opacity: 200}, {pattern: 8, x: -24, y: 48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 22, x: 16, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 8, x: 24, y: 40, zoom: 120, rotation: 0, opacity: 100}, {pattern: 10, x: -24, y: 48, zoom: 110, rotation: 0, opacity: 200}, {pattern: 21, x: 16, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 21, x: 16, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: -24, y: 48, zoom: 120, rotation: 0, opacity: 100}, {pattern: 20, x: 0, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 20, x: 16, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 20, x: 0, y: 16, zoom: 100, rotation: 0, opacity: 150}, {pattern: 14, x: -32, y: -32, zoom: 100, rotation: 0, opacity: 200}, {pattern: 20, x: 16, y: 8, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 12, x: -32, y: -32, zoom: 100, rotation: 0, opacity: 255}, {pattern: 13, x: 40, y: -40, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 13, x: -32, y: -32, zoom: 100, rotation: 0, opacity: 255}, {pattern: 12, x: 40, y: -40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: 0, y: -88, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 12, x: -32, y: -32, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: 40, y: -40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 12, x: 0, y: -88, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 13, x: 40, y: -40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: 0, y: -88, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 13, x: 0, y: -88, zoom: 100, rotation: 0, opacity: 255}]
	]
},
          
/* ----------------------------------------------------------
* Animation #72
* Name : Spear-skill 2
* Number of frames : 14
* ----------------------------------------------------------- */
'Spear-skill 2': {
    name: 'Spear-skill 2',
    graphic: '007-Weapon02.png',
    sound: '162-Skill06.ogg',
    frames: [
		[{pattern: 8, x: 16, y: -24, zoom: 80, rotation: 0, opacity: 255}],
		[{pattern: 10, x: 16, y: -24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 16, y: -24, zoom: 110, rotation: 0, opacity: 200}, {pattern: 8, x: -16, y: 40, zoom: 80, rotation: 0, opacity: 255}],
		[{pattern: 9, x: -16, y: 40, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 10, x: -16, y: 40, zoom: 110, rotation: 0, opacity: 200}, {pattern: 10, x: -8, y: -24, zoom: 80, rotation: 0, opacity: 255}],
		[{pattern: 8, x: -8, y: -24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: -8, y: -24, zoom: 110, rotation: 0, opacity: 200}, {pattern: 15, x: 24, y: -24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 16, x: 24, y: -24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 15, x: -16, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 17, x: 24, y: -24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 16, x: -16, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 15, x: -48, y: 48, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 18, x: 24, y: -24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 17, x: -16, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 16, x: -48, y: 48, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 19, x: 24, y: -24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 18, x: -16, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 17, x: -48, y: 48, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 19, x: 24, y: -24, zoom: 100, rotation: 0, opacity: 150}, {pattern: 19, x: -16, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 18, x: -48, y: 48, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 19, x: -16, y: 8, zoom: 100, rotation: 0, opacity: 150}, {pattern: 19, x: -48, y: 48, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 19, x: -48, y: 48, zoom: 100, rotation: 0, opacity: 150}]
	]
},
          
/* ----------------------------------------------------------
* Animation #73
* Name : Spear-skill 3
* Number of frames : 17
* ----------------------------------------------------------- */
'Spear-skill 3': {
    name: 'Spear-skill 3',
    graphic: '007-Weapon02.png',
    sound: '163-Skill07.ogg',
    frames: [
		[{pattern: 4, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: 8, zoom: 80, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: 8, zoom: 60, rotation: 0, opacity: 255}, {pattern: 4, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: 8, zoom: 40, rotation: 0, opacity: 255}, {pattern: 4, x: 0, y: 8, zoom: 80, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: 8, zoom: 60, rotation: 0, opacity: 255}, {pattern: 4, x: 0, y: 8, zoom: 120, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: 8, zoom: 40, rotation: 0, opacity: 255}, {pattern: 4, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: 8, zoom: 80, rotation: 0, opacity: 255}, {pattern: 5, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 4, x: 0, y: 8, zoom: 60, rotation: 0, opacity: 255}, {pattern: 6, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 4, x: 0, y: 8, zoom: 40, rotation: 0, opacity: 255}, {pattern: 7, x: 8, y: 8, zoom: 130, rotation: 0, opacity: 170}],
		[{pattern: 6, x: 8, y: 8, zoom: 105, rotation: 0, opacity: 255}],
		[{pattern: 7, x: 8, y: 8, zoom: 110, rotation: 0, opacity: 150}],
		[{pattern: 5, x: 8, y: 8, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 6, x: 8, y: 8, zoom: 60, rotation: 0, opacity: 255}],
		[{pattern: 7, x: 8, y: 8, zoom: 70, rotation: 0, opacity: 255}],
		[{pattern: 5, x: 8, y: 8, zoom: 90, rotation: 0, opacity: 255}],
		[],
		[]
	]
},
          
/* ----------------------------------------------------------
* Animation #74
* Name : Spear-skill 4
* Number of frames : 18
* ----------------------------------------------------------- */
'Spear-skill 4': {
    name: 'Spear-skill 4',
    graphic: '007-Weapon02.png',
    sound: '164-Skill08.ogg',
    frames: [
		[{pattern: 8, x: -24, y: -24, zoom: 50, rotation: 0, opacity: 150}],
		[{pattern: 9, x: -24, y: -24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: 24, y: 40, zoom: 50, rotation: 0, opacity: 150}],
		[{pattern: 10, x: -24, y: -24, zoom: 120, rotation: 0, opacity: 200}, {pattern: 8, x: 24, y: 40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: -24, y: 48, zoom: 50, rotation: 0, opacity: 150}],
		[{pattern: 8, x: -24, y: -24, zoom: 130, rotation: 0, opacity: 100}, {pattern: 10, x: 24, y: 40, zoom: 110, rotation: 0, opacity: 200}, {pattern: 8, x: -24, y: 48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 32, y: -40, zoom: 50, rotation: 0, opacity: 150}],
		[{pattern: 8, x: 24, y: 40, zoom: 120, rotation: 0, opacity: 100}, {pattern: 10, x: -24, y: 48, zoom: 110, rotation: 0, opacity: 200}, {pattern: 9, x: 32, y: -40, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: -24, y: 48, zoom: 120, rotation: 0, opacity: 100}, {pattern: 10, x: 32, y: -40, zoom: 110, rotation: 0, opacity: 200}],
		[{pattern: 8, x: 32, y: -40, zoom: 120, rotation: 0, opacity: 100}, {pattern: 1, x: 0, y: 8, zoom: 120, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: 8, zoom: 80, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: 8, zoom: 60, rotation: 0, opacity: 255}, {pattern: 4, x: 0, y: 8, zoom: 120, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: 8, zoom: 80, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: 8, zoom: 60, rotation: 0, opacity: 255}, {pattern: 11, x: 0, y: 16, zoom: 50, rotation: 0, opacity: 255}],
		[{pattern: 11, x: 0, y: 16, zoom: 70, rotation: 0, opacity: 255}],
		[{pattern: 11, x: 0, y: 16, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 11, x: 0, y: 16, zoom: 110, rotation: 0, opacity: 150}],
		[],
		[]
	]
},
          
/* ----------------------------------------------------------
* Animation #75
* Name : Axe-skill 1
* Number of frames : 12
* ----------------------------------------------------------- */
'Axe-skill 1': {
    name: 'Axe-skill 1',
    graphic: '008-Weapon03.png',
    sound: '165-Skill09.ogg',
    frames: [
		[{pattern: 1, x: -8, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 16, y: -16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 8, y: -24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: -8, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 8, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: -24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: -8, y: -8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: -8, y: -8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: -8, y: -8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: -16, y: 0, zoom: 100, rotation: 0, opacity: 180}, {pattern: 8, x: -8, y: -80, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 8, x: -8, y: -48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: -8, y: -80, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 8, x: -8, y: -16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: -8, y: -48, zoom: 100, rotation: 0, opacity: 200}, {pattern: 8, x: -8, y: -72, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 8, x: -8, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: -8, y: -8, zoom: 100, rotation: 0, opacity: 200}, {pattern: 8, x: -8, y: -16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: -8, y: -48, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 8, x: 0, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: 0, y: 32, zoom: 100, rotation: 0, opacity: 150}, {pattern: 8, x: 0, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 0, y: 24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 8, x: 0, y: 80, zoom: 100, rotation: 0, opacity: 255}, {pattern: 11, x: 0, y: 72, zoom: 100, rotation: 0, opacity: 255}],
		[]
	]
},
          
/* ----------------------------------------------------------
* Animation #76
* Name : Axe-skill 2
* Number of frames : 12
* ----------------------------------------------------------- */
'Axe-skill 2': {
    name: 'Axe-skill 2',
    graphic: '008-Weapon03.png',
    sound: '166-Skill10.ogg',
    frames: [
		[{pattern: 1, x: -8, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 16, y: -16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 8, y: -24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: -8, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 8, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: -24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: -8, y: -8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: -8, y: -8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: -8, y: -8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: -16, y: 0, zoom: 100, rotation: 0, opacity: 180}, {pattern: 8, x: -8, y: -80, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 8, x: -8, y: -48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: -8, y: -80, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 8, x: -8, y: -16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: -8, y: -48, zoom: 100, rotation: 0, opacity: 200}, {pattern: 8, x: -8, y: -72, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 8, x: -8, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: -8, y: -8, zoom: 100, rotation: 0, opacity: 200}, {pattern: 8, x: -8, y: -16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: -8, y: -48, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 8, x: 0, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: 0, y: 32, zoom: 100, rotation: 0, opacity: 150}, {pattern: 8, x: 0, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 0, y: 24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 8, x: 0, y: 80, zoom: 100, rotation: 0, opacity: 255}, {pattern: 11, x: 0, y: 72, zoom: 100, rotation: 0, opacity: 255}],
		[]
	]
},
          
/* ----------------------------------------------------------
* Animation #77
* Name : Axe-skill 3
* Number of frames : 14
* ----------------------------------------------------------- */
'Axe-skill 3': {
    name: 'Axe-skill 3',
    graphic: '008-Weapon03.png',
    sound: '167-Skill11.ogg',
    frames: [
		[{pattern: 1, x: -8, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 16, y: -16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 8, y: -24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: -8, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 8, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: -24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 13, x: -24, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: -8, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 13, x: 32, y: -16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: 48, y: -56, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: -8, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 16, x: 64, y: -72, zoom: 100, rotation: 0, opacity: 255}, {pattern: 15, x: 56, y: -40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: 32, y: -40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 13, x: 32, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 15, x: 0, y: -16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 16, x: 24, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: -8, y: -8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: -8, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: 32, y: -24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 15, x: 64, y: -56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 16, x: 40, y: -48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: 80, y: -80, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: -8, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: 88, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 15, x: 80, y: -72, zoom: 100, rotation: 0, opacity: 255}, {pattern: 16, x: 96, y: -80, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: -16, y: 0, zoom: 100, rotation: 0, opacity: 180}, {pattern: 13, x: -16, y: -16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: 0, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 13, x: 8, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 15, x: -16, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 16, x: 32, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: 16, y: -16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 13, x: -24, y: -32, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: -8, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 15, x: -32, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 16, x: 40, y: -24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: 16, y: -48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 15, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 16, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 15, x: 32, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 13, x: 32, y: 32, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 13, x: -64, y: -72, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: -32, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: 56, y: -96, zoom: 100, rotation: 0, opacity: 255}, {pattern: 13, x: 88, y: 64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 16, x: -56, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 15, x: 8, y: -88, zoom: 100, rotation: 0, opacity: 255}, {pattern: 16, x: 88, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 16, x: 32, y: 48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 15, x: -8, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 16, x: 40, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 15, x: 0, y: -24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 13, x: -104, y: -96, zoom: 100, rotation: 0, opacity: 255}, {pattern: 13, x: 136, y: 104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: -96, y: 96, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: 120, y: -120, zoom: 100, rotation: 0, opacity: 255}, {pattern: 15, x: -152, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 16, x: 184, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 16, x: 48, y: 136, zoom: 100, rotation: 0, opacity: 255}, {pattern: 15, x: 24, y: -136, zoom: 100, rotation: 0, opacity: 255}, {pattern: 16, x: -24, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 15, x: 8, y: -24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 16, x: 56, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 15, x: 16, y: 32, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 13, x: -104, y: -96, zoom: 100, rotation: 0, opacity: 150}, {pattern: 13, x: 136, y: 104, zoom: 100, rotation: 0, opacity: 150}, {pattern: 14, x: -96, y: 96, zoom: 100, rotation: 0, opacity: 150}, {pattern: 14, x: 120, y: -120, zoom: 100, rotation: 0, opacity: 150}, {pattern: 15, x: -152, y: 8, zoom: 100, rotation: 0, opacity: 150}, {pattern: 16, x: 184, y: 8, zoom: 100, rotation: 0, opacity: 150}, {pattern: 16, x: 48, y: 136, zoom: 100, rotation: 0, opacity: 150}, {pattern: 15, x: 24, y: -136, zoom: 100, rotation: 0, opacity: 150}, {pattern: 16, x: -56, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 15, x: 24, y: -48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 16, x: 88, y: 32, zoom: 100, rotation: 0, opacity: 255}, {pattern: 15, x: 24, y: 72, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 13, x: -104, y: -96, zoom: 100, rotation: 0, opacity: 100}, {pattern: 13, x: 136, y: 104, zoom: 100, rotation: 0, opacity: 100}, {pattern: 14, x: -96, y: 96, zoom: 100, rotation: 0, opacity: 100}, {pattern: 14, x: 120, y: -120, zoom: 100, rotation: 0, opacity: 100}, {pattern: 15, x: -152, y: 8, zoom: 100, rotation: 0, opacity: 100}, {pattern: 16, x: 184, y: 8, zoom: 100, rotation: 0, opacity: 100}, {pattern: 16, x: 48, y: 136, zoom: 100, rotation: 0, opacity: 100}, {pattern: 15, x: 24, y: -136, zoom: 100, rotation: 0, opacity: 100}, {pattern: 16, x: -88, y: -8, zoom: 100, rotation: 0, opacity: 100}, {pattern: 15, x: 24, y: -72, zoom: 100, rotation: 0, opacity: 255}, {pattern: 16, x: 112, y: 32, zoom: 100, rotation: 0, opacity: 255}, {pattern: 15, x: 24, y: 104, zoom: 100, rotation: 0, opacity: 255}],
		[],
		[],
		[]
	]
},
          
/* ----------------------------------------------------------
* Animation #78
* Name : Axe-skill 4
* Number of frames : 20
* ----------------------------------------------------------- */
'Axe-skill 4': {
    name: 'Axe-skill 4',
    graphic: '008-Weapon03.png',
    sound: '168-Skill12.ogg',
    frames: [
		[{pattern: 1, x: -8, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 16, y: -16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 8, y: -24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: -8, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 8, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: -24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 18, x: 0, y: 0, zoom: 80, rotation: 0, opacity: 200}],
		[{pattern: 3, x: -8, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 18, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: -8, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 18, x: 0, y: 0, zoom: 110, rotation: 0, opacity: 255}],
		[{pattern: 5, x: -8, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 18, x: 0, y: 0, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 1, x: -8, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 16, y: -16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 8, y: -24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: -8, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 8, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: -24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 18, x: 0, y: -8, zoom: 80, rotation: 0, opacity: 200}],
		[{pattern: 3, x: -8, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 18, x: 0, y: -8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: -8, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 18, x: 0, y: -8, zoom: 110, rotation: 0, opacity: 255}],
		[{pattern: 5, x: -8, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 18, x: 0, y: -8, zoom: 120, rotation: 0, opacity: 200}],
		[{pattern: 1, x: -8, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 16, y: -16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 8, y: -24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: -8, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 8, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 0, y: -24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 18, x: 0, y: 8, zoom: 80, rotation: 0, opacity: 150}],
		[{pattern: 3, x: -8, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 18, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 17, x: 0, y: 8, zoom: 80, rotation: 0, opacity: 100}],
		[{pattern: 4, x: -8, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 18, x: 0, y: 8, zoom: 110, rotation: 0, opacity: 255}, {pattern: 17, x: 0, y: 8, zoom: 90, rotation: 0, opacity: 150}],
		[{pattern: 5, x: -8, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 18, x: 0, y: 8, zoom: 120, rotation: 0, opacity: 255}, {pattern: 17, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 5, x: -8, y: -8, zoom: 100, rotation: 0, opacity: 150}, {pattern: 18, x: 0, y: 8, zoom: 130, rotation: 0, opacity: 200}, {pattern: 17, x: 0, y: 8, zoom: 110, rotation: 0, opacity: 200}],
		[{pattern: 18, x: 0, y: 8, zoom: 140, rotation: 0, opacity: 100}, {pattern: 17, x: 0, y: 8, zoom: 120, rotation: 0, opacity: 255}],
		[{pattern: 17, x: 0, y: 8, zoom: 130, rotation: 0, opacity: 150}],
		[],
		[]
	]
},
          
/* ----------------------------------------------------------
* Animation #79
* Name : Knife-skill 1
* Number of frames : 15
* ----------------------------------------------------------- */
'Knife-skill 1': {
    name: 'Knife-skill 1',
    graphic: '009-Weapon04.png',
    sound: '169-Skill13.ogg',
    frames: [
		[{pattern: 1, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 2, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 150}, {pattern: 6, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 7, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 8, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 10, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 10, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 150}, {pattern: 11, x: -8, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: -48, y: -16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: 40, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 12, x: -8, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: -40, y: -48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: 48, y: -24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: 8, y: -32, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 13, x: -8, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: -56, y: -64, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: 32, y: -48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: 8, y: -64, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 12, x: -8, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: -48, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: 64, y: -80, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: -24, y: -72, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 13, x: -8, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 14, x: -8, y: -96, zoom: 100, rotation: 0, opacity: 255}]
	]
},
          
/* ----------------------------------------------------------
* Animation #80
* Name : Knife-skill 2
* Number of frames : 12
* ----------------------------------------------------------- */
'Knife-skill 2': {
    name: 'Knife-skill 2',
    graphic: '009-Weapon04.png',
    sound: '170-Skill14.ogg',
    frames: [
		[{pattern: 22, x: 0, y: -24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 23, x: 0, y: -24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 22, x: -32, y: 16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 24, x: 0, y: -24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 23, x: -24, y: 16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 25, x: 0, y: -24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 24, x: -24, y: 16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 25, x: 0, y: -24, zoom: 100, rotation: 0, opacity: 150}, {pattern: 25, x: -24, y: 16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 25, x: -8, y: 8, zoom: 100, rotation: 0, opacity: 150}, {pattern: 5, x: 8, y: -32, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 8, y: -32, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 7, x: 8, y: -32, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 8, x: 8, y: -32, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 8, y: -32, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 10, x: 8, y: -32, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 10, x: 8, y: -32, zoom: 100, rotation: 0, opacity: 150}]
	]
},
          
/* ----------------------------------------------------------
* Animation #81
* Name : Knife-skill 3
* Number of frames : 18
* ----------------------------------------------------------- */
'Knife-skill 3': {
    name: 'Knife-skill 3',
    graphic: '009-Weapon04.png',
    sound: '171-Skill15.ogg',
    frames: [
		[{pattern: 1, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 2, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 150}, {pattern: 6, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 7, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 8, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 10, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 10, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 15, x: -8, y: -16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 16, x: 8, y: -16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 15, x: -16, y: -16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 16, x: 0, y: -16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 15, x: -16, y: -16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 16, x: 8, y: -16, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 15, x: -8, y: -16, zoom: 100, rotation: 0, opacity: 150}]
	]
},
          
/* ----------------------------------------------------------
* Animation #82
* Name : Knife-skill 4
* Number of frames : 20
* ----------------------------------------------------------- */
'Knife-skill 4': {
    name: 'Knife-skill 4',
    graphic: '009-Weapon04.png',
    sound: '172-Skill16.ogg',
    frames: [
		[{pattern: 1, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 2, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 150}, {pattern: 6, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 7, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 8, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 10, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 10, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 17, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 18, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 19, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 20, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 20, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 150}, {pattern: 6, x: 24, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 7, x: 24, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 6, x: 0, y: -56, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 8, x: 24, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: 0, y: -56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 21, x: 40, y: -8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 24, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: 0, y: -56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 21, x: 40, y: -8, zoom: 110, rotation: 0, opacity: 150}, {pattern: 21, x: -32, y: -48, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 10, x: 24, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: 0, y: -56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 21, x: 40, y: -8, zoom: 120, rotation: 0, opacity: 100}, {pattern: 21, x: -32, y: -48, zoom: 110, rotation: 0, opacity: 180}],
		[{pattern: 10, x: 0, y: -56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 21, x: -32, y: -48, zoom: 120, rotation: 0, opacity: 150}],
		[{pattern: 10, x: 0, y: -56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 21, x: -32, y: -48, zoom: 120, rotation: 0, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #83
* Name : Bow-skill 1
* Number of frames : 14
* ----------------------------------------------------------- */
'Bow-skill 1': {
    name: 'Bow-skill 1',
    graphic: '010-Weapon05.png',
    sound: '173-Skill17.ogg',
    frames: [
		[{pattern: 1, x: 8, y: 160, zoom: 120, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 8, y: 72, zoom: 110, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 8, y: -40, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 8, y: -152, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 8, y: -160, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 8, y: -88, zoom: 90, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 8, y: -40, zoom: 80, rotation: 0, opacity: 255}, {pattern: 3, x: 8, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 8, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: 8, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 11, x: 8, y: 8, zoom: 100, rotation: 0, opacity: 150}, {pattern: 12, x: 8, y: 8, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 3, x: 10, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 11, x: 8, y: 8, zoom: 100, rotation: 0, opacity: 200}, {pattern: 12, x: 8, y: 8, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 11, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}, {pattern: 12, x: 8, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 11, x: 8, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 12, x: 8, y: 24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 11, x: 8, y: -32, zoom: 100, rotation: 0, opacity: 150}, {pattern: 12, x: 8, y: 40, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 12, x: 8, y: 64, zoom: 100, rotation: 0, opacity: 100}, {pattern: 11, x: 8, y: -56, zoom: 100, rotation: 0, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #84
* Name : Bow-skill 2
* Number of frames : 14
* ----------------------------------------------------------- */
'Bow-skill 2': {
    name: 'Bow-skill 2',
    graphic: '010-Weapon05.png',
    sound: '174-Skill18.ogg',
    frames: [
		[{pattern: 1, x: 8, y: 160, zoom: 120, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 8, y: 72, zoom: 110, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 8, y: -40, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 8, y: -152, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 8, y: -160, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 8, y: -88, zoom: 90, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 8, y: -40, zoom: 80, rotation: 0, opacity: 255}, {pattern: 3, x: 8, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 8, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: 8, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 10, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 6, x: 0, y: -24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 0, y: -24, zoom: 120, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 0, y: -24, zoom: 140, rotation: 0, opacity: 200}],
		[{pattern: 6, x: 0, y: -24, zoom: 160, rotation: 0, opacity: 150}],
		[{pattern: 6, x: 0, y: -24, zoom: 160, rotation: 0, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #85
* Name : Bow-skill 3
* Number of frames : 14
* ----------------------------------------------------------- */
'Bow-skill 3': {
    name: 'Bow-skill 3',
    graphic: '010-Weapon05.png',
    sound: '175-Skill19.ogg',
    frames: [
		[{pattern: 1, x: 8, y: 160, zoom: 120, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 8, y: 72, zoom: 110, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 8, y: -40, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 8, y: -152, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 8, y: -160, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 8, y: -88, zoom: 90, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 8, y: -40, zoom: 80, rotation: 0, opacity: 255}, {pattern: 3, x: 8, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 8, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: 8, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 8, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 7, x: -32, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: 56, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 7, x: -48, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: 40, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 7, x: -32, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: 56, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 7, x: -48, y: 8, zoom: 100, rotation: 0, opacity: 200}, {pattern: 8, x: 32, y: 8, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 7, x: -24, y: 8, zoom: 100, rotation: 0, opacity: 150}, {pattern: 8, x: 48, y: 8, zoom: 100, rotation: 0, opacity: 150}]
	]
},
          
/* ----------------------------------------------------------
* Animation #86
* Name : Bow-skill 4
* Number of frames : 20
* ----------------------------------------------------------- */
'Bow-skill 4': {
    name: 'Bow-skill 4',
    graphic: '010-Weapon05.png',
    sound: '176-Skill20.ogg',
    frames: [
		[{pattern: 1, x: 8, y: 160, zoom: 120, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 8, y: 72, zoom: 110, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 8, y: -40, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: -16, y: 160, zoom: 120, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 8, y: -160, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: -16, y: 48, zoom: 110, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 8, y: -152, zoom: 90, rotation: 0, opacity: 255}, {pattern: 1, x: -16, y: -72, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 8, y: -24, zoom: 80, rotation: 0, opacity: 255}, {pattern: 3, x: 8, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: 8, y: 8, zoom: 60, rotation: 0, opacity: 150}, {pattern: 1, x: -16, y: -160, zoom: 90, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 8, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: 8, y: 8, zoom: 80, rotation: 0, opacity: 255}, {pattern: 2, x: -16, y: -160, zoom: 80, rotation: 0, opacity: 255}, {pattern: 1, x: 24, y: 160, zoom: 120, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 8, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 5, x: 8, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: -16, y: -80, zoom: 70, rotation: 0, opacity: 255}, {pattern: 1, x: 24, y: 48, zoom: 110, rotation: 0, opacity: 255}],
		[{pattern: 2, x: -16, y: -16, zoom: 70, rotation: 0, opacity: 255}, {pattern: 9, x: 8, y: 0, zoom: 110, rotation: 0, opacity: 150}, {pattern: 3, x: -24, y: 8, zoom: 80, rotation: 0, opacity: 150}, {pattern: 9, x: -24, y: 8, zoom: 70, rotation: 0, opacity: 150}, {pattern: 1, x: 24, y: -48, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 8, y: 8, zoom: 120, rotation: 0, opacity: 100}, {pattern: 4, x: -24, y: 8, zoom: 90, rotation: 0, opacity: 200}, {pattern: 9, x: -24, y: 8, zoom: 90, rotation: 0, opacity: 200}, {pattern: 1, x: 24, y: -160, zoom: 90, rotation: 0, opacity: 255}, {pattern: 1, x: 16, y: 160, zoom: 120, rotation: 0, opacity: 255}],
		[{pattern: 9, x: -24, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 5, x: -24, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 24, y: -128, zoom: 80, rotation: 0, opacity: 255}, {pattern: 1, x: 16, y: 56, zoom: 110, rotation: 0, opacity: 255}],
		[{pattern: 3, x: -24, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 9, x: -24, y: 8, zoom: 110, rotation: 0, opacity: 150}, {pattern: 2, x: 24, y: -16, zoom: 80, rotation: 0, opacity: 255}, {pattern: 3, x: 16, y: 24, zoom: 70, rotation: 0, opacity: 150}, {pattern: 9, x: 16, y: 24, zoom: 80, rotation: 0, opacity: 150}, {pattern: 1, x: 16, y: -32, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: -24, y: 8, zoom: 120, rotation: 0, opacity: 100}, {pattern: 9, x: 16, y: 24, zoom: 90, rotation: 0, opacity: 200}, {pattern: 4, x: 16, y: 24, zoom: 90, rotation: 0, opacity: 200}, {pattern: 1, x: 16, y: -104, zoom: 90, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 16, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 5, x: 16, y: 24, zoom: 100, rotation: 0, opacity: 255}, {pattern: 2, x: 16, y: -160, zoom: 80, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 16, y: 24, zoom: 110, rotation: 0, opacity: 255}, {pattern: 4, x: 16, y: 24, zoom: 100, rotation: 0, opacity: 200}, {pattern: 2, x: 16, y: -80, zoom: 70, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 16, y: 16, zoom: 120, rotation: 0, opacity: 200}, {pattern: 3, x: 16, y: 24, zoom: 100, rotation: 0, opacity: 150}, {pattern: 2, x: 16, y: -8, zoom: 70, rotation: 0, opacity: 255}, {pattern: 3, x: 8, y: 24, zoom: 80, rotation: 0, opacity: 150}, {pattern: 9, x: 8, y: 24, zoom: 70, rotation: 0, opacity: 150}],
		[{pattern: 9, x: 16, y: 24, zoom: 130, rotation: 0, opacity: 150}, {pattern: 4, x: 8, y: 24, zoom: 90, rotation: 0, opacity: 255}, {pattern: 9, x: 8, y: 24, zoom: 90, rotation: 0, opacity: 200}],
		[{pattern: 5, x: 8, y: 24, zoom: 100, rotation: 0, opacity: 200}, {pattern: 9, x: 8, y: 24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 8, y: 24, zoom: 100, rotation: 0, opacity: 150}, {pattern: 9, x: 8, y: 24, zoom: 110, rotation: 0, opacity: 110}],
		[{pattern: 9, x: 8, y: 24, zoom: 120, rotation: 0, opacity: 150}]
	]
},
          
/* ----------------------------------------------------------
* Animation #87
* Name : Gun-skill 1
* Number of frames : 13
* ----------------------------------------------------------- */
'Gun-skill 1': {
    name: 'Gun-skill 1',
    graphic: '011-Weapon06.png',
    sound: '177-Skill21.ogg',
    frames: [
		[{pattern: 12, x: 0, y: 160, zoom: 110, rotation: 0, opacity: 255}],
		[{pattern: 12, x: 0, y: 88, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 12, x: 0, y: 32, zoom: 80, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: 8, zoom: 80, rotation: 0, opacity: 200}, {pattern: 12, x: 0, y: 8, zoom: 60, rotation: 0, opacity: 255}],
		[{pattern: 5, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: 8, zoom: 120, rotation: 0, opacity: 200}, {pattern: 12, x: 32, y: -8, zoom: 60, rotation: 0, opacity: 255}, {pattern: 5, x: 32, y: -8, zoom: 50, rotation: 0, opacity: 255}],
		[{pattern: 5, x: 0, y: 8, zoom: 120, rotation: 0, opacity: 150}, {pattern: 4, x: 32, y: -8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 12, x: 8, y: 16, zoom: 80, rotation: 0, opacity: 255}],
		[{pattern: 5, x: 32, y: -8, zoom: 120, rotation: 0, opacity: 200}, {pattern: 12, x: 8, y: -8, zoom: 60, rotation: 0, opacity: 255}, {pattern: 5, x: 8, y: -8, zoom: 50, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 32, y: -8, zoom: 130, rotation: 0, opacity: 150}, {pattern: 4, x: 8, y: -8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: 8, y: -8, zoom: 120, rotation: 0, opacity: 200}, {pattern: 6, x: 8, y: 0, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 8, y: 0, zoom: 130, rotation: 0, opacity: 150}, {pattern: 6, x: 8, y: 0, zoom: 120, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 8, y: 0, zoom: 130, rotation: 0, opacity: 200}],
		[{pattern: 6, x: 8, y: 0, zoom: 140, rotation: 0, opacity: 150}]
	]
},
          
/* ----------------------------------------------------------
* Animation #88
* Name : Gun-skill 2
* Number of frames : 16
* ----------------------------------------------------------- */
'Gun-skill 2': {
    name: 'Gun-skill 2',
    graphic: '011-Weapon06.png',
    sound: '178-Skill22.ogg',
    frames: [
		[{pattern: 12, x: 0, y: 160, zoom: 110, rotation: 0, opacity: 255}],
		[{pattern: 12, x: 0, y: 88, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 12, x: 0, y: 32, zoom: 80, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: 8, zoom: 80, rotation: 0, opacity: 200}, {pattern: 12, x: 0, y: 32, zoom: 60, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: 8, zoom: 80, rotation: 0, opacity: 200}],
		[{pattern: 4, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 6, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: 8, zoom: 120, rotation: 0, opacity: 200}, {pattern: 6, x: 0, y: 8, zoom: 120, rotation: 0, opacity: 255}],
		[{pattern: 5, x: 0, y: 8, zoom: 150, rotation: 0, opacity: 150}, {pattern: 6, x: 0, y: 8, zoom: 140, rotation: 0, opacity: 200}],
		[{pattern: 6, x: 8, y: 8, zoom: 160, rotation: 0, opacity: 150}, {pattern: 7, x: 8, y: 16, zoom: 50, rotation: 0, opacity: 150}],
		[{pattern: 6, x: 8, y: 8, zoom: 160, rotation: 0, opacity: 150}, {pattern: 9, x: 8, y: 16, zoom: 50, rotation: 0, opacity: 150}],
		[{pattern: 10, x: 8, y: 16, zoom: 80, rotation: 0, opacity: 200}],
		[{pattern: 11, x: 8, y: 16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 10, x: 8, y: 16, zoom: 80, rotation: 0, opacity: 255}],
		[{pattern: 11, x: 8, y: 16, zoom: 90, rotation: 0, opacity: 255}],
		[{pattern: 10, x: 8, y: 16, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 11, x: 8, y: 16, zoom: 60, rotation: 0, opacity: 150}]
	]
},
          
/* ----------------------------------------------------------
* Animation #89
* Name : Gun-skill 3
* Number of frames : 18
* ----------------------------------------------------------- */
'Gun-skill 3': {
    name: 'Gun-skill 3',
    graphic: '011-Weapon06.png',
    sound: '179-Skill23.ogg',
    frames: [
		[{pattern: 12, x: 0, y: 160, zoom: 110, rotation: 0, opacity: 255}],
		[{pattern: 12, x: 0, y: 88, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 12, x: 0, y: 32, zoom: 80, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 8, y: 8, zoom: 80, rotation: 0, opacity: 200}, {pattern: 12, x: 0, y: 32, zoom: 60, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 8, y: 8, zoom: 80, rotation: 0, opacity: 200}],
		[{pattern: 4, x: 8, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 6, x: 8, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 8, y: 8, zoom: 120, rotation: 0, opacity: 200}, {pattern: 6, x: 8, y: 8, zoom: 120, rotation: 0, opacity: 255}],
		[{pattern: 5, x: 8, y: 8, zoom: 150, rotation: 0, opacity: 150}, {pattern: 6, x: 8, y: 8, zoom: 140, rotation: 0, opacity: 200}],
		[{pattern: 6, x: 8, y: 8, zoom: 160, rotation: 0, opacity: 150}, {pattern: 7, x: 8, y: 16, zoom: 50, rotation: 0, opacity: 150}],
		[{pattern: 7, x: 8, y: 16, zoom: 80, rotation: 0, opacity: 200}],
		[{pattern: 7, x: 8, y: 16, zoom: 90, rotation: 0, opacity: 255}, {pattern: 8, x: 8, y: 16, zoom: 50, rotation: 0, opacity: 150}],
		[{pattern: 7, x: 8, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: 8, y: 16, zoom: 80, rotation: 0, opacity: 200}],
		[{pattern: 7, x: 8, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: 8, y: 16, zoom: 90, rotation: 0, opacity: 255}],
		[{pattern: 7, x: 8, y: 16, zoom: 100, rotation: 0, opacity: 255}, {pattern: 8, x: 8, y: 16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 7, x: 8, y: 16, zoom: 100, rotation: 0, opacity: 200}, {pattern: 8, x: 8, y: 16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 7, x: 8, y: 16, zoom: 100, rotation: 0, opacity: 150}, {pattern: 8, x: 8, y: 16, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 7, x: 8, y: 16, zoom: 100, rotation: 0, opacity: 100}, {pattern: 8, x: 8, y: 16, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 8, x: 8, y: 16, zoom: 100, rotation: 0, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #90
* Name : Gun-skill 4
* Number of frames : 20
* ----------------------------------------------------------- */
'Gun-skill 4': {
    name: 'Gun-skill 4',
    graphic: '011-Weapon06.png',
    sound: '180-Skill24.ogg',
    frames: [
		[{pattern: 12, x: 0, y: 160, zoom: 110, rotation: 0, opacity: 255}],
		[{pattern: 12, x: 0, y: 88, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 12, x: 0, y: 32, zoom: 80, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 32, y: -32, zoom: 50, rotation: 0, opacity: 100}, {pattern: 12, x: 0, y: 32, zoom: 60, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 32, y: -32, zoom: 80, rotation: 0, opacity: 200}],
		[{pattern: 4, x: 32, y: -32, zoom: 100, rotation: 0, opacity: 255}, {pattern: 5, x: -8, y: 8, zoom: 50, rotation: 0, opacity: 100}, {pattern: 6, x: 32, y: -32, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 32, y: -32, zoom: 120, rotation: 0, opacity: 150}, {pattern: 5, x: -8, y: 8, zoom: 80, rotation: 0, opacity: 200}, {pattern: 6, x: 32, y: -32, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: -8, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 4, x: 32, y: 48, zoom: 50, rotation: 0, opacity: 100}, {pattern: 6, x: 32, y: -32, zoom: 100, rotation: 0, opacity: 150}, {pattern: 6, x: -8, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 5, x: -8, y: 8, zoom: 120, rotation: 0, opacity: 150}, {pattern: 4, x: 32, y: 48, zoom: 80, rotation: 0, opacity: 200}, {pattern: 6, x: -8, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 32, y: 48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 6, x: -8, y: 8, zoom: 100, rotation: 0, opacity: 150}, {pattern: 6, x: 32, y: 48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 4, x: 0, y: -32, zoom: 50, rotation: 0, opacity: 100}],
		[{pattern: 4, x: 32, y: 48, zoom: 120, rotation: 0, opacity: 150}, {pattern: 6, x: 32, y: 48, zoom: 100, rotation: 0, opacity: 255}, {pattern: 4, x: 0, y: -32, zoom: 80, rotation: 0, opacity: 150}],
		[{pattern: 6, x: 32, y: 48, zoom: 100, rotation: 0, opacity: 150}, {pattern: 5, x: 0, y: -32, zoom: 100, rotation: 0, opacity: 255}, {pattern: 6, x: 0, y: -32, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 0, y: -32, zoom: 100, rotation: 0, opacity: 255}, {pattern: 6, x: 0, y: -32, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 0, y: -32, zoom: 100, rotation: 0, opacity: 150}, {pattern: 4, x: 8, y: 8, zoom: 50, rotation: 0, opacity: 100}],
		[{pattern: 4, x: 8, y: 8, zoom: 80, rotation: 0, opacity: 150}],
		[{pattern: 5, x: 8, y: 8, zoom: 100, rotation: 0, opacity: 255}, {pattern: 6, x: 8, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 8, y: 8, zoom: 120, rotation: 0, opacity: 255}, {pattern: 6, x: 8, y: 8, zoom: 110, rotation: 0, opacity: 255}],
		[{pattern: 5, x: 8, y: 8, zoom: 140, rotation: 0, opacity: 200}, {pattern: 6, x: 8, y: 8, zoom: 120, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 8, y: 8, zoom: 130, rotation: 0, opacity: 150}],
		[{pattern: 6, x: 8, y: 8, zoom: 130, rotation: 0, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #91
* Name : ST Venom
* Number of frames : 6
* ----------------------------------------------------------- */
'ST Venom': {
    name: 'ST Venom',
    graphic: '028-State01.png',
    sound: '',
    frames: [
		[{pattern: 1, x: 24, y: 8, zoom: 20, rotation: 0, opacity: 255}],
		[{pattern: 1, x: -16, y: -8, zoom: 20, rotation: 0, opacity: 255}, {pattern: 1, x: -24, y: 16, zoom: 20, rotation: 0, opacity: 255}, {pattern: 1, x: 32, y: 0, zoom: 20, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 40, y: -8, zoom: 20, rotation: 0, opacity: 255}, {pattern: 1, x: -16, y: -24, zoom: 20, rotation: 0, opacity: 255}, {pattern: 1, x: -32, y: 8, zoom: 20, rotation: 0, opacity: 255}, {pattern: 1, x: 32, y: 32, zoom: 20, rotation: 0, opacity: 255}],
		[{pattern: 1, x: -8, y: -32, zoom: 20, rotation: 0, opacity: 255}, {pattern: 1, x: 32, y: -16, zoom: 20, rotation: 0, opacity: 255}, {pattern: 1, x: -32, y: -8, zoom: 20, rotation: 0, opacity: 255}, {pattern: 1, x: 32, y: 24, zoom: 20, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: -40, zoom: 30, rotation: 0, opacity: 180}, {pattern: 1, x: 24, y: -24, zoom: 30, rotation: 0, opacity: 180}, {pattern: 1, x: -32, y: -16, zoom: 30, rotation: 0, opacity: 180}, {pattern: 1, x: 24, y: 8, zoom: 20, rotation: 0, opacity: 255}],
		[{pattern: 1, x: 0, y: -56, zoom: 30, rotation: 0, opacity: 80}, {pattern: 1, x: 24, y: -40, zoom: 30, rotation: 0, opacity: 80}, {pattern: 1, x: -32, y: -24, zoom: 30, rotation: 0, opacity: 80}, {pattern: 1, x: 24, y: -8, zoom: 30, rotation: 0, opacity: 180}]
	]
},
          
/* ----------------------------------------------------------
* Animation #92
* Name : ST Dazzle
* Number of frames : 8
* ----------------------------------------------------------- */
'ST Dazzle': {
    name: 'ST Dazzle',
    graphic: '028-State01.png',
    sound: '',
    frames: [
		[{pattern: 2, x: 0, y: -24, zoom: 50, rotation: 0, opacity: 180}, {pattern: 5, x: 0, y: -24, zoom: 100, rotation: 0, opacity: 120}],
		[{pattern: 2, x: 0, y: -24, zoom: 50, rotation: 45, opacity: 180}, {pattern: 5, x: 0, y: -24, zoom: 100, rotation: 0, opacity: 120}],
		[{pattern: 2, x: 0, y: -24, zoom: 50, rotation: 90, opacity: 180}, {pattern: 5, x: 0, y: -24, zoom: 100, rotation: 0, opacity: 120}],
		[{pattern: 2, x: 0, y: -24, zoom: 50, rotation: 135, opacity: 180}, {pattern: 5, x: 0, y: -24, zoom: 100, rotation: 0, opacity: 120}],
		[{pattern: 2, x: 0, y: -24, zoom: 50, rotation: 180, opacity: 180}, {pattern: 5, x: 0, y: -24, zoom: 100, rotation: 0, opacity: 120}],
		[{pattern: 2, x: 0, y: -24, zoom: 50, rotation: 225, opacity: 180}, {pattern: 5, x: 0, y: -24, zoom: 100, rotation: 0, opacity: 120}],
		[{pattern: 2, x: 0, y: -24, zoom: 50, rotation: 270, opacity: 180}, {pattern: 5, x: 0, y: -24, zoom: 100, rotation: 0, opacity: 120}],
		[{pattern: 2, x: 0, y: -24, zoom: 50, rotation: 315, opacity: 180}, {pattern: 5, x: 0, y: -24, zoom: 100, rotation: 0, opacity: 120}]
	]
},
          
/* ----------------------------------------------------------
* Animation #93
* Name : ST Mute
* Number of frames : 4
* ----------------------------------------------------------- */
'ST Mute': {
    name: 'ST Mute',
    graphic: '028-State01.png',
    sound: '',
    frames: [
		[{pattern: 3, x: 40, y: -8, zoom: 50, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 48, y: -16, zoom: 50, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 40, y: -24, zoom: 50, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 32, y: -24, zoom: 50, rotation: 0, opacity: 255}]
	]
},
          
/* ----------------------------------------------------------
* Animation #94
* Name : ST Confuse
* Number of frames : 8
* ----------------------------------------------------------- */
'ST Confuse': {
    name: 'ST Confuse',
    graphic: '028-State01.png',
    sound: '',
    frames: [
		[{pattern: 7, x: 0, y: -32, zoom: 70, rotation: 0, opacity: 255}, {pattern: 8, x: -48, y: -40, zoom: 30, rotation: 45, opacity: 255}, {pattern: 8, x: 24, y: -72, zoom: 20, rotation: 0, opacity: 255}, {pattern: 8, x: 40, y: -32, zoom: 30, rotation: 250, opacity: 255}],
		[{pattern: 7, x: 0, y: -32, zoom: 70, rotation: 0, opacity: 180}, {pattern: 8, x: 56, y: -48, zoom: 25, rotation: 15, opacity: 255}, {pattern: 8, x: -24, y: -72, zoom: 20, rotation: 0, opacity: 255}, {pattern: 8, x: -16, y: -32, zoom: 30, rotation: 0, opacity: 255}],
		[{pattern: 7, x: 0, y: -32, zoom: 70, rotation: 0, opacity: 255}, {pattern: 8, x: 32, y: -64, zoom: 20, rotation: 0, opacity: 255}, {pattern: 8, x: -56, y: -56, zoom: 25, rotation: 0, opacity: 255}, {pattern: 8, x: 24, y: -32, zoom: 30, rotation: 0, opacity: 255}],
		[{pattern: 7, x: 0, y: -32, zoom: 70, rotation: 0, opacity: 180}, {pattern: 8, x: 48, y: -40, zoom: 25, rotation: 45, opacity: 255}, {pattern: 8, x: -8, y: -72, zoom: 20, rotation: 80, opacity: 255}, {pattern: 8, x: -32, y: -40, zoom: 30, rotation: 38, opacity: 255}],
		[{pattern: 7, x: 0, y: -32, zoom: 70, rotation: 0, opacity: 255}, {pattern: 8, x: 40, y: -64, zoom: 20, rotation: 0, opacity: 255}, {pattern: 8, x: -48, y: -64, zoom: 20, rotation: 0, opacity: 255}, {pattern: 8, x: -8, y: -32, zoom: 30, rotation: 90, opacity: 255}],
		[{pattern: 7, x: 0, y: -32, zoom: 70, rotation: 0, opacity: 180}],
		[{pattern: 7, x: 0, y: -32, zoom: 70, rotation: 0, opacity: 255}],
		[{pattern: 7, x: 0, y: -32, zoom: 70, rotation: 0, opacity: 180}]
	]
},
          
/* ----------------------------------------------------------
* Animation #95
* Name : ST Sleep
* Number of frames : 10
* ----------------------------------------------------------- */
'ST Sleep': {
    name: 'ST Sleep',
    graphic: '028-State01.png',
    sound: '',
    frames: [
		[{pattern: 9, x: -16, y: -8, zoom: 20, rotation: 0, opacity: 180}],
		[{pattern: 9, x: -24, y: -16, zoom: 30, rotation: 0, opacity: 220}],
		[{pattern: 9, x: -32, y: -32, zoom: 40, rotation: 0, opacity: 255}],
		[{pattern: 9, x: -40, y: -40, zoom: 50, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 32, y: 8, zoom: 20, rotation: 0, opacity: 255}, {pattern: 9, x: -48, y: -48, zoom: 60, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 40, y: 0, zoom: 30, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 40, y: -8, zoom: 40, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 40, y: -16, zoom: 50, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 48, y: -24, zoom: 60, rotation: 0, opacity: 180}],
		[{pattern: 9, x: 48, y: -32, zoom: 70, rotation: 0, opacity: 80}]
	]
},
          
/* ----------------------------------------------------------
* Animation #96
* Name : ST Paralyze
* Number of frames : 6
* ----------------------------------------------------------- */
'ST Paralyze': {
    name: 'ST Paralyze',
    graphic: '028-State01.png',
    sound: '',
    frames: [
		[{pattern: 6, x: 24, y: 8, zoom: 20, rotation: 0, opacity: 255}],
		[{pattern: 6, x: -16, y: -8, zoom: 20, rotation: 0, opacity: 255}, {pattern: 6, x: -24, y: 16, zoom: 20, rotation: 0, opacity: 255}, {pattern: 6, x: 32, y: 0, zoom: 20, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 40, y: -8, zoom: 20, rotation: 0, opacity: 255}, {pattern: 6, x: -16, y: -24, zoom: 20, rotation: 0, opacity: 255}, {pattern: 6, x: -32, y: 8, zoom: 20, rotation: 0, opacity: 255}, {pattern: 6, x: 32, y: 32, zoom: 20, rotation: 0, opacity: 255}],
		[{pattern: 6, x: -8, y: -32, zoom: 20, rotation: 0, opacity: 255}, {pattern: 6, x: 32, y: -16, zoom: 20, rotation: 0, opacity: 255}, {pattern: 6, x: -32, y: -8, zoom: 20, rotation: 0, opacity: 255}, {pattern: 6, x: 32, y: 24, zoom: 20, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 0, y: -40, zoom: 30, rotation: 0, opacity: 180}, {pattern: 6, x: 24, y: -24, zoom: 30, rotation: 0, opacity: 180}, {pattern: 6, x: -32, y: -16, zoom: 30, rotation: 0, opacity: 180}, {pattern: 6, x: 24, y: 8, zoom: 20, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 0, y: -56, zoom: 30, rotation: 0, opacity: 80}, {pattern: 6, x: 24, y: -40, zoom: 30, rotation: 0, opacity: 80}, {pattern: 6, x: -32, y: -24, zoom: 30, rotation: 0, opacity: 80}, {pattern: 6, x: 24, y: -8, zoom: 30, rotation: 0, opacity: 180}]
	]
},
          
/* ----------------------------------------------------------
* Animation #97
* Name : EM Question
* Number of frames : 12
* ----------------------------------------------------------- */
'EM Question': {
    name: 'EM Question',
    graphic: '029-Emotion01.png',
    sound: '015-Jump01.ogg',
    frames: [
		[{pattern: 1, x: 8, y: -16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: 8, y: -16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: 8, y: -16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 8, y: -16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 8, y: -16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 8, y: -16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 8, y: -16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 8, y: -16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 8, y: -16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 8, y: -16, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 4, x: 8, y: -16, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 4, x: 8, y: -16, zoom: 100, rotation: 0, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #98
* Name : EM Exclamation
* Number of frames : 9
* ----------------------------------------------------------- */
'EM Exclamation': {
    name: 'EM Exclamation',
    graphic: '029-Emotion01.png',
    sound: '015-Jump01.ogg',
    frames: [
		[{pattern: 5, x: 8, y: -16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 6, x: 8, y: -24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 7, x: 8, y: -32, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 8, x: 8, y: -40, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 8, x: 8, y: -32, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 8, x: 8, y: -24, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 8, x: 8, y: -16, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 8, x: 8, y: -16, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 8, x: 8, y: -16, zoom: 100, rotation: 0, opacity: 100}]
	]
},
          
/* ----------------------------------------------------------
* Animation #99
* Name : Explosion 1
* Number of frames : 13
* ----------------------------------------------------------- */
'Explosion 1': {
    name: 'Explosion 1',
    graphic: '030-Explosion01.png',
    sound: '050-Explosion03.ogg',
    frames: [
		[{pattern: 1, x: -16, y: -32, zoom: 80, rotation: 0, opacity: 150}],
		[{pattern: 1, x: -16, y: -32, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 2, x: -16, y: -32, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 40, y: 56, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 3, x: -16, y: -32, zoom: 110, rotation: 0, opacity: 255}, {pattern: 1, x: 40, y: 56, zoom: 80, rotation: 0, opacity: 150}],
		[{pattern: 4, x: -16, y: -32, zoom: 120, rotation: 0, opacity: 255}, {pattern: 2, x: 40, y: 56, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: -16, y: -32, zoom: 130, rotation: 0, opacity: 150}, {pattern: 3, x: 40, y: 56, zoom: 110, rotation: 0, opacity: 255}, {pattern: 1, x: -16, y: 56, zoom: 80, rotation: 0, opacity: 150}],
		[{pattern: 4, x: 40, y: 56, zoom: 120, rotation: 0, opacity: 255}, {pattern: 1, x: -16, y: 56, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 40, y: 56, zoom: 130, rotation: 0, opacity: 150}, {pattern: 2, x: -16, y: 56, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 32, y: -16, zoom: 80, rotation: 0, opacity: 150}],
		[{pattern: 3, x: -16, y: 56, zoom: 110, rotation: 0, opacity: 255}, {pattern: 1, x: 32, y: -16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: -16, y: 56, zoom: 120, rotation: 0, opacity: 255}, {pattern: 2, x: 32, y: -16, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 4, x: -16, y: 56, zoom: 130, rotation: 0, opacity: 150}, {pattern: 3, x: 32, y: -16, zoom: 110, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 32, y: -16, zoom: 120, rotation: 0, opacity: 255}],
		[{pattern: 4, x: 32, y: -16, zoom: 130, rotation: 0, opacity: 150}]
	]
},
          
/* ----------------------------------------------------------
* Animation #100
* Name : Explosion 2
* Number of frames : 30
* ----------------------------------------------------------- */
'Explosion 2': {
    name: 'Explosion 2',
    graphic: '030-Explosion01.png',
    sound: '051-Explosion04.ogg',
    frames: [
		[{pattern: 8, x: 0, y: -8, zoom: 400, rotation: 0, opacity: 150}],
		[{pattern: 8, x: 0, y: -16, zoom: 350, rotation: 0, opacity: 150}],
		[{pattern: 8, x: 0, y: 0, zoom: 300, rotation: 0, opacity: 150}],
		[{pattern: 8, x: 0, y: 24, zoom: 250, rotation: 0, opacity: 150}],
		[{pattern: 8, x: 0, y: 8, zoom: 200, rotation: 0, opacity: 150}],
		[{pattern: 8, x: 0, y: 8, zoom: 150, rotation: 0, opacity: 150}],
		[{pattern: 8, x: 0, y: 8, zoom: 120, rotation: 0, opacity: 150}],
		[{pattern: 8, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 8, x: 0, y: 8, zoom: 80, rotation: 0, opacity: 150}],
		[{pattern: 8, x: 0, y: 8, zoom: 60, rotation: 0, opacity: 150}],
		[{pattern: 8, x: 0, y: 8, zoom: 40, rotation: 0, opacity: 150}],
		[{pattern: 8, x: 0, y: 8, zoom: 20, rotation: 0, opacity: 150}, {pattern: 9, x: 0, y: 8, zoom: 100, rotation: 0, opacity: 255}],
		[{pattern: 9, x: 0, y: 8, zoom: 150, rotation: 0, opacity: 200}],
		[{pattern: 9, x: 0, y: 8, zoom: 200, rotation: 0, opacity: 150}],
		[{pattern: 9, x: -8, y: 8, zoom: 250, rotation: 0, opacity: 100}, {pattern: 1, x: 0, y: 32, zoom: 110, rotation: 0, opacity: 150}],
		[{pattern: 1, x: 0, y: 32, zoom: 150, rotation: 0, opacity: 200}],
		[{pattern: 1, x: 0, y: 32, zoom: 180, rotation: 0, opacity: 255}, {pattern: 5, x: 8, y: 24, zoom: 100, rotation: 0, opacity: 150}],
		[{pattern: 1, x: 0, y: 32, zoom: 200, rotation: 0, opacity: 150}, {pattern: 5, x: 8, y: 24, zoom: 130, rotation: 0, opacity: 150}],
		[{pattern: 5, x: 8, y: 32, zoom: 180, rotation: 0, opacity: 200}],
		[{pattern: 5, x: 8, y: 24, zoom: 200, rotation: 0, opacity: 255}, {pattern: 6, x: 8, y: 24, zoom: 120, rotation: 0, opacity: 110}, {pattern: 1, x: -136, y: 128, zoom: 60, rotation: 0, opacity: 150}],
		[{pattern: 5, x: 8, y: 24, zoom: 220, rotation: 0, opacity: 200}, {pattern: 6, x: 16, y: 32, zoom: 130, rotation: 0, opacity: 150}, {pattern: 1, x: -136, y: 128, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 5, x: 8, y: 24, zoom: 240, rotation: 0, opacity: 100}, {pattern: 6, x: 16, y: 32, zoom: 150, rotation: 0, opacity: 200}, {pattern: 2, x: -136, y: 128, zoom: 100, rotation: 0, opacity: 255}, {pattern: 1, x: 152, y: -104, zoom: 60, rotation: 0, opacity: 150}],
		[{pattern: 7, x: 8, y: 24, zoom: 200, rotation: 0, opacity: 150}, {pattern: 6, x: 8, y: 24, zoom: 200, rotation: 0, opacity: 255}, {pattern: 2, x: -136, y: 128, zoom: 100, rotation: 0, opacity: 255}, {pattern: 3, x: -136, y: 128, zoom: 120, rotation: 0, opacity: 255}, {pattern: 1, x: 144, y: -104, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 7, x: 8, y: 24, zoom: 220, rotation: 0, opacity: 200}, {pattern: 6, x: 8, y: 24, zoom: 220, rotation: 0, opacity: 255}, {pattern: 3, x: -136, y: 128, zoom: 100, rotation: 0, opacity: 255}, {pattern: 4, x: -136, y: 128, zoom: 120, rotation: 0, opacity: 255}, {pattern: 2, x: 144, y: -104, zoom: 120, rotation: 0, opacity: 255}, {pattern: 1, x: -224, y: -80, zoom: 60, rotation: 0, opacity: 150}],
		[{pattern: 7, x: 8, y: 32, zoom: 250, rotation: 0, opacity: 255}, {pattern: 6, x: 8, y: 32, zoom: 250, rotation: 0, opacity: 200}, {pattern: 4, x: -136, y: 128, zoom: 130, rotation: 0, opacity: 255}, {pattern: 2, x: 144, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 3, x: 144, y: -104, zoom: 130, rotation: 0, opacity: 255}, {pattern: 1, x: -224, y: -72, zoom: 100, rotation: 0, opacity: 200}],
		[{pattern: 7, x: 16, y: 24, zoom: 290, rotation: 0, opacity: 200}, {pattern: 6, x: 16, y: 32, zoom: 280, rotation: 0, opacity: 150}, {pattern: 4, x: -136, y: 128, zoom: 140, rotation: 0, opacity: 200}, {pattern: 3, x: 144, y: -104, zoom: 100, rotation: 0, opacity: 255}, {pattern: 4, x: 144, y: -104, zoom: 130, rotation: 0, opacity: 255}, {pattern: 2, x: -224, y: -80, zoom: 130, rotation: 0, opacity: 255}],
		[{pattern: 7, x: 8, y: 8, zoom: 320, rotation: 0, opacity: 255}, {pattern: 6, x: 8, y: 32, zoom: 300, rotation: 0, opacity: 100}, {pattern: 4, x: 144, y: -104, zoom: 140, rotation: 0, opacity: 200}, {pattern: 2, x: -224, y: -80, zoom: 100, rotation: 0, opacity: 255}, {pattern: 3, x: -224, y: -80, zoom: 140, rotation: 0, opacity: 255}],
		[{pattern: 7, x: 8, y: 8, zoom: 330, rotation: 0, opacity: 200}, {pattern: 3, x: -224, y: -80, zoom: 140, rotation: 0, opacity: 150}, {pattern: 4, x: -224, y: -80, zoom: 130, rotation: 0, opacity: 255}],
		[{pattern: 7, x: 8, y: 8, zoom: 350, rotation: 0, opacity: 150}, {pattern: 4, x: -224, y: -80, zoom: 140, rotation: 0, opacity: 255}],
		[{pattern: 7, x: 8, y: 16, zoom: 380, rotation: 0, opacity: 100}, {pattern: 4, x: -224, y: -80, zoom: 150, rotation: 0, opacity: 200}]
	]
}
}