import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { MotionConfig } from "motion/react";
import { useIsScreenshotOrAutomated } from "./components/ui/utils";

export default function Root() {
  const location = useLocation();
  const isScreenshot = useIsScreenshotOrAutomated();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <MotionConfig transition={isScreenshot ? { duration: 0 } : undefined}>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

