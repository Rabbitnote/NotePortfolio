import mixpanel from 'mixpanel-browser';
mixpanel.init('a663fa38f8d6fedeb15eaeec6cd540b0');


let actions = {
  identify: (id) => {
    mixpanel.identify(id);
  },
  alias: (id) => {
    mixpanel.alias(id);
  },
  track: (name, props) => {
    mixpanel.track(name, props);
  },
  people: {
    set: (props) => {
      mixpanel.people.set(props);
    },
  },
};


export let Mixpanel = actions;
// export default Mixpanel;