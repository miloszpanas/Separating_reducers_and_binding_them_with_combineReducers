import { 
    ADD_COMMENT, 
    REMOVE_COMMENT, 
    EDIT_COMMENT, 
    MINUS_ONE, 
    PLUS_ONE 
} from "./actions";

const initialState = {
    comments: [],
    users: []
};

function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0,
            }
            , ...state];
        case REMOVE_COMMENT:
            return state.filter(comment => comment.id !== action.id);
        case EDIT_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    return {...comment, text: action.text}
                }
                return comment;
            });
        case MINUS_ONE:
            return state.map(comment => {
                if (comment.id === action.id) {
                    return {...comment, votes: comment.votes - 1}
                }
                return comment;
            });
        case PLUS_ONE:
            return state.map(comment => {
                if(comment.id === action.id) {
                    return {...comment, votes: comment.votes + 1}
                }
                return comment;
            });
        default:
            return state;

    }
}

export default comments;
