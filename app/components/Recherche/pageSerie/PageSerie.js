import React, {Component} from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  StatusBar,
  SafeAreaView,
  Text,
  Image,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {StyleSheet} from 'react-native';

class Serie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serie: {},
      refreshing: false,
    };
  }

  componentDidMount() {
    this.getSerie();
  }

  getSerie = () => {
    this.setState({refreshing: true});
    const options = {
      method: 'GET',
    };

    fetch(
      'https://api.themoviedb.org/3/search/tv?api_key=4159ad2b376fa3bd4b1ae1ab140e04c9&language=fr&query=game',
      options,
    )
      .then((response) => response.json())
      .then(
        (data) => {
          this.setState({serie: data});
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

  showSerie = () => {
    if (Array.isArray(this.state.serie.results)) {
      return this.state.serie.results.map((element, index) => (
        <View style={styles.general}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://image.tmdb.org/t/p/w500' + element.backdrop_path,
            }}
          />
          <View style={styles.description}>
            <Text style={styles.titre}>{element.name}</Text>

            <Text style={styles.text}>{element.overview}</Text>

            <Text style={styles.text}>{element.first_air_date}</Text>

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
            placeholder="Recherche par série ..."
          />
          <View style={styles.button}>
            <Button
              color="mediumseagreen"
              title="Rechercher"
              onPress={this.getSerie}
            />
          </View>
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.getFilm}
              />
            }>
            {this.showSerie()}
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

export default Serie;
