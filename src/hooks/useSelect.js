const useSelect = (options, setOption, text) => {
  let selectedOption = options[text];

  function handleSelect() {
    if (selectedOption) {
      // If the selected option exist already remove it from the list
      const { [selectedOption]: _, ...rest } = options;
      setOption(rest);
    } else {
      setOption({ ...options, [text]: text });
    }
  }

  return {
      selectedOption,
      handleSelect
  }
};
export default useSelect;
