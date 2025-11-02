function parseCount(value) {
    if (isNaN(value)) {
        throw new Error("Невалидное значение");
    }
    return Number.parseFloat(value)
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(sideA, sideB, sideC) {
        if (sideA >= sideB + sideC || sideB >= sideA + sideC || sideC >= sideB + sideA || sideA <= 0 || sideB <= 0 || sideC <= 0) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;

    }

    get perimeter() {
        return (this.sideA + this.sideB + this.sideC);
    }
    get area() {
        let halfPerimeter = this.perimeter / 2;
        return parseFloat(((halfPerimeter * (halfPerimeter - this.sideA) * (halfPerimeter - this.sideB) * (halfPerimeter - this.sideC)) ** 0.5).toFixed(3));
    }

}

function getTriangle(sideA, sideB, sideC) {
    try {
        return new Triangle(sideA, sideB, sideC);
    } catch (error) {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
            get area() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}


