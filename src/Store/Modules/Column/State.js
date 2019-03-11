export const state = {
    column: {
        dimensions: {},
        slabLoading: [],
        beamLoading: [],
        wallLoading: [],
        materialProperties: null,
        geometry: null,
        live_load: null,
        selfWeight: null,
        numberOfFloors: 2,
        selectedBars: {}
    },
    slab: {
        materialProperties: {},
        dimensions: {
            length: 4000,
            width: 4000,
            thickness: 150,
        },
        live_load: 3,
        selfWeight: null,
        area_of_steel: null

    },
    beam: {
        materialProperties: {},
        dimensions: {},
    }
};
