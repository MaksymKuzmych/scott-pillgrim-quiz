import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { Sources, News } from '../../types/index';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        document.querySelector('.sources')?.addEventListener('click', (e) =>
            this.controller.getNews(e, (data: News) => {
                this.view.drawNews(data);
            })
        );
        this.controller.getSources((data: Sources) => {
            this.view.drawSources(data);
        });
    }
}

export default App;
