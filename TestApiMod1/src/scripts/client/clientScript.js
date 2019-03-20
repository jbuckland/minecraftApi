const clientSystem = client.registerSystem(0, 0);

const IDENT_PREFIX = 'myApiTest:';


clientSystem.initialize = function () {
    //Initialize all the things
    this.listenForEvent("minecraft:client_entered_world", (eventData) => this.onClientEnteredWorld(eventData));
};


clientSystem.onClientEnteredWorld = function (eventData) {
    this.broadcastEvent(IDENT_PREFIX + "client_entered_world", eventData);
};