declare namespace NodeJS {
	interface ProcessEnv {
		PG_DB: string;
		PG_USER: string;
		PG_PASSWORD: string;
		PG_PORT: string;
	}
}
