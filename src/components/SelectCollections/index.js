import React from 'react';
import {
  Text, View, Modal, ScrollView, Alert,
} from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';

import { bindActionCreators } from 'redux';
import CollectionThumbnail from '../CollectionThumbnail';
import { Creators } from '../../store/ducks/activeBook';

class SelectCollections extends React.Component {
  addBookToCollection = async (collection) => {
    const { book, addToCollection } = this.props;
    try {
      await addToCollection(book, collection);

      Alert.alert(
        'Sucesso!',
        `Adicionado à coleção ${collection.title}`,
        [
          { text: 'OK' },
        ],
        { cancelable: false },
      );
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const {
      collections, book, modalVisible, setModalVisible,
    } = this.props;
    return (
      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
      >
        <View style={{
          flex: 1, paddingVertical: 0, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 0, backgroundColor: 'rgba(0,0,0,.9)',
        }}
        >
          <View style={{
            width: '100%',
            height: '100%',
            padding: 15,
          }}
          >
            <View style={{
              marginBottom: 20,
              alignItems: 'center',
            }}
            >
              <Text style={{ color: '#FFF', fontSize: 20 }}>Minhas coleções</Text>

              <Icon
                size={30}
                type="ionicons"
                name="cancel"
                color="#FFF"
                onPress={() => {
                  setModalVisible(false);
                }}
                containerStyle={{ position: 'absolute', top: 0, right: 0 }}
              />
            </View>
            <ScrollView>
              <View style={{
                flexDirection: 'row', flexWrap: 'wrap',
              }}
              >
                { collections && collections.length
                  ? collections.map((collection) => {
                    const isInCollection = book.collections.find(col => col.id === collection.id);
                    console.log(isInCollection);
                    return (
                      <CollectionThumbnail
                        cover={collection.thumbnail}
                        title={collection.title}
                        onPress={() => this.addBookToCollection(collection)}
                        key={collection.id.toString()}
                        titleStyle={{
                          color: '#FFF', fontWeight: '500', fontSize: 15,
                        }}
                        hasCollection={!!isInCollection}
                        listing={false}
                      />
                    );
                  })
                  : <Text>Adicione um quadrinho</Text>
            }
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({ book: state.activeBook, collections: state.collections });

const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SelectCollections);