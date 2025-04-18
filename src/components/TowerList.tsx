import './TowerList.less';
import { TowerData } from "../types";
import { TowerInfo } from './TowerInfo';

interface TowerListProps {
    towers: TowerData[];
}

export function TowerList({ towers }: TowerListProps) {
    return (
        <div className={`tower-list-container`}>
            {towers.length && towers.map((tower, i) => {
                return (
                    <div key={`tower-list-item-${i}`}>
                        <TowerInfo tower={tower}/>
                    </div>
                )
            })}
        </div>
    )
}