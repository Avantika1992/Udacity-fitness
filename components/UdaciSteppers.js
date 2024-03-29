import React,{Component} from 'react'
import {View,Text,TouchableOpacity,StyleSheet,Platform} from 'react-native'
import {FontAwesome,Entypo} from '@expo/vector-icons'
import {white,grey,purple} from '../utils/colors'

export default function UdaciSteppers({max,unit,step,value,onIncrement,onDecrement}){
  return(
    <View style={[styles.row,{justifyContent:'space-between'}]}>
     <View style={{flexDirection:'row'}}>
      <TouchableOpacity
      style={[styles.androidBtn,{borderTopRightRadius:0,borderBottomRightRadius:0}]}
      onPress={onDecrement}>
       <FontAwesome name='minus' size={30} color={'white'}/>
      </TouchableOpacity>
      <TouchableOpacity
      style={[styles.androidBtn,{borderTopLeftRadius:0,borderBottomLeftRadius:0}]}
      onPress={onIncrement}>
       <FontAwesome name='plus' size={30} color={'white'}/>
      </TouchableOpacity>
     </View>
     <View style={styles.metricCounter}>
       <Text style={{fontSize:24,textAlign:'center'}}>{value}</Text>
       <Text style={{fontSize:18,color:grey}}>{unit}</Text>
     </View>
    </View>
  )
}

const styles=StyleSheet.create({
  row:{
    flexDirection:'row',
    flex:1,
    alignItems:'center'
  },
  androidBtn:{
    margin:5,
    backgroundColor:purple,
    padding:10,
    borderRadius:2
  },
  metricCounter:{
    width:85,
    justifyContent:'center',
    alignItems:'center'
  }
})
