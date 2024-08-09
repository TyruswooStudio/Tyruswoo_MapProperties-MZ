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
 * @plugindesc MZ v2.1.0 Toggle map properties with switches. Use regions to restrict/allow movement.
 * @author Tyruswoo and McKathlin
 * @url https://www.tyruswoo.com
 *
 * @help Tyruswoo Map Properties for RPG Maker MZ
 * 
 * Change map parallaxes and BGM during play using switches.
 * Use regions to restrict or allow movement of events or players.
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
 * 
 * Region Restrict All          A list of region IDs that act as walls.
 *                              No player or event can pass through,
 *                              unless their "Through" property is on.
 * 
 * Region Restrict Player       A list of region IDs that players cannot
 *                              pass through. Events may still pass through,
 *                              if tiles permit.
 * 
 * Region Restrict Events       A list of region IDs that events cannot pass
 *                              through. Players may pass, if tiles permit.
 * 
 * Region Allow All             A list of region IDs that players and events
 *                              may freely pass through, even if the contained
 *                              tiles would not normally be passable.
 * 
 * Region Allow Player          A list of region IDs that players can always
 *                              pass through. No passability change for events.
 * 
 * Region Allow Events          A list of region IDs that events can freely
 *                              pass through. Players are still subject to
 *                              normal tile passability in these regions.
 * 
 * ============================================================================
 * Example features:
 *  - Make a different parallax appear in the same map, based on whether a
 *    certain switch is On. This can be done by changing the Parallax
 *    Alternative plugin parameter.
 *  - Keep the same parallax scrolling position even when transferring between
 *    maps! Use the Save Parallax Position plugin command just prior to player
 *    transfer and the Load Parallax Position plugin command immediately after
 *    player transfer; this allows the new map's parallax background to be at
 *    the same point of scrolling as the previous map's parallax background.
 *    (This is useful if the maps both have a parallax image and both use
 *    Loop Horizontally and/or Loop Vertically with a scroll value greater than
 *    or less than 0.)
 *  - Make a hidden path. Add a region number to the Region Allow Player list
 *    in the plugin parameters, and then paint that region anywhere that you
 *    want to place the hidden paths.
 *  - Keep NPCs out of the way in a specific area. Find the plugin parameter
 *    Region Restrict Events, add a region number to its list, and paint that
 *    region wherever you need to block NPCs from passing while allowing the
 *    player to pass.
 * ============================================================================
 * For more help using the Map Properties plugin, see Tyruswoo.com.
 * ============================================================================
 * Version History:
 *
 * v1.0  10/9/2020
 *        - Map Properties released for RPG Maker MZ!
 * 
 * v2.0  10/22/2021
 *        - Introduced region-based passability restrictions and allowances.
 * 
 * v2.0.1  8/30/2023
 *        - This plugin is now free and open source under the MIT license.
 * 
 * v2.0.2  8/8/2024
 *        - Region list plugin parameters now only use positive integers.
 *          Zero, negative numbers, and other invalid values are ignored.
 *          This fixes the bug where someone might put a 0 in a list by mistake
 *          and cause undesired effects in the default empty region.
 * 
 * v2.1.0  8/9/2024
 *        - Made Tyruswoo Map Properties compatible with Tyruswoo Altimit
 *          Movement v0.9.1 and up.
 *        - Game_Map's isPassable function now checks Region Restrict All and
 *          Region Allow All lists. This may make region-based passability
 *          apply more consistently in some edge cases.
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
 * 
 * @param Region Restrict All
 * @type number[]
 * @default []
 * @desc These Region IDs don't let players or events pass; they act as walls.
 *
 * @param Region Restrict Player
 * @parent Region Restrict All
 * @type number[]
 * @default []
 * @desc These Region IDs don't let players pass through. No change to event movement.
 *
 * @param Region Restrict Events
 * @parent Region Restrict All
 * @type number[]
 * @default []
 * @desc These Region IDs don't let events in. No change in whether players pass.
 *
 * @param Region Allow All
 * @type number[]
 * @default []
 * @desc These Region IDs let players and events pass through their tiles freely.
 *
 * @param Region Allow Player
 * @parent Region Allow All
 * @type number[]
 * @default []
 * @desc These Region IDs let players pass through. No change in whether events pass.
 *
 * @param Region Allow Events
 * @parent Region Allow All
 * @type number[]
 * @default []
 * @desc These Region IDs let events pass through. No change in whether players pass.
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

	Tyruswoo.MapProperties.parseRegionIds = function(json) {
		if (!json) {
			return [];
		}
		let inList = JSON.parse(json);
		let outList = [];
		for (const item of inList) {
			let num = Number.parseInt(item);
			// All region numbers in lists must be positive integers.
			// Region 0 is the blank region and should have no special rules.
			if (num <= 0 || Number.isNaN(num)) {
				console.warn("Ignoring invalid region number: " + item);
			} else {
				outList.push(num);
			}
		}
		return outList;
	};
	
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

	Tyruswoo.MapProperties.param.regionRestrictAll = Tyruswoo.MapProperties.parseRegionIds(
		Tyruswoo.MapProperties.parameters['Region Restrict All']);
	Tyruswoo.MapProperties.param.regionRestrictPlayer = Tyruswoo.MapProperties.parseRegionIds(
		Tyruswoo.MapProperties.parameters['Region Restrict Player']);
	Tyruswoo.MapProperties.param.regionRestrictEvents = Tyruswoo.MapProperties.parseRegionIds(
		Tyruswoo.MapProperties.parameters['Region Restrict Events']);

	Tyruswoo.MapProperties.param.regionAllowAll = Tyruswoo.MapProperties.parseRegionIds(
		Tyruswoo.MapProperties.parameters['Region Allow All']);
	Tyruswoo.MapProperties.param.regionAllowPlayer = Tyruswoo.MapProperties.parseRegionIds(
		Tyruswoo.MapProperties.parameters['Region Allow Player']);
	Tyruswoo.MapProperties.param.regionAllowEvents = Tyruswoo.MapProperties.parseRegionIds(
		Tyruswoo.MapProperties.parameters['Region Allow Events']);

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
	// Parallax
	//-----------------------------------------------------------------------------
	
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

	//-----------------------------------------------------------------------------
	// BGM
	//-----------------------------------------------------------------------------
	
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

	//-----------------------------------------------------------------------------
	// Region Passability Checks
	//-----------------------------------------------------------------------------
	
	Game_Map.prototype.isTilePassable = Game_Map.prototype.isPassable;

	// Applies RegionRestrictAll and RegionAllowAll to ALL passability checks.
	Game_Map.prototype.isPassable = function(x, y, d) {
		const region = this.regionId(x, y);
		if (Tyruswoo.MapProperties.param.regionRestrictAll.includes(region)) {
			return false;
		} else if (Tyruswoo.MapProperties.param.regionAllowAll.includes(region)) {
			return true;
		} else {
			return this.isTilePassable(x, y, d);
		}
	};

	// Call this wherever a map-based player passability check is needed.
	Game_Map.prototype.isPlayerPassable = function(x, y, d) {
		const region = this.regionId(x, y);
		if (Tyruswoo.MapProperties.param.regionRestrictPlayer.includes(region)) {
			return false;
		} else if (Tyruswoo.MapProperties.param.regionAllowPlayer.includes(region)) {
			return true;
		} else {
			return this.isPassable(x, y, d);
		}
	};

	// Call this wherever a map-based event passability check is needed.
	Game_Map.prototype.isEventPassable = function(x, y, d) {
		const region = this.regionId(x, y);
		if (Tyruswoo.MapProperties.param.regionRestrictEvents.includes(region)) {
			return false;
		} else if (Tyruswoo.MapProperties.param.regionAllowEvents.includes(region)) {
			return true;
		} else {
			return this.isPassable(x, y, d);
		}
	};

	//=============================================================================
	// Game_CharacterBase and subclasses
	//=============================================================================
	// Region restrict / allow movement
	//-----------------------------------------------------------------------------

	// Alias method
	Tyruswoo.MapProperties.Game_Player_isMapPassable =
		Game_Player.prototype.isMapPassable;
	Game_Player.prototype.isMapPassable = function(x, y, d) {
		if (this.vehicle()) {
			// Region restrict/allow doesn't affect players in vehicles.
			return Tyruswoo.MapProperties.Game_Player_isMapPassable.call(
				this, x, y, d);
		}
		const isNormallyPassable =
			Tyruswoo.MapProperties.Game_Player_isMapPassable.call(this, x, y, d);
		return this.isRegionPassable(x, y, d, isNormallyPassable);
	};

	// Alias method
	Tyruswoo.MapProperties.Game_Event_isMapPassable =
		Game_Event.prototype.isMapPassable;
	Game_Event.prototype.isMapPassable = function(x, y, d) {
		const isNormallyPassable =
			Tyruswoo.MapProperties.Game_Event_isMapPassable.call(this, x, y, d);
		return this.isRegionPassable(x, y, d, isNormallyPassable);
	};

	// New method
	Game_CharacterBase.prototype.isRegionPassable =
	function(x, y, d, isNormallyPassable) {
		const x2 = $gameMap.roundXWithDirection(x, d);
		const y2 = $gameMap.roundYWithDirection(y, d);
		const nextRegion = $gameMap.regionId(x2, y2);
		if (isNormallyPassable) {
			// This passes unless it's region-blocked.
			return !this.isBlockedByRegion(nextRegion);
		} else {
			// This isn't normally passable. Check if regions allow.
			const myRegion = $gameMap.regionId(x, y);
			const d2 = this.reverseDir(d);
			const myTilePasses = this.passesThroughRegion(myRegion) ||
				$gameMap.isPassable(x, y, d);
			const nextRegionPasses = this.passesThroughRegion(nextRegion) ||
				$gameMap.isPassable(x2, y2, d2);
			return myTilePasses && nextRegionPasses;
		}
	};

	// New method
	Game_CharacterBase.prototype.passesThroughRegion = function(regionId) {
		return Tyruswoo.MapProperties.param.regionAllowAll.includes(regionId);
	};

	// New method
	Game_CharacterBase.prototype.isBlockedByRegion = function(regionId) {
		return Tyruswoo.MapProperties.param.regionRestrictAll.includes(regionId);
	};

	// Override to new method
	Game_Event.prototype.passesThroughRegion = function(regionId) {
		return Game_Character.prototype.passesThroughRegion.call(this, regionId) ||
			Tyruswoo.MapProperties.param.regionAllowEvents.includes(regionId);
	};

	// Override to new method
	Game_Event.prototype.isBlockedByRegion = function(regionId) {
		return Game_Character.prototype.isBlockedByRegion.call(this, regionId) ||
			Tyruswoo.MapProperties.param.regionRestrictEvents.includes(regionId);
	};

	// Override to new method
	Game_Player.prototype.passesThroughRegion = function(regionId) {
		return Game_Character.prototype.passesThroughRegion.call(this, regionId) ||
			Tyruswoo.MapProperties.param.regionAllowPlayer.includes(regionId);
	};

	// Override to new method
	Game_Player.prototype.isBlockedByRegion = function(regionId) {
		return Game_Character.prototype.isBlockedByRegion.call(this, regionId) ||
			Tyruswoo.MapProperties.param.regionRestrictPlayer.includes(regionId);
	};

})();
