import reactImg from '../assets/react-core-concepts.png';
export default function Header() {

    const reactDescriptions = ['More Human Than Human', 'Replaceable', 'Combat Ready'];

    function genRandomInt(max) {
        return Math.floor(Math.random() * (max + 1));
    }
    const description = reactDescriptions[genRandomInt(2)];

    return (
        <header>
            <img src={reactImg} alt="Stylized atom"/>
            <h1>The Nexus Program</h1>
            <h3>A Tyrell Corporation</h3>
            <p>
                {description}
            </p>
            <p>Replicants you will need for any situation</p>
        </header>
    );
}