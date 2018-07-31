import uuid from 'uuid';

//  add comment -------------------------------------------------------------------

export const ADD_COMMENT = 'ADD_COMMENT';

function addComment(text) {
   return {
       type: ADD_COMMENT,
       text,
       id: uuid.v4()
    }
}

//   remove comment -----------------------------------------------------------------

export const REMOVE_COMMENT = 'REMOVE_COMMENT';

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id,
    }
}
 
//  edit comment ------------------------------------------------------------------------
export const EDIT_COMMENT = 'EDIT_COMMENT';

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        id,
        text,
    }
}

//  plus one ------------------------------------------------------------------------------
export const PLUS_ONE = 'PLUS_ONE';

function plusOne(id) {
    return {
        type: PLUS_ONE,
        id,
    }
}

//  minus one ----------------------------------------------------------------------------
export const MINUS_ONE = 'MINUS_ONE';

function minusOne(id) {
   return {
       type: MINUS_ONE,
       id,
   }
}
