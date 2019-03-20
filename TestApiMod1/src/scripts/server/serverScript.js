const IDENTS = {
    mobs: {
        pig: "minecraft:pig",
        sheep: "minecraft:sheep",
        creeper: "minecraft:creeper",
        horse: "minecraft:horse",
        cow: "minecraft:cow",
    },
    blocks: {
        planks: "planks",
        air: "air"
    },
    components: {
        position: "minecraft:position",
        rotation: "minecraft:rotation",
        scale: "minecraft:scale"
    },
    entities: {
        lightningBolt: "minecraft:lightning_bolt"
    }
};

const BLOCK_DATA = {
    planks: {
        oak: 0,
        spruce: 1,
        birch: 2,
        jungle: 3,
        acacia: 4,
        darkOak: 5
    }
};

const SERVER_EVENTS = {
    listening: {
        player_attacked_entity: 'minecraft:player_attacked_entity',
        entity_created: 'minecraft:entity_created',
        entity_death: 'minecraft:entity_death',
        entity_start_riding: 'minecraft:entity_start_riding',
        entity_stop_riding: 'minecraft:entity_stop_riding',
        entity_tick: 'minecraft:entity_tick',
        weather_changed: 'minecraft:weather_changed'
    },
    triggerable: {
        display_chat_event: 'minecraft:display_chat_event',
        execute_command: 'minecraft:execute_command',
        spawn_particle_attached_entity: 'minecraft:spawn_particle_attached_entity',
        spawn_particle_in_world: 'minecraft:spawn_particle_in_world'
    }
};


const ID_PREFIX = 'myApiTest:';
let player;
let serverSystem = server.registerSystem(0, 0);
serverSystem.initialize = function () {
    //Initialize all the things
    this.listenForEvent(ID_PREFIX + "client_entered_world", eventData => this.onClientEnteredWorld(eventData));
    this.listenForEvent(SERVER_EVENTS.listening.entity_death, eventData => this.onEntityDeath(eventData));
    this.listenForEvent(SERVER_EVENTS.listening.entity_created, entityData => this.onEntityCreated(entityData));
    this.listenForEvent(SERVER_EVENTS.listening.player_attacked_entity, entityData => this.onPlayerAttackedEntity(entityData));


};


serverSystem.onClientEnteredWorld = function (eventData) {
    player = eventData.player;
    chatMessage("someone entered the world!");
};

serverSystem.onPlayerAttackedEntity = function (entityData) {
    let entity = entityData.attacked_entity;
    let player = entityData.player;

    let playerRotation = getRotation(player);

    chatMessage("you attacked a " + entity.__identifier__);
    //chatMessage("your rotation was " + JSON.stringify(playerRotation));

    //summonLightining(getPosition(entity));
};

serverSystem.onEntityDeath = function (eventData) {
    let entity = eventData.entity;
    //chatMessage("something died!" + JSON.stringify(entity));


    if (entity.__identifier__ === IDENTS.mobs.sheep) {
        this.sheepKilled(entity);
    } else if (entity.__identifier__ === IDENTS.mobs.cow) {

        this.makeHouse(entity);
    }

};


serverSystem.makeHouse = function (entity) {
    let position = getPosition(entity);
    chatMessage("we killed a cow at " + JSON.stringify(position.data));


    //empty inside to be 3 tall
    //10 wide
    //12 long


    let houseWidth = 10;
    let houseLength = 12;
    let houseHeight = 5;

    let rightX = position.data.x + (houseWidth / 2);
    let leftX = position.data.x - (houseWidth / 2);
    let backZ = position.data.z - (houseLength / 2);
    let frontZ = position.data.z + (houseLength / 2);
    let bottomY = position.data.y - 1;
    let topY = position.data.y + houseHeight - 1;

    let PADDING = 10;

    //clear the whole space
    fillCmd(leftX - PADDING, bottomY, frontZ + PADDING,
        rightX + PADDING, topY + PADDING, backZ - PADDING, IDENTS.blocks.air);


    //make floor
    fillCmd(leftX, bottomY, frontZ, rightX, bottomY, backZ, IDENTS.blocks.planks, BLOCK_DATA.planks.acacia);

    //make ceiling
    fillCmd(leftX, topY, frontZ, rightX, topY, backZ, IDENTS.blocks.planks, BLOCK_DATA.planks.jungle);

    //left wall
    fillCmd(leftX, bottomY, frontZ, leftX, topY, backZ, IDENTS.blocks.planks, BLOCK_DATA.planks.darkOak);

    //right wall
    fillCmd(rightX, bottomY, frontZ, rightX, topY, backZ, IDENTS.blocks.planks, BLOCK_DATA.planks.darkOak);

    //front wall
    fillCmd(leftX, bottomY, frontZ, rightX, topY, frontZ, IDENTS.blocks.planks, BLOCK_DATA.planks.birch);

    //back wall
    fillCmd(leftX, bottomY, backZ, rightX, topY, backZ, IDENTS.blocks.planks, BLOCK_DATA.planks.darkOak);

    //make right wall door
    fillCmd(rightX, position.data.y, position.data.z - 1,
        rightX, position.data.y + 2, position.data.z + 1,
        IDENTS.blocks.air
    );

};


serverSystem.sheepKilled = function (entity) {
    chatMessage("we killed a sheep!!");

    let deadSheepPosition = getPosition(entity);

    let creeper = this.createEntity("entity", IDENTS.mobs.creeper);

    // Add a position component
    let posComponent = this.createComponent(creeper, IDENTS.components.position);
    // Set the position
    posComponent.data.x = deadSheepPosition.data.x;
    posComponent.data.y = deadSheepPosition.data.y;
    posComponent.data.z = deadSheepPosition.data.z;
    // Apply the changes to the position component
    this.applyComponentChanges(creeper, posComponent);

    //make it huge!
    let scaleComp = this.createComponent(creeper, IDENTS.components.scale);
    scaleComp.value = 500;
    this.applyComponentChanges(creeper, scaleComp);

};


serverSystem.onEntityCreated = function (entityData) {
    let createdEntity = entityData.entity;
    if (createdEntity.__identifier__ === IDENTS.mobs.horse) {
        let spawnPosition = getPosition(createdEntity);
        chatMessage("horse created at " + JSON.stringify(spawnPosition.data));


    }

};

function executeCommand(cmd) {
    serverSystem.broadcastEvent(SERVER_EVENTS.triggerable.execute_command, cmd);
}

function fillCmd(fromX, fromY, fromZ, toX, toY, toZ, blockId, data = '') {
    executeCommand(`/fill ${fromX} ${fromY} ${fromZ} ${toX} ${toY} ${toZ} ${blockId} ${data}`);
}

function getRotation(entity) {
    return serverSystem.getComponent(entity, IDENTS.components.rotation)
}

function getPosition(entity) {
    return serverSystem.getComponent(entity, IDENTS.components.position);
}

function chatMessage(msg) {
    serverSystem.broadcastEvent(SERVER_EVENTS.triggerable.display_chat_event, msg);
}

function summonLightining(position) {
    executeCommand(`/summon ${IDENTS.entities.lightningBolt} ${position.data.x} ${position.data.y} ${position.data.z}`);
}


function doLightning(entity) {
    // Get the position of the dead fighter
    let deadEntityPosition = this.getComponent(entity, IDENTS.components.position);
    // Create a lightning bolt
    let lightningBolt = this.createEntity("entity", IDENTS.entities.lightningBolt);
    // Get the lightning bolts position component    
    let boltPosition = this.getComponent(lightningBolt, IDENTS.components.position);
    // Set the lightning bolts position to the same position as the dying fighter
    boltPosition.data = deadEntityPosition.data;
    // Apply position change to the lightning bolt
    this.applyComponentChanges(lightningBolt, boltPosition);
};