export const STEEL_BARS = {
    BAR_SIZES: [
        8, 10, 12, 16, 20, 25, 32, 40
    ],

    calculateAreaOfSteelBar (diameter) {
        return Math.PI * Math.pow(diameter, 2) * 0.25;
    },

    calculateAreaProvided (diameter, numberOfBars) {
        return this.calculateAreaOfSteelBar(diameter) * numberOfBars;
    }
};
