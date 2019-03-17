import {STEEL_BARS} from "../../../Objects/SteelBars";
import {element_types as Element_type} from "../../../Objects/ElementType";
import {SLAB} from "../../../Objects/Slab";

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
            default:
                break;
        }
    },

    'REMOVE_LOAD': (state, payload) => {
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
            default:
                break;
        }
    },

    'SAVE_MATERIAL_PROPS': (state, payload) => {
        switch (payload.element_type) {
            case Element_type.COLUMN:
                state.column.materialProperties = payload.materialProperties;
                break;
            case Element_type.SLAB:
                state.slab.materialProperties = payload.materialProperties;
                break;
            case Element_type.BEAM:
                state.beam.materialProperties = payload.materialProperties;
                break;
            default:
                return;
        }
    },

    'SAVE_COLUMN_GEOMETRY': (state, payload) => {
        state.column.selfWeight = parseFloat(((payload.d / 1000) * (payload.b / 1000) * (payload.l / 1000) * 24).toFixed(2));
        state.column.geometry = payload
    },

    'SAVE_LIVE_LOAD': (state, payload) => {
        switch (payload.element_type) {
            case Element_type.COLUMN:
                state.column.live_load = payload.load.live_load;
                state.column.numberOfFloors = payload.load.numberOfFloors;
                break;
            case Element_type.SLAB:
                state.slab.live_load = payload.load.live_load;
                break;
            case Element_type.BEAM:
                state.beam.live_load = payload.load.live_load;
                break;
            default:
                return;
        }
    },

    'SAVE_SELECTED_BARS': (state, payload) => {
        state.column.selectedBars = {
            barSize: payload.barSize,
            numberOfBars: payload.numberOfBars,
            areaProvided: Math.ceil(STEEL_BARS.calculateAreaProvided(payload.barSize, payload.numberOfBars))
        };
    },

    'SAVE_OBJECT_DIMENSIONS' : (state, payload) => {
        switch (payload.element_type) {
            case Element_type.COLUMN:
                state.column.dimensions = payload.dimensions;
                break;
            case Element_type.SLAB:
                state.slab.dimensions = payload.dimensions;
                state.slab.selfWeight = SLAB.getSlabSelfWeight(payload.dimensions);
                break;
            case Element_type.BEAM:
                state.beam.dimensions = payload.dimensions;
                break;
            default:
                return;
        }
    }


};
