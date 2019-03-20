"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testController_1 = require("./testController");
var serverHelper_1 = require("../../../../MyBehaviourPack/api/serverHelper");
var server;
var serverSystem = server.registerSystem(0, 0);
serverSystem.broadcastEvent(serverHelper_1.ServerEventIds.triggerable.display_chat_event, 'My cool minecraft mod started!');
var controller = new testController_1.TestController(serverSystem);
//# sourceMappingURL=main.js.map