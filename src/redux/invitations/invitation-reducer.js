import {invitations} from "./invitation-data";

const INITIAL_STATE = {
    invitations: [...invitations],
    invitationDetail: {},
    invitationLoading: false,
    invitationError: false,
    totalInvitations: invitations.length
}
const invitationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export const selectInvitation = state => state.invitation;

export default invitationReducer;
