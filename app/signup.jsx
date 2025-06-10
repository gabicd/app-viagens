import { Link } from "expo-router";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

function SignUpScreen() {

  return (
    <View style={styles.container}>
      <View style={styles.div_logo}>
        <Image
          style={styles.app_logo}
          resizeMode="cover"
          source={require('/home/gabis/projetos/rn-app/assets/images/vetor mapa.png')}
        />
      </View>
      <View style={styles.info_container}>
        <View style={styles.input_group_top}>
          <Text style={styles.label}>Nome</Text>
            <TextInput defaultValue="Seu Nome" style={styles.input_field}>
          </TextInput>
        </View>

        <View style={styles.input_group}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput defaultValue="Seu E-mail" style={styles.input_field}>
          </TextInput>
        </View>

        <View style={styles.input_group}>
          <Text style={styles.label}>Senha</Text>
          <TextInput defaultValue="Sua Senha" style={styles.input_field}>
          </TextInput>
        </View>

        <View style={styles.input_group}>
          <Text style={styles.label}>Confirme a Senha</Text>
          <TextInput defaultValue="Sua Senha" style={styles.input_field}>
          </TextInput>
        </View>

        <Link href={"/"} style={styles.enter_button}>
          <Text style={styles.label}>Cadastrar</Text>
        </Link>
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
    flex: 1,
  },

  app_logo: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },

  info_container: {
    flex: 4,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#3D348B",
    marginTop: 64,
  },

  input_group: {
    width: "80%",
  },

  input_group_top: {
    width: "80%",
    marginTop: 96,
  },

  input_field: {
    width: "100%",
    height: 50,
    fontSize: 16,
    color: "#000",
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: "#D9D9D9",
    opacity: 0.28,
  },

  label: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 8,
    fontFamily: 'NunitoSans_700Bold',
  },

  enter_button: {
    backgroundColor: '#7678ED',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 100,
    marginTop: 32 ,
    alignSelf: 'center',
  },
});
export default SignUpScreen;

