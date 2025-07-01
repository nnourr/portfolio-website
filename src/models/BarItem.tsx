import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface BarItem {
  href: string;
  icon: IconDefinition;
  key: string;
  label: string;
}
