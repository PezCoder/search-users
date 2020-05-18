// https://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
export function escapeStringForRegExp(str) {
  return str.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
}

export function caseInsensitiveFirstWordMatch(word) {
  return new RegExp(
    escapeStringForRegExp(word),
    'i'
  );
}
