export const setUserSession = (user) => {
    localStorage.setItem("user", JSON.stringify(user))
}

export const getUserSession = () => {
    return JSON.parse(localStorage.getItem("user")) || null;
}

export const removeUserSession = () => {
    localStorage.removeItem("user");
}