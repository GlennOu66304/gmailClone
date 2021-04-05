import styled from 'styled-components'
import EmailsView from './EmailsView'
import Sidebar from './Sidebar'
import Sideicon from './Sideicon'


const Main = () => {
    return (
        <Wrapper>
         <Sidebar />
         <EmailsView />
         <Sideicon />  
        </Wrapper>     
        
    )
}

const Wrapper = styled.div`
display:grid;
grid-template-columns: 270px auto 50px;
`

export default Main
