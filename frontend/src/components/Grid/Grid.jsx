import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: repeat( auto-fill, minmax(320px, 400px) );
    grid-template-columns: repeat( auto-fit, minmax(320px, 400px) );
`;