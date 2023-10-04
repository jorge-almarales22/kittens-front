export const useKittenHook = () => {

    function getEnv() {
        const url = window.location.href;
        return url.includes("localhost") ? "development" : "production";
    }

    const url = getEnv() === "development" ? "http://localhost:4000/kittens" : "https://kittens-back-production.up.railway.app/kittens";
    const urlImages = getEnv() === "development" ? "http://localhost:4000/images" : "https://kittens-back-production.up.railway.app/images";

    return{
        url,
        urlImages
    }
}