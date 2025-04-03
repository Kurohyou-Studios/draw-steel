const openKOverlay = (editName,prefix,attributes,casc) => {
  attributes[`k_edit_overlay_state_${editName}`] = 1;
  attributes[`${editName}_edit_k_overlay`] = prefix;
  resetKOverlay(editName,attributes,casc);
};
