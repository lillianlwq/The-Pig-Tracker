class Pig {
    static pigNum = 0;
    id: number;
    name: string;
    breed: string;
    height: number;
    weight: number;
    personality: string

    constructor(name: string, breed: string, height: number, weight: number, personality: string){
        this.id = Pig.pigNum;
        this.name = name;
        this.breed = breed;
        this.height = height;
        this.weight = weight;
        this.personality = personality;
        Pig.pigNum ++;
    }
}

class Grey extends Pig {
    swimming: number;
    constructor(name: string, breed: string, height: number, weight: number, personality: string, swimAbility: number) {
        super(name, breed, height, weight, personality);
        this.swimming = swimAbility;
    }
}

class Chestnut extends Pig {
    speaking: string;
    constructor(name: string, breed: string, height: number, weight: number, personality: string, language: string) {
        super(name, breed, height, weight, personality);
        this.speaking = language;
    }
}

class White extends Pig {
    running: number;
    constructor(name: string, breed: string, height: number, weight: number, personality: string, runAbility: number) {
        super(name, breed, height, weight, personality);
        this.running = runAbility;
    }
}

class Black extends Pig {
    strength: number;
    constructor(name: string, breed: string, height: number, weight: number, personality: string, laborAbility: number) {
        super(name, breed, height, weight, personality);
        this.strength = laborAbility;
    }
}

// var pig1 = new Black("Pork Chop", "Pork bellied", 10, 20, "strong", 9);
// var pig2 = new Black("Pork Chop1", "Pork bellied1", 10, 20, "strong1", 9);
// var pig3 = new Black("Pork Chop2", "Pork bellied2", 10, 20, "strong", 9);