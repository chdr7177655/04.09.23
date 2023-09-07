

class Car {
    constructor(brand, model, price, licensePlate, productionYear, color, maintenanceYears) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.licensePlate = licensePlate;
        this.productionYear = productionYear;
        this.color = color;
        this.maintenanceYears = maintenanceYears;
    }

    year_compare(year) {
        return this.manufacturingYear === year;
    }

    car_my_paint(color) {
        this.color = color;
    }
}