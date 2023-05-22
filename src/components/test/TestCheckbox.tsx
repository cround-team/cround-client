import React, { useState } from "react";

export default function TestCheckbox({ value }: { value: string }) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    setChecked((prev) => !prev);
  };
  const [checked, setChecked] = useState(false);

  return (
    <>
      <label>
        <input
          type="checkbox"
          onChange={handleChange}
          value={value}
          checked={checked}
        />
        1111
      </label>
    </>
  );
}
