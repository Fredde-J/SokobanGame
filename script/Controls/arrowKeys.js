import sound from '/script/utility/SoundUtility.js';
import movement from './Move.js';

export default{
   mixins: [sound, movement],
   template:`
   <div id="arrows">
   <i @click="goLeft" class="fa fa-arrow-circle-left" id="sideArrows"></i>
   <div id="upDownArrows">   
   <i @click="goUp" class="fa fa-arrow-circle-up"></i>
   <i @click="goDown" class="fa fa-arrow-circle-down"></i>
   </div>
   <i @click="goRight" class="fa fa-arrow-circle-right" id="sideArrows"></i>
   
   </div>
  
   `, 
     data(){
        return{
        arrowCords:{
            x: 0,
            y: 0
        }
    }
},
   methods:{
       goUp(){
           this.playSound('/sound/moveSound.wav');
           console.log("Up");
            this.arrowCords.y=(this.arrowCords.y)-1;
            console.log(this.arrowCords.x)
            console.log(this.arrowCords.y)
            this.moveByArrowKeys(this.arrowCords);
            this.arrowCords.y=0
        
       },
       goDown(){
            this.playSound('/sound/moveSound.wav');
            this.moveDown();
           
       },
       goRight(){
           this.playSound('/sound/moveSound.wav');
           this.moveRight();
           
       },
       goLeft(){
           this.playSound('/sound/moveSound.wav');
           this.moveLeft();
       }
   }
}