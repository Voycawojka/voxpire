import styled from "styled-components";

export const AppContainer = styled.div`
    text-align: center;
`

export const Logo = styled.img`
    height: 40vmin;
    pointer-events: none;

    @media (prefers-reduced-motion: no-preference) {
        animation: App-logo-spin infinite 20s linear;

        @keyframes App-logo-spin {
            from {
            transform: rotate(0deg);
            }
            to {
            transform: rotate(360deg);
            }
        }
    }
`

export const Header = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`

export const Link = styled.a`
    color: #61dafb;
`

export const Button = styled.button`
    font-size: calc(10px + 2vmin);
`
