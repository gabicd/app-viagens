import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.view}>
      <Image
        style={styles.app_logo}
        resizeMode="cover"
        source={require('/home/gabis/projetos/rn-app/assets/images/vetor mapa.png')}
      />
      <TouchableOpacity style={styles.login_button}>
        <Text style={styles.login_button_text}>Entrar com email</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  },
  login_button_text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});