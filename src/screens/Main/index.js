import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CollectionsList from '../../components/CollectionsList';
import BooksList from '../../components/BooksList';
import { Creators as booksActions } from '../../store/ducks/books';

class Main extends React.Component {
  state = {
    loading: true,
  }

  async componentDidMount() {
    const { fetchAllBooks } = this.props;
    await fetchAllBooks();
    this.setState({ loading: false });
  }

  getLicensorCategories = books => books.reduce((reducedArray, next) => {
    const { licensor: { name: nextLicensorName } } = next;
    const licensorInReducedArray = reducedArray.find((licensor) => {
      const isInArray = licensor.name === nextLicensorName;
      return isInArray;
    });
    if (licensorInReducedArray) {
      licensorInReducedArray.books.push(next);
    } else {
      const newLicensorInReducedArray = {
        name: nextLicensorName,
        books: [next],
      };
      reducedArray.push(newLicensorInReducedArray);
    }
    return reducedArray;
  }, [])

  render() {
    const { loading } = this.state;
    const { books } = this.props;

    const booksWithThumbnail = books.filter(book => book.thumbnail !== null);

    const licensorCategories = this.getLicensorCategories(booksWithThumbnail);

    return (
      <ScrollView>
        <CollectionsList title="Minhas coleções" />
        { loading ? <Text>Loading</Text>
          : (
            <View>
              { licensorCategories.map((licensorCategory, index) => (
                <BooksList
                  key={index.toString()}
                  title={licensorCategory.name}
                  books={licensorCategory.books}
                />
              ))
              }
            </View>
          )
        }
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => bindActionCreators(booksActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);