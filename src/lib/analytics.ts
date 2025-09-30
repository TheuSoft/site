// Analytics placeholder
// This file can be extended with Google Analytics, Vercel Analytics, or other tracking solutions

export const analytics = {
  track: (event: string, properties?: Record<string, unknown>) => {
    // In development, just log to console
    if (process.env.NODE_ENV === "development") {
      console.log("Analytics:", event, properties);
      return;
    }

    // TODO: Implement actual analytics tracking
    // Example for Google Analytics:
    // gtag('event', event, properties);

    // Example for Vercel Analytics:
    // track(event, properties);
  },

  page: (path: string) => {
    if (process.env.NODE_ENV === "development") {
      console.log("Page view:", path);
      return;
    }

    // TODO: Implement page tracking
    // gtag('config', 'GA_MEASUREMENT_ID', { page_path: path });
  },
};

// Export common tracking functions
export const trackProjectView = (projectId: string) => {
  analytics.track("project_view", { project_id: projectId });
};

export const trackContactForm = (success: boolean) => {
  analytics.track("contact_form", { success });
};

export const trackNavigation = (from: string, to: string) => {
  analytics.track("navigation", { from, to });
};
