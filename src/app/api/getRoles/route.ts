export type Roles = {
  isEnrolled: boolean;
  roles: string[];
};

export async function GET() {
  // Fetch Plugin #1 API ...

  const plugin1Roles: Roles = {
    isEnrolled: true,
    roles: ["Plugin1Admin", "Plugin1User"],
  };

  // Fetch Plugin #2 API ...

  const plugin2Roles: Roles = {
    isEnrolled: false,
    roles: ["undefined"],
  };

  // Fetch Plugin #3 API ...

  const plugin3Roles: Roles = {
    isEnrolled: true,
    roles: ["Plugin1User"],
  };

  const roles: Roles[] = [plugin1Roles, plugin2Roles, plugin3Roles];

  return Response.json({ roles });
}
