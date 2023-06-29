import { useState } from "react";

export default function usePanel(tab: string) {
  const [selectedPanel, setSelectedPanel] = useState(tab);

  const handleChangePanel = (selected: string) => {
    setSelectedPanel(selected);
  };

  return {
    selectedPanel,
    handleChangePanel,
  };
}
