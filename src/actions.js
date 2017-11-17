export const START_STATE = "START_STATE";
export const ONCE_AGAIN_STATE = "ONCE_AGAIN_STATE";
export const MISTAKE_INDEX = "MISTAKE_INDEX";
export const TRUE_INDEX = "TRUE_INDEX";







export const startApp = () => ({
  type: START_STATE,
});

export const restartApp = () => ({
  type: ONCE_AGAIN_STATE
});


export const setMistakeIndex = (index) => ({
  type: MISTAKE_INDEX,
  index
});

export const setTrueIndex = (index) => ({
  type: TRUE_INDEX,
  index
});
