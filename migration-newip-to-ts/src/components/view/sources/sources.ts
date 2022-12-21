import { ISource } from '../../../types/index';

import './sources.css';

class Sources {
    draw(data: ISource[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;
        const sourcesContent = document.querySelector('.sources') as HTMLDivElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLTemplateElement;
            const sourceItemName = sourceClone.querySelector('.source__item-name') as HTMLSpanElement;
            const sourceItem = sourceClone.querySelector('.source__item') as HTMLDivElement;

            sourceItemName.textContent = item.name;
            sourceItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        sourcesContent.append(fragment);
    }
}

export default Sources;
