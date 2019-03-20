"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = require("./events");
exports.ServerEventIds = {
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
var ServerEvents;
(function (ServerEvents) {
    var Listening;
    (function (Listening) {
        /**
         * This event is triggered whenever a player attacks an entity.
         */
        var PlayerAttackedEntityEvent = /** @class */ (function (_super) {
            __extends(PlayerAttackedEntityEvent, _super);
            function PlayerAttackedEntityEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PlayerAttackedEntityEvent.identifier = 'minecraft:player_attacked_entity';
            return PlayerAttackedEntityEvent;
        }(events_1.ScriptEvent));
        Listening.PlayerAttackedEntityEvent = PlayerAttackedEntityEvent;
        /**
         * This event is triggered whenever an entity is added to the world.
         */
        var EntityCreatedEvent = /** @class */ (function (_super) {
            __extends(EntityCreatedEvent, _super);
            function EntityCreatedEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            EntityCreatedEvent.identifier = 'minecraft:entity_created';
            return EntityCreatedEvent;
        }(events_1.ScriptEvent));
        Listening.EntityCreatedEvent = EntityCreatedEvent;
        /**
         * This event is triggered whenever an entity dies. This won't be triggered when an entity is removed (such as
         * when using destroyEntity).
         */
        var EntityDeathEvent = /** @class */ (function (_super) {
            __extends(EntityDeathEvent, _super);
            function EntityDeathEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            EntityDeathEvent.identifier = 'minecraft:entity_death';
            return EntityDeathEvent;
        }(events_1.ScriptEvent));
        Listening.EntityDeathEvent = EntityDeathEvent;
        /**
         * This event is triggered whenever an entity becomes a rider on another entity.
         */
        var EntityStartRidingEvent = /** @class */ (function (_super) {
            __extends(EntityStartRidingEvent, _super);
            function EntityStartRidingEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            EntityStartRidingEvent.identifier = 'minecraft:entity_start_riding';
            return EntityStartRidingEvent;
        }(events_1.ScriptEvent));
        Listening.EntityStartRidingEvent = EntityStartRidingEvent;
        /**
         * This event is triggered whenever an entity stops riding another entity.
         */
        var EntityStopRidingEvent = /** @class */ (function (_super) {
            __extends(EntityStopRidingEvent, _super);
            function EntityStopRidingEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            EntityStopRidingEvent.identifier = 'minecraft:entity_stop_riding';
            return EntityStopRidingEvent;
        }(events_1.ScriptEvent));
        Listening.EntityStopRidingEvent = EntityStopRidingEvent;
        /**
         * This event is triggered whenever an entity is ticked. This event will not fire when a player is ticked.
         */
        var EntityTickEvent = /** @class */ (function (_super) {
            __extends(EntityTickEvent, _super);
            function EntityTickEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            EntityTickEvent.identifier = 'minecraft:entity_tick';
            return EntityTickEvent;
        }(events_1.ScriptEvent));
        Listening.EntityTickEvent = EntityTickEvent;
        /**
         * This event is triggered whenever the weather changes. It contains information about the weather it is
         * changing to.
         */
        var WeatherChangedEvent = /** @class */ (function (_super) {
            __extends(WeatherChangedEvent, _super);
            function WeatherChangedEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WeatherChangedEvent.identifier = 'minecraft:weather_changed';
            return WeatherChangedEvent;
        }(events_1.ScriptEvent));
        Listening.WeatherChangedEvent = WeatherChangedEvent;
    })(Listening = ServerEvents.Listening || (ServerEvents.Listening = {}));
    var Triggerable;
    (function (Triggerable) {
        /**
         * This event is used to send a chat message from the server to the players. The event data is the message
         * being
         * sent as a string. Special formatting is supported the same way it would be if a player was sending the
         * message.
         */
        var DisplayChatEventEvent = /** @class */ (function (_super) {
            __extends(DisplayChatEventEvent, _super);
            function DisplayChatEventEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DisplayChatEventEvent.identifier = 'minecraft:display_chat_event';
            return DisplayChatEventEvent;
        }(events_1.ScriptEvent));
        Triggerable.DisplayChatEventEvent = DisplayChatEventEvent;
        /**
         * This event is used to execute a slash command on the server with the World Owner permission level. The event
         * data contains the slash command as a string. The slash command will be processed and will run after the
         * event is sent.
         */
        var ExecuteCommandEvent = /** @class */ (function (_super) {
            __extends(ExecuteCommandEvent, _super);
            function ExecuteCommandEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ExecuteCommandEvent.identifier = 'minecraft:execute_command';
            return ExecuteCommandEvent;
        }(events_1.ScriptEvent));
        Triggerable.ExecuteCommandEvent = ExecuteCommandEvent;
        /**
         * This event is used to create a particle effect that will follow an entity around. This particle effect is
         * visible to all players. Any effect defined in a JSON file (both in your resource pack and in Minecraft) can
         * be used here. MoLang variables defined in the JSON of the effect can then be used to control that effect by
         * changing them in the entity to which it is attached.
         */
        var SpawnParticleAttachedEntityEvent = /** @class */ (function (_super) {
            __extends(SpawnParticleAttachedEntityEvent, _super);
            function SpawnParticleAttachedEntityEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SpawnParticleAttachedEntityEvent.identifier = 'minecraft:spawn_particle_attached_entity';
            return SpawnParticleAttachedEntityEvent;
        }(events_1.ScriptEvent));
        Triggerable.SpawnParticleAttachedEntityEvent = SpawnParticleAttachedEntityEvent;
        /**
         * This event is used to create a static particle effect in the world. This particle effect is visible to all
         * players. Any effect defined in a JSON file (both in your resource pack and in Minecraft) can be used here.
         * Once the effect is spawned you won't be able to control it further.
         */
        var SpawnParticleInWorldEvent = /** @class */ (function (_super) {
            __extends(SpawnParticleInWorldEvent, _super);
            function SpawnParticleInWorldEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SpawnParticleInWorldEvent.identifier = 'minecraft:spawn_particle_in_world';
            return SpawnParticleInWorldEvent;
        }(events_1.ScriptEvent));
        Triggerable.SpawnParticleInWorldEvent = SpawnParticleInWorldEvent;
    })(Triggerable = ServerEvents.Triggerable || (ServerEvents.Triggerable = {}));
})(ServerEvents = exports.ServerEvents || (exports.ServerEvents = {}));
var ServerHelper = /** @class */ (function () {
    function ServerHelper(server) {
        this._server = server;
    }
    /**
     * This event is used to send a chat message from the server to the players. The event data is the message being
     * sent as a string. Special formatting is supported the same way it would be if a player was sending the message.
     */
    ServerHelper.prototype.DisplayChatEvent = function (text) {
        this._server.broadcastEvent(exports.ServerEventIds.triggerable.display_chat_event, text);
    };
    /**
     * This event is used to run a slash command from the specific player running the client script. The script
     * runs it as that player. The event data contains the slash command in plain text. The slash command will be
     * run immediately after the event is triggered.
     */
    ServerHelper.prototype.ExecuteCommandEvent = function (command) {
        this._server.broadcastEvent(exports.ServerEventIds.triggerable.execute_command, command);
    };
    /**
     * This event is used to create a particle effect that will follow an entity around. This particle effect is
     * visible to all players. Any effect defined in a JSON file (both in your resource pack and in Minecraft) can
     * be used here. MoLang variables defined in the JSON of the effect can then be used to control that effect by
     * changing them in the entity to which it is attached.
     */
    ServerHelper.prototype.SpawnParticleAttachedEntity = function (effect, entity, offset) {
        this._server.broadcastEvent(exports.ServerEventIds.triggerable.spawn_particle_attached_entity, {
            effect: effect,
            entity: entity,
            offset: offset
        });
    };
    /**
     * This event is used to create a static particle effect in the world. This particle effect is visible to all
     * players. Any effect defined in a JSON file (both in your resource pack and in Minecraft) can be used here.
     * Once the effect is spawned you won't be able to control it further.
     */
    ServerHelper.prototype.SpawnParticleInWorldEvent = function (dimension, effect, position) {
        this._server.broadcastEvent(exports.ServerEventIds.triggerable.spawn_particle_in_world, {
            dimension: dimension,
            effect: effect,
            position: position
        });
    };
    ServerHelper.prototype.onEntityDeathEvent = function (cbFunc) {
        this._server.listenForEvent(exports.ServerEventIds.listening.entity_death, function (eventData) { return cbFunc(eventData); });
    };
    return ServerHelper;
}());
exports.ServerHelper = ServerHelper;
//# sourceMappingURL=serverHelper.js.map