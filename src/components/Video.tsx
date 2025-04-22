import { useState } from 'react';
import './Video.less';
import video from '../assets/isanti-tower-footage-trimmed.mp4';

export function Video() {
    const [isLoaded, setIsLoaded] = useState(false);
    const handleLoadedData = () => {
        setIsLoaded(true);
    }
    return (
        <div className={`video-container`} id='video'>
            <video
                src={video}
                autoPlay
                loop
                muted
                onLoadedData={handleLoadedData}
                style={{ display: isLoaded ? 'block' : 'none' }}
            />
            
            <div className={`video-overlay`}>
                <div className={`overlay-text`}>
                    <div className={`overlay-text-header`}>
                        Contact Wireless, LLC
                    </div>
                    <div className={`overlay-text-sub-header`}>
                        Providing network communications solutions since 1981
                    </div>
                </div>
            </div>
        </div>
    )
}