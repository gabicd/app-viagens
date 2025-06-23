import Feather from '@expo/vector-icons/Feather';
import { Link } from "expo-router";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import CardMain from './components/CardMain';
import SmallCardMain from './components/SmallCardMain';

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
                  <SmallCardMain
                  title='Novo roteiro'  
                  > 
                  </SmallCardMain>
                </Link>        

                  <SmallCardMain
                  title='Pontos Mood'                  
                  ></SmallCardMain>
            
            </View>

            <CardMain
            title='Titulo card grande'
            ></CardMain>

            <CardMain
            title='Titulo card grande'
            ></CardMain>

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