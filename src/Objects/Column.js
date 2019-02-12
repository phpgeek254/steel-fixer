export const Column = {
    AXES: {
        Y_AXIS: 'Y-Y',
        X_AXIS: 'X-X',
    },
    SLENDERNESS_RATIOS: {
        BracedColumn: 15,
        UnbracedColumn: 10
    },
    END_CONDITION_DESCRIPTIONS: {
        condition_1: '',
        condition_2: '',
        condition_3: ''
    },
    END_CONDITION_COEFFICIENTS: [
        [0.75, 0.80, 0.90],
        [0.80, 0.85, 0.95],
        [0.90, 0.95, 1.00],
    ],

    getBettaCoefficient (topEndCondition, bottomEndCondition, columnHeight) {
        return this.END_CONDITION_COEFFICIENTS[topEndCondition - 1][bottomEndCondition - 1] * columnHeight;
    },

    calculateEffectiveHeight (topEndCondition, bottomEndCondition, columnClearHeight) {
        return this.getBettaCoefficient(topEndCondition, bottomEndCondition, columnClearHeight) / columnClearHeight;
    },
    checkColumnSlenderness(topEndCondition, bottomEndCondition, columnClearHeight) {
        return this.calculateEffectiveHeight(topEndCondition, bottomEndCondition, columnClearHeight) > this.SLENDERNESS_RATIOS.BracedColumn;
    },

    calculateAreaOfSteel (loading, characteristicConcreteStrength, characteristicSteelStrength, columnWidth, columnDepth) {
        return -1 * ((loading - (0.4*characteristicConcreteStrength * columnDepth * columnWidth)) / ((0.4*characteristicConcreteStrength) - (0.8*characteristicSteelStrength)))
    },

    calculateMinimumLinkDiameter (largestBar) {
        let diameter = 0.25 * largestBar;
        if (diameter < 8) return 8; else return diameter;
    },

    calculateLinkSpacing (smallestBar) {
        return 12 * smallestBar;
    },
};
