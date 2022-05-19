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


        case INVITATIONS_ACTION_TYPES.CREATE_INVITATION_REQUEST:
            return {
                ...state,
                invitationError: null,
                invitationLoading: true
            }

        case INVITATIONS_ACTION_TYPES.CREATE_INVITATION_SUCCESS:
            return {
                ...state,
                invitationError: null,
                invitationLoading: false,
                invitations: [...state.invitations, action.payload],
                totalInvitations: state.totalInvitations + 1
            }

        case INVITATIONS_ACTION_TYPES.CREATE_INVITATION_FAIL:
            return {
                ...state,
                invitationError: action.payload,
                invitationLoading: false
            }


        case INVITATIONS_ACTION_TYPES.UPDATE_INVITATION_REQUEST:
            return {
                ...state,
                invitationError: null,
                invitationLoading: true
            }

        case INVITATIONS_ACTION_TYPES.UPDATE_INVITATION_SUCCESS:
            return {
                ...state,
                invitationError: null,
                invitationLoading: false,
                invitations: [...state.invitations.map(invitation => {
                    if(invitation._id === action.payload._id) return action.payload;
                    return invitation;
                })]
            }

        case INVITATIONS_ACTION_TYPES.UPDATE_INVITATION_FAIL:
            return {
                ...state,
                invitationError: action.payload,
                invitationLoading: false
            }



        case INVITATIONS_ACTION_TYPES.REVOKE_INVITATION_REQUEST:
            return {
                ...state,
                invitationError: null,
                invitationLoading: true
            }

        case INVITATIONS_ACTION_TYPES.REVOKE_INVITATION_SUCCESS:
            return {
                ...state,
                invitationError: null,
                invitationLoading: false,
                invitations: [...state.invitations.map(invitation => {
                    if(invitation._id === action.payload._id) return action.payload;
                    return invitation;
                })]
            }

        case INVITATIONS_ACTION_TYPES.REVOKE_INVITATION_FAIL:
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
