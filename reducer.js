import { comments } from './comments';

function app(state = initalState, action) {
    return {
        comments: comments(state.comments, action),
        users: users(state.users, action)
    };
}

