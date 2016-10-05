import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';

function getSections() {
  return [
    {
      name: 'Ofertas',
        image: require('../../img/icono-ofertas.png')
    },
    {
      name: 'Destinos',
      image: require('../../img/icono-destinos.png')
    },
    {
      name: 'Vuelos',
      image: require('../../img/icono-vuelos.png')
    },
    {
      name: 'Hoteles',
      image: require('../../img/icono-hoteles.png')
    }
  ];
}

class FlexboxDemo extends Component {
  render() {
    const sections = getSections();
    const sectionComponents = sections.map((section, index) => {
      let evenPair = (index % 2) ? 'even' : 'pair';
      return (
        <View key={section.name} style={[layout.section, styles[evenPair], layout[evenPair]]}>
          <Text style={styles.text}>{section.name}</Text>
          <Image style={styles.icono} source={section.image} />
        </View>
      );
    });

    return (
      <Image style={layout.container} source={require('../../img/fondo-avion2.jpg')}>
        <View style={[layout.header, styles.header]}>
            <Text style={styles.textHeader}>¿Que buscas?</Text>
        </View>
        <View style={layout.body}>
          {sectionComponents}
        </View>
        <View style={[layout.footer, styles.footer]}>
          <Text style={styles.textFooter}> &lt; Volver</Text>
        </View>
      </Image>
    );
  }
}

const layout = StyleSheet.create({
  container: {
    marginTop: 0,
    flex: 1,
    flexDirection: 'column',
    width: null,
    height: null,
    resizeMode: 'stretch'
  },
  header: {
    flex: 0.65,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  footer: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  section: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pair: {
    flexDirection: 'row'
  },
  even: {
    flexDirection: 'row-reverse'
  },
});

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(0, 38, 81, 0.75)'
  },
  footer: {
    backgroundColor: 'rgba(0, 38, 81, 0.75)'
  },
  pair: {
    backgroundColor: 'rgba(51, 204, 255, 0.45)'
  },
  even: {
    backgroundColor: 'rgba(51, 204, 255, 0.15)'
  },
  icono: {
    width: 85,
    height: 85,
    marginHorizontal: 25,
    marginVertical: 5
  },
  text: {
    fontSize: 25,
    /* textShadow: '2px 2px #ff0000', */
    color: 'white',
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 2
    }
  },
  textHeader: {
    fontSize: 30,
    color: 'white'
  },
  textFooter: {
    color: 'white'
  }
});

export default FlexboxDemo;
