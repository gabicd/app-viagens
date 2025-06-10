import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.div_logo}>
        <Image
            style={styles.app_logo}
            resizeMode="cover"
            source={require('/home/gabis/projetos/rn-app/assets/images/vetor mapa.png')}/>
      
      
        <Link href={"/login"} style={styles.login_button}>
          <Text style={styles.login_button_text}>Entrar com email</Text>
        </Link>
      

        <Link href={''} style={styles.signup_button}>
          <Text style={styles.login_button_text}>Cadastre-se</Text>
        </Link>

        <Text style={styles.option_text}>Ou então, continue com uma rede social</Text>
      </View>
      <View style={styles.div_icons}>
        
        <Image
            style={styles.social_icon}
            source={require('/home/gabis/projetos/rn-app/assets/images/facebook.png')}/>

        <Image
            style={styles.social_icon}
            source={require('/home/gabis/projetos/rn-app/assets/images/google.png')}/>


      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  div_logo: {
    flex: 3,
  },

  div_icons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 0,
  },

  app_logo: {
    width: 400,
    height: 400,
  },
  login_button: {
    backgroundColor: '#3D348B',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginTop: 24,
    alignSelf: 'center',
  },

  signup_button: {
    backgroundColor: '#7678ED',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 48,
    marginTop: 24,
    alignSelf: 'center',
  },

  login_button_text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  option_text: {
    color: '#B2B2B2',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 24,
  },

  social_icon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },

});