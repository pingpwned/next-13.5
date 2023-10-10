"use client";

import { Plugin } from "@/graphql/types";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export type Settings = {
  name: string;
  enabled: boolean;
};

export const SelectPlugins = ({ plugins }: { plugins: Plugin[] }) => {
  const [settings, setSettings] = useState<Settings[]>();

  useEffect(() => {
    const savedSettings: Settings[] = JSON.parse(
      localStorage.getItem("plugins") || "null"
    );
    setSettings(savedSettings);
  }, []);

  const addPlugintoDashboard = (key: string, allow: boolean) => {
    if (!allow) {
      toast.error(`You are not enrolled for ${key}`);
      return;
    }

    const savedSettings: Settings[] = JSON.parse(
      localStorage.getItem("plugins") || "null"
    );

    if (savedSettings) {
      const settings = savedSettings.map((plugin: any) => {
        if (plugin.name === key) plugin.enabled = !plugin.enabled;
        return plugin;
      });
      localStorage.setItem("plugins", JSON.stringify(settings));
      setSettings(settings);
    } else {
      const settings: any = plugins.map((plugin: any) => {
        if (key === plugin.name) {
          return {
            name: plugin.name,
            enabled: !plugin.enabled,
          };
        } else {
          return {
            name: plugin.name,
            enabled: plugin.enabled || false,
          };
        }
      });
      localStorage.setItem("plugins", JSON.stringify(settings));
      setSettings(settings);
    }
    toast.success(
      `${key} has been ${
        settings?.find((x) => x.name === key)?.enabled
          ? "removed from Dashboard"
          : "added to Dashboard"
      }`
    );
  };
  return plugins.map((plugin) => (
    <button
      key={plugin.name}
      onClick={() => addPlugintoDashboard(plugin.name, plugin.isEnrolled)}
      className="mt-10 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {plugin.name}
      </h5>

      <div className="flex justify-between items-center">
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {plugin.description}
        </p>

        <p className="font-normal text-gray-700 dark:text-gray-400">
          {settings?.find((x) => x.name === plugin.name)?.enabled ? (
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
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
                d="M 10 5.757 M 5.757 10 h 8.486 M 19 10 a 9 9 0 1 1 -18 0 a 9 9 0 0 1 18 0 Z"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
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
                d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          )}
        </p>
      </div>
    </button>
  ));
};
