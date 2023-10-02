import "@testing-library/jest-dom";
import Index from "@/app/[locale]/page";
import { render, screen } from "@/utils/testUtils";

jest.mock("@/actions/deleteCookie", () => ({
  __esModule: true,
  deleteCookie: jest.fn(), // The server action that is called when the form is submitted
}));

jest.mock("next/navigation", () => ({
  ...require("next-router-mock"),
  useParams: () => jest.fn(),
  usePathname: jest.fn().mockReturnValue("/some-route"),
}));

jest.mock("next/headers", () => ({
  cookies: jest.fn(() => {
    function get() {}
    function set() {}
    return { get, set };
  }),
}));

describe("Home", () => {
  it("renders a heading", () => {
    render(<Index params={{ locale: "en" }} />);

    const heading = screen.getByTestId("homepage-title");

    expect(heading).toBeInTheDocument();
  });
});
