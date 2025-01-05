export type NavItems = {
  label: string;
  icon: React.ReactNode;
  path: string;
}

export type userChoices = 'alpha' | 'beta' | 'sigma'

export function isUserChoice(value: string): value is userChoices {
  return ['alpha', 'beta', 'sigma', ''].includes(value);
}
