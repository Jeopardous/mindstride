import {
  Button,
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { questionData } from '../../../utils/question';
import SafeAreaViewWrapper from '../../../components/SafeareaViewWrapper';
// Animation Imports
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  Easing,
  withTiming,
  interpolateColor,
  withDelay,
} from 'react-native-reanimated';
import OnboardingHeader from '../../../components/OnboardingHeader';
import Colors from '../../../utils/Colors';
import { Fonts } from '../../../utils/Fonts';
import NavigatinActions from '../../../navigation/NavigatinActions';

interface Answer {
  title: string;
  dependent_questions?: Question[] | 'None';
}

interface Question {
  id: number;
  question: string;
  answer: Record<string, Answer>;
}


const QuestionScreen: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [surveyCompleted, setSurveyCompleted] = useState(false);
  const [currentQueData, setCurrentQueData] = useState<Question[]>(questionData);
  const [startIndex, setStartIndex] = useState(0);
  const [dependentQuestionCount, setDependentQuestionCount] = useState(0);
  const [barWidth, setBarwidth] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);


  const { width, height } = Dimensions.get('window');
  const progress = useSharedValue(width);
  const animatedStyle1 = useAnimatedStyle(() => {
    if (!currentQueData || !currentQueData[currentQuestionIndex]) {
      return {}; // Return an empty style object or default values to prevent the error
    }
    return {
      transform: [{ translateX: progress.value * 1 }],
    };
  });

  const startQuestionAnimation = () => {
    progress.value = withTiming(1, {
      duration: 400,
      easing: Easing.linear,
    });
  };

  const handleAnswerSelection = (questionId: number, answerId: number) => {
    setSelectedOption(answerId);
    const selectedAnswer = currentQueData.find(
      question => question.id === currentQueData[currentQuestionIndex].id,
    )?.answer[answerId];
    if (selectedAnswer?.dependent_questions !== 'None') {
      transitionToNextQuestion(selectedAnswer?.dependent_questions);
    } else {
      if (startIndex >= questionData.length - 1) {
        setSurveyCompleted(true);
        setBarwidth(100);
        setDependentQuestionCount(0);
      } else {
        let queIndex = startIndex + 1;
        setStartIndex(queIndex);
        setBarwidth((queIndex / questionData.length) * 100);
        setCurrentQuestionIndex(0);
        setCurrentQueData([questionData[queIndex]]);
        setDependentQuestionCount(0);
        transitionToNextQuestion(questionData[queIndex]);
      }
    }
  };

  const restartSurvey = () => {
    setCurrentQuestionIndex(0);
    setSurveyCompleted(false);
    setCurrentQueData(questionData);
    setStartIndex(0);
    setDependentQuestionCount(0);
    transitionToNextQuestion(questionData[0]);
    setBarwidth(0);
  };

  const transitionToNextQuestion = (selectedAnswer: Question | 'None') => {
    progress.value = 0;
    transitionToQuestion('backword', selectedAnswer);
  };

  const transitionToQuestion = (direction: string, selectedAnswer: Question | 'None') => {
    const destination = direction === 'forward' ? width : -width;
    progress.value = withTiming(destination, {
      duration: 400,
      easing: Easing.linear,
    });

    setTimeout(() => {
      progress.value = width;
      if (selectedAnswer !== 'None') {
        setCurrentQueData([selectedAnswer]);
        setDependentQuestionCount(dependentQuestionCount + 1);
        startQuestionAnimation();
      }
    }, 400);

    // setCurrentQueData([selectedAnswer]);
    // setDependentQuestionCount(dependentQuestionCount + 1);
  };

  useEffect(() => {
    startQuestionAnimation();
  }, []);

  const renderOptions = () => {
    return Object.keys(currentQueData[currentQuestionIndex].answer).map(
      (answerId, index) => {

        return (
          <Animated.View
            key={answerId}
            style={[
              animatedStyle1,
              { marginTop: 20, backgroundColor: Colors.white },
              styles.optionsView,
            ]}>
            <TouchableOpacity
              style={styles.options}
              onPress={() =>
                handleAnswerSelection(currentQuestionIndex, Number(answerId))
              }>
              <Text style={styles.optionsTxt}>
                {currentQueData[currentQuestionIndex].answer[answerId].title}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        );
      },
    );
  };

  return (
    <SafeAreaViewWrapper
      platform={Platform.OS}
      style={{ flex: 1, backgroundColor: 'white' }}>
      <OnboardingHeader navigation={() => NavigatinActions.goBack()} />
      <View style={styles.body}>
        <View style={styles.welcomeView}>
          <View>
            <Text style={styles.welcomeTxt}>Welcome!</Text>
          </View>
          <View style={styles.questionDetails}>
            <Text style={styles.questionDetailsTxt}>
              Question {startIndex + 1} of {questionData.length}
            </Text>
          </View>
        </View>

        <View style={styles.questionView}>
          {!surveyCompleted && (
            <View>
              <Animated.View style={[styles.question, animatedStyle1]}>
                <Text style={styles.questionTxt}>
                  {currentQueData[currentQuestionIndex].question}
                </Text>
              </Animated.View>
              {renderOptions()}
            </View>
          )}

          {/* Display result or next component once all questions are answered */}
          {surveyCompleted && (
            <View>
              <View style={styles.successView}>
                <Text style={styles.successTxt}>Quiz Completed!</Text>
              </View>

              <TouchableOpacity style={styles.button} onPress={restartSurvey}>
                <Text style={styles.btnTxt}>Start Quiz Again</Text>
              </TouchableOpacity>
            </View>
          )}
          <View style={styles.footer}>
            <View style={styles.progressView}>
              <View style={[styles.bar, { width: `${barWidth}%` }]}></View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaViewWrapper>
  );
};

export default QuestionScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  footer: {
    paddingHorizontal: wp(5),
    position: 'absolute',
    bottom: 100,
  },
  options: {
    height: hp(5.5),
    justifyContent: 'center',
  },
  optionsView: {
    paddingHorizontal: wp(2),
    borderRadius: 5,
    shadowColor: '#3E3C49',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: Platform.OS === 'android' ? 2 : 0,
  },
  optionsTxt: {
    color: Colors.black,
    fontSize: hp(1.6),
    fontFamily: Fonts.semibold,
    // fontWeight: 'bold',
    // letterSpacing: 2,
  },
  button: {
    alignSelf: 'center',
    height: 40,
    backgroundColor: '#348A78',
    elevation: 5,
    borderRadius: 3,
    justifyContent: 'center',
    padding: 10,
  },

  btnTxt: {
    color: 'white',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  question: {
    marginVertical: 20,
  },
  questionTxt: {
    color: Colors.primary,
    fontSize: hp(2.4),
    fontFamily: Fonts.semibold,
  },
  successView: {
    width: '90%',
    height: 150,
    backgroundColor: 'rgba(52,138,120,0.3)',
    marginHorizontal: '5%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successTxt: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  welcomeTxt: {
    fontSize: hp(3),
    color: Colors.black,
    fontFamily: Fonts.bold,
  },
  questionDetails: {
    marginTop: 20,
  },
  questionDetailsTxt: {
    fontSize: hp(1.8),
    color: Colors.black,
    fontFamily: Fonts.medium,
  },
  progressView: {
    width: wp(90),
    height: 5,
    backgroundColor: Colors.grey,
    borderRadius: 5,
  },
  bar: {
    backgroundColor: Colors.primary,
    height: 5,
    borderRadius: 5,
  },
  welcomeView: {
    backgroundColor: Colors.secondary,
    paddingHorizontal: wp(5),
    paddingTop: hp(5),
    paddingBottom: hp(7),
  },
  questionView: {
    flex: 1,
    marginTop: -hp(2.8),
    backgroundColor: Colors.white,
    paddingHorizontal: wp(6),
    width: wp(100),
    borderTopLeftRadius: wp(8),
    borderTopRightRadius: wp(8),
    elevation: 5,
    paddingVertical: hp(2.5),
  },
});
