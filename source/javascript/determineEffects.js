/**
   * determines additional affects that need to be processed based on custom modifiers
   * @param {object} trigger - The trigger that caused the function to be called
   * @param {object} attributes - The attribute values of the character
   * @param {object[]} sections - All the repeating section IDs
   * @param {object} casc - Expanded cascade object
   */
const determineEffects = function({trigger,attributes,sections,casc}){
    attributes.repeating_abilities.forEach(row => {
      [1,2,3].forEach(n => {
        ['damage','details'].forEach(t => {
          row[`tier_${n}_${t}`].replace(/\@\{([^\|]+?)\}/,(m,name) => {
            let [section,rowID,attrName = name] = k.parseTriggerName(name);
            let effectCascObj;
            if(rowID){
              if(rowID.startsWith('$')){
                const index = +rowID.replace(/\$/,'');
                rowID = sections[section][index];
              }
              effectCascObj = casc[`attr_${section}_${rowID}_${attrName}`];
            }else{
              effectCascObj = casc[`attr_${attrName}`];
            }
            effectCascObj.affects?.push(`repeating_abilities_${row._id}_parsed_tier_${n}`);
          })
        })
        
      })
    })
};
k.registerFuncs({determineEffects},{type:['all']});