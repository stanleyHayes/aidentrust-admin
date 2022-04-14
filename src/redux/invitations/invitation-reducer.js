import {INVITATIONS_ACTION_TYPES} from "./invitation-action-types";

const INITIAL_STATE = {
    invitations: [],
    invitationDetail: {},
    invitationLoading: false,
    invitationError: false,
    totalInvitations: 0
}
const invitationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case INVITATIONS_ACTION_TYPES.GET_INVITATIONS_REQUEST:
            return {
                ...state,
                invitationError: null,
                invitationLoading: true
            }

        case INVITATIONS_ACTION_TYPES.GET_INVITATIONS_SUCCESS:
            return {
                ...state,
                invitationError: null,
                invitationLoading: false,
                invitations: action.payload.data,
                totalInvitations: action.payload.count
            }

        case INVITATIONS_ACTION_TYPES.GET_INVITATIONS_FAIL:
            return {
                ...state,
                invitationError: action.payload,
                invitationLoading: false
            }

        default:
            return state;
    }
}

export const selectInvitation = state => state.invitation;

export default invitationReducer;
