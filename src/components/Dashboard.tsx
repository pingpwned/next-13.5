"use client";

import React, { useEffect, useState } from "react";
import { Settings } from "./SelectPlugins";
import { Plugin } from "./Plugin";

export const Dashboard = ({ plugins }: any) => {
  const [settings, setSettings] = useState<Settings[]>();

  useEffect(() => {
    const savedSettings = localStorage.getItem("plugins");
    setSettings(JSON.parse(savedSettings || "null"));
  }, []);

  return (
    <>
      {settings?.map((setting: any) => {
        return (
          <Plugin key={setting.name} settings={setting} plugins={plugins} />
        );
      })}
    </>
  );
};
