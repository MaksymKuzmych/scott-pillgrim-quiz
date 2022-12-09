import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.up.railway.app/', {
            apiKey: 'bcef95138bc34d5390bfbdc1f4e63e51', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
