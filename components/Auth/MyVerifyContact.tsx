import React from 'react';
import { VerifyContact } from 'aws-amplify-react-native';
import styles from '../../components/style.js'
import SignUpSidebar from '../../components/SignUpSidebar/SignUpSidebar'
import { View } from 'native-base';
import { Platform } from 'react-native';
interface Props {
    authState: any
}
interface State { }
export default class MyVerifyContact extends VerifyContact<Props,State> {
    constructor(props: Props) {
        super(props);
    }
    render() {
      //  console.log(this.props.authState)
        return (

            this.props.authState === 'verifyContact' ?
                (<View style={{width:"100%",left:0,top:0,height:"100%"}}>
                    <View style={styles.authView}>
                        {super.render()}
                    </View>
                    {Platform.OS === 'web'?<SignUpSidebar position="2" />:null}
                </View>)
                : null


        );
    }
}