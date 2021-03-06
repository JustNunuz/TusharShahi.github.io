import React, { memo } from 'react';
import { workWorkForce, workEmergencyZone, workMRMWebsite, workFlixRemote } from './constants';
import WorkBlock from './WorkBlock';
import './Work.css';

const Work = memo(() => {


    const createWorkBlock = (contentArray) => {

        let workBlock = contentArray.map((x) =>
            <WorkBlock name={x.project}
                mockupImage={x.mockup} link={x.link}
                description={x.description}
                mockupImageText={x.altMockupText}
                role={x.role}
                key={x.project}
            >
            </WorkBlock>
        );
        return workBlock;


    }


    return (<div>
        <h2>Work</h2>
        <div>
            {createWorkBlock([workFlixRemote, workMRMWebsite, workEmergencyZone, workWorkForce])}
        </div>
    </div>);

});


export default Work;