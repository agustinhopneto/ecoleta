import React, { useState, useEffect } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';
import {
  View,
  ImageBackground,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import RNPickerSelect from 'react-native-picker-select';

import styles from './styles';

import background from '../../assets/home-background.png';
import logo from '../../assets/logo.png';

interface IBGEUfResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

const Home: React.FC = () => {
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');

  const navigation = useNavigation();

  function handleNavigation(): void {
    navigation.navigate('Points', {
      uf,
      city,
    });
  }

  useEffect(() => {
    axios
      .get<IBGEUfResponse[]>(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome',
      )
      .then((response) => {
        const ufInitials = response.data.map((ufResponse) => ufResponse.sigla);

        setUfs(ufInitials);
      });
  }, []);

  useEffect(() => {
    axios
      .get<IBGECityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`,
      )
      .then((response) => {
        const cityNames = response.data.map(
          (cityResponse) => cityResponse.nome,
        );

        setCities(cityNames);
      });
  }, [uf]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ImageBackground
        source={background}
        style={styles.container}
        imageStyle={{ width: 274, height: 368 }}
      >
        <View style={styles.main}>
          <Image source={logo} />
          <View>
            <Text style={styles.title}>
              Seu marketplace de coleta de resíduos
            </Text>
            <Text style={styles.description}>
              Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <RNPickerSelect
            placeholder={{ label: 'Selecione a UF' }}
            style={{
              viewContainer: styles.input,
            }}
            onValueChange={(value) => {
              setUf(value);
            }}
            items={ufs.map((ufItem) => ({ label: ufItem, value: ufItem }))}
          />

          <RNPickerSelect
            placeholder={{ label: 'Selecione a Cidade' }}
            style={{
              viewContainer: styles.input,
            }}
            onValueChange={(value) => {
              setCity(value);
            }}
            items={cities.map((cityItem) => ({
              label: cityItem,
              value: cityItem,
            }))}
          />

          <RectButton style={styles.button} onPress={() => handleNavigation()}>
            <View style={styles.buttonIcon}>
              <Text>
                <Icon name="arrow-right" size={20} color="#fff" />
              </Text>
            </View>
            <Text style={styles.buttonText}>Entrar</Text>
          </RectButton>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Home;
