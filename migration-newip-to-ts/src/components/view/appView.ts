import News from './news/news';
import Sources from './sources/sources';
import { INews, ISources } from '../../types/index';

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: INews) {
        const values = data?.articles || [];
        this.news.draw(values);
    }

    drawSources(data: ISources) {
        const values = data?.sources || [];
        this.sources.draw(values);
    }
}

export default AppView;
