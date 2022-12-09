import './sources.css';
import { Source } from '../../../types/index';

class Sources {
    draw(data: Array<Source>) {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;
        const sourcesContent: HTMLElement = document.querySelector('.sources') as HTMLElement;

        data.forEach((item: Source) => {
            const sourceClone: HTMLElement = sourceItemTemp.content.cloneNode(true) as HTMLElement;
            const sourceItemName: HTMLSpanElement = sourceClone.querySelector('.source__item-name') as HTMLSpanElement;
            const sourceItem: HTMLElement = sourceClone.querySelector('.source__item') as HTMLElement;

            sourceItemName.textContent = item.name;
            sourceItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        sourcesContent.append(fragment);
    }
}

export default Sources;
