import AntDesign from '@expo/vector-icons/AntDesign';
import { RangeSlider } from '@react-native-assets/slider';
import { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

    const { width: screenWidth } = Dimensions.get('window');

    function Filter () {

        const [priceRange, setPriceRange] = useState(null);
        const [activity, setActivity] = useState([]);
        const [ambiente, setAmbiente] = useState([]);

        const handlePriceRange = (range) => {
            
            setPriceRange(range)
            
            if(range === priceRange){
                setPriceRange(null);
            }
        }

        const handleActivitySelection = (selectedActvity) => {
            setActivity([...activity, selectedActvity])

            if (activity.includes(selectedActvity)){
                setActivity(activity.filter(a => a !== selectedActvity))                
            }
        }

        const handleAmbienteSelection = (selectedAmbiente) => {
            setAmbiente([...ambiente, selectedAmbiente])

            if (ambiente.includes(selectedAmbiente)){
                setAmbiente(ambiente.filter(a => a !== selectedAmbiente))                
            }
        }        


        const sliderThumb = (props) => {
        const { value } = props 

    return (
    <View style={styles.thumbContainer}>
      <View style={styles.thumbCircle} />
      <Text style={styles.thumbLabel}>{Math.round(value)} km</Text>
    </View>       
        );
    };


        return (
            <View style={styles.container}>
                
                <View style={styles.header}>
                    <AntDesign name="arrowleft" size={16} color="black" />
                    <Text style={styles.texto_header}>Filtros</Text>
                </View>

                <View style={styles.options_container}>
                
                <View style={styles.section_container}> 
                    <Text style={[styles.view_title, {marginLeft: 10}]}>Faixa de Preços</Text>
                    <View style={styles.filter_container}>
                    <TouchableOpacity onPress={() => handlePriceRange('gratuito')} style={[styles.filter_button, priceRange === 'gratuito' && styles.filter_button_selected]}>
                        <Text style={styles.filter_text}>Gratuito</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handlePriceRange('economico')} style={[styles.filter_button, priceRange === 'economico' && styles.filter_button_selected]}>
                        <Text style={styles.filter_text}>Econômico</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handlePriceRange('premium')} style={[styles.filter_button, priceRange === 'premium' && styles.filter_button_selected]}>
                        <Text style={styles.filter_text}>Premium</Text>
                    </TouchableOpacity>
                    </View>

                    <View style={styles.minmax_container}> 
                        <View style={styles.input_container}>
                            <Text style={styles.minmax_text}>Min:</Text>
                            <TextInput style={styles.minmax_input} placeholder="R$ 0,00" placeholderTextColor='#9D9D9D' keyboardType="numeric" />
                        </View>

                        <View style={styles.input_container}>
                            <Text style={styles.minmax_text}>Max:</Text>
                            <TextInput style={styles.minmax_input} placeholder="R$ 100.000,00" placeholderTextColor='#9D9D9D' keyboardType="numeric" />
                        </View> 

                    </View>

                        <View style={styles.separator}>
                        </View>

                    <View style={styles.section_container}>
                        <Text style={styles.view_title}>Distância</Text>
                        <View style={styles.slider_container}>
                        <RangeSlider 
                            step={1}
                            inboundColor={'#F18701'}
                            outboundColor={'#B2B2B2'}   
                            minimumValue={0}
                            maximumValue={1000}
                            CustomThumb={sliderThumb}
                            crossingAllowed={false}
                            slideOnTap={true}  
                        />
                        </View>

                    </View>

                <View style={styles.separator}>
                </View>

                <View style={styles.section_container}>
                    <Text style={styles.view_title}>Atividades Favoritas</Text>
                    <View style={styles.filter_container}>

                        <TouchableOpacity onPress={() => handleActivitySelection('gastro')} style={[styles.activity_button, activity.includes('gastro') && styles.activity_button_active]}>
                            <Text  style={styles.activity_text}>Gastronomia</Text>
                            <Image
                            style={styles.activity_img} 
                                source={require('../assets/images/gastropng.png')}
                            
                            ></Image>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => handleActivitySelection('nat')} style={[styles.activity_button, activity.includes('nat') && styles.activity_button_active]}>
                            <Text style={styles.activity_text}>Natureza</Text>
                            <Image
                            style={styles.activity_img}
                                source={require('../assets/images/nat.png')}
                            ></Image>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => handleActivitySelection('sport')} style={[styles.activity_button, activity.includes('sport') && styles.activity_button_active]}>
                            <Text style={styles.activity_text}>Esporte</Text>
                            <Image
                            style={styles.activity_img}
                                source={require('../assets/images/esporte.png')}
                            ></Image>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.filter_container}>

                        <TouchableOpacity onPress={() => handleActivitySelection('mus')} style={[styles.activity_button, activity.includes('mus') && styles.activity_button_active]}>
                            <Text style={styles.activity_text}>Museus</Text>
                            <Image
                            style={styles.activity_img}
                                source={require('../assets/images/museus.png')}
                            ></Image>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => handleActivitySelection('party')} style={[styles.activity_button, activity.includes('party') && styles.activity_button_active]}>
                            <Text style={styles.activity_text}>Festas</Text>
                            <Image
                            style={styles.activity_img}
                                source={require('../assets/images/festas.png')}
                            ></Image>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => handleActivitySelection('shop')} style={[styles.activity_button, activity.includes('shop') && styles.activity_button_active]}>
                            <Text style={styles.activity_text}>Compras</Text>
                            <Image
                            style={styles.activity_img}
                                source={require('../assets/images/compras.png')}
                            ></Image>
                        </TouchableOpacity>

                    </View>
                </View>     

                <View style={styles.separator}> 
                </View>

                <View style={styles.section_container}>
                    <Text style={styles.view_title}>Tipo de Ambiente</Text>

                    <View style={[styles.filter_container, {justifyContent: 'flex-start'}]}>
                        <TouchableOpacity onPress={() => handleAmbienteSelection('pet')} style={[styles.filter_button2, ambiente.includes('pet') && styles.filter_button2_active]}>
                            <Text style={styles.filter_text}>Pet-friendly</Text>
                        </TouchableOpacity>
                        
                        
                        <TouchableOpacity onPress={() => handleAmbienteSelection('child')} style={[styles.filter_button2, ambiente.includes('child') && styles.filter_button2_active]}>
                            <Text style={styles.filter_text}>Ideal para crianças</Text>
                        </TouchableOpacity>                    

                    </View>

                    <View style={[styles.filter_container, {justifyContent: 'flex-start'}]}>
                        <TouchableOpacity onPress={() => handleAmbienteSelection('adult')} style={[styles.filter_button2, ambiente.includes('adult') && styles.filter_button2_active]}>
                            <Text style={styles.filter_text}>Para adultos</Text>
                        </TouchableOpacity>
                        
                        
                        <TouchableOpacity onPress={() => handleAmbienteSelection('outdoor')} style={[styles.filter_button2, ambiente.includes('outdoor') && styles.filter_button2_active]}>
                            <Text style={styles.filter_text}>Ao ar livre</Text>
                        </TouchableOpacity>                   

                        <TouchableOpacity onPress={() => handleAmbienteSelection('indoor')} style={[styles.filter_button2, ambiente.includes('indoor') && styles.filter_button2_active]}>
                            <Text style={styles.filter_text}>Indoor</Text>
                        </TouchableOpacity>                     

                    </View>



                </View>

                <View style={[styles.section_container, {marginTop: 0}]}>
                    <TouchableOpacity style={styles.confirm_button}>
                        <Text style={styles.confirm_text}>Aplicar Filtros</Text>
                    </TouchableOpacity>
                </View>

                </View>
                
                <View>

                </View>


                </View>


                
            </View>

        )

    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
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

        texto_header: {
        fontSize: 20,
        fontFamily: "NunitoSans_700Bold",
        marginLeft: 20,
        alignSelf: "center",
    },

    options_container: {
        flex: 5,
        width: "100%",
        alignItems: "center",
        paddingVertical: 20,
    },

    section_container: {    
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 15
        
    },  

    view_title: {
        fontFamily: "NunitoSans_700Bold",
        fontSize: 18,
        
    },

    filter_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 10,   
    },

    filter_button: {
        borderColor: "#F18701",
        borderWidth: 1,
        paddingVertical: 9 ,
        paddingHorizontal: 30,
        borderRadius: 6,
        marginLeft: 10,
    },

    filter_button_selected: {
        borderColor: "#3D348B",
        borderWidth: 1,
        paddingVertical: 9 ,
        paddingHorizontal: 30,
        borderRadius: 6,
        marginLeft: 10,
    },    

     filter_button2: {
        borderColor: "#F18701",
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderRadius: 8,
        marginLeft: 10,
    },   

     filter_button2_active: {
        borderColor: "#3D348B",
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderRadius: 8,
        marginLeft: 10,
    },   

    minmax_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        gap: 20,
        marginTop: 10,
        paddingHorizontal: 10,
    },

    input_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    minmax_text: {
        fontFamily: "NunitoSans_700Bold",
        fontSize: 13,
        marginRight: 10,
        textAlignVertical: 'center',
    },

    minmax_input: {
        borderColor: "#3D348B",
        borderWidth: 1,
        paddingVertical: 3,
        paddingHorizontal: 15,
        borderRadius: 8,
        width: screenWidth * 0.30,
    },

    separator: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9D9D9D',
        opacity: 0.5,
        width: '85%' ,
        height: 1   ,
        margin: 'auto',
        marginTop: 20,
    },

  thumbCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,  
    borderWidth: 1, 
    backgroundColor: '#FFFFFF',
    borderColor: '#9D9D9D',

    shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    slider_container:{
        width:'85%',
        margin: 'auto',
        paddingVertical: 10,  
    },

    thumbContainer: {
    alignItems: 'center', 
  },

    thumbLabel: {
    position: 'absolute',
    bottom: -22, 
    fontSize: 12,
    color: '#333',
    fontFamily: 'NunitoSans_700Bold',
    width: 50, 
    textAlign: 'center',
  },    

  activity_img: {
    width: 28,
    height:28,
    resizeMode: 'contain',
    marginTop: 10
  },

  activity_button: {
        borderColor: "#F18701",
        borderWidth: 1,
        paddingVertical: 5 ,
        paddingHorizontal: 8,
        borderRadius: 8,
        marginHorizontal: 5,
        width: screenWidth/3 - 20,
        height: 80
  },

  activity_button_active: {
        borderColor: "#3D348B",
        borderWidth: 1,
        paddingVertical: 5 ,
        paddingHorizontal: 8,
        borderRadius: 8,
        marginHorizontal: 5,
        width: screenWidth/3 - 20,
        height: 80
  },  

  activity_text: {
    fontFamily: 'NunitoSans_300Light',
    fontSize: 14,
  },

  filter_text: {
    fontFamily: 'NunitoSans_500Medium',
    fontSize:14,
  },

  confirm_button: {
    backgroundColor: '#7678ED',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginTop: 30,
    width: screenWidth/2 -15,
    alignSelf: 'center'
  },

  confirm_text: {
    color: 'white',
    fontFamily: 'NunitoSans_700Bold',
    fontSize: 15,
    textAlign: 'center'
  },


    });


    export default Filter;