import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { Asset } from 'expo-asset';
import { Link, useRouter } from "expo-router";
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, InteractionManager, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function LoginScreen() {

  const router = useRouter();
  const mapaImage = require('../assets/images/vetor-mapa.png');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  useEffect(() => {
    const loadImages = async () => {
      try {
        const imageAsset = Asset.fromModule(mapaImage);
        await imageAsset.downloadAsync();
      } catch (error) {
        console.error("Error loading images:", error);
      }

      finally {
        InteractionManager.runAfterInteractions(() => {
        setImagesLoaded(true);
        });
      }
    };
    
    loadImages();
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  if (!imagesLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#3D348B" />
      </View>
    );
  }


  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.back_arrow} onPress={() => router.back()}>
          <AntDesign  name="arrowleft" size={18} color="#3D348B" />
        </TouchableOpacity>
      
      
      <View style={styles.div_logo}>
        <Image
          style={styles.app_logo}
          resizeMode="cover"
          source={require('../assets/images/vetor-mapa.png')}
        />
      </View>
      <View style={styles.info_container}>
        <View style={styles.input_group_top}>
          <Text style={styles.label}>E-mail</Text>
            <TextInput placeholder="Seu E-mail" placeholderTextColor='rgba(217, 217, 217, 0.28)' style={styles.input_field}>
          </TextInput>
        </View>
        <View style={styles.input_group}>
          <Text style={styles.label}>Senha</Text>
         <View style={styles.input_elements}>
            <TextInput
              placeholder="Sua Senha"
              placeholderTextColor='rgba(217, 217, 217, 0.28)'
              style={styles.input_field_password} 
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.toggleButton}>
              { showPassword ? (
                <Entypo name="eye" size={24} color="#FFFFFF" />
              ) : (
                <Entypo name="eye-with-line" size={24} color="#FFFFFF" />
              )
              }
            </TouchableOpacity>
          </View>
        </View>

        <Link href={"/main_screen"} style={styles.enter_button}>
          <Text style={styles.label}>Entrar</Text>
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

  back_arrow: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },

  info_container: {
    flex: 4,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#3D348B",
    marginTop: 64,
    borderRadius: 20,
  },

  input_group: {
    width: "80%",
  },

  input_group_top: {
    width: "80%",
    marginTop: 96,
  },

  input_field: {
    width: '100%',
    height: 50,
    fontSize: 15,
    fontFamily: 'NunitoSans_700Bold',
    color: "#FFFFFF",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    backgroundColor: 'rgba(217, 217, 217, 0.28)',
    
  },

  input_elements: {
    flexDirection: 'row',
    alignItems: 'center', 
    position: 'relative', 
    width: '100%', 
    height: 50, 
    marginBottom: 16, 
  },


  input_field_password: {
    flex: 1, 
    width: '100%',
    height: '100%', 
    fontSize: 15,
    fontFamily: 'NunitoSans_700Bold',
    color: "#FFFFFF",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingRight: 50, 
    backgroundColor: 'rgba(217, 217, 217, 0.28)',
  },

  label: {
    color: "#fff",
    fontSize: 15,
    marginBottom: 8,
    fontFamily: 'NunitoSans_700Bold',
  },

  enter_button: {
    backgroundColor: '#7678ED',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 80,
    marginTop: 32 ,
    alignSelf: 'center',
  },

    toggleButton: {
    position: 'absolute', 
    right: 15, 
  },
});
export default LoginScreen;

