// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// create a map count the frequency of characters and deduct the count if no character is left return true 
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    const map = new Map();
    
    for (let i = 0; i < s.length; i += 1) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
        map.set(t[i], (map.get(t[i]) || 0) - 1);
    }
    
    return [...map].every(([, count]) => count === 0);
};

// Replace character with blank string and check length at last if length is zero return true else false
var isAnagram = function(s, t) {
    if( t.length !== s.length ) return false
    
    t.split('').forEach(char => s = s.replace(char, ""));

    return !s.length
};