// Factory Pattern is a creational pattern that provides an interface for creating objects in a superclass, 
// but allows subclasses to alter the type of objects that will be created.


class PayPalPayment {
    processPayment(amount) {
        console.log(`Processing $${amount} via PayPal`);
    }
}

class StripePayment {
    processPayment(amount) {
        console.log(`Processing $${amount} via Stripe`);
    }
}

class CreditCardPayment {
    processPayment(amount) {
        console.log(`Processing $${amount} via Credit Card`);
    }
}

class PaymentGatewayFactory {
    static createPaymentGateway(type) {
        switch (type) {
            case "paypal":
                return new PayPalPayment();
            case "stripe":
                return new StripePayment();
            case "creditcard":
                return new CreditCardPayment();
            default:
                throw new Error("Unknown Payment Method");
        }
    }
}

// Usage
const paymentGateway = PaymentGatewayFactory.createPaymentGateway("creditcard");
paymentGateway.processPayment(100);



// Use Cases:

// Database Connection Factory
// Payment Gateway Integration
// UI Component Creation
// Logging System
// Notification Service
// Document Generation
// Social Media Integration
