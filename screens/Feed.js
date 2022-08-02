import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Feed extends Component {
    render() {
        return (
<View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image
                            source={require("../assets/logo.png")}
                            style={styles.iconImage}
                        ></Image>
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>Spectagram</Text>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={posts}
                        renderItem={this.renderItem}
                    />
                </View>
            </View>
        )
    }
}

const styles =StyleSheet.create({
    container:{
       
        flex:1,
        backgroundColor: "black"

    },
    droidSafeArea:{
        marginTop:Platform.OS === "android" ? StatusBar.curruntHeight : RefValue(35)
    },
    appTitle:{
        flex : 0.07,
        flexDirection:  "row"
    },

    appIcon:{
        flex: 0.2,
        justifyContent: "center",
        alignItem : "center"
    },
    iconImage:{
        width:"100%",
        height:"100%",
        resizeMode : "contain"
    },
    appTitleTextContainer:{
        flex:0.8,
        justifyContent:"center"
    },
    appTitleText:{
        color:"white",
        fontSize: RFValue(28)
    },
    cardContainer:{
        flex: 0.85
    }


})