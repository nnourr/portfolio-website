import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface BarItem {
  href: string;
  icon: IconDefinition;
  key: string;
  label: string;
  sectionId?: string;
  route?: string;
  onClick?: () => void;
}
