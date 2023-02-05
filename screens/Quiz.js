import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function generateOptions(_question) {
  const options = [..._question.incorrect_answers];
  options.push(_question.correct_answer);
  shuffle(options);
  return options;
}

const Quiz = ({ navigation }) => {
  const [question, setQuestion] = useState([]);
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);

  const getQns = async () => {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986"
    );
    const data = await res.json();
    setQuestion(data.results);
    setOptions(generateOptions(data.results[0]));
  };

  useEffect(() => {
    getQns();
  }, []);

  const handleNextPress = () => {
    setQues(ques + 1);
    setOptions(generateOptions(question[ques + 1]));
  };

  const handleShowResult = () => {
    // console.warn("show result");
    navigation.navigate("Result",{
      score:score,
    });
  };

  const handleSelectedOption = (_option)=>{
    if(_option === question[ques].correct_answer){
      setScore(score + 10);
    }

    if(ques!==9){
      setQues(ques+1)
      setOptions(generateOptions(question[ques+1]))
    }
    if(ques===9){
      handleShowResult()
    }
  }

  return (
    <View style={styles.container}>
      {question.length > 0 && (
        <View style={styles.parent}>
          <View style={styles.top}>
            <Text style={styles.question}>
              Q.{ques + 1} {decodeURIComponent(question[ques].question)}
            </Text>
          </View>
          <View style={styles.options}>
            <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[0])}>
              <Text>{decodeURIComponent(options[0])}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[1])}>
              <Text>{decodeURIComponent(options[1])}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[2])}>
              <Text>{decodeURIComponent(options[2])}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[3])}>
              <Text>{decodeURIComponent(options[3])}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottom}>
            {ques !== 9 && (
              <TouchableOpacity style={styles.button} onPress={handleNextPress}>
                <Text style={styles.buttonText}>SKIP</Text>
              </TouchableOpacity>
            )}

            {ques === 9 && (
              <TouchableOpacity
                style={styles.button}
                onPress={handleShowResult}
              >
                <Text style={styles.buttonText}>SHOW RESULTS</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    marginHorizontal: 20,
    height: "100%",
  },
  question: {
    fontSize: 24,
    fontWeight: "bold",
  },
  bottom: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 16,
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#0077b6",
    padding: 12,
    borderRadius: 16,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  top: {
    marginVertical: 16,
  },
  options: {
    flex: 1,
  },
  optionButton: {
    backgroundColor: "#2a9d8f",
    padding: 12,
    marginVertical: 6,
    borderRadius: 12,
  },
  parent: {
    height: "100%",
  },
});

export default Quiz;
