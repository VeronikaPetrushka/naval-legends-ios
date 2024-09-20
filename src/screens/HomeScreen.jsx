import { SafeAreaView, View } from "react-native"
import Home from "../components/Home"
import MenuPanel from "../components/MenuPanel"

const MainMenuScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Home />
            <View style={styles.menu}>
                <MenuPanel />
            </View>
        </SafeAreaView>
    )
}; 

const styles = {
    container: {
        width: "100%",
        height: "100%",
    },

    menu: {
        position: 'absolute',
        width: "100%",
        bottom: 30
    }
}

export default MainMenuScreen;