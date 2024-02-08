
import { gameTypes } from "../gVars.js";


export class Games{
    constructor(){
        this.name = null;
        this.release = null;
        this.platform = null;
        this.studio = null;
    }
    makeGame(selectedGame){
        if(selectedGame === gameTypes.fps){ return new FPS() }
        else if(selectedGame === gameTypes.rpg){ return new RPG() }
        else if(selectedGame === gameTypes.sim){ return new Sim() }
        else if(selectedGame === gameTypes.jrpg){ return new JRPG() }
        else if(selectedGame === gameTypes.racing){ return new Racing() }
    }
}

class FPS extends Games{
    constructor(){
        super();
        this.targetBoxSize;
        this.aimAssist;
        this.cheatBand;
        
    }
}

class RPG extends Games{
    constructor(){
        super();
        this.worldSize;
    }
}

class JRPG extends Games{
    constructor(){
        super();
        this.englishVoice;
    }
}

class Sim extends Games{
    constructor(){
        super();
        this.biologicalAI
        this.physicsEngine
        this.econSim
    }
}

class Racing extends Games{
    constructor(){
        super();
        this.tirePhysics
        this.airoDynamics
    }
}