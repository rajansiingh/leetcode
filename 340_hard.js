// Find Longest Substring with k distinct characters.
// input String="bccbababd"
// k=2 output ="babab"
// k=3 output = "bccbabab"

function longestSubstring(str, k){

    if(k==0) return 0;

    let left = right = 0, answer = '', maxLength = 0;
    const map = new Map();
    
    while(right < str.length){
        const rightChar = str[right];
        map.set(rightChar, ( map.get(rightChar) || 0 ) + 1)

        while(map.size > k){
            const leftChar = str[left];
            map.set(leftChar, map.get(leftChar) -1);
            if(map.get(leftChar) === 0){
                map.delete(leftChar);
            }
            left++;
        }
        
        const currSubStringLength = right - left + 1;
        if(maxLength < currSubStringLength){
            maxLength = currSubStringLength;
            answer = str.substring(left, right + 1);
        }

        right++;
    }
    
    return answer;
}