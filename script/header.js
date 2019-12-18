import settingsTab from './tabs/settings.js';
import timer from './Game/timer.js';
import sound from './utility/SoundUtility.js';
import storage from './utility/StorageUtility.js';
import grid from "./Game/grid.js"


export default{
    mixins: [sound, timer, storage,grid],
    components: {
        settingsTab,
        timer,
    },
    
    template: `
        <div id="header">
            <div id="menu-bar">
                <button id="start-game-button" class="header-buttons" v-on:click="startGame">Start!</button>
                <button id="settings-button" class="header-buttons" v-on:click="showSettings">Settings</button>
                <button id="end-game-button" class="header-buttons" v-on:click="stopGame">Stop!</button>
            </div>
            <div id="tab">
                <settingsTab id="settings-tab" hidden></settingsTab> 
            </div>
            <div id="timer">
                <timer></timer>
            </div>
        </div>

    `,
    methods: {
        startGame: function(){
            this.addItem("isAbleToMove", true);
            this.run(60);
            this.buttonClick();
        },

        stopGame: function(){
            this.buttonClick();
            this.addItem("isAbleToMove", false);
            this.stopGame();
        },

        showSettings: function(){
            this.buttonClick();
            document.getElementById("settings-tab").style.display = 'block';
            document.getElementById("sokobanGrid").style.display = 'none';
            document.getElementById("arrows").style.display = 'none';
        },
    }
}