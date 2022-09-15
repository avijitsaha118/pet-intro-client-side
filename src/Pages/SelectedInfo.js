import React from 'react';
import useInformation from '../hooks/useInformation';
import HomeInfo from './HomeInfo';
import './SelectedInfo.css';

const SelectedInfo = () => {

    const [informations] = useInformation();

    return (
        <>
            <h3>Pet Introduce</h3>
            <div className='info-container'>
                {
                    informations.map(information => <HomeInfo
                        key={information._id}
                        information={information}
                    >

                    </HomeInfo>)
                }
            </div>
        </>
    );
};

export default SelectedInfo;