import React, { useEffect} from "react";
import { StyleSheet, Image, SafeAreaView} from "react-native";

const image_url =
    "https://es.web.img3.acsta.net/pictures/18/10/31/17/34/2348073.jpg";

export default function SplashScreen({navigation}){
    useEffect(() =>{
        setTimeout(()=>{
            navigation.replace("Characters");
        }, 5000);
    });
    return (
        <SafeAreaView style={styles.image_conteiner}>
            <Image source={{uri: image_url}} style={styles.image}></Image>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image_conteiner:{
        flex:1,
        justifyContent:"center",
        alignContent:"center",
    },
    image:{
        width: "100%",
        height: "100%",
    }
})