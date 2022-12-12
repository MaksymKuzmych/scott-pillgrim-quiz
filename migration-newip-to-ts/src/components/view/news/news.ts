import './news.css';
import { New } from '../../../types/index';

class News {
    draw(data: Array<New>) {
        const news: Array<New> = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement = document.querySelector('#newsItemTemp') as HTMLTemplateElement;
        const newsContent: HTMLElement = document.querySelector('.news') as HTMLElement;

        news.forEach((item: New, idx: number) => {
            const newsClone: HTMLElement = newsItemTemp.content.cloneNode(true) as HTMLElement;
            const newsItem: HTMLElement = newsClone.querySelector('.news__item') as HTMLElement;
            const newsMetaPhoto: HTMLElement = newsClone.querySelector('.news__meta-photo') as HTMLElement;
            const newsMetaAuthor: HTMLLIElement = newsClone.querySelector('.news__meta-author') as HTMLLIElement;
            const newsMetaDate: HTMLLIElement = newsClone.querySelector('.news__meta-date') as HTMLLIElement;
            const newsDescriptionTitle: HTMLElement = newsClone.querySelector(
                '.news__description-title'
            ) as HTMLElement;
            const newsDescriptionSource: HTMLElement = newsClone.querySelector(
                '.news__description-source'
            ) as HTMLElement;
            const newsDescriptionContent: HTMLElement = newsClone.querySelector(
                '.news__description-content'
            ) as HTMLElement;
            const newsReadMoreLink: HTMLAnchorElement = newsClone.querySelector(
                '.news__read-more a'
            ) as HTMLAnchorElement;

            if (idx % 2) newsItem.classList.add('alt');

            newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || './assets/news_placeholder.svg'})`;
            newsMetaAuthor.textContent = item.author || item.source.name;
            newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            newsDescriptionTitle.textContent = item.title;
            newsDescriptionSource.textContent = item.source.name;
            newsDescriptionContent.textContent = item.description;
            newsReadMoreLink.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        newsContent.innerHTML = '';
        newsContent.appendChild(fragment);
    }
}

export default News;
