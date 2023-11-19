export const getToken = () => {
    try {
        return document.cookie.split('; ').find(row => row.startsWith('msb_token')).split('=')[1];
    } catch (e) {
    }

    return false;
};

export const setToken = (token) => {
    document.cookie = `msb_token=${token}; path=/; max-age=31536000`;
};

export const removeToken = () => {
    document.cookie = `msb_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
};