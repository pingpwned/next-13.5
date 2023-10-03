export type Plugin = {
  name: string;
  description: string;
  isEnrolled: boolean;
  roles: string[];
};

export async function GET() {
  // Fetch Plugin #1 API ...

  const plugin1Plugins: Plugin = {
    name: "Plugin #1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, pariatur.",
    isEnrolled: true,
    roles: ["Plugin1Admin", "Plugin1User"],
  };

  // Fetch Plugin #2 API ...

  const plugin2Plugins: Plugin = {
    name: "Plugin #2",
    description:
      "Reprehenderit deleniti hic pariatur unde, assumenda facilis obcaecati repellat eaque sequi quo.",
    isEnrolled: false,
    roles: ["undefined"],
  };

  // Fetch Plugin #3 API ...

  const plugin3Plugins: Plugin = {
    name: "Plugin #3",
    description:
      "Ipsum officia at corrupti veniam quas cum harum voluptatum iure, magnam vitae?",
    isEnrolled: true,
    roles: ["Plugin3User"],
  };

  const plugins: Plugin[] = [plugin1Plugins, plugin2Plugins, plugin3Plugins];

  return Response.json({ plugins });
}
