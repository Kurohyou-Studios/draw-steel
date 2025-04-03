const resetKOverlay = (editName,attributes,casc) => {
  Object.entries(casc)
    .filter(([key,value]) => value && !key.endsWith('k_overlay') && key.startsWith(`attr_${editName}_edit`.replace(/\s+|-/g,'_')))
    .forEach(([key,value]) => {
      const baseName = key.replace(/attr_/,'');
      attributes[baseName] = value.defaultValue ?? '';
    });
};
