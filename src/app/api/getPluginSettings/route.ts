type SettingsOptions = {
  label: string;
  id: string;
};

type Settings = {
  type: string;
  id: string;
  label: string;
  placeholderText: string;
  dependsOn?: string;
  options?: SettingsOptions[];
};

type Plugin = {
  pluginId: string;
  language: string;
  settings: Settings[];
};

export async function GET() {
  const plugin1Settings: Plugin = {
    pluginId: "Plugin#1",
    language: "en",
    settings: [
      {
        type: "select",
        id: "unit",
        label: "Unit",
        placeholderText: "Unit",
        options: [
          {
            label: "U1",
            id: "U1",
          },
          {
            label: "U2",
            id: "U2",
          },
        ],
      },
      {
        type: "select",
        id: "machine",
        label: "Machine",
        placeholderText: "Unit",
        dependsOn: "unit",
        options: [
          {
            label: "M1",
            id: "U1-MP1",
          },
          {
            label: "M2",
            id: "U2-MP2",
          },
        ],
      },
      {
        type: "dropdown",
        id: "timeframe",
        label: "Timeframe",
        placeholderText: "Timeframe",
        options: [
          {
            label: "Shift",
            id: "shift",
          },
          {
            label: "Day",
            id: "day",
          },
          {
            label: "Week",
            id: "week",
          },
        ],
      },
      {
        type: "dropdown",
        id: "visualization",
        label: "Visualization",
        placeholderText: "Visualization",
        options: [
          {
            label: "Table",
            id: "table",
          },
          {
            label: "Chart",
            id: "linechar",
          },
        ],
      },
      {
        type: "toggle",
        id: "measurement",
        label: "",
        placeholderText: "",
        options: [
          {
            label: "Metric Units",
            id: "metric",
          },
          {
            label: "Imperial Units",
            id: "imperial",
          },
        ],
      },
      {
        type: "checkbox",
        id: "inverted",
        label: "Show me inverted data",
        placeholderText: "Show me inverted data",
      },
    ],
  };

  const plugin2Settings: Plugin | null = null;

  const plugin3Settings: Plugin = {
    pluginId: "Plugin#3",
    language: "en",
    settings: [
      {
        type: "select",
        id: "unit",
        label: "Unit",
        placeholderText: "Unit",
        options: [
          {
            label: "U1",
            id: "U1",
          },
          {
            label: "U2",
            id: "U2",
          },
        ],
      },
      {
        type: "select",
        id: "machine",
        label: "Machine",
        placeholderText: "Unit",
        dependsOn: "unit",
        options: [
          {
            label: "M1",
            id: "U1-MP1",
          },
          {
            label: "M2",
            id: "U2-MP2",
          },
        ],
      },
      {
        type: "dropdown",
        id: "timeframe",
        label: "Timeframe",
        placeholderText: "Timeframe",
        options: [
          {
            label: "Shift",
            id: "shift",
          },
          {
            label: "Day",
            id: "day",
          },
          {
            label: "Week",
            id: "week",
          },
        ],
      },
      {
        type: "dropdown",
        id: "visualization",
        label: "Visualization",
        placeholderText: "Visualization",
        options: [
          {
            label: "Table",
            id: "table",
          },
          {
            label: "Chart",
            id: "linechar",
          },
        ],
      },
      {
        type: "toggle",
        id: "measurement",
        label: "",
        placeholderText: "",
        options: [
          {
            label: "Metric Units",
            id: "metric",
          },
          {
            label: "Imperial Units",
            id: "imperial",
          },
        ],
      },
      {
        type: "checkbox",
        id: "inverted",
        label: "Show me inverted data",
        placeholderText: "Show me inverted data",
      },
    ],
  };

  const plugins: (Plugin | null)[] = [
    plugin1Settings,
    plugin2Settings,
    plugin3Settings,
  ];

  return Response.json({ plugins });
}
