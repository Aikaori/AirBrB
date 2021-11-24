import styled, { css } from 'styled-components'

export const removeDefaultButtonStyle = css`
    border: 0;
    padding: 0;
    font-family: inharit;
    font-weight: normal;
    background-color: unset;
`

export const TestButton = styled.button`
    ${removeDefaultButtonStyle};
    cursor: pointer;
    background-color: pink;

    &:hover {
        background-color: grey;
    }
`
