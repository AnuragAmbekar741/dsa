function groupAnagram(strs:string[]){
    if(!strs||strs.length===0) return []
    const anagramMap:Map<string,string[]> = new Map()
    for(const word of strs){
        const key = word.split('').sort().join()
        if(!anagramMap.has(key)){
            anagramMap.set(key,[])
        }
        anagramMap.get(key)?.push(word)
    }
    return Array.from(anagramMap.values())
}
const input = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagram(input))