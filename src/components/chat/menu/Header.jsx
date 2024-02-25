import {useContext,useState} from "react";
import {Box,styled} from '@mui/material';

import HeaderMenu from "./HeaderMenu";
import {AccountContext} from "../../../context/AccountProvider";
import InfoDrawer from "../../drawer/InfoDrawer";
const Component= styled(Box)`
  height:44px;
  background:#ededed;
  padding:8px 16px;
`
const Image= styled('img')({
height:40,
width:40,
borderRadius:'50%'

})
  

const Header = () => {
  const [openDrawer,setOpenDrawer]=useState(false);
    const {account}=useContext(AccountContext);
    const toggleDrawer=()=>{setOpenDrawer(true);
    };
    return (
      <>
      <Component>
        <Image src={account.picture} alt="dp" onClick={()=>toggleDrawer()}/>
        <wrapper>
          
           <HeaderMenu setOpenDrawer={setOpenDrawer}/>
        </wrapper>
      </Component>
      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>
      </>
    );
  };
  
  export default Header;