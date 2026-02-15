export default defineAppConfig({
  toaster: {
    position: "top-center",
    expand: true,
    duration: 5000
  } as const,

  ui: {
    colors: {
      primary: "green",
      secondary: "trueviolet",
      tertiary: "tacao"
    }
  }
});
