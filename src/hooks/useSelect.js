const useSelect = (options, setOption, customKey, value) => {
  let selectedOption = options[customKey];

  function handleSelect() {
    if (selectedOption) {
      // If the selected option exist already remove it from the list
      const {[customKey]: value, ...rest} = options;
      setOption(rest);
    } else {
      setOption({...options, [customKey]: value});
    }
  }

  return {
    selectedOption,
    handleSelect
  };
};
export default useSelect;
