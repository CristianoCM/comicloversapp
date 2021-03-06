import React from 'react';
import {
  Text, View, Image, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Rating, Icon, CheckBox } from 'react-native-elements';

import { bindActionCreators } from 'redux';
import CLGradient from '../../components/CLGradient';
import BookDescription from '../../components/BookDescription';
import BookReview from '../../components/BookReview';
import { BASE_URL } from '../../config/env_config';
import styles from './styles';
import { Creators } from '../../store/ducks/activeBook';
import SelectCollections from '../../components/SelectCollections';

class BookDetail extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title'),
  })

  state = {
    index: 0,
    /* eslint-disable react/no-unused-state */
    routes: [
      { key: 'first', title: 'Informações' },
      { key: 'second', title: 'Avaliação' },
    ],
    /* eslint-enable */
    // reviewRating: 0,
    modalVisible: false,
    favorito: false,
  }

  async componentWillMount() {
    const { getReview, book } = this.props;
    await getReview(book);
  }

  setModalVisible = (visible) => {
    this.setState({
      modalVisible: visible,
    });
  }

  handleRating = async (rating) => {
    const { book, setReview } = this.props;
    await setReview(book, { rating });
  }

  handleFavorite = async () => {
    const { favorito } = this.state;
    const newFav = !favorito;

    await this.setState({ favorito: newFav });

    const { book, setReview } = this.props;
    await setReview(book, { favorite: newFav });
  }

  handleHasBook = async () => {
    const { book, setReview } = this.props;
    await setReview(book, { has_book: book.review.has_book ? !book.review.has_book : true });
  }

  render() {
    const { book } = this.props;
    const { modalVisible, favorito } = this.state;
    const rating = book.reviews.length ? book.total_rating / book.reviews.length : 0;
    const price = book.price ? book.price.toString().replace('.', ',') : '';
    return (
      <View style={styles.container}>
        <SelectCollections modalVisible={modalVisible} setModalVisible={this.setModalVisible} />
        <View style={styles.statusView}>
          <Image
            source={{
              uri: `${BASE_URL}/${book.thumbnail}`,
            }}
            style={styles.cover_image}
          />
          <View style={styles.infoView}>
            <Text style={styles.title}>{book.title}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Rating
                imageSize={25}
                readonly
                count={5}
                startingValue={rating}
                style={styles.rating}
              />
              <Text style={[styles.status, { marginLeft: 10 }]}>{`(${rating})`}</Text>
            </View>
            <Text style={styles.statusTitle}>
              Número:
              <Text style={styles.status}>{` ${book.edition ? book.edition : ''}`}</Text>
            </Text>
            <Text style={styles.statusTitle}>
              Preço:
              <Text style={styles.status}>{` R$ ${price}`}</Text>
            </Text>

          </View>
        </View>
        <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>


          <View style={[styles.tabBar, styles.buttonWrapper]}>
            <TouchableOpacity
              style={[styles.tabItem, styles.button]}
              onPress={() => {
                this.handleHasBook();
              }}
            >
              { book.review && book.review.has_book
                ? (
                  <>
                    <CLGradient />
                    <View style={{ flexDirection: 'row' }}>
                      <Icon
                        name="md-checkmark"
                        type="ionicon"
                        color="#FFF"
                        size={14}
                      />
                      <Text style={{ color: 'white', marginLeft: 10 }}>
                      TENHO
                      </Text>
                    </View>
                  </>
                )
                : <Text style={{ color: '#20AEC0' }}>NÃO TENHO</Text>
              }
            </TouchableOpacity>
          </View>

          <View style={[styles.tabBar, styles.buttonWrapper]}>
            <TouchableOpacity
              style={[styles.tabItem, styles.button]}
              onPress={() => {
                this.setModalVisible(true);
              }}
            >
              { book.review
              && <CLGradient />}
              <Text style={{ color: 'white' }}>
                  COLEÇÕES
              </Text>
            </TouchableOpacity>
          </View>

          {/* <View style={[styles.tabBar, styles.buttonWrapper]}>
            <TouchableOpacity
              style={[styles.tabItem, styles.button]}
              onPress={() => {
                Linking.openURL(`https://www.amazon.com.br/s?k=${encodeURI(`${book.title}${book.edition && `- ${book.edition}`}`)}&i=stripbooks`);
              }}
            >
              <CLGradient />
              <Text style={{ color: 'white' }}>
                  COMPRAR
              </Text>
            </TouchableOpacity>
          </View> */}
        </View>
        <View style={styles.tabWrapper}>
          <TabView
            navigationState={this.state}
            renderScene={SceneMap({
              first: () => (<BookDescription book={book} />),
              second: () => (
                <>
                  <BookReview
                    rating={book.review ? book.review.rating : 0}
                    onFinishRating={this.handleRating}
                  />
                  <View>
                    <CheckBox
                      title="Marcar como favorito"
                      checked={favorito}
                      onPress={() => this.handleFavorite()}
                    />
                  </View>
                </>
              ),
            })}
            renderTabBar={props => (
              <View style={styles.tabBar}>
                {props.navigationState.routes.map((route, i) => {
                  const { index } = this.state;
                  const isActive = index === i;
                  const color = isActive ? '#fff' : '#20AEC0';
                  return (
                    <TouchableOpacity
                      key={i.toString()}
                      style={[styles.tabItem, {
                      }]}
                      onPress={() => {
                        this.setState({ index: i });
                      }}
                    >
                      { isActive && <CLGradient /> }
                      <Text style={{ color }}>{route.title}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}
            onIndexChange={index => this.setState({ index })}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({ book: state.activeBook, collections: state.collections });

const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
