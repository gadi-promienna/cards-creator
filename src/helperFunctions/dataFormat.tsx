
function encryptPassword(password: string){
    return btoa(password)
}

export {encryptPassword}