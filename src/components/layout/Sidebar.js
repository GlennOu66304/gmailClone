import styled from 'styled-components'
import Compose from '../button/Compose'
import { sidebarButtonItems } from '../../data/SidebarButtonItems'
import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { bottonIcons} from '../../data/BottomIconData'

const Sidebar = () => {
    return (
        <Wrapper>
            <TopSectionWrapper>
         <ComposeWrapper>
            <Compose />
         </ComposeWrapper>

         <SideButtonsWrapper>
             {
                 sidebarButtonItems.map( item => (
                    <SidebarButtonItems> {item.icon} {item.text}</SidebarButtonItems> 

                 ))
             }
        </SideButtonsWrapper>
        </TopSectionWrapper>

        <BottomSectionWrapper>
             <SiderbarSectionWrapper>
             <Title>Meet </Title>
             <p><VideocamIcon /> New Meeting</p>
             <p><KeyboardIcon /> Join Meeting</p>
             </SiderbarSectionWrapper>

             <SiderbarSectionWrapper>
             <Title>Hangout</Title>
             <p><AccountCircleIcon /> David Rakosi</p>
             </SiderbarSectionWrapper>

             <BottomIconsWrapper>
             {
                bottonIcons.map(icon =>(
                    <>
                   {icon}
                    </>
                ) ) 
             }
             </BottomIconsWrapper>
             </BottomSectionWrapper>
        </Wrapper>
        
    )
}

const Wrapper = styled.div`
border-right:1px solid lightgray;
height: calc(100vh - 70 px);
display: flex;
flex-direction: column;
justify-content: space-between;
`
const TopSectionWrapper = styled.div``

const ComposeWrapper = styled.div`
display:grid;
place-items:start;
padding:10px 20px;
`
const SidebarButtonItems = styled.div`
display:grid;
grid-template-columns:14% auto;
color:gray;
padding:5px 25px;
border-radius:0 100px 100px 0;
cursor:pointer;
margin-right: 8px;

:hover{
    background-color:#f5f7f7
}
`
const Title = styled.h4`
padding-left: 25px;
margin-top: 8px;
margin-bottom:4px;
`
const SiderbarSectionWrapper = styled.div`
border-top: 1px solid lightgray;
p{
    color:gray;
    display:grid;
    grid-template-columns:14% auto;
    height: 30px;
    align-items:center;
    padding-left:25px;
}
`
const BottomIconsWrapper = styled.div`
display:flex;
justify-content:center;
color:gray;
border-top: 1px solid lightgray;
margin-top: 60px;
.MuiSvgIcon-root(
    padding:3px;
)
`
const BottomSectionWrapper = styled.div`
margin-bottom:10px;
`

const SideButtonsWrapper = styled.div``


export default Sidebar
