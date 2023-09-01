//=============================================================================
// Map Properties
// For RPG Maker MZ
// By Tyruswoo
//=============================================================================

/*
 * MIT License
 *
 * Copyright (c) 2023 Kathy Bunn and Scott Tyrus Washburn
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

var Imported = Imported || {};
Imported.Tyruswoo_MapProperties = true;

var Tyruswoo = Tyruswoo || {};
Tyruswoo.MapProperties = Tyruswoo.MapProperties || {};

/*:
 * @target MZ
 * @plugindesc v1.0.1 Allows using switches to control Map Properties, including switchable parallaxes and switchable background music.
 * @author Tyruswoo
 * @url https://www.tyruswoo.com
 *
 * @help Tyruswoo Map Properties for RPG Maker MZ
 * ============================================================================
 * Plugin commands, their arguments, and short explanations:
 *
 * Save Parallax Position          Save the current location of scrolling of
 *                                 the parallax. (Parallax background must
 *                                 exist, and map must be using the Loop
 *                                 Horizontally and/or Loop Vertically feature
 *                                 with a scroll value other than 0, in order
 *                                 for this plugin command to do anything.)
 *                                 This is not included in player save files.
 *
 * Load Parallax Position          Load the location of scrolling of the
 *                                 parallax, from the most recently saved
 *                                 parallax location.
 * ============================================================================
 * Plugin parameters, their arguments, and short explanations:
 *
 * Parallax Switch              A list of alternative parallaxes to be used
 *                              when certain switches are on. (Later in list
 *                              takes precedence if the same default parallax
 *                              is used multiple times.)
 *  - Default Parallax          The name of the parallax image, as listed in
 *                              the map's Parallax Background image selection.
 *                              (Do not include file extension.)
 *  - Switch                    Switch ID number for the switch that must be On
 *                              for the alternative parallax to be used instead
 *                              of the default parallax.
 *  - Alternative Parallax      The name of the alternative parallax image to
 *                              use when the switch is On. (Do not include file
 *                              extension.)
 *  - Affected Maps             Select which maps will be affected by this
 *                              parallax alternative. By default, all maps are
 *                              affected. Other options include affecting all
 *                              maps except certain selected maps, or affecting
 *                              only the selected maps.
 *     > Selected Maps          Choose which maps will have special rules
 *                              applied for this parallax alternative.
 *
 * Background Music Switch      A list of alternative background musics to be
 *                              used when certain switches are on. (Later in
 *                              list takes precedence if the same default music
 *                              is used multiple times.)
 *  - Default Music             The name of the map's default background music
 *                              (Autoplay BGM) as found in the map properties.
 *  - Switch                    Switch ID number for the switch that must be On
 *                              for the alternative background music to be used
 *                              instead of the default background music.
 *  - Alternative Music         The name of the alternative background music to
 *                              use when the switch is On. (Do not include file
 *                              extension.)
 *  - Affected Maps             Select which maps will be affected by this
 *                              background music alternative. By default, all
 *                              maps are affected. Other options include
 *                              affecting all maps except certain selected
 *                              maps, or affecting only the selected maps.
 *     > Selected Maps          Choose which maps will have special rules
 *                              applied for this background music alternative.
 * ============================================================================
 * Example features:
 *  - Make a different parallax appear in the same map, based on whether a
 *    certain switch in On. This can be done by changing the Parallax
 *    Alternative plugin parameter.
 *  - Keep the same parallax scrolling position even when transferring between
 *    maps! Use the Save Parallax Position plugin command just prior to player
 *    transfer and the Load Parallax Position plugin command immediately after
 *    player transfer; this allows the new map's parallax background to be at
 *    the same point of scrolling as the previous map's parallax background.
 *    (This is useful if the maps both have a parallax image and both use
 *    Loop Horizontally and/or Loop Vertically with a scroll value greater than
 *    or less than 0.)
 * ============================================================================
 * For more help using the Map Properties plugin, see Tyruswoo.com.
 * ============================================================================
 * Version History:
 *
 * v1.0  10/9/2020
 *        - Map Properties released for RPG Maker MZ!
 * 
 * v1.0.1  8/31/2023
 *        - This plugin is now free and open source under the MIT license.
 * 
 * ============================================================================
 * MIT License
 *
 * Copyright (c) 2023 Kathy Bunn and Scott Tyrus Washburn
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the “Software”), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 * ============================================================================
 * Remember, only you can build your dreams!
 * -Tyruswoo
 *
 * @param Parallax Switch
 * @type struct<parallaxSwitch>[]
 * @desc For given parallax images, if switch is active, use alternative parallax. Later in list takes precedence.
 *
 * @param Background Music Switch
 * @type struct<bgmSwitch>[]
 * @desc For given background music, if switch is active, use alternative music. Later in list takes precedence.
 *
 * @command save_parallax_position
 * @text Save Parallax Position
 * @desc Saves the current X and Y of the parallax's scroll position.
 *
 * @command load_parallax_position
 * @text Load Parallax Position
 * @desc Loads the saved X and Y of the parallax's scroll position.
 */

/*~struct~parallaxSwitch:
 * @param p
 * @text Default Parallax
 * @desc Name of the default parallax image. (Do not include file extension.)
 *
 * @param switch
 * @text Switch
 * @type switch
 * @min 1
 * @desc If this switch is On, then alternative parallax will be used.
 *
 * @param alt
 * @text Alternative Parallax
 * @desc Name of the alternative parallax. (Do not include file extension.)
 *
 * @param map_mode
 * @text Affected Maps
 * @type select
 * @option All Maps
 * @option All Maps Except Selected Maps
 * @option Only Selected Maps
 * @default All Maps
 * @desc Choose how this alternative parallax will apply to maps.
 *
 * @param map_id
 * @parent map_mode
 * @text Selected Map IDs
 * @type number[]
 * @min 1
 * @desc Selected Map ID to use in determining how to apply this alternative parallax.
 */

/*~struct~bgmSwitch:
 * @param m
 * @text Default Music
 * @desc Name of the default background music. (Do not include file extension.)
 *
 * @param switch
 * @text Switch
 * @type switch
 * @min 1
 * @desc If this switch is On, then alternative background music will be used.
 *
 * @param alt
 * @text Alternative Music
 * @desc Name of the alternative background music. (Do not include file extension.)
 *
 * @param map_mode
 * @text Affected Maps
 * @type select
 * @option All Maps
 * @option All Maps Except Selected Maps
 * @option Only Selected Maps
 * @default All Maps
 * @desc Choose how this alternative background music will apply to maps.
 *
 * @param map_id
 * @parent map_mode
 * @text Selected Map IDs
 * @type number[]
 * @min 1
 * @desc Selected Map ID to use in determining how to apply this alternative background music.
 */

(() => {
    const pluginName = "Tyruswoo_MapProperties";

	Tyruswoo.MapProperties.parameters = PluginManager.parameters(pluginName);
	Tyruswoo.MapProperties.param = Tyruswoo.MapProperties.param || {};
	
	// User-Defined Plugin Parameters
	Tyruswoo.MapProperties.param.parallaxSwitch = Tyruswoo.MapProperties.parameters['Parallax Switch'] ? JSON.parse(Tyruswoo.MapProperties.parameters['Parallax Switch']) : null;
	if(Tyruswoo.MapProperties.param.parallaxSwitch) {
		for(i = 0; i < Tyruswoo.MapProperties.param.parallaxSwitch.length; i++) {
			Tyruswoo.MapProperties.param.parallaxSwitch[i] = Tyruswoo.MapProperties.param.parallaxSwitch[i] ? JSON.parse(Tyruswoo.MapProperties.param.parallaxSwitch[i]) : null;
			if(Tyruswoo.MapProperties.param.parallaxSwitch[i]) {
				Tyruswoo.MapProperties.param.parallaxSwitch[i].switch = Tyruswoo.MapProperties.param.parallaxSwitch[i].switch ? Number(Tyruswoo.MapProperties.param.parallaxSwitch[i].switch) : 0;
				Tyruswoo.MapProperties.param.parallaxSwitch[i].map_id = Tyruswoo.MapProperties.param.parallaxSwitch[i].map_id ? JSON.parse(Tyruswoo.MapProperties.param.parallaxSwitch[i].map_id) : null;
				if(Tyruswoo.MapProperties.param.parallaxSwitch[i].map_id && Tyruswoo.MapProperties.param.parallaxSwitch[i].map_id.length) {
					for(j = 0; j < Tyruswoo.MapProperties.param.parallaxSwitch[i].map_id.length; j++) {
						Tyruswoo.MapProperties.param.parallaxSwitch[i].map_id[j] = Tyruswoo.MapProperties.param.parallaxSwitch[i].map_id[j] ? Number(Tyruswoo.MapProperties.param.parallaxSwitch[i].map_id[j]) : 0;
					};
				};
			};
		};
	};
	Tyruswoo.MapProperties.param.bgmSwitch = Tyruswoo.MapProperties.parameters['Background Music Switch'] ? JSON.parse(Tyruswoo.MapProperties.parameters['Background Music Switch']) : null;
	if(Tyruswoo.MapProperties.param.bgmSwitch) {
		for(i = 0; i < Tyruswoo.MapProperties.param.bgmSwitch.length; i++) {
			Tyruswoo.MapProperties.param.bgmSwitch[i] = Tyruswoo.MapProperties.param.bgmSwitch[i] ? JSON.parse(Tyruswoo.MapProperties.param.bgmSwitch[i]) : null;
			if(Tyruswoo.MapProperties.param.bgmSwitch[i]) {
				Tyruswoo.MapProperties.param.bgmSwitch[i].switch = Tyruswoo.MapProperties.param.bgmSwitch[i].switch ? Number(Tyruswoo.MapProperties.param.bgmSwitch[i].switch) : 0;
				Tyruswoo.MapProperties.param.bgmSwitch[i].map_id = Tyruswoo.MapProperties.param.bgmSwitch[i].map_id ? JSON.parse(Tyruswoo.MapProperties.param.bgmSwitch[i].map_id) : null;
				if(Tyruswoo.MapProperties.param.bgmSwitch[i].map_id && Tyruswoo.MapProperties.param.bgmSwitch[i].map_id.length) {
					for(j = 0; j < Tyruswoo.MapProperties.param.bgmSwitch[i].map_id.length; j++) {
						Tyruswoo.MapProperties.param.bgmSwitch[i].map_id[j] = Tyruswoo.MapProperties.param.bgmSwitch[i].map_id[j] ? Number(Tyruswoo.MapProperties.param.bgmSwitch[i].map_id[j]) : 0;
					};
				};
			};
		};
	};

	// Variables
	Tyruswoo.MapProperties._parallaxX = 0;
	Tyruswoo.MapProperties._parallaxY = 0;

	//=============================================================================
	// PluginManager
	//=============================================================================

	// save_parallax_position
	PluginManager.registerCommand(pluginName, "save_parallax_position", args => {
		Tyruswoo.MapProperties._parallaxX = $gameMap._parallaxX;
		Tyruswoo.MapProperties._parallaxY = $gameMap._parallaxY;
	});
	
	// load_parallax_position
	PluginManager.registerCommand(pluginName, "load_parallax_position", args => {
		$gameMap._parallaxX = Tyruswoo.MapProperties._parallaxX;
		$gameMap._parallaxY = Tyruswoo.MapProperties._parallaxY;
	});

	//=============================================================================
	// Game_Map
	//=============================================================================
	
	//Replacement method
	Game_Map.prototype.setupParallax = function() {
		this._parallaxName = $dataMap.parallaxName || "";
		if(this._parallaxName && Tyruswoo.MapProperties.param.parallaxSwitch) {
			var altParallaxName = this._parallaxName;
			for(i = 0; i < Tyruswoo.MapProperties.param.parallaxSwitch.length; i++) {
				if(Tyruswoo.MapProperties.param.parallaxSwitch[i].p == this._parallaxName) {
					var mapQualifies = true;
					switch(Tyruswoo.MapProperties.param.parallaxSwitch[i].map_mode) {
						case "Only Selected Maps":
							mapQualifies = false;
							for(j = 0; j < Tyruswoo.MapProperties.param.parallaxSwitch[i].map_id.length; j++) {
								if(this.mapId() == Tyruswoo.MapProperties.param.parallaxSwitch[i].map_id[j]) {mapQualifies = true;};
							};
							break;
						case "All Maps Except Selected Maps":
							for(j = 0; j < Tyruswoo.MapProperties.param.parallaxSwitch[i].map_id.length; j++) {
								if(this.mapId() == Tyruswoo.MapProperties.param.parallaxSwitch[i].map_id[j]) {mapQualifies = false;};
							};
							break;
					};
					if(mapQualifies) {
						const switchId = Tyruswoo.MapProperties.param.parallaxSwitch[i].switch ? Tyruswoo.MapProperties.param.parallaxSwitch[i].switch : 0;
						if(switchId && $gameSwitches.value(switchId) == true && Tyruswoo.MapProperties.param.parallaxSwitch[i].alt) {
							altParallaxName = Tyruswoo.MapProperties.param.parallaxSwitch[i].alt;
						};
					};
				}
			};
			this._parallaxName = altParallaxName;
		};
		this._parallaxZero = ImageManager.isZeroParallax(this._parallaxName);
		this._parallaxLoopX = $dataMap.parallaxLoopX;
		this._parallaxLoopY = $dataMap.parallaxLoopY;
		this._parallaxSx = $dataMap.parallaxSx;
		this._parallaxSy = $dataMap.parallaxSy;
		this._parallaxX = 0;
		this._parallaxY = 0;
	};
	
	// Replacement method
	Game_Map.prototype.autoplay = function() {
		if ($dataMap.autoplayBgm) {
			if ($gamePlayer.isInVehicle()) {
				$gameSystem.saveWalkingBgm2();
			} else {
				var music = $dataMap.bgm;
				if(music && music.name && Tyruswoo.MapProperties.param.bgmSwitch) {
					var altMusicName = music.name;
					for(i = 0; i < Tyruswoo.MapProperties.param.bgmSwitch.length; i++) {
						if(Tyruswoo.MapProperties.param.bgmSwitch[i].m == music.name) {
							var mapQualifies = true;
							switch(Tyruswoo.MapProperties.param.bgmSwitch[i].map_mode) {
								case "Only Selected Maps":
									mapQualifies = false;
									for(j = 0; j < Tyruswoo.MapProperties.param.bgmSwitch[i].map_id.length; j++) {
										if(this.mapId() == Tyruswoo.MapProperties.param.bgmSwitch[i].map_id[j]) {mapQualifies = true;};
									};
									break;
								case "All Maps Except Selected Maps":
									for(j = 0; j < Tyruswoo.MapProperties.param.bgmSwitch[i].map_id.length; j++) {
										if(this.mapId() == Tyruswoo.MapProperties.param.bgmSwitch[i].map_id[j]) {mapQualifies = false;};
									};
									break;
							};
							if(mapQualifies) {
								const switchId = Tyruswoo.MapProperties.param.bgmSwitch[i].switch ? Tyruswoo.MapProperties.param.bgmSwitch[i].switch : 0;
								if(switchId && $gameSwitches.value(switchId) == true && Tyruswoo.MapProperties.param.bgmSwitch[i].alt) {
									altMusicName = Tyruswoo.MapProperties.param.bgmSwitch[i].alt;
								};
							};
						}
					};
					music.name = altMusicName;
				};
				AudioManager.playBgm(music);
			}
		}
		if ($dataMap.autoplayBgs) {
			AudioManager.playBgs($dataMap.bgs);
		}
	};

})();