import styled from "styled-components";

const ItemPickerWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    /* padding: 1rem; */
    gap: 1rem;
    padding: 1rem;
    background-color: hsl(240, 5%, 30%);
    overflow-y: auto;
`;

const Item = styled.div`
    height: 3rem;
    width: 100%;
    background-color: hsl(240, 5%, 60%);
    border-radius: 0.5rem;
`;

function ItemPicker() {
    return (
        <ItemPickerWrapper>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
        </ItemPickerWrapper>
    );
}

export default ItemPicker;
