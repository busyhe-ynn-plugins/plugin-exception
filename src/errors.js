module.exports = module.exports = {
    // Common errors
    NETWORK : {
        code : 1,
        message : 'Network error'
    },

    SYSTEM : {
        code : 2,
        message : 'System error'
    },

    PARAMS : {
        code : 3,
        message : 'Invalid params'
    },

    PERMISSION_DENIED : {
        code : 4,
        message : 'Permission denied'
    },

    HIGH_FREQUENCY : {
        code : 5,
        message : 'Frequency is too high'
    },

    NOT_FOUND : {
        code : 6,
        message : 'Not found'
    },

    SOURCE_NOTEXISTS : {
        code : 7,
        message : 'Source not exists'
    },

    SOURCE_EXISTS : {
        code : 8,
        message : 'Source exists'
    },

    INVALID_QUERY : {
        code : 9,
        message : 'Query is invalid'
    },

    INVALID_CSRF_TOKEN : {
        code : 10,
        message : 'Invalid CSRF token'
    },

    SOURCE_LOCKED : {
        code : 11,
        message : 'Source is locked'
    },

    INVALID_VCODE : {
        code : 12,
        message : 'Invalid verify code'
    },

    INVALID_TOKEN : {
        code : 13,
        message : 'Invalid token'
    },

    OPERATION_FAILED : {
        code : 14,
        message : 'Operation failed'
    },
	// Errors for accounts/users
    NEED_LOGIN : {
        code : 100,
        message : 'Need login'
    },

    ACCOUNT_NOTEXISTS : {
        code : 101,
        message : 'Account not exists'
    },

    PASSWORD_INCORRECT : {
        code : 102,
        message : 'Incorrect password'
    },

    BANNED_ACCOUNT : {
        code : 103,
        message : 'Account is banned'
    },

    ACCOUNT_EXISTS : {
        code : 104,
        message : 'Account exists'
    },

    EMAIL_EXISTS : {
        code : [ 105, 8 ],
        message : 'Email address exists'
    },

    INVALIE_EMAIL_ADDRESS : {
        code : 106,
        message : 'Invalid email address'
    },

    PHONENUM_EXISTS : {
        code : [ 107, 8 ],
        message : 'Phone number exists'
    },

    INVALID_PHONE_NUM : {
        code : 108,
        message : 'Invalid phone number'
    },

    PASSWORD_TOO_SHORT : {
        code : 109,
        message : 'Password is too short'
    },

    PASSWORD_TOO_LONG : {
        code : 110,
        message : 'Password is too long'
    },

    PASSWORD_TOO_SIMPLE : {
        code : 111,
        message : 'Password is too long'
    }
}
