import React, { useState } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Nombre: Julian</Text>
      <Text>Edad: 50!</Text>
      <Text>sexo: Hombre</Text>
    </View>
  );
}
function Details2Screen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Nombre: Federico</Text>
      <Text>Edad: 27!</Text>
      <Text>sexo: Transgenero</Text>
    </View>
  );
}
function Details3Screen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Nombre: Pepe</Text>
      <Text>Edad: 40!</Text>
      <Text>sexo: Hombre</Text>
    </View>
  );
}

function ListadoScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Elige una persona</Text>
      <Button
        title="Julian"
        onPress={() => navigation.navigate('Details')}
        color="red"
        
        />
        <Button
        title="Federico"
        onPress={() => navigation.navigate('Details2')}
        />
        <Button
        title="Pepe"
        onPress={() => navigation.navigate('Details3')}
        color="red"
        />
        </View>
      );
    }
    
    function InfoScreen({ navigation }) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Esta App te permite conocer</Text>
          <Text>en más profundidad a las personas</Text>
        </View>
      );
    }
    
    const ListadoStack = createNativeStackNavigator();
    
    function ListadoStackScreen() {
      return (
        <ListadoStack.Navigator>
        <ListadoStack.Screen name="Listado" component={ListadoScreen} />
        <ListadoStack.Screen name="Details" component={DetailsScreen} />
        <ListadoStack.Screen name="Details2" component={Details2Screen} />
        <ListadoStack.Screen name="Details3" component={Details3Screen} />
      </ListadoStack.Navigator>
    );
  }
  
  const InfoStack = createNativeStackNavigator();
  
  function InfoStackScreen() {
    return (
      <InfoStack.Navigator>
        <InfoStack.Screen name="Info" component={InfoScreen} />
        <InfoStack.Screen name="Details" component={DetailsScreen} />
        <InfoStack.Screen name="Details2" component={Details2Screen} />
        <InfoStack.Screen name="Details3" component={Details3Screen} />
      </InfoStack.Navigator>
    );
  }
  
  const Tab = createBottomTabNavigator();
  
  export default function App() {
    return (
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Listado') {0
                  iconName = focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline';
                } else if (route.name === 'Info') {
                  iconName = focused ? 'paw' : 'paw-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'grey',
          })}
        >
        <Tab.Screen options={{ headerShown: false }} name="Listado" component={ListadoStackScreen} />
        <Tab.Screen options={{ headerShown: false }} name="Info" component={InfoStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}