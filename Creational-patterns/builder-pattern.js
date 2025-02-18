// Product
class House {
    constructor() {
        this.foundation = '';
        this.walls = '';
        this.windows = '';
        this.roof = '';
    }

    describe() {
        console.log(`House with ${this.foundation}, ${this.walls}, ${this.windows}, and ${this.roof}`);
    }
}

// Builder Interface
class HouseBuilder {
    setFoundation() {}
    setWalls() {}
    setWindows() {}
    setRoof() {}
    build() {}
}

// Concrete Builder for Modern House
class ModernHouseBuilder extends HouseBuilder {
    constructor() {
        super();
        this.house = new House();
    }

    setFoundation() {
        this.house.foundation = 'Modern concrete foundation';
    }

    setWalls() {
        this.house.walls = 'Glass and steel walls';
    }

    setWindows() {
        this.house.windows = 'Large modern windows';
    }

    setRoof() {
        this.house.roof = 'Flat roof with solar panels';
    }

    build() {
        return this.house;
    }
}

// Concrete Builder for Classic House
class ClassicHouseBuilder extends HouseBuilder {
    constructor() {
        super();
        this.house = new House();
    }

    setFoundation() {
        this.house.foundation = 'Stone foundation';
    }

    setWalls() {
        this.house.walls = 'Brick walls';
    }

    setWindows() {
        this.house.windows = 'Traditional wooden windows';
    }

    setRoof() {
        this.house.roof = 'Gabled roof with shingles';
    }

    build() {
        return this.house;
    }
}

// Director
class HouseDirector {
    constructor(builder) {
        this.builder = builder;
    }

    constructHouse() {
        this.builder.setFoundation();
        this.builder.setWalls();
        this.builder.setWindows();
        this.builder.setRoof();
        return this.builder.build();
    }
}

// Client Code
const modernHouseBuilder = new ModernHouseBuilder();
const houseDirector = new HouseDirector(modernHouseBuilder);
const modernHouse = houseDirector.constructHouse();
modernHouse.describe(); // Output: House with Modern concrete foundation, Glass and steel walls, Large modern windows, and Flat roof with solar panels.

const classicHouseBuilder = new ClassicHouseBuilder();
houseDirector.builder = classicHouseBuilder;
const classicHouse = houseDirector.constructHouse();
classicHouse.describe(); // Output: House with Stone foundation, Brick walls, Traditional wooden windows, and Gabled roof with shingles.
