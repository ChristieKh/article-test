import validator from "email-validator";

export function isValidation(data) {
    return validator.validate(data);
}