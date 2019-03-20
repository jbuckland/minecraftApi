let serverSystem = server.registerSystem(0, 0);

const IDENTIFIERS = {
    pig: "minecraft:pig",
    sheep: "minecraft:sheep",
    creeper: "minecraft:creeper"
};

const ID_PREFIX = 'myApiTest:';


serverSystem.initialize = function () {
    //Initialize all the things
    this.listenForEvent(ID_PREFIX + "client_entered_world", eventData => this.onClientEnteredWorld(eventData));
    this.listenForEvent("minecraft:entity_death", eventData => this.onEntityDeath(eventData));

};


serverSystem.onClientEnteredWorld = function (eventData) {
    this.broadcastEvent("minecraft:display_chat_event", "someone entered the world!");
};


serverSystem.onEntityDeath = function (eventData) {
    let entity = eventData.entity;
    chatMessage("something died!" + JSON.stringify(entity));


    if (entity.__identifier__ === IDENTIFIERS.sheep) {
        chatMessage("we killed a sheep!!");

        let deadSheepPosition = this.getComponent(entity, "minecraft:position");


        let creeper = this.createEntity("entity", IDENTIFIERS.creeper);

        // Add a position component
        let posComponent = this.createComponent(creeper, "minecraft:position");
        // Set the position
        posComponent.data.x = deadSheepPosition.data.x;
        posComponent.data.y = deadSheepPosition.data.y;
        posComponent.data.z = deadSheepPosition.data.z;
        // Apply the changes to the position component
        this.applyComponentChanges(creeper, posComponent);
    }


    //doLightning(entity);


};


function chatMessage(msg) {
    serverSystem.broadcastEvent("minecraft:display_chat_event", msg);
}

function doLightning(entity) {
    // Get the position of the dead fighter
    let deadEntityPosition = this.getComponent(entity, "minecraft:position");
    // Create a lightning bolt
    let lightningBolt = this.createEntity("entity", "minecraft:lightning_bolt");
    // Get the lightning bolts position component    
    let boltPosition = this.getComponent(lightningBolt, "minecraft:position");
    // Set the lightning bolts position to the same position as the dying fighter
    boltPosition.data = deadEntityPosition.data;
    // Apply position change to the lightning bolt
    this.applyComponentChanges(lightningBolt, boltPosition);
};