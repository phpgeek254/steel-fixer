import {CONCRETE} from "./Concrete";

export const SLAB = {

    SLAB_SUPPORT_CONDITIONS: [
        {name: 'Simply Supported', index: 0},
        {name: 'Restrained', index: 1}
    ],

    PANEL_TYPES: [
        {name: 'Interior panels', index: 0},
        {name: 'One short edge discontinuous', index: 1},
        { name: 'One long edge discontinuous', index: 2},
        { name: 'Two adjacent edges discontinuous', index: 3},
        { name: 'Two short edges discontinuous', index: 4},
        { name: 'Two long edges discontinuous', index: 5},
        { name: 'Three edges discontinuous (one long edge continuous)', index: 6},
        { name: 'Three edges discontinuous (one short edge continuous)', index: 7},
        { name: 'Four edges discontinuous', index: 8},
    ],
    SLAB_TYPES: [
        {
            // interior_panel: {
            edge_moment_coeff: [0.031, 0.037, 0.042, 0.046, 0.050, 0.053, 0.059, 0.063],
            midspan_moment_coeff: [0.024, 0.028, 0.032, 0.035, 0.037, 0.040, 0.044, 0.048],
            long_span_coeff: [0.032, 0.024],
        },
        {
            // one_short_disc: {
            edge_moment_coeff: [0.039, 0.044, 0.048, 0.052, 0.055, 0.058, 0.063, 0.067],
            midspan_moment_coeff: [0.029, 0.033, 0.036, 0.039, 0.041, 0.043, 0.047, 0.050],
            long_span_coeff: [0.037, 0.028],
        },
        {
            // one_long_disc: {
            edge_moment_coeff: [0.039, 0.049, 0.056, 0.062, 0.068, 0.073, 0.082, 0.089],
            midspan_moment_coeff: [0.030, 0.036, 0.042, 0.047, 0.051, 0.055, 0.062, 0.067],
            long_span_coeff: [0.037, 0.028],
        },
        {
            // two_adj_disc: {
            edge_moment_coeff: [0.047, 0.056, 0.063, 0.069, 0.074, 0.078, 0.087, 0.093],
            midspan_moment_coeff: [0.036, 0.042, 0.047, 0.051, 0.055, 0.059, 0.065, 0.070],
            long_span_coeff: [0.045, 0.034],
        },
        {
            // two_short_disc: {
            edge_moment_coeff: [0.046, 0.050, 0.054, 0.057, 0.060, 0.062, 0.067, 0.070],
            midspan_moment_coeff: [0.034, 0.038, 0.040, 0.043, 0.045, 0.047, 0.050, 0.053],
            long_span_coeff: [0, 0.034],
        },
        {
            // two_long_disc: {
            edge_moment_coeff: [0, 0, 0, 0, 0, 0, 0, 0],
            midspan_moment_coeff: [0.034, 0.046, 0.056, 0.065, 0.072, 0.078, 0.091, 0.100],
            long_span_coeff: [0.045, 0.034],
        },
        {
            // three_disc_long_cont: {
            edge_moment_coeff: [0.057, 0.065, 0.071, 0.076, 0.081, 0.084, 0.092, 0.098],
            midspan_moment_coeff: [0.043, 0.048, 0.053, 0.057, 0.060, 0.063, 0.069, 0.074],
            long_span_coeff: [0, 0.044],
        },
        {
            // three_disc_short_cont: {
            edge_moment_coeff: [0, 0, 0, 0, 0, 0, 0, 0],
            midspan_moment_coeff: [0.042, 0.054, 0.063, 0.071, 0.078, 0.084, 0.096, 0.105],
            long_span_coeff: [0.058, 0.044],
        },
        {
            // all_disc: {
            edge_moment_coeff: [0, 0, 0, 0, 0, 0, 0, 0],
            midspan_moment_coeff: [0.055, 0.065, 0.074, 0.081, 0.087, 0.092, 0.103, 0.111],
            long_span_coeff: [0, 0.056],
        },
    ],

    getSlabSelfWeight(slabDetails) {
        let area = slabDetails.length/1000 * slabDetails.width/1000;
        let selfWeight = (slabDetails.thickness / 1000 * slabDetails.length / 1000 * slabDetails.width / 1000 * CONCRETE.CONCRETE_UNIT_WEIGHT/area).toFixed(2);
        return parseFloat(selfWeight);
    },
    getFinishes () {
        return 1;
    },
    getSlabDimensionRatio(slabObject) {

        let ratio = (slabObject.length / slabObject.width).toFixed(1);
        console.info("ly/lx =======> "+ ratio);
        return parseFloat(ratio);
    },

    checkSlabState(slabObject) {
        let slabState = false;
        if (slabObject !== null) {
            console.log('Checking the slab State');
            slabState = this.getSlabDimensionRatio(slabObject) > 2;
            console.log('Checking the slab State' + slabState ? 'One way spanning' : 'Two way spanning');
        }
        return slabState;
    },

    getEdgeMomentsRestrained(panelTypeIndex, slabObject, designLoad) {
        let edgeCoeff = 0;
        let ratio = this.getSlabDimensionRatio(slabObject);
        if (ratio < 1.1) {
            edgeCoeff = this.SLAB_TYPES[panelTypeIndex].G;
        } else if (ratio >= 1.1 && ratio < 1.2) {
            edgeCoeff = this.SLAB_TYPES[panelTypeIndex].edge_moment_coeff[1];
        } else if (ratio >= 1.2 && ratio < 1.3) {
            edgeCoeff = this.SLAB_TYPES[panelTypeIndex].edge_moment_coeff[2];
        } else if (ratio >= 1.3 && ratio < 1.4) {
            edgeCoeff = this.SLAB_TYPES[panelTypeIndex].edge_moment_coeff[3];
        } else if (ratio >= 1.4 && ratio < 1.5) {
            edgeCoeff = this.SLAB_TYPES[panelTypeIndex].edge_moment_coeff[4];
        } else if (ratio >= 1.5 && ratio < 1.7) {
            edgeCoeff = this.SLAB_TYPES[panelTypeIndex].edge_moment_coeff[5];
        } else if (ratio >= 1.7 && ratio < 2) {
            edgeCoeff = this.SLAB_TYPES[panelTypeIndex].edge_moment_coeff[6]
        } else if (ratio === 2) {
            edgeCoeff = this.SLAB_TYPES[panelTypeIndex].edge_moment_coeff[7]
        }
        let moment = (edgeCoeff * designLoad * Math.pow(slabObject.width/1000, 2)).toFixed(2);
        console.log("Edge coefficient: =======> " + edgeCoeff + ' ====> Moment =====> ' + moment);
        return parseFloat(moment);
    },

    getMidspanMomentsRestrained(panelTypeIndex, slabObject, designLoad) {
        let edgeCoeff = 0;
        let ratio = this.getSlabDimensionRatio(slabObject);
        if (ratio < 1.1) {
            edgeCoeff = this.SLAB_TYPES[panelTypeIndex].midspan_moment_coeff[0];
        } else if (ratio >= 1.1 && ratio < 1.2) {
            edgeCoeff = this.SLAB_TYPES[panelTypeIndex].midspan_moment_coeff[1];
        } else if (ratio >= 1.2 && ratio < 1.3) {
            edgeCoeff = this.SLAB_TYPES[panelTypeIndex].midspan_moment_coeff[2];
        } else if (ratio >= 1.3 && ratio < 1.4) {
            edgeCoeff = this.SLAB_TYPES[panelTypeIndex].midspan_moment_coeff[3];
        } else if (ratio >= 1.4 && ratio < 1.5) {
            edgeCoeff = this.SLAB_TYPES[panelTypeIndex].midspan_moment_coeff[4];
        } else if (ratio >= 1.5 && ratio < 1.7) {
            edgeCoeff = this.SLAB_TYPES[panelTypeIndex].midspan_moment_coeff[5];
        } else if (ratio >= 1.7 && ratio < 2) {
            edgeCoeff = this.SLAB_TYPES[panelTypeIndex].midspan_moment_coeff[6]
        } else if (ratio === 2) {
            edgeCoeff = this.SLAB_TYPES[panelTypeIndex].midspan_moment_coeff[7]
        }

        let moment = (edgeCoeff * designLoad * Math.pow(slabObject.width/1000, 2)).toFixed(2);
        console.log("Midspan coefficient: =======> " + edgeCoeff + 'Moment =====>' + moment);
        return parseFloat(moment);
    },

    calculateEffectiveDepthMain (slabObject, mainSteelSize = 10, cover = 20) {
        return slabObject.thickness - (mainSteelSize/2) - cover;
    },
    calculateEffectiveDepthSec (slabObject, linkSize = 8, mainSteelSize = 10, cover = 20) {
        return slabObject.thickness - linkSize - (mainSteelSize/2) - cover;
    },
    getMidspanMomentsLx (slabObject, designLoading) {
        let ratio = slabObject.length/ slabObject.width;
        let din = 8 * (1+(Math.pow(ratio, 4)));
        let coeff = (Math.pow(ratio, 4)/ din).toFixed(2);
        return coeff * designLoading * Math.pow(slabObject.width, 2);
    },
    getMidspanMomentsLy (slabObject, designLoading) {
        let ratio = slabObject.length/ slabObject.width;
        let din = 8 * (1+(Math.pow(ratio, 4)));
        let coeff = (Math.pow(ratio, 2)/ din).toFixed(2);
        return coeff * designLoading * Math.pow(slabObject.width, 2);
    },

    getLongspanMoments() {

    },

    calculateK(moment, fCu, effectiveDepth, width = 1000) {
        let k = (moment * Math.pow(10, 6) / (width * Math.pow(effectiveDepth, 2) * fCu)).toFixed(2);
        return parseFloat(k);
    },

    calculateLeverArm(k, effectiveDepth) {
        let check = (effectiveDepth * (0.5 + (Math.sqrt((0.25 - (k / 0.9)))))).toFixed(2);
        if (parseFloat(check) > 0.95) return (0.95 * effectiveDepth); else return parseFloat(check);
    },

    calculateMainSteelArea(slabObject, mainSteelSize, cover, moment, fCu, fY) {
        let effectiveDepthMain = this.calculateEffectiveDepthMain(slabObject, mainSteelSize, cover);
        let k = this.calculateK(moment, fCu, effectiveDepthMain, slabObject.width = 1000);
        let leverArm = this.calculateLeverArm(k, effectiveDepthMain);
        let aS = ((moment * Math.pow(10, 6)) / (0.95 * fY * leverArm)).toFixed(2);
        return parseFloat(aS);
    },

    calculateAreaOfSteelProvided(diameter) {
       let area =  (Math.PI * Math.pow(diameter/2, 2)).toFixed(2);
       return parseFloat(area);
    },

    calculateSecondarySteelArea(slabObject, mainSteelSize, cover, moment, fCu, fY) {
        let effectiveDepthMain = this.calculateEffectiveDepthSec(slabObject, mainSteelSize, cover);
        let k = this.calculateK(moment, fCu, effectiveDepthMain, slabObject.width = 1000);
        let leverArm = this.calculateLeverArm(k, effectiveDepthMain);
        let aS = ((moment * Math.pow(10, 6)) / (0.95 * fY * leverArm)).toFixed(2);
        return parseFloat(aS);
    },

    calculateMinimumArea (slabObject) {
        let minArea = ((0.13/100) * 1000 * slabObject.thickness).toFixed(2);
        return parseFloat(minArea);
    },

    checkSlabDeflection() {
    }

};
