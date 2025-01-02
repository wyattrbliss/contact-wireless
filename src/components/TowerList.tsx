import './TowerList.less';
import { TowerData } from "../types";

interface TowerListProps {
    towers: TowerData[];
}

export function TowerList({ towers }: TowerListProps) {
    return (
        <div className={`tower-list-container`}>
            {towers.length && towers.map((tower, i) => {
                return (
                    <div key={`tower-list-item-${i}`}>
                        <h4>{`${tower.city}, ${tower.state}`}</h4>
                        {`Ground elevation: ${tower.elevation === 'XXX' ? 'Unknown' : tower.elevation + ' ft. MSL'}`} <br/>
                        {`Tower height: ${tower.height === 'XXX' ? 'Unknown' : tower.height + ' ft. high'}`} <br/>
                        {`Top of tower: ${tower.top === 'XXX' ? 'Unknown' : tower.top + ' ft. HAAT'}`} <br/>
                        {`ASR #: ${tower.asr === 'XXX' ? 'Not needed' : tower.asr}`} <br/>
                    </div>
                )
            })}
        </div>
    )
}