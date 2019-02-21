export const mutations = {
    'CREATE_MEMBER_LOAD': (state, payload) => {
        switch (payload.type) {
            case 'beam':
                state.column.beamLoading.push(payload.member);
                break;
            case 'wall':
                state.column.wallLoading.push(payload.member);
                break;
            case 'slab':
                state.column.slabLoading.push(payload.member);
                break;
            default: break;
        }

    },

    'REMOVE_LOAD' : (state, payload) => {
        switch (payload.type) {
            case 'beam':
                state.column.beamLoading.splice(payload.index, 1);
                break;
            case 'wall':
                state.column.wallLoading.splice(payload.index, 1);
                break;
            case 'slab':
                state.column.slabLoading.splice(payload.index, 1);
                break;
            default: break;
        }
    },

    'SAVE_MATERIAL_PROPS' : (state, payload) => state.column.materialProperties = payload,

    'SAVE_COLUMN_GEOMETRY' : (state, payload) => state.column.geometry = payload,
};
