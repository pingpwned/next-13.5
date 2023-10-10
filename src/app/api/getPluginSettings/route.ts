export const revalidate = 0;

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
    pluginId: "Plugin #1",
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
    pluginId: "Plugin #3",
    language: "en",
    settings: [
      {
        type: "select",
        id: "unit",
        label: "Unit",
        placeholderText: "Unit",
        options: [
          {
            label: "U99",
            id: "U99",
          },
          {
            label: "U1337",
            id: "U1337",
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
            label: "M99",
            id: "U99-MP99",
          },
          {
            label: "M099E",
            id: "U99-MP099E",
          },
          {
            label: "M88",
            id: "U1337-MP88",
          },
          {
            label: "M88E",
            id: "U1337-MP88E",
          },
          {
            label: "M088",
            id: "U1337-MP088",
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
