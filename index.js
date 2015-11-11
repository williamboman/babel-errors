class Parent {
    constructor() {}
}

class Child extends Parent {
    scopedFunctionWithThis = () => {
        this.name = {};
    }

    constructor() {
        super();

        // This works fine though
        // this.scopedFunctionWithThis = () => {
        //     this.name = {};
        // };
    }
}
