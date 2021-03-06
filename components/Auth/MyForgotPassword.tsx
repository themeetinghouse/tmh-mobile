import React from 'react';
import {ForgotPassword } from 'aws-amplify-react-native';
import styles from '../../components/style.js'
import SignUpSidebar from '../../components/SignUpSidebar/SignUpSidebar'
import { View } from 'native-base';
import { Platform } from 'react-native';
interface Props {
    authState: any
}
interface State { }
export default class MyForgotPassword extends ForgotPassword<Props,State> {
    constructor(props: Props) {
        super(props);
    }
    render() {
      //  console.log(this.props.authState)
        return (

            this.props.authState === 'forgotPassword' ?
                (<View style={{width:"100%",left:0,top:0,height:"100%"}}>
                    <View style={styles.authView}>
                        {super.render()}
                    </View>
                    {Platform.OS === 'web'?<SignUpSidebar text="It’s time to unite, equip, and amplify a Jesus-centred movement." />:null}
                </View>)
                : null


        );
    }
}