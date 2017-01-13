import {createAction, makeFormEncodedRequest} from '../../utils/utils'
import isEmail from 'validator/lib/isEmail'
import {SubmissionError} from 'redux-form'

const validateSignInForm = (formValues) => {
    const errors = {
        login: {}
    }
    if (!formValues.login) {
        return {
            _error: 'Please fill in the form'
        }
    }
    const email = formValues.login.username
    if (!email) {
        errors.login.username = 'Email address is required'
    } else if (!isEmail(email)) {
        errors.login.username = 'Email address is invalid'
    }
    const password = formValues.login.password
    if (!password) {
        errors.login.password = 'Password is required'
    }
    return errors
}

const validateRegisterForm = (formValues) => {
    const errors = {}

    if (!Object.keys(formValues).length) {
        return {
            _error: 'Please fill in the form'
        }
    }

    const {
        firstname,
        lastname,
        email,
        password,
        password_confirmation: passwordConfirmation
    } = formValues

    if (!firstname) {
        errors.firstname = 'First name is required'
    }

    if (!lastname) {
        errors.lastname = 'Last name is required'
    }

    if (!email) {
        errors.email = 'Email address is required'
    } else if (!isEmail(email)) {
        errors.email = 'Email address is invalid'
    }

    if (!password) {
        errors.password = 'Password is required'
    }

    if (password !== passwordConfirmation) {
        errors.password_confirmation = 'Passwords are not the same'
    }

    if (password.length < 6) {
        errors.password = 'Please enter 6 or more characters'
    }

    return errors
}

const sendForm = (href, formValues, formSelector, resolve, reject) => {
    return makeFormEncodedRequest(href, formValues, {method: 'POST'})
        .then((response) => {
            return response.text()
        })
        .then((responseText) => {
            const $html = $(responseText)
            if ($html.find(formSelector).length) {
                const error = {
                    _error: 'Username or password is incorrect'
                }
                reject(new SubmissionError(error))
            } else {
                window.location.href = '/customer/account'
                resolve(true)
            }
        })
        .catch((error) => {
            console.error('Failed to login due to network error.', error)
            reject({})
        })
}

export const submitSignInForm = (formValues, resolve, reject) => {
    return (dispatch, getStore) => {
        const errors = validateSignInForm(formValues)
        if (errors._error || Object.keys(errors.login).length) {
            return reject(new SubmissionError(errors))
        }
        const loginData = getStore().login.toJS()
        const {href, hiddenInputs} = loginData.signinSection.form

        hiddenInputs.forEach((input) => {
            formValues[input.name] = input.value
        })

        return sendForm(href, formValues, '.form-login', resolve, reject)
    }
}

export const submitRegisterForm = (formValues, resolve, reject) => {
    return (dispatch, getStore) => {
        const errors = validateRegisterForm(formValues)
        if (errors._error || Object.keys(errors).length) {
            return reject(new SubmissionError(errors))
        }
        const loginData = getStore().login.toJS()
        const {href, hiddenInputs} = loginData.registerSection.form

        hiddenInputs.forEach((input) => {
            formValues[input.name] = input.value
        })

        return sendForm(href, formValues, '.form-create-account', resolve, reject)
    }
}

const findPathForRoute = (routes, routeName) => {
    const path = routes[0].childRoutes.find((route) => route.routeName === routeName).path
    return `/${path}`
}

/**
 * Uses React router to navigate between different pages. Takes care of browser history, etc.
 */
export const navigateToSection = (router, routes, sectionName) => {
    return () => {
        router.push(findPathForRoute(routes, sectionName))
    }
}

export const openInfoModal = createAction('Open Info Sheet', 'sectionName')
export const closeInfoModal = createAction('Close Info Sheet', 'sectionName')
