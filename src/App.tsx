import React from "react"
import { CryptoCards, Button } from 'web3uikit';

const App = () => (
    <>
        <CryptoCards chain="ethereum" onClick={()=>{}} chainType={''} bgColor={''} />
        <Button theme="primary" type="button">
            Launch dApp
        </Button>
    </>
);

export default App;