"use client";

import { useEffect, useState } from "react";
import { Checkbox, Select, Toggle } from "./Form";

export type Input = {
  [key: string]: {
    value: string;
    dependsOn?: string;
  };
};

export const PluginSettings = ({
  isOpen,
  settings,
  setOpen,
  pluginSettings,
}: any) => {
  const [modalOpen, setModal] = useState(isOpen?.isOpen);
  const [formState, setFormState] = useState<Input>();

  useEffect(() => {
    const o: any = {};
    pluginSettings?.settings.forEach((setting: any) => {
      o[setting.id] = {
        value: "",
        dependsOn: setting.dependsOn,
      };
    });

    setFormState(o);
  }, [pluginSettings, setFormState]);

  useEffect(() => {
    setModal(isOpen?.isOpen);
  }, [isOpen]);

  const handleClick = () => {
    setModal(!modalOpen);
    setOpen({ name: settings.name, isOpen: !isOpen });
  };

  return (
    <div
      id="popup-modal"
      className={`${
        modalOpen ? "" : "hidden"
      } flex items-center justify-center fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
      <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="popup-modal"
            onClick={handleClick}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6 text-center">
            <svg
              className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              {pluginSettings?.pluginId}
            </h3>

            {pluginSettings?.settings.map((input: any, i: number) => {
              switch (input.type) {
                case "select":
                  return (
                    <Select
                      key={`input.pluginId-${i}`}
                      formState={formState}
                      setFormState={setFormState}
                      input={input}
                    />
                  );
                case "toggle":
                  return (
                    <Toggle
                      key={`input.pluginId-${i}`}
                      formState={formState}
                      setFormState={setFormState}
                      input={input}
                    />
                  );
                case "checkbox":
                  return (
                    <Checkbox
                      key={`input.pluginId-${i}`}
                      formState={formState}
                      setFormState={setFormState}
                      input={input}
                    />
                  );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
