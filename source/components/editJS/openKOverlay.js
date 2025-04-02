const openKOverlay = (editName,attributes,casc) => {
  attributes[`k_edit_overlay_state_${editName}`] = 1;
  resetKOverlay(editName,attributes,casc);
};
