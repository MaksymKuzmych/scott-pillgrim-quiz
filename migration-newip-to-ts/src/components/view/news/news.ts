import { INew } from '../../../types/index';

import './news.css';

class News {
    draw(data: INew[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;
        const newsContent = document.querySelector('.news') as HTMLDivElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLTemplateElement;
            const newsItem = newsClone.querySelector('.news__item') as HTMLDivElement;
            const newsMetaPhoto = newsClone.querySelector('.news__meta-photo') as HTMLDivElement;
            const newsMetaAuthor = newsClone.querySelector('.news__meta-author') as HTMLLIElement;
            const newsMetaDate = newsClone.querySelector('.news__meta-date') as HTMLLIElement;
            const newsDescriptionTitle = newsClone.querySelector('.news__description-title') as HTMLHeadingElement;
            const newsDescriptionSource = newsClone.querySelector('.news__description-source') as HTMLHeadingElement;
            const newsDescriptionContent = newsClone.querySelector(
                '.news__description-content'
            ) as HTMLParagraphElement;
            const newsReadMoreLink = newsClone.querySelector('.news__read-more a') as HTMLAnchorElement;

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
