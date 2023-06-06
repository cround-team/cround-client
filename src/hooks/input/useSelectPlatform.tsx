import React, { useState } from "react";

export default function useSelectPlatform() {
  const [selected, setSelected] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);

  const handleSelect = (platform: string) => {
    setSelected((prev) => [...prev, platform]);
  };

  const handleUnSelect = (platform: string) => {
    setSelected((prev) => prev.filter((el) => el !== platform));
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setChecked((prev) => !prev);
    checked ? handleSelect(value) : handleUnSelect(value);
  };

  return {
    selected,
    checked,
    handleSelect,
    handleUnSelect,
    handleChangeInput,
  };
}
