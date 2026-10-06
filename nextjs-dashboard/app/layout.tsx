// this file is known as a root layout. its required in every nextjs application. any ui added into the root layout will be shared across all pages in your application. you can use root layout to modify the html and body tags, and add metadata.

import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased ` }>{children}</body>
    </html>
  );
}
