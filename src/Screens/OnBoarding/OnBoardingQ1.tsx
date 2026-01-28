import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {IMAGES} from '../../Constants/IMAGES';
import AppHeader from '../../Components/AppHeader';
import CustomButton from '../../Components/CustomButton';
import { COLORS } from '../../Constants/COLORS';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import Qa_List from '../../Constants/LISTS';
import API from '../../Constants/API';
import { EndPoints } from '../../Constants/Routes';
import { showError } from '../../Constants/FlashMessage';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/type';
import { StoreQaApi } from '../../Store/Action/AuthAction';



const {width, height} = Dimensions.get('window');





const OnBoardingQ1 = () => {

  const navigation = useNavigation<any>();
  const token = useSelector((state: RootState) => state.auth.tokenId) ?? null;
  
//  const StoreQaApi = async (data: {
//   ans1: string;
//   ans2: string;
//   ans3: string;
// },token:string) => {
//   try {
//     return await API.post(EndPoints.onBoardingQA, data);
//   } catch (err: any) {
//     showError(err?.response?.data?.message || 'Something went wrong');
//   }
// };


  const [step, setSteps] = useState(0);
const [selected, setSelected] = useState<number | null>(0);

const [ans, setAns] = useState({
  ans1: '',
  ans2: '',
  ans3: '',
});

   
  const currQuestion= Qa_List[step];
const storeAnswer = () => {
  if (selected === null || !selected) return;

  const answerKey = `ans${step + 1}` as keyof typeof ans;
  const answerValue = currQuestion.options[selected];

  setAns(prev => ({
    ...prev,
    [answerKey]: answerValue,
  }));
};

 const handleCurrStep = () => {
  storeAnswer();

  if (step < Qa_List.length - 1) {
    setSteps(prev => prev + 1);
    
  } else {
    // LAST STEP → API CALL
    console.log('Final Answers:', ans);

 StoreQaApi(ans, token!,navigation);
  }
};




  return (
    <ImageBackground
      source={IMAGES.wellcomebg}
      style={styles.container}
      resizeMode="cover">


      <AppHeader onBackPress={() => {
        if(step >= 1){
       setSteps(step - 1);
    }
      }}/>

  
      <Text style={styles.title}>Questionnaire</Text>
        <View style={styles.blackCard}>
          <View style={styles.stepsRow}>
        <View style={styles.stepActive}>
          <Text style={styles.stepTextDark}>01</Text>
        </View>

        <View style={styles.line} />

        <View style={step>=1?styles.stepActive :styles.stepCurrent}>
          <Text style={step>=1?styles.stepTextDark:  styles.stepTextLight}>02</Text>
        </View>

        <View style={styles.line} />

       <View style={step>=2?styles.stepActive :styles.stepCurrent}>
          <Text style={step>=2?styles.stepTextDark:  styles.stepTextLight}>03</Text>
        </View>
      </View>

      <Text style={styles.question}>
       {currQuestion.question}
      </Text>

      {currQuestion.options.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionRow}
          onPress={() => {
            setSelected(index);
            
            
            }}>

          <View
            style={[
              styles.radio,
              selected === index && styles.radioActive,
            ]}
          />

          <Text style={styles.optionText}>{item}</Text>
        </TouchableOpacity>
      ))}

      {/* <Text>{currQuestion.question}</Text>
      {currQuestion.options.map((item, index)=>(
        <Text>{item}</Text>
      ))} */}


     <View style={styles.bottomBtn}>
  <CustomButton
    title="Next"
    onPress={() => handleCurrStep()
      //  navigation.navigate('OnBoardingQ2')
      }
  />
</View>
           </View>
      

    </ImageBackground>
  );
};

export default OnBoardingQ1;

const styles = StyleSheet.create({
 
 
  blackCard: {
      flex: 1,
    backgroundColor: '#0F0F0F',
    borderTopLeftRadius: width * 0.13,
    borderTopRightRadius: width * 0.13,
    paddingHorizontal: width * 0.058,  
    paddingTop: height * 0.04,  
    marginTop: 120,    
  },
 
 
  container: {
    flex: 1,
    // paddingHorizontal: width * 0.053,   
    paddingTop: height * 0.05,         
  },

  title: {
    color: COLORS.white,
    fontSize: width * 0.075,       
    fontWeight: '600',
    textAlign: 'center',
    // marginTop: height * 0.04,       
  },

  stepsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // marginVertical: height * 0.01,      
  },

  stepActive: {
    width: width * 0.13,           
    height: width * 0.13,
    borderRadius: width * 0.065,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: height * 0.075, 
       
  },

  stepCurrent: {
    width: width * 0.13,
    height: width * 0.13,
    borderRadius: width * 0.065,
    backgroundColor: 'rgba(255,255,255,0.10)',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: height * 0.075,
  },

  stepInactive: {
    width: width * 0.13,
    height: width * 0.13,
    borderRadius: width * 0.065,
    backgroundColor: COLORS.green2,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: height * 0.075,
  },

  stepTextDark: {
    color: COLORS.green2,
      fontSize:20,
    fontWeight:"600"  
  },

  stepTextLight: {
    color: COLORS.white,
    fontWeight: '500',
        fontSize:20,
  },

  line: {
    width: width * 0.24,           
    height: height * 0.0025,      
    backgroundColor: COLORS.gray3,
    // marginTop: height * 0.075,       
  },

  question: {
    color: COLORS.white,
    fontSize: width * 0.04,            
    lineHeight: height * 0.037,        
    marginBottom: height * 0.04,       
    marginTop: height * 0.025,       
    marginLeft: width * 0.05,           
  },

  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.022,     
    marginLeft: width * 0.05,           
  },

  radio: {
    width: width * 0.048,            
    height: width * 0.048,
    borderRadius: width * 0.024,
    borderWidth: 1,
    borderColor: COLORS.white,
    marginRight: width * 0.032,      
  },

  radioActive: {
    backgroundColor: COLORS.white,
  },

  optionText: {
    color: COLORS.white,
    fontSize: width * 0.042,           
  },

  bottomBtn: {
    position: 'absolute',
    bottom: height * 0.04,             
    left: width * 0.053,               
    right: width * 0.053,              
  },

});
