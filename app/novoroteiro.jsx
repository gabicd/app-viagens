import AntDesign from '@expo/vector-icons/AntDesign';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { Dimensions, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const { width: screenWidth } = Dimensions.get('window');

function NovoRoteiro (){
  const router = useRouter();
  const [selectedMood, setSelectedMood] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  
  const handleSelectMood = (mood) => {
      
      if(mood === selectedMood){
        setSelectedMood(null)
      }
    
      else {
      setSelectedMood(mood);
      console.log(`Selected mood: ${mood}`); 
      }
  }

  const handleConfirm = () => {
    if(!selectedMood){
      setModalVisible(true);
    }

    else {
            router.push({
                pathname: 'sugestoes_roteiro',
                params: {
                    mood: selectedMood,
                }
            });      
    }
  }


return (
    <View style={styles.container}>
      <View style={styles.header}>  
        <Link href="/main_screen" asChild>
          <TouchableOpacity>
            <AntDesign name="arrowleft" size={16} color="black" />
          </TouchableOpacity>
        </Link>        
       
        <Text style={styles.texto_header}>Novo Roteiro</Text>
      </View>
      <View style={styles.selecao_mood}> 
        <Text style={styles.texto_selecao}>Como você está se sentindo hoje?</Text>
      
        <View style={styles.mood_row}>
            <View style={styles.mood_icon}>

                <TouchableOpacity onPress={() => handleSelectMood('relaxado')}>
                  <View style={[styles.mood_image_container, selectedMood === 'relaxado' && styles.mood_image_container_selected]}>
                  <View style={styles.circulo_interno}>
                      <Image style={[styles.mood_image, selectedMood === 'Relaxado' && styles.imagem_selecionada]} source={require('../assets/images/icon relaxado.png')}>
                      </Image>      
                    </View>  
                  
                  </View>
                </TouchableOpacity>
                
                <Text style={styles.mood_text}>Relaxado</Text>
            </View>
            
            <View style={styles.mood_icon}>
              <TouchableOpacity onPress={() => handleSelectMood('aventureiro')}>
                <View style={[styles.mood_image_container, selectedMood === 'aventureiro' && styles.mood_image_container_selected]}>
                  <View style={styles.circulo_interno}>
                    <Image style={styles.mood_image} source={require('../assets/images/icon aventureiro.png')}>
                    </Image>
                  </View>  
                </View>
              </TouchableOpacity>

                <Text style={styles.mood_text}>Aventureiro</Text>
            </View>

        </View>

        <View style={styles.mood_row}>
            <View style={styles.mood_icon}>
                <TouchableOpacity onPress={() => handleSelectMood('romantico')}>
                  
                  <View style={[styles.mood_image_container, selectedMood === 'romantico' && styles.mood_image_container_selected]}>
                    <View style={styles.circulo_interno}>
                      <Image style={styles.mood_image} source={require('../assets/images/icon romantico.png')}>
                      </Image>
                    </View>
                  </View>

                </TouchableOpacity>
                
                <Text style={styles.mood_text}>Romântico</Text>
          </View>
            
            <View style={styles.mood_icon}>
                <TouchableOpacity onPress={() => handleSelectMood('social')}>
                  <View style={[styles.mood_image_container, selectedMood === 'social' && styles.mood_image_container_selected]}>
                    <View style={styles.circulo_interno}>
                      <Image style={styles.mood_image} source={require('../assets/images/icon social.png')}>
                      </Image>                    
                    </View>
                  </View>
                </TouchableOpacity>                
                <Text style={styles.mood_text}>Social</Text>
            </View>

        </View>

        <TouchableOpacity style={styles.confirm_button}
          onPress={() => handleConfirm()
          }
        >
            <Text style={styles.button_text}>Confirmar</Text>
        </TouchableOpacity>

            <Modal
                animationType="fade" 
                transparent={true}     
                visible={isModalVisible} 
                onRequestClose={() => {
                    setModalVisible(false); 
                }}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Atenção</Text>
                        <Text style={styles.modalMessage}>Por favor, selecione um humor antes de continuar.</Text>
                        <TouchableOpacity
                            style={styles.modalButton}
                            onPress={() => setModalVisible(false)} 
                        >
                            <Text style={styles.modalButtonText}>Ok, entendi</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

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
    width: screenWidth/2 - 80, 
    height: screenWidth/2 - 80, 
    
  },

  mood_image_container: {
    
    width: screenWidth / 2 - 68, 
    height: screenWidth / 2 - 68, 
    borderRadius: (screenWidth / 2 - 70) / 2, 
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },

  mood_image_container_selected: {
    backgroundColor: '#42e3f5', 

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
  },

    circulo_interno: {
    width: screenWidth / 2 - 73, 
    height: screenWidth / 2 - 73, 
    borderRadius: (screenWidth / 2 - 70) / 2, 
        backgroundColor: 'white', 
        justifyContent: 'center',
        alignItems: 'center',
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

    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    },
    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalMessage: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    modalButton: {
        backgroundColor: '#F18701', 
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    modalButtonText: {
        color: 'white',
        fontWeight: 'bold',
    }, 
  
});


export default NovoRoteiro;