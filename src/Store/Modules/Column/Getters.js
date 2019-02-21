export const getters = {
    slabLoads: (state) => state.column.slabLoading,
    beamLoads: (state) => state.column.beamLoading,
    wallLoads: (state) => state.column.wallLoading,
    column: (state) => state.column.geometry,
    materialProperties: (state) => state.column.materialProperties
};
