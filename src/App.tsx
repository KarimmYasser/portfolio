import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ContentProvider } from "@/content/ContentContext";
import { TerminalOverlayProvider } from "@/terminal/TerminalOverlayContext";
import { SceneSettingsProvider } from "@/scene/SceneSettingsContext";
import TerminalOverlay from "@/terminal/TerminalOverlay";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ContentProvider>
      <SceneSettingsProvider>
        <TerminalOverlayProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
            <TerminalOverlay />
          </TooltipProvider>
        </TerminalOverlayProvider>
      </SceneSettingsProvider>
    </ContentProvider>
  </QueryClientProvider>
);

export default App;
