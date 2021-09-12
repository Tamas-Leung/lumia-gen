import styled from "styled-components";
import { device } from "../../utils/device";
import InventoryBoxes from "../InventoryBoxes";
import ItemPicker from "../ItemPicker";
import RouteSelector from "../RouteSelector";
import RouteInfo from "../RouteInfo";
import { useState } from "react";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    @media ${device.mobileLMax} {
        flex-direction: column;
    }
`;

const ContentWrapper = styled.div`
    height: 90%;
    display: flex;
    background-color: hsl(240, 5%, 30%);
    justify-content: center;
    align-items: center;
`;

const LeftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 25rem;
    height: 100%;
`;

const RightWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 40rem;
    height: 100%;
`;

function Homepage() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <Wrapper>
            <ContentWrapper>
                <LeftWrapper>
                    <InventoryBoxes />
                    <ItemPicker
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                </LeftWrapper>
                <RightWrapper>
                    <RouteSelector />
                    <RouteInfo />
                </RightWrapper>
            </ContentWrapper>
        </Wrapper>
    );
}

export default Homepage;
