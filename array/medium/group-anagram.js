function groupAnagram(strs) {
    var _a;
    if (!strs || strs.length === 0)
        return [];
    var anagramMap = new Map();
    for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
        var word = strs_1[_i];
        var key = word.split('').sort().join();
        if (!anagramMap.has(key)) {
            anagramMap.set(key, []);
        }
        (_a = anagramMap.get(key)) === null || _a === void 0 ? void 0 : _a.push(word);
    }
    return Array.from(anagramMap.values());
}
var input = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagram(input));
