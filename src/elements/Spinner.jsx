import styled, { keyframes } from "styled-components";
import theme from "../theme";

const pulse = keyframes`
    0% , 60% , 100%{ 
        transform:  scale(1) 
    }
    80% { 
        transform:  scale(1.2)
    }
`

const scaleUp = keyframes`
    0% { 
        transform: translate(-50%, -50%) scale(0) 
    }
    60% , 100% { 
        transform: translate(-50%, -50%)  scale(1)
    }
`

const Spinner = styled.span`
    width: 48px;
    height: 48px;
    border: 5px solid ${theme.veryDarkCyan};
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    position: relative;
    animation: ${pulse} 1s linear infinite;
    z-index: 40;

    &::after{
        content: '';
        position: absolute;
        width: 48px;
        height: 48px;
        border: 5px solid ${theme.veryDarkCyan};
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        animation: ${scaleUp} 1s linear infinite;
    }
`

export default Spinner;