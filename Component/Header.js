import Link from "next/link"
import styled from "styled-components"

const Header = () => {
    return (
        <Container>
            <Wrapper>
                <LogoHolder>
                    <Logo/>
                </LogoHolder>
               <ContentHolder>
               <Link href="/"><a>Home </a></Link>
                <Link href="/About"><a>About </a></Link>
                    <Link href="/Contact"><a>Contact </a></Link>


                    <ButtonHolder>
                        <Button>
                        <Link href="/Registration"><a>Register </a></Link>

                        </Button>
                    </ButtonHolder>
               </ContentHolder>
              


            </Wrapper>

        </Container>
    )
}

export default Header

const Container =styled.div`
height: 70px;
width: 100%;
background-color: #38BDF8;
color: black;
text-transform: capitalize;
display: flex;
justify-content: center;
`
const Wrapper =styled.div`
height: 70px;
width: 90%;
display:flex;
flex-direction: row;
justify-content: space-between;
align-items: center;


`

const LogoHolder =styled.div`
height: 35px;
width: 35px;
background-color: black;
`

const Logo =styled.img``

const ContentHolder =styled.div`
display: flex;
height: 70px;
width: 50%;
justify-content: center;
align-items: center;
justify-content: space-between;
font-weight: bold;
`

const Content =styled.div``

const ButtonHolder =styled.div``

const Button =styled.button`
height: 35px;
width:100px;
background-color: brown;
font-weight: bold;
border-radius: 8px;

`