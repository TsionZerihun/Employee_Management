// vite.config.ts
import { defineConfig } from "file:///D:/mk/.core/ReactWithadminlte/latestversion/frontend/node_modules/vite/dist/node/index.js";
import react from "file:///D:/mk/.core/ReactWithadminlte/latestversion/frontend/node_modules/@vitejs/plugin-react/dist/index.mjs";
import * as path from "path";
import basicSsl from "file:///D:/mk/.core/ReactWithadminlte/latestversion/frontend/node_modules/@vitejs/plugin-basic-ssl/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\mk\\.core\\ReactWithadminlte\\latestversion\\frontend";
var vite_config_default = defineConfig({
  mode: "development",
  plugins: [react(), basicSsl()],
  resolve: {
    alias: {
      "@app": path.resolve(__vite_injected_original_dirname, "./src"),
      "@store": path.resolve(__vite_injected_original_dirname, "./src/store"),
      "@components": path.resolve(__vite_injected_original_dirname, "./src/components"),
      "@modules": path.resolve(__vite_injected_original_dirname, "./src/modules"),
      "@pages": path.resolve(__vite_injected_original_dirname, "./src/pages")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxta1xcXFwuY29yZVxcXFxSZWFjdFdpdGhhZG1pbmx0ZVxcXFxsYXRlc3R2ZXJzaW9uXFxcXGZyb250ZW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxta1xcXFwuY29yZVxcXFxSZWFjdFdpdGhhZG1pbmx0ZVxcXFxsYXRlc3R2ZXJzaW9uXFxcXGZyb250ZW5kXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9tay8uY29yZS9SZWFjdFdpdGhhZG1pbmx0ZS9sYXRlc3R2ZXJzaW9uL2Zyb250ZW5kL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBiYXNpY1NzbCBmcm9tICdAdml0ZWpzL3BsdWdpbi1iYXNpYy1zc2wnO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgbW9kZTogJ2RldmVsb3BtZW50JyxcbiAgcGx1Z2luczogW3JlYWN0KCksIGJhc2ljU3NsKCldLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAYXBwJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJyksXG4gICAgICAnQHN0b3JlJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL3N0b3JlJyksXG4gICAgICAnQGNvbXBvbmVudHMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvY29tcG9uZW50cycpLFxuICAgICAgJ0Btb2R1bGVzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL21vZHVsZXMnKSxcbiAgICAgICdAcGFnZXMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvcGFnZXMnKSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBWLFNBQVMsb0JBQW9CO0FBQ3ZYLE9BQU8sV0FBVztBQUNsQixZQUFZLFVBQVU7QUFDdEIsT0FBTyxjQUFjO0FBSHJCLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLFNBQVMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO0FBQUEsRUFDN0IsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsUUFBYSxhQUFRLGtDQUFXLE9BQU87QUFBQSxNQUN2QyxVQUFlLGFBQVEsa0NBQVcsYUFBYTtBQUFBLE1BQy9DLGVBQW9CLGFBQVEsa0NBQVcsa0JBQWtCO0FBQUEsTUFDekQsWUFBaUIsYUFBUSxrQ0FBVyxlQUFlO0FBQUEsTUFDbkQsVUFBZSxhQUFRLGtDQUFXLGFBQWE7QUFBQSxJQUNqRDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
