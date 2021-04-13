import CloseButtonUI from '../CloseButton/index';
import ContentUI from '../Content/index';
import PopBackgroundUI from '../PopBackground/index';

export default function PopUpUI() {
    return <div>
        <PopBackgroundUI>
            <ContentUI></ContentUI>
            <CloseButtonUI></CloseButtonUI>
        </PopBackgroundUI>
    </div>
}