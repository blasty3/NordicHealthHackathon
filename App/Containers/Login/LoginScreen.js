import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from './LoginStyles';
import { Images } from '../../Themes';
import Utils from '../../Utils/Utils';
import { connect } from 'react-redux';
import UserActions from '../../Redux/UserRedux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import StringUtils from '../../Utils/StringUtils'


class LoginScreen extends Component {
    constructor() {
        super()
        this.state = {
            email: "demo@gaiota.com",
            password: "123456",
            isLogin: false
        }
    }

    render() {
        var { email, password } = this.state

        return (
            <KeyboardAwareScrollView>
                <View style={styles.container}>

                    <Image source={Images.icon_galota} style={styles.logo} />
                    <View >
                        <TextInput
                            placeholder={"Email"}
                            style={styles.input}
                            onChangeText={(text) => {
                                this.setState({
                                    email: text
                                })
                            }}
                            value={email}
                            onSubmitEditing={(event)=>this.refs.password.focus()}
                        />
                        <TextInput
                            ref = "password"
                            placeholder={"Password"}
                            style={styles.input}
                            onChangeText={(text) => {
                                this.setState({
                                    password: text
                                })
                            }}
                            secureTextEntry={true}
                            value={password}
                            onSubmitEditing={(event)=>this.onLogin()}
                        />
                    </View >
                    <View style={styles.containerAction}>
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => {
                            this.props.navigation.navigate("RegisterScreen")
                        }}>
                            <Text style={styles.textButton}>Sign up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.onLogin()}>
                            <Text style={styles.textButton}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        )
    }

    onLogin = () => {
        const { fullname, email, password } = this.state;
        
        if (Utils.isUndefined(email) || Utils.isUndefined(password)) {
            Utils.showMessage("Please enter full information")
        } else if (!StringUtils.validatePassword(password)) {
            Utils.showMessage("Password length must be longer than 6 characters")
        } else if (!StringUtils.validateEmail(email)) {
            Utils.showMessage("Email is not in the correct format")
        } else 
        
        {
            this.state.isLogin = true

            var params = {
                fullname: fullname,
                email: email,
                password: password
            }
            this.props.login(params)
        }
    }

    checkLogin = (newProps) => {
      console.log("componentWillReceiveProps", newProps)
      if (!Utils.isUndefined(newProps.user) && newProps.loggedIn && !newProps.errorLogin) {
        this.props.navigation.navigate("PrimaryNav")
      } else {
        if (this.state.isLogin && newProps.errorLogin) {
          Utils.showMessage("Login failure");
        }
      }
    }

    componentDidMount () {
      this.checkLogin(this.props)
    }

    componentWillReceiveProps(newProps) {
      this.checkLogin(newProps)
    }
}


const mapStateToProps = (state) => {
    const { user, loggedIn: loggedIn, errorLogin } = state.user
    return {
        user, loggedIn, errorLogin
    }
}

const mapDispatchToProps = (dispatch) => ({
    login: (params) => dispatch(UserActions.login(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
