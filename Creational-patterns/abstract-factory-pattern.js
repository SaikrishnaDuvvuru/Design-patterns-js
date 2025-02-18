// Abstract Factory Pattern is a creational pattern that provides an interface 
// for creating families of related or dependent objects without specifying their concrete classes.

class GUIFactory {
    createButton() {}
    createCheckbox() {}
    createTextField() {}
}

class WindowsFactory extends GUIFactory {
    createButton() {
        return new WindowsButton();
    }
    createCheckbox() {
        return new WindowsCheckbox();
    }
    createTextField() {
        return new WindowsTextField();
    }
}

class MacOSFactory extends GUIFactory {
    createButton() {
        return new MacOSButton();
    }
    createCheckbox() {
        return new MacOSCheckbox();
    }
    createTextField() {
        return new MacOSTextField();
    }
}

class Button {
    render() {}
}

class WindowsButton extends Button {
    render() {
        console.log("Rendering Windows Button");
    }
}

class MacOSButton extends Button {
    render() {
        console.log("Rendering macOS Button");
    }
}

class Checkbox {
    render() {}
}

class WindowsCheckbox extends Checkbox {
    render() {
        console.log("Rendering Windows Checkbox");
    }
}

class MacOSCheckbox extends Checkbox {
    render() {
        console.log("Rendering macOS Checkbox");
    }
}

class TextField {
    render() {}
}

class WindowsTextField extends TextField {
    render() {
        console.log("Rendering Windows TextField");
    }
}

class MacOSTextField extends TextField {
    render() {
        console.log("Rendering macOS TextField");
    }
}

function clientCode(factory) {
    const button = factory.createButton();
    const checkbox = factory.createCheckbox();
    const textField = factory.createTextField();

    button.render();
    checkbox.render();
    textField.render();
}

console.log("Creating Windows UI components:");
const windowsFactory = new WindowsFactory();
clientCode(windowsFactory);

console.log("\nCreating macOS UI components:");
const macFactory = new MacOSFactory();
clientCode(macFactory);


// Use Cases:

// UI Frameworks (Cross-Platform UI Components)
// Document Generation (PDF, Word, Excel)
// Database Connection Factories (Multiple Database Types)
// Operating System Services (File System, Network)
// Cloud Service Providers (Multiple Cloud Services)
// Furniture Manufacturing (Related Product Sets)
// Vehicle Manufacturing (Car Parts for Different Models)
// E-commerce Platforms (Shipping and Payment Methods)
// Notification Services (Email, SMS, Push)