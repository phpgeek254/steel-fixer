export const CONCRETE = {
    CHARACTERISTIC_STRENGTHS: [16, 20, 25, 30, 35, 40],
    CONCRETE_UNIT_WEIGHT: 24,

    calculateDesignLoading(liveLoad, deadLoad) {
        let designLoad =  ((1.4 * deadLoad) + (1.6 * liveLoad)).toFixed(2);
        return parseFloat(designLoad);
    }
};
