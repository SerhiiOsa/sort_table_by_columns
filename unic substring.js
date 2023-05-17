function unicSubstring(str) {
    let longest = 0;
    let currentSubstr = '';
    for(let letter of str) {
        if(! currentSubstr.includes(letter)) {
            currentSubstr += letter;
            longest = Math.max(currentSubstr.length, longest);
        } else {
            for(let i = 0; i < currentSubstr.length; i ++) {
                if(currentSubstr.charAt(i) === letter) {
                    currentSubstr.slice(i + 1);
                }
            }
        }
    }
    return longest;
}

console.log(unicSubstring('aaaaabasd'));