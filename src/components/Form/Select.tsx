import { ChangeEvent, useEffect, useState } from "react";
import { Input } from "../PluginSettings";

export const Select = ({
  input,
  formState,
  setFormState,
}: {
  input: any;
  formState?: Input;
  setFormState: any;
}) => {
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    if (formState) {
      const key = formState[input.id].dependsOn;

      if (key) {
        setDisabled(formState[key].value === "");
      }
    }
  }, [input, formState]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [input.id]: { ...(formState?.[input.id] ?? {}), value: e.target.value },
    });
  };
  return (
    <>
      <br />

      <select
        id={input.label}
        disabled={disabled}
        defaultValue={input.label}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => handleChange(e)}
      >
        <option disabled>{input.label}</option>
        {input.options.map((opt: any) => {
          if (input.dependsOn) {
            if (input.options.length > 4) {
              return (
                <option
                  key={opt.id}
                  value={opt.id}
                  disabled={
                    formState &&
                    opt.id.split("-")[0] !== formState[input.dependsOn].value
                  }
                >
                  {opt.label}
                </option>
              );
            } else {
              return (
                formState &&
                opt.id.split("-")[0] === formState[input.dependsOn].value && (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                )
              );
            }
          } else {
            return (
              <option key={opt.id} value={opt.id}>
                {opt.label}
              </option>
            );
          }
        })}
      </select>
      <br />
    </>
  );
};
