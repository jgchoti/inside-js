import {
	readString,
	displayString,
} from '../../../../../../lib/dom-io/index.js';

import { removeCharacters } from './utils/remove-characters.js';

const removeVowels = () => {
	debugger;

	// --- read user input ---
	const userText = readString('user-text');
	// let noVowels = '';
	// --- remove all vowels from the input ---
	//  use `removeCharacters` to write this step of the program
	let vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
	// for (let i = 0; i < userText.length; i++) {
	//   if (!vowels.includes(userText[i])) {
	//     noVowels += userText[i];
	//   }
	// }
	const noVowels = removeCharacters(userText, vowels)

	// --- display the input with no vowels ---
	displayString('removified', noVowels);
};

document.getElementById('vowels').addEventListener('click', removeVowels);
