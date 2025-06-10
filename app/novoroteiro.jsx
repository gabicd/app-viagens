import AntDesign from '@expo/vector-icons/AntDesign';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const { width: screenWidth } = Dimensions.get('window');

function NovoRoteiro (){

return (
    <View style={styles.container}>
      <View style={styles.header}>  
        <AntDesign name="arrowleft" size={16} color="black" />
        <Text style={styles.texto_header}>Novo Roteiro</Text>
      </View>
      <View style={styles.selecao_mood}> 
        <Text style={styles.texto_selecao}>Como você está se sentindo hoje?</Text>
      
        <View style={styles.mood_row}>
            <View style={styles.mood_icon}>
                <Image style={styles.mood_image} source={require('/home/gabis/projetos/rn-app/assets/images/icon relaxado.png')}>
                </Image>
                <Text style={styles.mood_text}>Relaxado</Text>
            </View>
            
            <View style={styles.mood_icon}>
                <Image style={styles.mood_image} source={require('/home/gabis/projetos/rn-app/assets/images/icon aventureiro.png')}>
                </Image>
                <Text style={styles.mood_text}>Aventureiro</Text>
            </View>

        </View>

                <View style={styles.mood_row}>
            <View style={styles.mood_icon}>
                <Image style={styles.mood_image} source={require('/home/gabis/projetos/rn-app/assets/images/icon romantico.png')}>
                </Image>
                <Text style={styles.mood_text}>Romântico</Text>
            </View>
            
            <View style={styles.mood_icon}>
                <Image style={styles.mood_image} source={require('/home/gabis/projetos/rn-app/assets/images/icon social.png')}>
                </Image>
                <Text style={styles.mood_text}>Social</Text>
            </View>

        </View>

        <TouchableOpacity style={styles.confirm_button}>
            <Text style={styles.button_text}>Confirmar</Text>
        </TouchableOpacity>

      </View>
      
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  header: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  selecao_mood: {
    flex: 5,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  texto_header: {
    fontSize: 18,
    fontFamily: "NunitoSans_700Bold",
    marginLeft: 20,
    alignSelf: "center",
  },

  texto_selecao: {
    fontSize: 20,
    fontFamily: "NunitoSans_700Bold",
    marginBottom: 10,
    color: "#333",
  },

  mood_row: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    marginTop: 30,
    marginBottom: 30,
    paddingHorizontal: 10,
  },

  mood_icon: {
    justifyContent: "center",
    alignItems: "center",
  },

  mood_image: {
    width: screenWidth/2 - 80, // 20% of screen width
    height: screenWidth/2 - 80, // 20% of screen width
    marginBottom: 5,
  },

  mood_text: {
    marginTop: 5,
    fontSize: 12,
    fontFamily: "NunitoSans_700Bold",
    color: "#333",
    textAlign: "center",
  },

  confirm_button: {
    backgroundColor: "#3D348B",
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 50,
    marginTop: 32,
    alignSelf: "center",
  },

  button_text: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "NunitoSans_700Bold",
    textAlign: "center",
  },
});


export default NovoRoteiro;