import styled from "styled-components";
import areas from "../../data/areas.json";

const RouteInfoWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    max-height: 20rem;
    overflow-y: auto;
`;

const AreaHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Route = styled.div`
    height: 60px;
    width: 100%;
    /* border: 1px solid black; */
    :hover {
        background-color: hsl(0, 0%, 75%);
    }
`;

const RoutesWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

function RouteSelector() {
    return (
        <RouteInfoWrapper>
            <AreaHeader>
                {[...Array(6).keys()].map((index) => (
                    <select name="test" id="cars">
                        {Object.values(areas).map(({ englishName, id }) => (
                            <option value={id}>{englishName}</option>
                        ))}
                    </select>
                ))}
            </AreaHeader>
            <RoutesWrapper>
                {[...Array(10).keys()].map(() => (
                    <Route></Route>
                ))}
            </RoutesWrapper>
        </RouteInfoWrapper>
    );
}

export default RouteSelector;
