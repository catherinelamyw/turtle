import BackUI from '../Back/index';
import BackButtonUI from '../BackButton/index';
import NextButtonUI from '../NextButton/index';

export default function footerUI() {
    return <div>
        <BackUI>
            <BackButtonUI />
            <NextButtonUI />
        </BackUI>
    </div>
}