export const login = ( username ) => {
    return {
        type: 'LOGIN',
        value: username
    }
}
export const logout = () => {
    return {
        type: 'LOGOUT',
        value: 'Guest'
    }
}


export const activateNavLeft = () => {
    return {
        type: 'NAV_LEFT'
    }
}
export const activateNavRight = () => {
    return {
        type: 'NAV_RIGHT'
    }
}
export const closeNavs = () => {
    return {
        type: 'NAV_CLOSE'
    }
}