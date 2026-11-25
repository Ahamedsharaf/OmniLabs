import { portfolioCollections } from './portfolio-collections';

type MenuLink = readonly [label: string, to: string, description: string];
export type NavigationSection = {
  label: string;
  to: string;
  links: readonly MenuLink[];
  disclosure?: boolean;
};

export const primaryNavigation: readonly NavigationSection[] = [
  {
    label: 'Solutions',
    to: 'solutions',
    disclosure: true,
    links: [
      ['AI Creative & Marketing', 'creative', 'Commercials, campaign strategy, product imagery, and marketing systems.'],
      ['AI Agents & Automation', 'agents', 'Customer assistants, connected workflows, and knowledge systems.'],
      ['Applications & Business Software', 'software', 'Websites, mobile applications, and software tailored to your operations.'],
    ],
  },
  {
    label: 'Projects',
    to: 'portfolio',
    links: portfolioCollections.map(({ title, id, format }) => [title, 'portfolio:' + id, format]),
  },
  {
    label: 'Industries',
    to: 'industries',
    links: [
      ['Retail & E-commerce', 'retail', 'Connect product content, customer support, and retail operations.'],
      ['Hospitality & Travel', 'hospitality', 'Connect discovery, bookings, and service across the guest journey.'],
      ['Real Estate', 'realestate', 'Give prospects clearer information and teams a connected sales workflow.'],
      ['Professional Services', 'professional', 'Bring client communication, internal knowledge, and delivery together.'],
      ['Growing Businesses', 'growing', 'Connect more of your business as your team grows.'],
      ['Enterprise Teams', 'enterprise', 'Plan AI adoption around business objectives and existing systems.'],
    ],
  },
  {
    label: 'Blog',
    to: 'blog',
    links: [
      ['AI and automation', 'blog:ai-automation', 'Practical notes on AI agents and business automation.'],
      ['Marketing and creative', 'blog:marketing-creative', 'Ideas for campaigns, content, and creative work.'],
      ['Business software', 'blog:business-software', 'Perspectives on useful software for growing teams.'],
    ],
  },
];
