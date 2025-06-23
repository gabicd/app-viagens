import AntDesign from '@expo/vector-icons/AntDesign';
import { Link, useLocalSearchParams } from 'expo-router';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SmallCard from "./components/SmallCard";

const { width: screenWidth } = Dimensions.get('window');

function SugestoesRoteiro() {
  const params = useLocalSearchParams();
  
  {/* 
  const {mood} = params;
  console.log(mood)    
    */}


  const { quantity } = params

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Link href='/novoroteiro' asChild>
              <TouchableOpacity>
                <AntDesign name="arrowleft" size={16} color="black" />    
              </TouchableOpacity>
            </Link>
            
            
            <Text style={styles.texto_header}>Humor: mood</Text>
        </View>


        <View style={styles.card_container}>
            <View style={styles.filter_container}>
            {/*  */}
            { quantity > 0 && <Text style={styles.filter_number}>{quantity}</Text> }

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
                <SmallCard
                  title = 'Novo roteiro'
                  price = 'R$ 50,00'
                  distance = "XX km de você"
                />

                <SmallCard
                  title = 'Novo roteiro'
                  price = 'R$ 50,00'
                  distance = "XX km de você"
                />
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

  filter_number: {
    color: 'white',
    backgroundColor: '#3D348B',
    paddingHorizontal: 10.5,
    paddingVertical: 6,
    borderRadius: 20,
    fontFamily: 'NunitoSans_700Bold',
    fontSize: 12,
    marginRight: 4  
  },

    card_row:{
    width: screenWidth - 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
     
  },
  
  
});

export default SugestoesRoteiro;