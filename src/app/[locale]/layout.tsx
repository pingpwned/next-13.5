import { notFound } from "next/navigation";
import { LanguageForm } from "@/components/LanguageForm";
import { ToastContainer } from "react-toastify";
import { NextIntlClientProvider } from "next-intl";

import "react-toastify/dist/ReactToastify.css";

import getRequestConfig from "@/i18n";
import { Link } from "@/navigation";
import { Header } from "@/components/Header";

const locales = ["en", "de"];

export default async function LocaleLayout({
  children,
  params: { locale },
}: any) {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  const { messages } = await getRequestConfig({ locale });

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />

          <div className="max-w-lg flex flex-col items-center mx-auto mt-20">
            {children}

            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
