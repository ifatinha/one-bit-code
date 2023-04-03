class Address {
    constructor(street, number, neighborhood, city, state, country) {
        this.street = street;
        this.number = number;
        this.neighborhood = neighborhood;
        this.city = city;
        this.state = state;
        this.country = country;
    }

    fullAddress() {
        return `Rua ${this.street}, nº ${this.number}. ${this.neighborhood}, ${this.city}/${this.state} - ${this.country}`;
    }
}

module.exports = Address;