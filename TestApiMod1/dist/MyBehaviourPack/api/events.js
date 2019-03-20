"use strict";
/*
Script Events
Here you can find the list of events that you can listen for and respond to in your scripts.
 */
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
var ScriptEvent = /** @class */ (function () {
    function ScriptEvent() {
    }
    return ScriptEvent;
}());
exports.ScriptEvent = ScriptEvent;
exports.ClientEventIds = {
    listening: {
        hit_result_changed: 'minecraft:hit_result_changed',
        hit_result_continuous: 'minecraft:hit_result_continuous',
        client_entered_world: 'minecraft:client_entered_world',
        pick_hit_result_changed: 'minecraft:pick_hit_result_changed',
        pick_hit_result_continuous: 'minecraft:pick_hit_result_continuous'
    },
    triggerable: {
        display_chat_event: 'minecraft:display_chat_event',
        execute_command: 'minecraft:execute_command',
        load_ui: 'minecraft:load_ui',
        send_ui_event: 'minecraft:send_ui_event',
        spawn_particle_attached_entity: 'minecraft:spawn_particle_attached_entity',
        spawn_particle_in_world: 'minecraft:spawn_particle_in_world',
        unload_ui: 'minecraft:unload_ui'
    }
};
var ClientEvents;
(function (ClientEvents) {
    var ListeningEvents;
    (function (ListeningEvents) {
        /**
         * This event is triggered whenever the reticle changes from pointing at a block or air to pointing at an
         * entity and the other way around. Up to 1000 blocks away.
         */
        var HitResultChangedEvent = /** @class */ (function (_super) {
            __extends(HitResultChangedEvent, _super);
            function HitResultChangedEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            HitResultChangedEvent.identifier = 'minecraft:hit_result_changed';
            return HitResultChangedEvent;
        }(ScriptEvent));
        ListeningEvents.HitResultChangedEvent = HitResultChangedEvent;
        /**
         * This event is triggered every update and tells you what entity the reticle is pointing to in the world up to
         * 1000 blocks away.
         */
        var HitResultContinuousEvent = /** @class */ (function (_super) {
            __extends(HitResultContinuousEvent, _super);
            function HitResultContinuousEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            HitResultContinuousEvent.identifier = 'minecraft:hit_result_continuous';
            return HitResultContinuousEvent;
        }(ScriptEvent));
        ListeningEvents.HitResultContinuousEvent = HitResultContinuousEvent;
        /**
         * This event is fired whenever a player joins the world. The event data contains the ID of the player in the
         * world. The ID uniquely identifies the player in the world. This does NOT uniquely identify the player if
         * they disconnect and reconnect.
         */
        var ClientEnteredWorldEvent = /** @class */ (function (_super) {
            __extends(ClientEnteredWorldEvent, _super);
            function ClientEnteredWorldEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ClientEnteredWorldEvent.identifier = 'minecraft:client_entered_world';
            return ClientEnteredWorldEvent;
        }(ScriptEvent));
        ListeningEvents.ClientEnteredWorldEvent = ClientEnteredWorldEvent;
        /**
         * This event is triggered whenever the mouse pointer changes from pointing at a block or air to pointing at an
         * entity and the other way around. Up to 1000 blocks away.
         */
        var PickHitResultChangedEvent = /** @class */ (function (_super) {
            __extends(PickHitResultChangedEvent, _super);
            function PickHitResultChangedEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PickHitResultChangedEvent.identifier = 'minecraft:pick_hit_result_changed';
            return PickHitResultChangedEvent;
        }(ScriptEvent));
        ListeningEvents.PickHitResultChangedEvent = PickHitResultChangedEvent;
        /**
         * This event is triggered every update and tells you what entity the mouse pointer is pointing to in the world
         * up to
         * 1000 blocks away.
         */
        var PickHitResultContinuousEvent = /** @class */ (function (_super) {
            __extends(PickHitResultContinuousEvent, _super);
            function PickHitResultContinuousEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PickHitResultContinuousEvent.identifier = 'minecraft:pick_hit_result_continuous';
            return PickHitResultContinuousEvent;
        }(ScriptEvent));
        ListeningEvents.PickHitResultContinuousEvent = PickHitResultContinuousEvent;
    })(ListeningEvents = ClientEvents.ListeningEvents || (ClientEvents.ListeningEvents = {}));
    var TriggerableEvents;
    (function (TriggerableEvents) {
        /**
         * This event is used to display a chat message to the specific player that is running the client script. The
         * event data is the message to be displayed in plain text. Special formatting is supported the same way it
         * would be if a player was sending the message.
         */
        var DisplayChatEvent = /** @class */ (function (_super) {
            __extends(DisplayChatEvent, _super);
            function DisplayChatEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DisplayChatEvent.identifier = 'minecraft:display_chat_event';
            return DisplayChatEvent;
        }(ScriptEvent));
        TriggerableEvents.DisplayChatEvent = DisplayChatEvent;
        /**
         * This event is used to run a slash command from the specific player running the client script. The script
         * runs it as that player. The event data contains the slash command in plain text. The slash command will be
         * run immediately after the event is triggered.
         */
        var ExecuteCommandEvent = /** @class */ (function (_super) {
            __extends(ExecuteCommandEvent, _super);
            function ExecuteCommandEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ExecuteCommandEvent.identifier = 'minecraft:execute_command';
            return ExecuteCommandEvent;
        }(ScriptEvent));
        TriggerableEvents.ExecuteCommandEvent = ExecuteCommandEvent;
        /**
         * This event is used to show a UI screen to the specific player running the client script. This event will add
         * the UI screen to the top of the UI screen stack. The screen will be shown immediately after the event is
         * triggered. Only screens defined in a HTML file can be shown using this event.
         */
        var LoadUiEvent = /** @class */ (function (_super) {
            __extends(LoadUiEvent, _super);
            function LoadUiEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LoadUiEvent.identifier = 'minecraft:load_ui';
            return LoadUiEvent;
        }(ScriptEvent));
        TriggerableEvents.LoadUiEvent = LoadUiEvent;
        /**
         * This event is used to send UI events to the UI Engine for the specific player running the script. After the
         * event is triggered, the UI event will be sent immediately.
         Custom UI is based on HTML 5. Review the scripting demo for an example of a custom UI file.
         */
        var SendUiEventEvent = /** @class */ (function (_super) {
            __extends(SendUiEventEvent, _super);
            function SendUiEventEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SendUiEventEvent.identifier = 'minecraft:send_ui_event';
            return SendUiEventEvent;
        }(ScriptEvent));
        TriggerableEvents.SendUiEventEvent = SendUiEventEvent;
        /**
         * This event is used to create a particle effect that will follow an entity around. This particle effect is
         * only visible to the specific player that is running the client script where you fired the event. Any effect
         * defined in a JSON file (both in your resource pack and in Minecraft) can be used here. MoLang variables
         * defined in the JSON of the effect can then be used to control that effect by changing them in the entity to
         * which it is attached.
         */
        var SpawnParticleAttachedEntityEvent = /** @class */ (function (_super) {
            __extends(SpawnParticleAttachedEntityEvent, _super);
            function SpawnParticleAttachedEntityEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SpawnParticleAttachedEntityEvent.identifier = 'minecraft:spawn_particle_attached_entity';
            return SpawnParticleAttachedEntityEvent;
        }(ScriptEvent));
        TriggerableEvents.SpawnParticleAttachedEntityEvent = SpawnParticleAttachedEntityEvent;
        /**
         * This event is used to create a static particle effect in the world. This particle effect is only visible to
         * the specific player that is running the client script where you fired the event. Any effect defined in a
         * JSON file
         * (both in your resource pack and in Minecraft) can be used here. Once the effect is spawned you won't be able
         * to control it further. Unlike the server version of the event, the client version will spawn the particle in
         * the dimension the player is currently in.
         */
        var SpawnParticleInWorldEvent = /** @class */ (function (_super) {
            __extends(SpawnParticleInWorldEvent, _super);
            function SpawnParticleInWorldEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SpawnParticleInWorldEvent.identifier = 'minecraft:spawn_particle_in_world';
            return SpawnParticleInWorldEvent;
        }(ScriptEvent));
        TriggerableEvents.SpawnParticleInWorldEvent = SpawnParticleInWorldEvent;
        /**
         * This event is used to remove a UI screen from the stack of the specific player running the client script.
         * The
         * event data contains the name of the screen to remove as a string. After the event is triggered the screen
         * will be scheduled to be removed from the stack the next time the UI Engine can do so. Only screens defined
         * in a HTML file can be removed using this event.
         */
        var UnloadUiEvent = /** @class */ (function (_super) {
            __extends(UnloadUiEvent, _super);
            function UnloadUiEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            UnloadUiEvent.identifier = 'minecraft:unload_ui';
            return UnloadUiEvent;
        }(ScriptEvent));
        TriggerableEvents.UnloadUiEvent = UnloadUiEvent;
    })(TriggerableEvents = ClientEvents.TriggerableEvents || (ClientEvents.TriggerableEvents = {}));
})(ClientEvents = exports.ClientEvents || (exports.ClientEvents = {}));
//# sourceMappingURL=events.js.map