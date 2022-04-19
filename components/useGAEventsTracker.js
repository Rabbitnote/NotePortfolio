import react from 'react';
import ReactGA from 'react-ga';

const useGAEventsTracker =( category ="Event Catagory")=>{
    const trackerEvent = (action =" action" , label ="label") =>{
        ReactGA.event({category,action,label});
    };
    return trackerEvent;
}
export default useGAEventsTracker;