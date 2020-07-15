import React, {Component} from 'react';
import {
  View,
  TextInput,
  Button,
  StatusBar,
  SafeAreaView,
  Text,
  Image,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {StyleSheet} from 'react-native';

/*import {View, Text, SafeAreaView, StatusBar, Image} from 'react-native';
import {StyleSheet} from 'react-native';*/

class Film extends Component {
  constructor(props) {
    super(props);
    this.state = {
      film: {},
      refreshing: false,
    };
  }

  componentDidMount() {
    this.getFilm();
  }

  getFilm = () => {
    this.setState({refreshing: true});
    const options = {
      method: 'GET',
    };

    fetch(
      'https://api.themoviedb.org/3/search/movie?api_key=4159ad2b376fa3bd4b1ae1ab140e04c9&language=fr&query=harry',
      options,
    )
      .then((response) => response.json())
      .then(
        (data) => {
          this.setState({film: data});
        },
        (error) => {
          console.log(error);
        },
      )
      .finally(() => {
        this.setState({refreshing: false});
      });

    this.setState({refreshing: true});
  };

  showFilm = () => {
    if (Array.isArray(this.state.film.results)) {
      return this.state.film.results.map((element, index) => (
        <View style={styles.general}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://image.tmdb.org/t/p/w500' + element.poster_path,
            }}
          />
          <View style={styles.description}>
            <Text style={styles.titre}>{element.title}</Text>

            <Text style={styles.text}>{element.overview}</Text>

            <Text style={styles.text}>{element.release_date}</Text>

            <Text style={styles.note}>
              Note de : {element.vote_average} / 10
            </Text>
          </View>
        </View>
      ));
    } else {
      return <Text>Chargement en cours...</Text>;
    }
  };

  render() {
    return (
      <View>
        <StatusBar />
        <SafeAreaView>
          <TextInput
            style={styles.input}
            placeholder="Recherche par Film ..."
          />

          <View style={styles.button}>
            <Button
              color="mediumseagreen"
              title="Rechercher"
              onPress={this.getFilm}
            />
          </View>

          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.getFilm}
              />
            }>
            {this.showFilm()}
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  general: {
    backgroundColor: 'darkblue',
    borderStyle: 'solid',
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  image: {height: 100, width: 100},
  titre: {fontSize: 20, textAlign: 'center', color: 'ghostwhite'},
  text: {color: 'ghostwhite', marginHorizontal: 10},
  note: {
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 30,
    color: 'ghostwhite',
    fontWeight: 'bold',
    fontSize: 15,
  },

  button: {
    marginTop: 10,
    marginHorizontal: 100,
    padding: 4,
    textAlign: 'center',
    fontSize: 2,
    fontWeight: 'bold',
    color: 'black',
  },
  input: {
    borderWidth: 0.5,
    marginTop: 8,
    marginHorizontal: 10,
    backgroundColor: 'ghostwhite',
  },
});

export default Film;
