import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Course Completion Predictor — Predict Student Dropout Risk",
  description: "Analyze student engagement patterns, quiz scores, and login frequency to predict dropout risk and trigger intervention campaigns."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1fead73b-2ecc-4350-a046-870a350a3380"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
