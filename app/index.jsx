import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.div_logo}>
        <Image
            style={styles.app_logo}
            resizeMode="cover"
            source={require('/home/gabis/projetos/rn-app/assets/images/vetor mapa corrigido.png')}/>
      
      <View style={styles.div_buttons}>
        
        <Link href={"/login"} style={styles.login_button}>
          <Text style={styles.login_button_text}>Entrar com email</Text>
        </Link>
      
        <Link href={'/signup'} style={styles.signup_button}>
          <Text style={styles.login_button_text}>Cadastre-se</Text>
        </Link>

        <Text style={styles.option_text}>Ou então, continue com uma rede social</Text>

      <View style={styles.div_icons}>        
        <Image
            style={styles.social_icon}
            source={require('../assets/images/facebook2.png')}/>

        <Image
            style={styles.social_icon}
            source={require('../assets/images/google3.png')}/>
      </View>
      </View>


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

  div_logo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 150,
  },

  div_buttons: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  div_icons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 20 ,
  },

  app_logo: {
    width: 200,
    height: 200,
  },
  login_button: {
    backgroundColor: '#3D348B',
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 60,
    marginTop: 24,
    alignSelf: 'center',
  },

  signup_button: {
    backgroundColor: '#7678ED',
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 76,
    marginTop: 24,
    alignSelf: 'center',
  },

  login_button_text: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'NunitoSans_700Bold',
    textAlign: 'center',
  },

  option_text: {
    color: '#B2B2B2',
    fontSize: 16,
    fontFamily: 'NunitoSans_700Bold',
    textAlign: 'center',
    marginTop: 32,
  },

  social_icon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },

});