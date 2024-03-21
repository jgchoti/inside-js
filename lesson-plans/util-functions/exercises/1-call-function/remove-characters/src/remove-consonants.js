import {
	readString,
	displayString,
} from '../../../../../../../lib/dom-io/index.js';

import { removeCharacters } from './utils/remove-characters.js';

const removeConsonants = () => {
	debugger;

	// --- read user input ---
	const userText = readString('user-text');

	// --- remove all consonants from the input ---
	//  use `removeCharacters` to write this step of the program
	const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
	// let noConsonants = '';
	// for (let i = 0; i < userText.length; i++) {
	//   if (vowels.includes(userText[i])) {
	//     noConsonants += userText[i];
	//   }
	// }


	const noConsonants = removeCharacters(userText, consonants);

	// --- display the input with no consonants ---
	displayString('removified', noConsonants);
};

document
	.getElementById('consonants')
	.addEventListener('click', removeConsonants);
