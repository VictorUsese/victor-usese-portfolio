import { createContext, useContext, useState } from "react";
import { cn } from "./utils";

const TabsContext = createContext(null);

export function Tabs({ defaultValue, className = "", children }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ className = "", children }) {
  return <div className={cn("flex items-center gap-2", className)}>{children}</div>;
}

export function TabsTrigger({ value, className = "", children, ...props }) {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error("TabsTrigger must be used within Tabs");
  }

  const isActive = context.activeTab === value;

  return (
    <button
      type="button"
      className={cn(
        "rounded-md border border-slate-200 px-4 py-2 text-sm font-medium transition-colors",
        isActive ? "bg-slate-900 text-white" : "bg-white text-slate-700 hover:bg-slate-50",
        className
      )}
      onClick={() => context.setActiveTab(value)}
      {...props}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, className = "", children }) {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error("TabsContent must be used within Tabs");
  }

  if (context.activeTab !== value) {
    return null;
  }

  return <div className={className}>{children}</div>;
}
