/* eslint-disable @typescript-eslint/no-var-requires */

export function isMobileDevice(){
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

export function loadImage(src: string): any{
    const IMAGE_ROOT = "../assets/images";
    return require(`${IMAGE_ROOT}/${src}`).default
}