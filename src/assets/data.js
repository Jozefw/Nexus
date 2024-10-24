import componentsImg from './components.png';
import propsImg from './config.png';
import jsxImg from './jsx-ui.png';
import stateImg from './state-mgmt.png';

export const CORE_CONCEPTS = [
    {
        image: componentsImg,
        title: 'Nexus 6',
        description: 'Four year lifespan.'
    }, {
        image: jsxImg,
        title: 'Nexus 7',
        description: 'No Lifespan limit can reproduce once'
    }, {
        image: propsImg,
        title: 'Nexus 8',
        description: "No lifespan limit. Can not disobey a human's command"
    }, {
        image: stateImg,
        title: 'Nexus 9',
        description: 'Next-Gen Superhuman Replicant'
    }
];

export const EXAMPLES = {
  replicants: {
      title: 'Replicants',
      description:
        'Self Sustaining human life life forms genetically designed for manual labor',
      code: `
      function Welcome() {
        return <h1>Hello, World!</h1>;
        }`,
    },
    Nexus_6: {
      title: 'Nexus 6',
      description:
        'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
      code: `
  <div>
    <h1>Welcome {userName}</h1>
    <p>Time to learn React!</p>
  </div>`,
    },
    Nexus_7: {
      title: 'Nexus 7',
      description:
        'Components accept arbitrary inputs called props. They are like function arguments.',
      code: `
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }`,
    },
    Nexus_8: {
      title: 'Nexus 8',
      description:
        'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
      code: `
  function Counter() {
    const [isVisible, setIsVisible] = useState(false);
  
    function handleClick() {
      setIsVisible(true);
    }
  
    return (
      <div>
        <button onClick={handleClick}>Show Details</button>
        {isVisible && <p>Amazing details!</p>}
      </div>
    );
  }`,
    },
    Nexus_9: {
      title: 'Nexus 9',
      description:
        'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
      code: `
  function Counter() {
    const [isVisible, setIsVisible] = useState(false);
  
    function handleClick() {
      setIsVisible(true);
    }
  
    return (
      <div>
        <button onClick={handleClick}>Show Details</button>
        {isVisible && <p>Amazing details!</p>}
      </div>
    );
  }`,
    },
};