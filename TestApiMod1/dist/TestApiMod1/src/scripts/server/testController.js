"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var serverHelper_1 = require("../../../../MyBehaviourPack/api/serverHelper");
var ID_PREFIX = 'MyApiTest';
var CustomEventIds = {
    clientEnteredWorld: ID_PREFIX + 'client_entered_world'
};
var TestController = /** @class */ (function () {
    function TestController(server) {
        this._server = server;
        this._helper = new serverHelper_1.ServerHelper(server);
        server.initialize = this.init;
    }
    TestController.prototype.init = function () {
        var _this = this;
        this._server.listenForEvent(CustomEventIds.clientEnteredWorld, function (eventData) { return _this.onClientEnteredWorld(eventData); });
        this._helper.onEntityDeathEvent(this.onEntityDeath);
    };
    TestController.prototype.onClientEnteredWorld = function (eventData) {
        this._helper.DisplayChatEvent('someone entered the world!');
    };
    TestController.prototype.onEntityDeath = function (eventData) {
        this._helper.DisplayChatEvent('something died!');
    };
    return TestController;
}());
exports.TestController = TestController;
//# sourceMappingURL=testController.js.map