class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      const S = s.split('').sort().join('');
      const T = t.split('').sort().join('');
      if (S === T) return true 
      else return false;
    }
}
