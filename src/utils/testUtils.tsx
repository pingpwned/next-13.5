import { ReactElement } from "react";
import { NextIntlClientProvider } from "next-intl";
import { RenderOptions, render } from "@testing-library/react";
import getRequestConfig from "@/i18n";

interface CustomRenderOptions extends RenderOptions {
  locale?: string;
  messages?: Record<string, string>;
}

const getMessages = async () => {
  return (await import(`../graphql/messages/en.json`)).default;
};

let msgs = {};

getMessages().then((data) => {
  Object.assign(msgs, data);
});

function customRender(
  ui: ReactElement,
  { locale = "en", ...renderOptions }: CustomRenderOptions = {}
) {
  const Wrapper: React.FC = ({ children }: any) => {
    return (
      <NextIntlClientProvider locale="en" messages={msgs}>
        {children}
      </NextIntlClientProvider>
    );
  };

  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";

// override the render method
export { customRender as render };
