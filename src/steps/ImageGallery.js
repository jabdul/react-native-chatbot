import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, Image, Button, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import Carousel from 'react-native-snap-carousel';
import { launchImageLibrary } from 'react-native-image-picker';

const SLIDER_WIDTH = Dimensions.get('screen').width;
const SLIDER_ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const SLIDER_ITEM_HEIGHT = Math.round((SLIDER_ITEM_WIDTH * 3) / 4);

export default function ImageGallery(props) {
  const { triggerNextStep, optionStyle, step, previousValue } = props;

  const [images, setImages] = useState([]);

  const transformImages = (data) => {
    const transformedImages = data.map((image, i) => ({ id: i, image }));
    return transformedImages;
  };

  useEffect(() => {
    setImages([previousValue.uri]);
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={{ width: 200 }}>
        <Image
          source={{ uri: item.image }}
          height={200}
          width={200}
          style={{ width: 200, height: 200 }}
        />
        <View style={styles.cardDescription}>
          <TouchableOpacity>
            <Text style={styles.buttonText}>Remove</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.buttonText}>Note</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  // _uploadToS3(data.uri)
  //   .then(({ body }) => {
  //     if (body.postResponse.location) {
  //       saveImages(body.postResponse.location);
  //     }
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // setTimeout(() => {
  //   this._carousel.snapToItem(images.length);
  // }, 0);

  return (
    <View style={{ flexGrow: 1, marginVertical: 30 }}>
      <Carousel
        data={transformImages(images)}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={SLIDER_ITEM_WIDTH}
        layout="default"
      />

      {images.length === 1 && <View style={styles.spacer} />}
      <View style={styles.carouselControls}>
        <TouchableOpacity
          onPress={() => {
            launchImageLibrary({}, (res) => {
              const currentImages = images;
              currentImages.push(res.uri);
              setImages(currentImages);
            });
          }}>
          <Text style={styles.buttonText}>Add more images</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#B746A8',
            paddingHorizontal: 25,
            paddingVertical: 13,
            borderRadius: 8,
            fontSize: 8,
            marginLeft: 20,
          }}
          onPress={() => {
            triggerNextStep();
          }}>
          <Text style={{ color: 'white' }}>DONE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'row',
  },
  card: {
    flex: 1,
    width: SLIDER_ITEM_WIDTH,
    height: Number(SLIDER_ITEM_HEIGHT + 50),
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  cardItem: {
    flex: 1,
    justifyContent: 'space-between',
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  inactiveDotStyle: {},
  takePictureButton: {
    paddingBottom: 35,
  },
  spacer: {
    height: 3,
  },
  carouselControls: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 3,
    width: 300,
    padding: 15,
  },
  paginationScrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  paginationContainerStyle: {},
  cardDescription: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    backgroundColor: '#E5E5E5',
    width: 200,
    padding: 15,
  },
  buttonText: {
    textTransform: 'uppercase',
    color: '#484AB4',
    fontWeight: '700',
    fontSize: 12,
  },
});

ImageGallery.propTypes = {
  step: PropTypes.object.isRequired,
  triggerNextStep: PropTypes.func.isRequired,
  optionStyle: PropTypes.object.isRequired,
  optionElementStyle: PropTypes.object.isRequired,
};
