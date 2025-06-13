import Feather from '@expo/vector-icons/Feather';
import { Link } from "expo-router";
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";

const { width: screenWidth } = Dimensions.get('window');

function MainScreen() {


  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.user_icon} resizeMode="cover" source={require('../assets/images/profile.jpeg')}></Image>
              <Text style={styles.user_name}>Nome usuário</Text>
              <Feather style={styles.search_icon} name="search" size={24} color="#F18701" />    
        </View>
        
        <View style={styles.card_container} >
            <View style={styles.card_row}>
                
                <Link href={"/novoroteiro"} asChild>
                    <Pressable>
                      <View style={styles.card_small}>
                        <Image
                            source={{ uri: 'https://placehold.co/400x250/D9D9D9/D9D9D9/png' }} 
                            style={styles.cardImage}
                            resizeMode="cover" 
                        />
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>Novo Roteiro</Text>
                        </View>            
                    </View> 
                    </Pressable>

                </Link>       

                <View style={styles.card_small}>
                    <Image
                        source={{ uri: 'https://placehold.co/400x250/D9D9D9/D9D9D9/png' }} 
                        style={styles.cardImage}
                        resizeMode="cover" 
                    />

                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>Pontos Mood</Text>
                    </View>            
                </View>
            </View>

            <View style={styles.card}>
                <Image
                    source={{ uri: 'https://placehold.co/600x300/D9D9D9/D9D9D9/png' }} 
                    style={styles.cardImage}
                    resizeMode="cover" 
                />
                <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>Título do Meu Card Grande</Text>
                </View>
            </View>

            <View style={styles.card}>
                <Image
                    source={{ uri: 'https://placehold.co/600x300/D9D9D9/D9D9D9/png' }} 
                    style={styles.cardImage}
                    resizeMode="cover" 
                />
                <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>Título do Meu Card Grande</Text>
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
    alignItems: "flex-start",
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
  
  user_icon: {
    width: 55,
    height: 55,
    borderRadius: 30,
    marginRight: 10,
  },

  user_name: {
    fontSize: 20,
    fontFamily: "NunitoSans_700Bold",
    alignSelf: "center",
    marginLeft: 10, 
  },

  search_icon: {
    alignSelf: "center",
    marginLeft: 'auto',
    
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
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5, 
    color: '#333',
  },

  card_row:{
    width: screenWidth - 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
     
  },

  back_header: {
    width: "100%",
    flexDirection: "column",
    backgroundColor: "#FAFAFA",
    justifyContent: "flex-start",
    alignItems: "center",

  }
});

export default MainScreen;