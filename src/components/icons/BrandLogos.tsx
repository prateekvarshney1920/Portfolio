import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function TypeScriptLogo({ className, style, size = 24, ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      style={{ color: '#3178c6', ...style }}
      fill="currentColor"
      aria-label="TypeScript Logo"
      {...props}
    >
      <title>TypeScript</title>
      <path d="M1.125 0h21.75c.621 0 1.125.504 1.125 1.125v21.75c0 .621-.504 1.125-1.125 1.125H1.125A1.125 1.125 0 0 1 0 22.875V1.125A1.125 1.125 0 0 1 1.125 0zm17.363 17.25c0-1.807-1.143-2.61-3.214-3.521-1.636-.71-2.222-1.168-2.222-1.95 0-.665.472-1.112 1.254-1.112.783 0 1.22.424 1.435 1.168l2.308-.951c-.465-1.503-1.614-2.52-3.69-2.52-2.316 0-3.704 1.272-3.704 3.015 0 1.956 1.096 2.766 3.447 3.672 1.636.631 2.021 1.164 2.021 1.83 0 .741-.621 1.218-1.539 1.218-1.173 0-1.782-.693-2.022-1.794l-2.296.792c.501 2.016 1.905 3.324 4.317 3.324 2.736 0 4.021-1.398 4.021-3.216zm3.32-7.512h-8.082v2.247h2.72v10.158h2.646V11.985h2.716z" />
    </svg>
  );
}

export function PythonLogo({ className, style, size = 24, ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      style={{ color: '#3776ab', ...style }}
      fill="currentColor"
      aria-label="Python Logo"
      {...props}
    >
      <title>Python</title>
      <path d="M14.25.18a8.8 8.8 0 0 0-4.3.36C6.83 1.65 6.64 4 6.64 5.38h6.64c.73 0 1.33.6 1.33 1.33v4.65a1.33 1.33 0 0 1-1.33 1.33H5.32c-.73 0-1.33-.6-1.33-1.33V7.93a5.3 5.3 0 0 1 5.3-5.32c1.78 0 3.3.49 4.3 1.24a4.67 4.67 0 0 0 1-3.62A8.9 8.9 0 0 0 14.25.18zm-7.61 2.72a.74.74 0 1 1 0 1.48.74.74 0 0 1 0-1.48zM9.75 23.82a8.8 8.8 0 0 0 4.3-.36c3.12-1.11 3.3-3.46 3.3-4.83H10.7c-.73 0-1.33-.6-1.33-1.33v-4.65A1.33 1.33 0 0 1 10.7 11.3h7.98c.73 0 1.33.6 1.33 1.33v4.77a5.3 5.3 0 0 1-5.3 5.32c-1.78 0-3.3-.49-4.3-1.24a4.67 4.67 0 0 0-1 3.62 8.9 8.9 0 0 0 1.37.74zm7.61-2.73a.74.74 0 1 1 0-1.48.74.74 0 0 1 0 1.48z" />
    </svg>
  );
}

export function KotlinLogo({ className, style, size = 24, ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      style={{ color: '#7F52FF', ...style }}
      fill="currentColor"
      aria-label="Kotlin Logo"
      {...props}
    >
      <title>Kotlin</title>
      <path d="M24 24H0V0h24L12 12z" />
    </svg>
  );
}

export function ReactLogo({ className, style, size = 24, ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      style={{ color: '#61dafb', ...style }}
      fill="currentColor"
      aria-label="React Logo"
      {...props}
    >
      <title>React</title>
      <path d="M24 12c0-1.125-.405-2.203-1.14-3.135a.8.8 0 0 0 0 .09c-.06.39-.24.78-.51 1.155-1.2 1.665-3.075 3.015-5.325 3.825a.845.845 0 0 1 .375-.24c2.25-.81 4.125-2.16 5.325-3.825a3.845 3.845 0 0 0 .51-1.155A3.135 3.135 0 0 0 24 12zm-12 4.455c-1.395 0-2.52-1.125-2.52-2.52s1.125-2.52 2.52-2.52 2.52 1.125 2.52 2.52-1.125 2.52-2.52 2.52zm8.85-6.735a22.95 22.95 0 0 0-6.195-2.55A12.015 12.015 0 0 0 12 6.51a12.015 12.015 0 0 0-2.655.21 22.95 22.95 0 0 0-6.195 2.55C1.145 10.4 0 11.525 0 12c0 .475 1.145 1.6 3.15 2.73 1.8 1.005 3.915 1.875 6.195 2.55A12.015 12.015 0 0 0 12 17.49a12.015 12.015 0 0 0 2.655-.21 22.95 22.95 0 0 0 6.195-2.55c2.005-1.13 3.15-2.255 3.15-2.73 0-.475-1.145-1.6-3.15-2.73z" />
    </svg>
  );
}

export function NextjsLogo({ className, style, size = 24, ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      style={{ color: '#ffffff', ...style }}
      fill="currentColor"
      aria-label="Next.js Logo"
      {...props}
    >
      <title>Next.js</title>
      <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm6.062 18.945L11.9 10.976v6.237h-1.579v-9.5h1.579l6.162 7.969v-7.969h1.579v9.5h-1.579z" />
    </svg>
  );
}

export function TailwindLogo({ className, style, size = 24, ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      style={{ color: '#06b6d4', ...style }}
      fill="currentColor"
      aria-label="Tailwind CSS Logo"
      {...props}
    >
      <title>Tailwind CSS</title>
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8 1 .25 1.6.93 2.4 1.75C13.801 10.75 15.301 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.25-1.5-.93-2.4-1.75-1.2-1.25-2.7-2.45-5.4-2.45zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.25 1.5.93 2.4 1.75 1.2 1.2 2.7 2.45 5.4 2.45 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.25-1.5-.93-2.4-1.75-1.2-1.2-2.7-2.45-5.4-2.45z" />
    </svg>
  );
}

export function JetpackComposeLogo({ className, style, size = 24, ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      style={{ color: '#4285F4', ...style }}
      fill="currentColor"
      aria-label="Jetpack Compose Logo"
      {...props}
    >
      <title>Jetpack Compose</title>
      <path d="M18.8 9.5c.2-.5.5-.8 1-.8h3.4c-.8-1.5-2-2.6-3.6-3.3L17 8.2c-.4.4-.6 1-.6 1.6v2.4c0 .6.2 1.2.6 1.6l2.6 2.8c1.6-.7 2.8-1.8 3.6-3.3h-3.4c-.5 0-.8-.3-1-.8l-1.3-1.6 1.3-1.6zM2 13h12v-2H2v2zm0-4h8V7H2v2zm0 8h8v-2H2v2z" />
    </svg>
  );
}

export function NodejsLogo({ className, style, size = 24, ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      style={{ color: '#339933', ...style }}
      fill="currentColor"
      aria-label="Node.js Logo"
      {...props}
    >
      <title>Node.js</title>
      <path d="M12 0L2.4 5.5v11L12 22l9.6-5.5v-11L12 0zm0 2.3l7.6 4.4v8.6l-7.6 4.4L4.4 15.3v-8.6l7.6-4.4z" />
    </svg>
  );
}

export function FirebaseLogo({ className, style, size = 24, ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      style={{ color: '#FFCA28', ...style }}
      fill="currentColor"
      aria-label="Firebase Logo"
      {...props}
    >
      <title>Firebase</title>
      <path d="M3.89 15.75L2.33 6.13c-.11-.7.42-1.34 1.13-1.34.2 0 .4.06.56.17l5.96 4.29-3.96-6.6a1.14 1.14 0 0 1 1.88-1.12l10.96 17.84a1.14 1.14 0 0 1-1.42 1.55L3.89 15.75zm.48-.31l11.45 6.55L7.48 9.87l-3.11 5.57z" />
    </svg>
  );
}

export function SupabaseLogo({ className, style, size = 24, ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      style={{ color: '#3ECF8E', ...style }}
      fill="currentColor"
      aria-label="Supabase Logo"
      {...props}
    >
      <title>Supabase</title>
      <path d="M12 0L3.135 9.855c-.5.55-.1 1.435.635 1.435h7.32l-1.92 12.71c-.135.9.99 1.42 1.59.74L20.865 12.71c.5-.55.1-1.435-.635-1.435h-7.32l1.92-12.71c.135-.9-.99-1.42-1.59-.74z" />
    </svg>
  );
}

export function PostgresLogo({ className, style, size = 24, ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      style={{ color: '#4169E1', ...style }}
      fill="currentColor"
      aria-label="PostgreSQL Logo"
      {...props}
    >
      <title>PostgreSQL</title>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm1.07-4.75c-.32.32-.71.55-1.15.68-.44.13-.91.2-1.37.2-1.1 0-2-.9-2-2s.9-2 2-2c.46 0 .93.07 1.37.2.44.13.83.36 1.15.68l1.41-1.41c-.69-.69-1.57-1.19-2.55-1.42C12.92 7.05 11.96 7 11 7c-2.76 0-5 2.24-5 5s2.24 5 5 5c.96 0 1.92-.05 2.91-.25.98-.23 1.86-.73 2.55-1.42l-1.41-1.41z" />
    </svg>
  );
}

export function N8nLogo({ className, style, size = 24, ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      style={{ color: '#FF6D5A', ...style }}
      fill="currentColor"
      aria-label="n8n Logo"
      {...props}
    >
      <title>n8n</title>
      <path d="M1.857 18.01a1.85 1.85 0 0 1-.72-2.48l3.66-6.49 1.76.99-3.66 6.49a1.85 1.85 0 0 1-1.04 1.49zm6.49-4.88a1.85 1.85 0 1 1-3.66-2.07 1.85 1.85 0 0 1 3.66 2.07zm8.4-1.88a1.85 1.85 0 1 1-3.66-2.07 1.85 1.85 0 0 1 3.66 2.07zm3.66-6.49a1.85 1.85 0 0 1-.72-2.48l-3.66-6.49-1.76.99 3.66 6.49a1.85 1.85 0 0 1 1.04 1.49z" />
    </svg>
  );
}

export function OpenaiLogo({ className, style, size = 24, ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      style={{ color: '#10a37f', ...style }}
      fill="currentColor"
      aria-label="OpenAI Logo"
      {...props}
    >
      <title>OpenAI</title>
      <path d="M21.9 10.4c-.3-.8-.9-1.5-1.6-2 .3-.7.4-1.5.2-2.3-.2-.8-.7-1.5-1.3-2-.5-.4-1.2-.7-1.9-.8-.7 0-1.4.2-2 .6-.6-.6-1.4-.9-2.2-.9s-1.6.3-2.2.9c-.6-.4-1.3-.6-2-.6-.7.1-1.4.4-1.9.8-.6.5-1.1 1.2-1.3 2-.2.8-.1 1.6.2 2.3-.7.5-1.3 1.2-1.6 2s-.3 1.7-.1 2.5c.3.8.9 1.5 1.6 2-.3.7-.4 1.5-.2 2.3.2.8.7 1.5 1.3 2 .5.4 1.2.7 1.9.8.7 0 1.4-.2 2-.6.6.6 1.4.9 2.2.9s1.6-.3 2.2-.9c.6.4 1.3.6 2 .6.7-.1 1.4-.4 1.9-.8.6-.5 1.1-1.2 1.3-2 .2-.8.1-1.6-.2-2.3.7-.5 1.3-1.2 1.6-2 .3-.8.3-1.7.1-2.5zm-8.4 9.1l-3.2-1.8 1-1.7 3.2 1.8-1 1.7zm1.1-4.7l-3.2-1.8v-2l3.2 1.8v2zm-2.2-3.8L9.2 9.2l1.7-1 3.2 1.8-1.7 1z" />
    </svg>
  );
}

export function DockerLogo({ className, style, size = 24, ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      style={{ color: '#2496ed', ...style }}
      fill="currentColor"
      aria-label="Docker Logo"
      {...props}
    >
      <title>Docker</title>
      <path d="M13.983 11.078h2.119c.102 0 .186-.083.186-.185V8.906c0-.102-.084-.186-.186-.186h-2.119c-.103 0-.186.084-.186.186v1.987c0 .102.083.185.186.185zM20.67 9.871c.008.062.01.124.01.187 0 3.39-2.748 6.142-6.14 6.142-.253 0-.496-.02-.733-.058-.23.514-.627.944-1.127 1.22l-.18.1c.42.062.85.093 1.28.093 3.99 0 7.23-3.24 7.23-7.23 0-.16-.01-.32-.02-.48l-.32.028zM15 8.72h2.12c.1 0 .18-.08.18-.18V6.54c0-.1-.08-.18-.18-.18H15c-.1 0-.18.08-.18.18v2c0 .1.08.18.18.18zM12.185 11.078h2.119c.102 0 .186-.083.186-.185V8.906c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.185.084-.185.186v1.987c0 .102.083.185.185.185zm0-2.358h2.119c.102 0 .186-.083.186-.185V6.548c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.185.084-.185.186v1.987c0 .102.083.185.185.185zm-2.733 2.358h2.12c.1 0 .18-.08.18-.18v-2c0-.1-.08-.18-.18-.18h-2.12c-.1 0-.18.08-.18.18v2c0 .1.08.18.18.18zm0-2.358h2.12c.1 0 .18-.08.18-.18V6.548c0-.1-.08-.18-.18-.18h-2.12c-.1 0-.18.08-.18.18v1.987c0 .102.083.185.18.185zm-2.733 2.358h2.12c.1 0 .18-.08.18-.18v-2c0-.1-.08-.18-.18-.18H6.719c-.1 0-.18.08-.18.18v2c0 .1.08.18.18.18zm0-2.358h2.12c.1 0 .18-.08.18-.18V6.548c0-.1-.08-.18-.18-.18H6.719c-.1 0-.18.08-.18.18v1.987c0 .102.083.185.18.185zm-2.73 2.358H3.99c-.1 0-.18-.08-.18-.18v-2c0-.1.08-.18.18-.18h2.119c.1 0 .18.08.18.18v2c0 .1-.08.18-.18.18z" />
    </svg>
  );
}

export function GitLogo({ className, style, size = 24, ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      style={{ color: '#f05032', ...style }}
      fill="currentColor"
      aria-label="Git Logo"
      {...props}
    >
      <title>Git</title>
      <path d="M23.384 11.233L12.767.616a1.077 1.077 0 0 0-1.528 0L9.4 2.454l2.84 2.84a1.603 1.603 0 0 1 1.603 1.603 1.6 1.6 0 0 1-1.144 1.528v4.062a1.603 1.603 0 0 1-1.144 1.528V12.9a1.6 1.6 0 0 1 .9-2.9 1.603 1.603 0 0 1 .7 1.28v1.07a1.603 1.603 0 0 1-1.603 1.603h-.005a1.603 1.603 0 0 1-1.603-1.603v-.005c0-.665.41-1.246.995-1.48V8.92a1.6 1.6 0 0 1-1.07-1.528c0-.665.41-1.246.995-1.48L8.125 3.072 1.616 9.581a1.077 1.077 0 0 0 0 1.528l10.617 10.617a1.077 1.077 0 0 0 1.528 0l9.623-9.623a1.077 1.077 0 0 0 0-1.528z" />
    </svg>
  );
}

export function VercelLogo({ className, style, size = 24, ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      style={{ color: '#ffffff', ...style }}
      fill="currentColor"
      aria-label="Vercel Logo"
      {...props}
    >
      <title>Vercel</title>
      <path d="M24 22.525H0L12 1.745z" />
    </svg>
  );
}

export function FigmaLogo({ className, style, size = 24, ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      style={{ color: '#f24e1e', ...style }}
      fill="currentColor"
      aria-label="Figma Logo"
      {...props}
    >
      <title>Figma</title>
      <path d="M12 0C8.688 0 6 2.688 6 6v3c0 3.312 2.688 6 6 6s6-2.688 6-6V6c0-3.312-2.688-6-6-6zm0 18c-3.312 0-6 2.688-6 6s2.688 6 6 6 6-2.688 6-6-2.688-6-6-6zm-6-9c-1.656 0-3 1.344-3 3s1.344 3 3 3 3-1.344 3-3-1.344-3-3-3z" />
    </svg>
  );
}

export const brandLogosMap: Record<string, React.ComponentType<LogoProps>> = {
  TypeScript: TypeScriptLogo,
  Python: PythonLogo,
  Kotlin: KotlinLogo,
  React: ReactLogo,
  'Next.js': NextjsLogo,
  'Tailwind CSS': TailwindLogo,
  'Jetpack Compose': JetpackComposeLogo,
  'Node.js': NodejsLogo,
  Firebase: FirebaseLogo,
  Supabase: SupabaseLogo,
  PostgreSQL: PostgresLogo,
  n8n: N8nLogo,
  OpenAI: OpenaiLogo,
  Docker: DockerLogo,
  Git: GitLogo,
  Vercel: VercelLogo,
  Figma: FigmaLogo,
};
