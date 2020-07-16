import React, {Component} from 'react';
import {SafeAreaView, Text, Button, View, TextInput, Alert} from 'react-native';
import {StyleSheet} from 'react-native';

class Profil extends Component {
  render() {
    return (
      <View style={styles.back}>
        <SafeAreaView>
          <Text style={styles.titreHome}>Bienvenue sur SBO moviez !</Text>
          <Text style={styles.intro}>
            {' '}
            Crée ton compte pour ne rien rater et recevoir des notifications
            (par e-mail ou sms) des qu'un nouvel épisode de ta série préférée
            est de sortie !
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Nom d'utilisateur"
            placeholderTextColor="#778899"
          />

          <TextInput
            style={styles.input}
            placeholder="Adresse e-mail"
            placeholderTextColor="#778899"
          />
          <TextInput
            style={styles.input}
            placeholder="Numéro de téléphone"
            placeholderTextColor="#778899"
          />
          <TextInput
            style={styles.input}
            placeholder="Mot de Passe"
            placeholderTextColor="#778899"
          />
          <View style={styles.buttonValider}>
            <Button
              title="Valider"
              color="mediumseagreen"
              onPress={() =>
                Alert.alert('Ton compte à bien été enregistrer ! Merci !')
              }
            />
          </View>

          <View style={styles.button}>
            <Button
              onPress={() => {
                this.props.navigation.navigate('Films / Séries');
              }}
              title="Accès direct aux films / séries "
              color="#00bfff"
            />
          </View>
        </SafeAreaView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  back: {backgroundColor: 'darkblue', flex: 1},

  titreHome: {
    marginTop: 25,
    marginBottom: 10,
    marginHorizontal: 80,
    paddingStart: 2,

    color: 'ghostwhite',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },

  intro: {
    textAlign: 'center',
    fontSize: 15,
    marginHorizontal: 5,
    color: 'ghostwhite',
  },
  input: {
    height: 40,
    backgroundColor: 'ghostwhite',
    borderWidth: 1,
    marginTop: 20,
    marginHorizontal: 50,
  },
  buttonValider: {
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 130,
    padding: 4,
    textAlign: 'center',
    fontSize: 2,
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    marginVertical: 20,
    marginHorizontal: 40,
    padding: 4,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Profil;
