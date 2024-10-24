import componentsImg from './assets/components.png';
import Header from "./components/Header.jsx";
import CoreConcept from "./components/Core_Concept.jsx";
import {CORE_CONCEPTS} from './assets/data.js';
import {EXAMPLES} from './assets/data.js';
import TabButton from "./components/TabButton.jsx";
import {useState} from "react";

const reactDescriptions = ['More Human Than Human', 'Replaceable', 'Combat Ready'];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function App() {
const [tabContent,setTabContent] = useState();

    function onMenuClick(selectedModel) {
        setTabContent(selectedModel);
    }
let inquireSelection = <p>Please select a model from above </p>
if(tabContent){
    inquireSelection =(
        <div id="tab-content">
        <h3> {EXAMPLES[tabContent].title}</h3>
        <p> {EXAMPLES[tabContent].description}</p>
        <pre></pre>
        <code> {EXAMPLES[tabContent].code}</code>
        </div>
    )
}
    return (
        <div>
            <Header></Header>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept {...CORE_CONCEPTS[0]}></CoreConcept>
                        <CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>
                        <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
                        <CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept>
                    </ul>
                </section>
                <section id="examples">
                    <h2>Models</h2>
                    <menu>
                        <TabButton onSelect={() => onMenuClick("Nexus_6")}>Nexus 6</TabButton>
                        <TabButton onSelect={() => onMenuClick("Nexus_7")}>Nexus 7</TabButton>
                        <TabButton onSelect={() => onMenuClick("Nexus_8")}>Nexus 8</TabButton>
                        <TabButton onSelect={() => onMenuClick("Nexus_9")}>Nexus 9</TabButton>
                    </menu>
                        {inquireSelection}
                </section>
            </main>
        </div>
    )
}

export default App;