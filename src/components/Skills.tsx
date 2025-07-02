import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'leadership';
}

const skills: Skill[] = [
  // Frontend
  { name: 'JavaScript', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Vue.js', category: 'frontend' },
  { name: 'Tailwind', category: 'frontend' },
  { name: 'Redux', category: 'frontend' },
  { name: 'Zustand', category: 'frontend' },
  { name: 'Figma', category: 'frontend' },
  { name: 'WebAssembly', category: 'frontend' },

  // Backend
  { name: 'Python', category: 'backend' },
  { name: 'Java', category: 'backend' },
  { name: 'Go', category: 'backend' },
  { name: 'C#', category: 'backend' },
  { name: 'C++', category: 'backend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Express', category: 'backend' },
  { name: 'Django', category: 'backend' },
  { name: '.NET', category: 'backend' },
  { name: 'Jest', category: 'backend' },
  { name: 'OpenAPI', category: 'backend' },

  // Database
  { name: 'PostgreSQL', category: 'database' },
  { name: 'Redis', category: 'database' },
  { name: 'Snowflake', category: 'database' },

  // DevOps/Infrastructure
  { name: 'AWS', category: 'devops' },
  { name: 'GCP', category: 'devops' },
  { name: 'Docker', category: 'devops' },
  { name: 'Kubernetes', category: 'devops' },
  { name: 'GitHub Actions', category: 'devops' },
  { name: 'Terraform', category: 'devops' },
  { name: 'CI/CD pipelines', category: 'devops' },
  { name: 'GitHub', category: 'devops' },

  // Leadership
  { name: 'Agile methodologies', category: 'leadership' },
  { name: 'SCRUM leadership', category: 'leadership' },
  { name: 'Jira', category: 'leadership' },
  { name: 'Confluence', category: 'leadership' },
  { name: 'Project Management', category: 'leadership' },
];

const categoryLabels = {
  all: 'All',
  frontend: 'Front-end',
  backend: 'Backend-end',
  database: 'Database',
  devops: 'DevOps & Tools',
  leadership: 'Leadership',
} as const;

type CategoryFilter =
  | 'all'
  | 'frontend'
  | 'backend'
  | 'database'
  | 'devops'
  | 'leadership';

interface SkillsProps {
  className?: string;
}

function Skills({ className = '' }: SkillsProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFilter>('all');

  const filteredSkills =
    selectedCategory === 'all'
      ? skills
      : skills.filter(skill => skill.category === selectedCategory);

  return (
    <div id="skills" className={`flex flex-col gap-4 ${className}`}>
      {/* Header with title and dropdown */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <h2 className="decoration-accent text-2xl font-bold underline decoration-2">
            skills
          </h2>
          <div className="bg-accent aspect-square h-4 rounded-full"></div>
        </div>

        <Select
          value={selectedCategory}
          onValueChange={value => setSelectedCategory(value as CategoryFilter)}
        >
          <SelectTrigger className="border-accent/30 w-48 border-2 bg-transparent transition-all duration-300 active:scale-95">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(categoryLabels).map(([value, label]) => (
              <SelectItem key={value} value={value} className="font-courier">
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Skills grid */}
      <div className="flex flex-wrap gap-2 gap-y-1">
        {filteredSkills.map(skill => (
          <div
            key={skill.name}
            className="bg-accent/50 rounded-md px-3 py-0.5 text-sm font-bold"
          >
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
