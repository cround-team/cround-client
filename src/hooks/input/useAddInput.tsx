import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const INITIAL_VALUE = {
  id: uuidv4(),
  value: "",
};

export default function useAddInput() {
  const [inputValues, setInputValues] = useState([INITIAL_VALUE]);

  const handleAddInput = () => {
    setInputValues((prev) => [
      ...prev,
      {
        id: uuidv4(),
        value: "",
      },
    ]);
  };

  const handleRemoveInput = (id: string) => {
    setInputValues((prev) => prev.filter((item) => item.id !== id));
  };

  const handleChangeInput =
    (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      setInputValues((prev) => {
        const updatedValues = prev.map((item) =>
          item.id === id ? { ...item, value } : item
        );

        return updatedValues;
      });
    };

  return {
    inputValues,
    handleAddInput,
    handleRemoveInput,
    handleChangeInput,
  };
}
