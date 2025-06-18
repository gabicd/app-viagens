import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const { width: screenWidth } = Dimensions.get('window');

function SugestoesRoteiro() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <AntDesign name="arrowleft" size={16} color="black" />
            <Text style={styles.texto_header}>Humor: /mood/</Text>
        </View>


        <View style={styles.card_container}>
            <View style={styles.filter_container}>
                <Text style={styles.filter_text}>Filtrar</Text>
                 
                 <Link href={"/filter_screen"} asChild>
                 <TouchableOpacity>
                    <Image 
                      source={require('../assets/images/filter.png')}
                      style={styles.filter_icon}  
                    
                    />
                 </TouchableOpacity>
                 </Link>


            </View>


            <View style={styles.card_row}>
                <View style={styles.card_small}>
                    <Image
                        source={{ uri: 'https://placehold.co/400x250/D9D9D9/D9D9D9/png' }} 
                        style={styles.cardImage}
                        resizeMode="cover" 
                    />

                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>Nome do roteiro</Text>
                        <Text style={styles.priceText}>R$ 50,00</Text>
                        <Text style={styles.distanceText}>XX km de você</Text>
                    </View>            
                </View>

                <View style={styles.card_small}>
                    <Image
                        source={{ uri: 'https://placehold.co/400x250/D9D9D9/D9D9D9/png' }} 
                        style={styles.cardImage}
                        resizeMode="cover" 
                    />

                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>Nome do roteiro</Text>
                        <Text style={styles.priceText}>R$ 50,00</Text>
                        <Text style={styles.distanceText}>XX km de você</Text>
                    </View>            
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
  
  header: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#FAFAFA",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 35,
    paddingHorizontal: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

    card_container: {
    flex: 5,
    width: "100%",
    alignItems: "center",
    paddingVertical: 20,
  },

  texto_header: {
    fontSize: 20,
    fontFamily: "NunitoSans_700Bold",
    marginLeft: 20,
    alignSelf: "center",
  },

  filter_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: screenWidth * 0.9,
    padding: 10,
  },

  filter_icon:{
    width: 24,
    height: 24,
    marginLeft: 10,
  },

  filter_text: {
    fontSize: 13,
    fontFamily: "NunitoSans_700Bold",
    color: "#9D9D9D",
  },

    card_row:{
    width: screenWidth - 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
     
  },

    card_small: {
    width: screenWidth/2 - 30,
    backgroundColor: '#FFFFFF', 
    borderRadius: 10, 
    overflow: 'hidden', 
    marginVertical: 20, 
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8, 
  },

    card: {
    width: screenWidth - 40,  
    backgroundColor: '#FFFFFF', 
    borderRadius: 10, 
    overflow: 'hidden', 
    marginBottom: 20, 
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8, 
  },

  cardImage: {
    width: '100%', 
    height: 150, 
    
  },
  cardContent: {
    padding: 15, 
  },

  cardTitle: {
    fontSize: 15,
    fontFamily: 'NunitoSans_700Bold',
    marginBottom: 5, 
    color: '#333',
  },

  priceText: {
    fontSize: 14,
    fontFamily: 'NunitoSans_700Bold',
    marginBottom: 5, 
    color: '#3D348B',    
  },

  distanceText: {
    fontSize: 14,
    fontFamily: 'NunitoSans_700Bold',
    marginBottom: 5, 
    color: '#F35B04',    
  }
  
  
});

export default SugestoesRoteiro;