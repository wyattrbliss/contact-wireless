import { TowerData } from "../types";

interface TowerInfoProps {
    tower: TowerData
}

export function TowerInfo({tower}: TowerInfoProps) {
    return (
        <>
            <h4>{`${tower.city}, ${tower.state}`}</h4>
            {`Ground elevation: ${tower.elevation === 'XXX' ? 'Unknown' : tower.elevation + ' ft. MSL'}`} <br/>
            {`Tower height: ${tower.height === 'XXX' ? 'Unknown' : tower.height + ' ft. high'}`} <br/>
            {`Top of tower: ${tower.top === 'XXX' ? 'Unknown' : tower.top + ' ft. HAAT'}`} <br/>
            {`ASR #: ${tower.asr === 'XXX' ? 'Not needed' : tower.asr}`} <br/>
        </>
    )
}