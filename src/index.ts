interface updateable {
    update() : void;
}
interface preUpdateable extends updateable {
    preUpdate() : void;
}

class Game implements updateable {

    private car : CarPhysics;

    constructor() {
        this.car = new CarPhysics();
    }

    public update() {
        this.car.update();
    }

    public gameLoop() {
        this.update();
        requestAnimationFrame(() => this.gameLoop);
    }
}

class CarPhysics implements updateable {
    public update() {
        console.log("updating car");
    }
}

var g = new Game();
g.gameLoop();