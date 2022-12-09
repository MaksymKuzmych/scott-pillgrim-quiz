import News from './news/news';
import Sources from './sources/sources';
import { New, News as NewsInterface, Source, Sources as SourcesInterface } from '../../types/index';

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: NewsInterface) {
        const values: Array<New> = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: SourcesInterface) {
        const values: Array<Source> = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
