import Reflux from 'reflux';

const ReplActions = Reflux.createActions([
  "addEntry",
  "removeEntry",
  "reloadPrompt",
  "toggleCommandEntryView",
  "toggleEntryView",
  "setREPLMode"
]);
export default ReplActions;
