import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { Sources, News } from '../../types/index';

class App {
    protected controller: AppController;
    protected view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        document
            .querySelector('.sources')
            ?.addEventListener('click', (e) =>
                this.controller.getNews(e, (data: News | undefined) => this.view.drawNews(data as News))
            );
        this.controller.getSources((data: Sources | undefined) => this.view.drawSources(data as Sources));
    }
}

export default App;
