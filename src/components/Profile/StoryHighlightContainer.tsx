import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import StoryHighlights from '../UI/StoryHighlights';

const StoryHighlightContainer = () => {
  const [showHighlights, setShowHighlights] = useState(true);
  const showStoryHighlightsHandler = () => {
    setShowHighlights(!showHighlights);
  };

  return (
    <>
      <View style={styles.storyHighlightsContainer}>
        <View style={styles.storyHighlightUpperContainer}>
          <Text style={styles.textBold}>Story Highlights</Text>
          <TouchableOpacity onPress={showStoryHighlightsHandler}>
            <Octicons
              name={showHighlights ? 'chevron-down' : 'chevron-up'}
              size={20}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>
      {showHighlights ? (
        <View style={styles.storyHighlightsBottomContainer}>
          <Text style={[styles.textNormal, {fontSize: 13}]}>
            Keep your favourite stories on your profile
          </Text>
          <ScrollView
            style={styles.storiesContainer}
            horizontal
            showsHorizontalScrollIndicator={false}>
            {/* <View style={styles.storiesContainer}> */}
            <View style={styles.storyContainer}>
              <AntDesign name="plus" size={30} color={'black'} />
            </View>
            <StoryHighlights />
            <StoryHighlights />
            <StoryHighlights />
            <StoryHighlights />
            {/* </View> */}
          </ScrollView>
        </View>
      ) : null}
    </>
  );
};

export default StoryHighlightContainer;

const styles = StyleSheet.create({
  textBold: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'Muli-Bold',
  },
  textNormal: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'Muli-Regular',
  },
  storyHighlightsContainer: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 20,
  },
  storyHighlightUpperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  storyHighlightsBottomContainer: {
    marginLeft: 10,
  },
  storiesContainer: {
    marginTop: 10,
  },
  storyContainer: {
    height: 70,
    width: 70,
    borderWidth: 1,
    backgroundColor: '#dfe0e1',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
