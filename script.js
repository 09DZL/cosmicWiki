class Object {
    constructor(xml) {
        this.id = xml.getAttribute("id");
        this.isAnimated = xml.querySelector("AnimatedTexture") != null;
        this.filepath = xml.querySelector("File")?.textContent ?? "";
        this.fileindex = Number(xml.querySelector("Index")?.textContent ?? "0");
        this.description = xml.querySelector("Description")?.textContent ?? "";
        this.class = xml.querySelector("Class")?.textContent ?? "";
        this.slotType = xml.querySelector("SlotType")?.textContent ?? "-1";
    }

    print() {
        return `${this.id} [${this.filepath} ${this.fileindex}] ${this.description}`;
    }
}

const xml_files = [
    "EmbeddedData_AbyssalCXML",
    "EmbeddedData_CandyLandCXML",
    "EmbeddedData_CaveOfAThousandTreasuresCXML",
    "EmbeddedData_CrawlingCrypt",
    "EmbeddedData_CrystalCavernCXML",
    "EmbeddedData_DesertCXML",
    "EmbeddedData_DyesCXML",
    "EmbeddedData_EncountersCXML",
    "EmbeddedData_EquipCXML",
    "EmbeddedData_ForestCXML",
    "EmbeddedData_FrozenForestCXML",
    "EmbeddedData_GhostShipCXML",
    "EmbeddedData_GroundCXML",
    "EmbeddedData_HarvestableEntities",
    "EmbeddedData_HauntedCemeteryCXML",
    "EmbeddedData_HighCXML",
    "EmbeddedData_LowCXML",
    "EmbeddedData_MadLabCXML",
    "EmbeddedData_ManorOfTheImmortalsCXML",
    "EmbeddedData_MaterialsCXML",
    "EmbeddedData_MidCXML",
    "EmbeddedData_MonstersCXML",
    "EmbeddedData_MountainsCXML",
    "EmbeddedData_ObjectsCXML",
    "EmbeddedData_OceanTrenchCXML",
    "EmbeddedData_OryxCastleCXML",
    "EmbeddedData_OryxChamberCXML",
    "EmbeddedData_OryxWineCellarCXML",
    "EmbeddedData_PermapetsCXML",
    "EmbeddedData_PetsCXML",
    "EmbeddedData_PirateCaveCXML",
    "EmbeddedData_PlanetsCXML",
    "EmbeddedData_PlayerStatueCXML",
    "EmbeddedData_PlayersCXML",
    "EmbeddedData_PotionsCXML",
    "EmbeddedData_ProjectilesCXML",
    "EmbeddedData_RegionsCXML",
    "EmbeddedData_SanctuaryCXML",
    "EmbeddedData_ScorchingChasmCXML",
    "EmbeddedData_ShoreCXML",
    "EmbeddedData_SkinsCXML",
    "EmbeddedData_SnakePitCXML",
    "EmbeddedData_SpectreLair",
    "EmbeddedData_SpriteWorldCXML",
    "EmbeddedData_StaticObjectsCXML",
    "EmbeddedData_TempObjectsCXML",
    "EmbeddedData_TestingObjectsCXML",
    "EmbeddedData_TextilesCXML",
    "EmbeddedData_TidanCXML",
    "EmbeddedData_TombOfTheAncientsCXML",
    "EmbeddedData_TutorialObjectsCXML",
    "EmbeddedData_TutorialScriptCXML",
    "EmbeddedData_UndeadLairCXML",
    "EmbeddedData_UniqueItemsCXML",
    "EmbeddedData_Wilderness",
    "kitto"
];

const enemies = ["Submechanophobia","Dark Coral Heart","Abyssal Angler Fish","Black Poison Squid","Muk Monster","Muk Monster Baby","Siphonophorae","Siphonophorae Baby","Overgrown Snail",
"Death Centipede Head","Centipede Orbiter","Death Centipede Segment 1", "Death Centipede Segment 2","Death Centipede Segment 3","Death Centipede Segment 4","Death Centipede Segment 5",
"Death Centipede Segment 6","Death Centipede Tail", "Baby Death Centipede Head","Baby Death Centipede Segment 1","Baby Death Centipede Segment 2",
"Baby Death Centipede Tail","Death Beetle","Winged Death Beetle","Death Scorpion", "Poison Death Scorpion","Unknown Survivor","Death Widow Spider",
"Forgotten Crystal Prisoner","Crystal Guardian","Forgotten Crystal Core","Crystal Serpent","Crystal Giant", "Fenrir, the Storm","Fenrir Thunder Clouds",
"Fenrir Mini Storm","Feral Boar","Forest Elf Archer","Forest Elf Mage","Forest Elf Rogue","Forest Elf Shaman","Squirrel Knight", "Squirrel Warrior",
"Wild Boar Piglet","Wild Boar","Sephiran, Controller of Spirits","Spirit Blue Candle","Undead Skeleton","Armored Undead Skeleton","Metal Skeleton","Skeleton Bat King",
"Ghost Bat","Skeleton Necromancer","Redbeard, The Pirate King","Pirate Captain","Pirate Cannon","Pirate Cannon Target","Pirate Veteran","Pirate Sharpshooter","Pirate Berserk",
"Pirate Soldier","Pirate Children","Pirate Carpenter","Pirate Worker","Treasure Chest","Open Treasure Chest","[Earth:Swamp:SilentWilderness] Stone Structure Turret",
"[Earth:Swamp:SilentWilderness] Turret Target","Blood Magic Skulls","Blood Seeking Bones","Blood-Coated Skulls","Blood Seeking Eye","Parasite Egg","Blood Spider","Parasite",
"Parasite Wormhole","Mother Blood Spider","Blood Brain","Tumor","Bloody Urgle","Inferno Dragon","Inferno Dragon Flow","Inferno Dragon Flame","Bahaams, Ruler of the Scorched",
"Burning Idol","Scorched Brute","Scorched Mage","Scorched Warrior","Scorched Beast","Scorched Imp","Scorched Spear-man","Scorched Flamer",
"[ScorchingChasm] UnLit Pillars","Fire Spark Key","Radiance Boss Slime Spawner","Radiant Seraphim","Shadowlight Devourer","Blue Radiance Slime","Red Radiance Slime",
"Green Radiance Slime","Slime Domain Starter","Slime Domain Loot Balloon","Phantasmic Mage","Spectres' Orb","Bloodfly Nest","Orange Bloodfly Swarm","Red Bloodfly Swarm",
"Giant Flytrap","Sentient Flytrap","Spiky Vine","Sludge Abomination","Sludge Amalgam","Sludge Carcass","Soulsucker Sprout","Catenae Anchor","Catenae Spellbomb","Catenae Spellbomb X",
"Catenae Bud","The Catenae","Catenae Core 1","Catenae Core 2","Catenae Core 3","Pirate","Piratess","Snake","Scorpion Queen","Poison Scorpion","Beach Crab","Scorpion Lord",
"Red Gelatinous Cube","Blue Gelatinous Cube","Green Gelatinous Cube","Bandit Leader","Bandit Enemy","Bandit Wizard","Bandit Assassin","Bandit Archer","Desert Cube","Sand Cube",
"Magma Golem","Sand Golem","Desert Ghost","Occultist","Death Worm","Death Worm Baby","Giant Sand Tortoise","Sand Tortoise","Archer Nomad","Sentient Cactus","Phantom Cactus","Ragged Ghoul",
"Crooked Ghoul","Rogue Nomad","Mage Nomad","Sidewinder Snake","Adult Green Dragon","Desert Ghoulron","Ghoulron Hand","Bloody Tissue","Spectres' Guardian","Wintercall The Frozen Calamity",
"Glacier Spike","Golden Totem","Primaeval The Ancient Totem","Golden Totem Spawner","Raijin The Lightning Guardian","Amalgamation","Amalgamation Child","Cyclops","Young Cyclops",
"Golem of the Corruption","Forgotten Sentry","Luminescent Scorpion King","Umbral Champion","Kharanos, the Lost Dragon","Sunken Scuba Diver","Orc Lord","Orc Sorcerer","Orc Mage",
"Orc Nobleman","Orc Apprentice","Bat","Rocker Golem","Swarm","Dirt Golem","Shadow Samurai Dwarf King","Shadow Ninja Dwarf","Shadow Wizard Dwarf","Shadow Archer Dwarf",
"Shadow Hunter Dwarf","Shadow Hunting Fox","Shadow Baby Fox","Green Slime","Mosswalker","Yellow Sentient Toadstool","Red Sentient Toadstool","Cockatrice","Decaying Ent",
"Will-o'-wisp","Masked Spearman","Masked Hunter","Masked Shaman","Floral Sprite","Living Ent","Rootwraith","Wandering Igloo","Frostborn Husk","Frostborn Wisp","Tempest Sprite",
"Triclops Shaman","High Cryomancer","Snow Banshee","Ice Golem","Young Ice Mage","Young Ice Soldier","Paper Golem","Medusa","Beholder","Flying Brain","Slime God","Djinn","Beer God",
"Black Phantom","White Phantom","Spectral Phantom","Undead Reaper","Undead Mummy","Undead King Mummy","Spectral Undead Mummy","Spectral Reanimation Tombstone","Sorcerer of the Undead",
"Risen Skeleton","Graveyard Skeleton Knight","Graveyard Skeleton Archer","Graveyard Skeleton Mage","Mother Wasp","Blue Wasp","Orange Wasp","Purple Toadstool","Sludge","Red Toadstool",
"Green Toadstool","Brown Toadstool","Swamp Hunter","Swamp Mage","Swamp Sorcerer","Suttungr, the Frost Giant","Geirror, the Frost Giant"];

function getCategory(slotType) {
    const slotTypeMap = {
        '1': 'Weapons', '2': 'Weapons', '3': 'Weapons', '8': 'Weapons', '17': 'Weapons', '24': 'Weapons',
        '4': 'Abilities', '5': 'Abilities', '11': 'Abilities', '12': 'Abilities', '13': 'Abilities',
        '15': 'Abilities', '16': 'Abilities', '18': 'Abilities', '19': 'Abilities', '20': 'Abilities',
        '21': 'Abilities', '22': 'Abilities', '23': 'Abilities', '25': 'Abilities',
        '6': 'Armors', '7': 'Armors', '14': 'Armors',
        '9': 'Rings',
        '27': 'Tools', '28': 'Tools'
    };
    return slotTypeMap[slotType] || 'Miscellaneous';
}

function getFileUrl(fileName) {
    const baseUrl = "https://09dzl.github.io/cosmicWiki/data/";
    return baseUrl + fileName + ".png";
}

function getFileName(path) {
    switch(path) {
        case "lofiChar8x8": return "EmbeddedAssets_lofiCharEmbed_";
        case "lofiChar28x8": return "EmbeddedAssets_lofiCharEmbed_";
        case "lofiEnvironment": return "EmbeddedAssets_lofiEnvironmentEmbed_";
        case "lofiEnvironment2": return "EmbeddedAssets_lofiEnvironment2Embed_";
        case "lofiEnvironment3": return "EmbeddedAssets_lofiEnvironment3Embed_";
        case "lofiEnvironment4": return "EmbeddedAssets_lofiEnvironment4Embed_";
        case "lofiEnvironment5": return "EmbeddedAssets_lofiEnvironment5Embed_";
        case "lofiInterface": return "EmbeddedAssets_lofiInterfaceEmbed_";
        case "lofiInterface2": return "EmbeddedAssets_lofiInterface2Embed_";
        case "redLootBag": return "EmbeddedAssets_redLootBagEmbed_";
        case "lofiItems0": return "EmbeddedAssets_ItemsEmbed_";
        case "lofiObj": return "EmbeddedAssets_lofiObjEmbed_";
        case "lofiObj2": return "EmbeddedAssets_lofiObj2Embed_";
        case "lofiObj3": return "EmbeddedAssets_lofiObj3Embed_";
        case "lofiObj4": return "EmbeddedAssets_lofiObj4Embed_";
        case "lofiObj5": return "EmbeddedAssets_lofiObj5Embed_";
        case "lofiObj6": return "EmbeddedAssets_lofiObj6Embed_";
        case "lofiObj7": return "EmbeddedAssets_lofiObj7Embed_";
        case "lofiItems0": return "EmbeddedAssets_lofiItemsEmbed_";
        case "Small0": return "EmbeddedAssets_ShipTiles";
        case "8x8TilesAndObjectsA": return "EmbeddedAssets_TilesAndObjectsA";
        case "8x8TilesAndObjectsB": return "EmbeddedAssets_TilesAndObjectsB";
        case "lofiProjs": return "EmbeddedAssets_lofiProjsEmbed_";
        case "lofiProjs1": return "EmbeddedAssets_lofiProjs1Embed_";
        case "lofiParts": return "EmbeddedAssets_lofiPartsEmbed_";
        case "emptySlots": return "EmbeddedAssets_slotsEmptyEmbed_";
        case "Beach": return "EmbeddedAssets_chars8x8beach";
        case "chars8x8rBeach": return "EmbeddedAssets_chars8x8rBeachEmbed_";
        case "chars8x8rLow1": return "EmbeddedAssets_chars8x8rLow1Embed_";
        case "chars8x8rLow2": return "EmbeddedAssets_chars8x8rLow2Embed_";
        case "chars8x8rMid": return "EmbeddedAssets_chars8x8rMidEmbed_";
        case "chars8x8rMid2": return "EmbeddedAssets_chars8x8rMid2Embed_";
        case "chars8x8rHigh": return "EmbeddedAssets_chars8x8rHighEmbed_";
        case "chars8x8rHero1": return "EmbeddedAssets_chars8x8rHero1Embed_";
        case "chars8x8rHero2": return "EmbeddedAssets_chars8x8rHero2Embed_";
        case "chars8x8dHero1": return "EmbeddedAssets_chars8x8dHero1Embed_";
        case "chars8x8dBeach": return "EmbeddedAssets_chars8x8dBeachEmbed_";
        case "players": return "EmbeddedAssets_playersEmbed_";
        case "playerskins": return "EmbeddedAssets_playersSkinsEmbed_";
        case "chars8x8rPets1": return "EmbeddedAssets_chars8x8rPets1Embed_";
        case "8x8Enemies0": return "EmbeddedAssets_chars8x8rPetsKaratePenguin_";
        case "chars8x8dEncounters": return "EmbeddedAssets_chars8x8dEncountersEmbed_";
        case "chars8x8rEncounters": return "EmbeddedAssets_chars8x8rEncountersEmbed_";
        case "lofiChar216x16": return "EmbeddedAssets_lofiChar2Embed_";
        case "lofiCharBig": return "EmbeddedAssets_lofiCharBigEmbed_";
        case "lofiChar16x16": return "EmbeddedAssets_lofiCharEmbed_";
        case "lofiInterfaceBig": return "EmbeddedAssets_lofiInterfaceBigEmbed_";
        case "Big0": return "EmbeddedAssets_16x16Objects";
        case "16x16Objectsb": return "EmbeddedAssets_16x16objectsb";
        case "16x16T0": return "EmbeddedAssets_lofiObj";
        case "lofiObjBig": return "EmbeddedAssets_lofiObjBigEmbed_";
        case "lofiProjsBig": return "EmbeddedAssets_lofiProjsBigEmbed_";
        case "slotsEmbed": return "EmbeddedAssets_slotsEmbed_";
        case "chars16x16dMountains1": return "EmbeddedAssets_chars16x16dMountains1Embed_";
        case "chars16x16dMountains2": return "EmbeddedAssets_chars16x16dMountains2Embed_";
        case "chars16x16dEncounters": return "EmbeddedAssets_chars16x16dEncountersEmbed_";
        case "chars16x16dEncounters2": return "EmbeddedAssets_chars16x16dEncounters2Embed_";
        case "chars16x16rEncounters": return "EmbeddedAssets_chars16x16rEncountersEmbed_";
        case "lofiChar216x8": return "EmbeddedAssets_lofiChar2Embed_";
        case "lofiChar16x8": return "EmbeddedAssets_lofiCharEmbed_";
        case "chars16x8dEncounters": return "EmbeddedAssets_chars16x8dEncountersEmbed_";
        case "chars16x8rEncounters": return "EmbeddedAssets_chars16x8rEncountersEmbed_";
        case "8x16Walls": return "EmbeddedAssets_8x16Walls";
        case "textile4x4": return "EmbeddedAssets_textile4x4Embed_";
        case "inner_mask": return "EmbeddedAssets_innerMaskEmbed_";
        case "sides_mask": return "EmbeddedAssets_sidesMaskEmbed_";
        case "outer_mask": return "EmbeddedAssets_outerMaskEmbed_";
        case "innerP1_mask": return "EmbeddedAssets_innerP1MaskEmbed_";
        case "innerP2_mask": return "EmbeddedAssets_innerP2MaskEmbed_";
        case "stars": return "EmbeddedAssets_starsEmbed_";
        case "textile5x5": return "EmbeddedAssets_textile5x5Embed_";
        case "textile9x9": return "EmbeddedAssets_textile9x9Embed_";
        case "textile10x10": return "EmbeddedAssets_textile10x10Embed_";
        case "12x12ObjectsA": return "EmbeddedAssets_12x12Objects";
        case "doubleWallsBig": return "EmbeddedAssets_doubleWallsBigEmbed_";
        case "tripleWallsBig": return "EmbeddedAssets_tripleWallsBigEmbed_";
        case "chars8x12": return "EmbeddedAssets_chars8x12EncountersEmbed_";
        case "chars20x32": return "EmbeddedAssets_chars20x32EncountersEmbed_";
        case "chars32x20": return "EmbeddedAssets_chars32x20aEmbed_";
        case "Obj32x32": return "EmbeddedAssets_32x32Objects";
        case "chars32x32a": return "EmbeddedAssets_chars32x32aEmbed_";
        case "chars20x20": return "EmbeddedAssets_chars20x20aEmbed_";
        case "lofiObj40x40": return "EmbeddedAssets_lofiObj40x40Embed_";
        case "chars40x40a": return "EmbeddedAssets_chars40x40aEmbed_";
        case "potions": return "EmbeddedAssets_Potions8x8";
        default: return null;
    }
}

function getSpriteDimension(path) {
    switch(path) {
        case "lofiChar8x8":
        case "lofiChar28x8":
        case "lofiEnvironment":
        case "lofiEnvironment2":
        case "lofiEnvironment3": 
        case "lofiEnvironment4": 
        case "lofiEnvironment5": 
        case "lofiInterface":
        case "lofiInterface2":
        case "redLootBag": 
        case "lofiItems0":
        case "lofiObj":
        case "lofiObj2":
        case "lofiObj3":
        case "lofiObj4":
        case "lofiObj5": 
        case "lofiObj6": 
        case "lofiObj7": 
        case "lofiItems0": 
        case "Small0":
        case "8x8TilesAndObjectsA": 
        case "8x8TilesAndObjectsB": 
        case "lofiProjs":
        case "lofiProjs1":
        case "lofiParts":
        case "emptySlots":
        case "Beach":
        case "chars8x8rBeach":
        case "chars8x8rLow1": 
        case "chars8x8rLow2": 
        case "chars8x8rMid": 
        case "chars8x8rMid2": 
        case "chars8x8rHigh": 
        case "chars8x8rHero1":
        case "chars8x8rHero2":
        case "chars8x8dHero1":
        case "chars8x8dBeach":
        case "players":
        case "playerskins":
        case "chars8x8rPets1": 
        case "8x8Enemies0": 
        case "chars8x8dEncounters":
        case "chars8x8rEncounters": 
        case "potions":
            return [8,8];
        case "lofiChar216x16":
        case "lofiCharBig":
        case "lofiChar16x16":
        case "lofiInterfaceBig":
        case "Big0":
        case "16x16Objectsb": 
        case "16x16T0":
        case "lofiObjBig":
        case "lofiProjsBig":
        case "slotsEmbed": 
        case "chars16x16dMountains1": 
        case "chars16x16dMountains2":
        case "chars16x16dEncounters": 
        case "chars16x16dEncounters2":
        case "chars16x16rEncounters": 
            return [16,16];
        case "lofiChar216x8": 
        case "lofiChar16x8": 
        case "chars16x8dEncounters": 
        case "chars16x8rEncounters":
             return [16,8];
        case "8x16Walls": return [8,16];
        case "textile4x4": 
        case "inner_mask": 
        case "sides_mask": 
        case "outer_mask": 
        case "innerP1_mask": 
        case "innerP2_mask":
             return [4,4];
        case "stars": 
        case "textile5x5": 
            return [5,5];
        case "textile9x9": return [9,9];
        case "textile10x10": return [10,10];
        case "12x12ObjectsA": return [12,12];
        case "doubleWallsBig": return [16,32];
        case "tripleWallsBig": return [16,48];
        case "chars8x12": return [8,12];
        case "chars20x32": 
        case "chars32x20": 
            return [32,20];
        case "Obj32x32": 
        case "chars32x32a": 
            return [32,32];
        case "chars20x20": return [20,20];
        case "lofiObj40x40": 
        case "chars40x40a":
            return [40,40];
        default: return [0, 0];
    }
}

async function init() {
    const isInit = sessionStorage.getItem("loaded");

    if (isInit == true) {
        return;
    }

    const objs = new Array();
    const items = new Array();
    const portals = new Array();

    for (const file of xml_files) {
        await fetch("https://09dzl.github.io/cosmicWiki/data/" + file).then(res => {
            return res.text();
        }).then(str => {
            const xmlDoc = new DOMParser().parseFromString(str, "text/xml");
            const objects = xmlDoc.querySelectorAll("Object");

            for (const xmlobj of objects) {
                const obj = new Object(xmlobj);

                switch(obj.class) {
                    case "Portal": portals.push(obj); break;
                    case "Equipment": items.push(obj); break;
                    case "Character": objs.push(obj); break;
                }
            }
        });
    }
    
    sessionStorage.setItem("objects", JSON.stringify(objs));
    sessionStorage.setItem("items", JSON.stringify(items));
    sessionStorage.setItem("portals", JSON.stringify(portals));

    sessionStorage.setItem("loaded", true);
}

function groupItemsByCategory(items) {
    const groupedItems = new Map();

    items.forEach(item => {
        const category = getCategory(item.slotType);
        if (!groupedItems.has(category)) {
            groupedItems.set(category, []);
        }
        groupedItems.get(category).push(item);
    });

    groupedItems.forEach((group, category) => {
        group.sort((a, b) => parseInt(a.slotType, 10) - parseInt(b.slotType, 10));
    });

    return groupedItems;
}

function onLoadItems() {
    var content = document.getElementById('content');
    const items = JSON.parse(sessionStorage.getItem("items"));
    const groupedItems = groupItemsByCategory(items);
    const categoryOrder = ['Weapons', 'Abilities', 'Armors', 'Rings', 'Tools', 'Miscellaneous'];

    categoryOrder.forEach(category => {
        if (groupedItems.has(category)) {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'category';
            categoryDiv.innerHTML = `<h2>${category}</h2>`;
            content.appendChild(categoryDiv);

            const itemsInCategory = groupedItems.get(category);
            const itemDivs = [];

            itemsInCategory.forEach(item => {
                const div = document.createElement('div');
                div.className = 'sprite';
                div.style.width = '64px';
                div.style.height = '64px';
                itemDivs.push({div: div, item: item});
                categoryDiv.appendChild(div);
            });

            itemDivs.forEach(({div, item}) => {
                const spriteInfo = getSpriteDimension(item.filepath);
                const spriteWidth = spriteInfo[0];
                const spriteHeight = spriteInfo[1];
                const imageIndex = item.fileindex;
                const img = new Image();
                img.onload = function() {
                    const columns = this.naturalWidth / spriteWidth;
                    const row = Math.floor(imageIndex / columns);
                    const col = imageIndex % columns;
                    const scaledWidth = this.naturalWidth * (64 / spriteWidth);
                    const scaledHeight = this.naturalHeight * (64 / spriteHeight);

                    div.style.backgroundImage = `url('${img.src}')`;
                    div.style.backgroundPosition = `-${col * spriteWidth * (64 / spriteWidth)}px -${row * spriteHeight * (64 / spriteHeight)}px`;
                    div.style.backgroundSize = `${scaledWidth}px ${scaledHeight}px`;
                };
                img.src = getFileUrl(getFileName(item.filepath));
            });
        }
    });
}

function onLoadEnemies() {
    var content = document.getElementById('content');
    const objs = JSON.parse(sessionStorage.getItem("objects"));

    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'category';

    content.appendChild(categoryDiv);

    const objDivs = [];

    objs.forEach(obj => {
        if (enemies.includes(obj["id"])) {
            const div = document.createElement('div');
            div.className = 'sprite';
            div.style.width = '64px';
            div.style.height = '64px';

            objDivs.push({div: div, item: obj});
            categoryDiv.appendChild(div);
        }
    });

    objDivs.forEach(({div, item}) => {
        const spriteInfo = getSpriteDimension(item.filepath);
        const spriteWidth = spriteInfo[0];
        const spriteHeight = spriteInfo[1];
        const imageIndex = item.fileindex;
        const img = new Image();
        img.onload = function() {
            const columns = this.naturalWidth / spriteWidth;

            let row = Math.floor(imageIndex / columns);
            let col = imageIndex % columns;

            if (item.isAnimated) {
                col = 0;
                row = imageIndex;
            }

            const scaledWidth = this.naturalWidth * (64 / spriteWidth);
            const scaledHeight = this.naturalHeight * (64 / spriteHeight);

            div.style.backgroundImage = `url('${img.src}')`;
            div.style.backgroundPosition = `-${col * spriteWidth * (64 / spriteWidth)}px -${row * spriteHeight * (64 / spriteHeight)}px`;
            div.style.backgroundSize = `${scaledWidth}px ${scaledHeight}px`;
        };
        img.src = getFileUrl(getFileName(item.filepath));
    });
}



init();