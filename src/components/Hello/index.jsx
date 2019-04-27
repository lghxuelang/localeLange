import React from 'react';
import styels from './index.less';
import {formatMessage} from 'umi/locale';

class Hello extends React.Component{
   render(){
    return (
        <div>
           <center> {formatMessage({id:'app.hello'})}</center>
        </div>
    )
}
}

export default Hello;