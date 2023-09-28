/*
(c) by Thomas Konings
Random Name Generator for Javascript
*/

function capFirst(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export const generateName = () => {
  const name1 = [
    'abandoned',
    'able',
    'absolute',
    'adorable',
    'adventurous',
    'academic',
    'acceptable',
    'acclaimed',
    'accomplished',
    'accurate',
    'aching',
    'wicked',
    'wide',
    'wide-eyed',
    'wiggly',
    'wild',
    'willing',
    'wilted',
    'winding',
    'windy',
    'winged',
    'wiry',
    'wise',
    'witty',
    'wobbly',
    'woeful',
    'wonderful',
    'wooden',
    'woozy',
    'wordy',
    'worldly',
    'worn',
    'worried',
    'worrisome',
    'worse',
    'worst',
    'worthless',
    'worthwhile',
    'worthy',
    'wrathful',
    'wretched',
    'writhing',
    'wrong',
    'wry',
    'yawning',
    'yearly',
    'yellow',
    'yellowish',
    'young',
    'youthful',
    'yummy',
    'zany',
    'zealous',
    'zesty',
    'zigzag',
    'rocky',
  ];

  const name2 = [
    'people',
    'history',
    'way',
    'art',
    'world',
    'information',
    'map',
    'family',
    'government',
    'health',
    'system',
    'computer',
    'meat',
    'year',
    'thanks',
    'music',
    'person',
    'reading',
    'method',
    'data',
    'food',
  ];

  const name =
    capFirst(name1[getRandomInt(0, name1.length + 1)]) + ' ' + capFirst(name2[getRandomInt(0, name2.length + 1)]);
  return name;
};
