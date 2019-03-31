import React, { Component } from 'react'
import {
    Text, View, ScrollView,
    TouchableOpacity, Image
} from 'react-native'
import HeaderComponent from '../../Components/Header/HeaderComponent';
import { Colors, Metrics, Images } from '../../Themes';
import styles from './ReportStyles'

// Styles
export default class ReportHealthDataScreen extends Component {

    constructor() {
        super();
        this.state = {
            content1: "Family",
            content2: "Doctor",
            content3: "Caretaker",
            step: 1
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <HeaderComponent
                    onPress={() => { }}
                    onBack={true}
                    onGoBack={() => this.onGoBack()}
                />

                <ScrollView style={{ marginTop: Metrics.sizeHeight * 2 }}>
                    <View style={styles.container}>
                        <Image source={Images.img_health} style={styles.imghealth} />
                        <Text style={styles.textShare}>share to</Text>
                        <TouchableOpacity onPress={() => this.onShare(1)}>
                            <Text style={styles.textButton}>{this.state.content1}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.onShare(2)}>
                            <Text style={styles.textButton}>{this.state.content2}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.onShare(3)}>
                            <Text style={styles.textButton}>{this.state.content3}</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }

    onGoBack = () => {
        if (this.state.step == 2) {
            this.setState({
                content1: "Family",
                content2: "Doctor",
                content3: "Caretaker",
                step: 1
            })
        } else {
            this.props.navigation.goBack();
        }
    }

    onShare = (step) => {
        if (this.state.step == 2) {
            this.props.navigation.navigate("ReportShareFinnishScreen");
            this.setState({
                content1: "Family",
                content2: "Doctor",
                content3: "Caretaker",
                step: 1
            })
        } else {
            switch (step) {
                case 1:
                    this.setState({
                        content1: "My mother",
                        content2: "My father",
                        content3: "My brother",
                        step: 2
                    })
                    break;
                case 2:
                    this.setState({
                        content1: "Dr. S Ronkainen",
                        content2: "Dr. T Seikola",
                        content3: "Dr. E Tukio",
                        step: 2
                    })
                    break;
                case 3:
                    this.setState({
                        content1: "Dr. S Ronkainen",
                        content2: "Dr. T Seikola",
                        content3: "Dr. E Tukio",
                        step: 2
                    })
                    break;
            }

        }

    }
}
