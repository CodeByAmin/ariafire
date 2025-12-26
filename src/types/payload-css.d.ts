// src/types/payload-css.d.ts  (یا هر جایی که در include باشه)

declare module '@payloadcms/next/css';

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}