import styled from "styled-components";

const StyledInventoryBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    gap: 0.5rem;
    background-color: hsl(240, 5%, 30%);
`;

const ItemBox = styled.div`
    flex-grow: 1;
    height: 3rem;
    width: 7rem;
    /* border: 1px solid white; */
    background-color: hsl(240, 5%, 60%);
    border-radius: 0.25rem;
`;

function InventoryBoxes() {
    return (
        <StyledInventoryBox>
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
        </StyledInventoryBox>
    );
}

export default InventoryBoxes;
