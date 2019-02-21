import {CONCRETE} from "./Concrete";

export const BEAM = {
    calculateBeamSelfWeight (beamDetails) {
        if (!beamDetails) return;
        return (beamDetails.thickness/1000 * beamDetails.width/1000 * beamDetails.length/1000 * CONCRETE.CONCRETE_UNIT_WEIGHT).toFixed(2);
    },

};
