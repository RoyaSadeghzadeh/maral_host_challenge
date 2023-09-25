"use client"
import { useState } from 'react';

export interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

const useTabs = (initialTabs: Tab[], initialActiveTab: Tab) => {
  const [tabs, setTabs] = useState<Tab[]>(initialTabs);
  const [activeTab, setActiveTab] = useState<Tab>(initialActiveTab);

  const activateTab = (tab: Tab) => {
    setActiveTab(tab);
  };

  return {
    tabs,
    activeTab,
    activateTab,
  };
};

export default useTabs;
