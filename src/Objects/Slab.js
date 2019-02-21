import {CONCRETE} from "./Concrete";

export const SLAB = {
    getSlabSelfWeight (slabDetails) {
        return (slabDetails.thickness/1000 * slabDetails.length/1000 * slabDetails.width/1000 * CONCRETE.CONCRETE_UNIT_WEIGHT).toFixed(2)
    }
};
