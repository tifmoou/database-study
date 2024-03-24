declare module NodeJS {
    interface ProcessEnv  {
        PG_BD: string,
        PG_USER: string,
        PG_PASSWORD: string,
        PG_PORT: string
    }
  }