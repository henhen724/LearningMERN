const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperinceInput(data) {
    let errors = {};

    data.school = !isEmpty(data.school) ? data.school : '';
    data.degree = !isEmpty(data.degree) ? data.degree : '';
    data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : '';
    data.from = !isEmpty(data.from) ? data.from : '';

    if (Validator.isEmpty(data.school)) {
        errors.school = 'School name is required.';
    }

    if (Validator.isEmpty(data.degree)) {
        errors.degree = 'Degree name is required.';
    }

    if (Validator.isEmpty(data.fieldofstudy)) {
        errors.fieldofstudy = 'Field of Study is required.';
    }

    if (Validator.isEmpty(data.from)) {
        errors.from = 'From field is required.';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}