
export const getImageUrl =(path) => {
    return new URL(`/assets/${path}`, window.location.origin).href;
} ;


