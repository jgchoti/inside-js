// #todo

/**
 * Filters an array to keep only elements of a specific type.
 *
 * @param {Array} [things=[]] - The array of items to filter.
 * @param {string} [type=''] - The JavaScript type to filter for (e.g., 'string', 'number', 'object', etc.).
 * @returns {Array} A new array containing only elements of the specified type.
 */
export const keepType = (things = [], type = '') => {
  return things.filter(thing => typeof thing === type)
};


//  if (!['string', 'number', 'boolean', 'symbol', 'undefined', 'object', 'function'].includes(type))
