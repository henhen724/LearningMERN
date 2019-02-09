const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateCommentInput(data) {
    let errors = {};

    data.text = !isEmpty(data.text) ? data.text : '';

    if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
        errors.text = 'Comments must be in between 10 and 300 charaters.';
    }


    if (Validator.isEmpty(data.text)) {
        errors.text = 'You have to write something to make a comment.';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}