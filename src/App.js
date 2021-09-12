import styled from "styled-components";
import Homepage from "./components/Homepage";

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: hsl(0, 0%, 17.5%);
`;

function App() {
    return (
        <Background>
            <Homepage />
        </Background>
    );
}

export default App;
