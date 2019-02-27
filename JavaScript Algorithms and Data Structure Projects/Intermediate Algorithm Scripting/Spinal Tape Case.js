function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  const sanitize = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  const split = sanitize.split(/[ _-]/g);
  return split.map (s => s.toLowerCase()).join("-");
}

spinalCase('This Is Spinal Tap');
