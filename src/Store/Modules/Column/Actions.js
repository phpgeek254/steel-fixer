export const actions = {
    createMemberLoad({commit}, payload) {
        let member = {
            length: payload.member.length,
            width: payload.member.width,
            thickness: payload.member.thickness,
            numberOfMembers: payload.member.numberOfMembers,
        };
        commit('CREATE_MEMBER_LOAD', { member: member, type: payload.type });
    },

    removeLoad: ({commit}, payload) => commit('REMOVE_LOAD', payload),
    saveMaterialProperties: ({commit}, payload) => commit('SAVE_MATERIAL_PROPS', payload),
    saveColumnGeometry: ({commit}, payload) => commit('SAVE_COLUMN_GEOMETRY', payload),
    saveLiveLoad: ({commit}, payload) => commit('SAVE_LIVE_LOAD', payload),
    saveSelectedBars: ({commit}, payload) => commit('SAVE_SELECTED_BARS', payload),
    saveObjectDimensions: ({commit}, payload) => commit('SAVE_OBJECT_DIMENSIONS', payload),
};
