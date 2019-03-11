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

    getBettaCoefficient (topEndCondition, bottomEndCondition) {
        let betaCoefficient = this.END_CONDITION_COEFFICIENTS[topEndCondition - 1][bottomEndCondition - 1];
        console.log('getBettaCoefficient ', betaCoefficient);
        return betaCoefficient;
    },

    calculateEffectiveHeight (topEndCondition, bottomEndCondition, columnClearHeight) {
        let effectiveColumnHeight = this.getBettaCoefficient(topEndCondition, bottomEndCondition) * columnClearHeight;
        console.log('calculateEffectiveHeight ? ', effectiveColumnHeight);
        return effectiveColumnHeight;
    },
    checkColumnSlenderness(topEndCondition, bottomEndCondition, columnClearHeight, columnWidth) {
        let lexDivH = this.calculateEffectiveHeight(topEndCondition, bottomEndCondition, columnClearHeight) / columnWidth;
        console.log('lex = ', lexDivH);
        return this.calculateEffectiveHeight(topEndCondition, bottomEndCondition, columnClearHeight) / columnClearHeight < this.SLENDERNESS_RATIOS.BracedColumn;
    },

    calculateAreaOfSteel (loading, characteristicConcreteStrength, characteristicSteelStrength, columnWidth, columnDepth) {
        return  (((loading*1000) - (0.4*characteristicConcreteStrength * columnDepth * columnWidth)) / ((0.4*characteristicConcreteStrength) - (0.8*characteristicSteelStrength)))
    },

    calculateMinimumLinkDiameter (largestBar) {
        let diameter = 0.25 * largestBar;
        if (diameter < 8) return 8; else return diameter;
    },

    calculateLinkSpacing (smallestBar) {
        return 12 * smallestBar;
    },
};
